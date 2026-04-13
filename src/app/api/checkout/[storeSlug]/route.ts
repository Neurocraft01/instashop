import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { generateOrderNumber } from "@/lib/order-number";
import { generateOrderWhatsAppLink } from "@/lib/whatsapp";

const checkoutSchema = z.object({
  customerName: z.string().min(2),
  customerPhone: z.string().min(10).max(15),
  customerEmail: z.string().email().optional().or(z.literal("")),
  shippingAddress: z.string().min(5),
  city: z.string().min(1),
  state: z.string().min(1),
  pincode: z.string().length(6),
  paymentMethod: z.enum(["COD", "UPI"]),
  customerNote: z.string().optional(),
  couponCode: z.string().optional(),
  items: z.array(z.object({
    productId: z.string(),
    variantId: z.string().optional(),
    quantity: z.number().int().positive().max(100),
  })).min(1),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ storeSlug: string }> }
) {
  try {
    const { storeSlug } = await params;

    const store = await db.store.findUnique({
      where: { slug: storeSlug, isActive: true },
    });

    if (!store) {
      return NextResponse.json({ success: false, error: "Store not found" }, { status: 404 });
    }

    if (!store.isOpen) {
      return NextResponse.json({ success: false, error: "This store is currently closed" }, { status: 400 });
    }

    const body = await req.json();
    const parsed = checkoutSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Check plan order limits
    if (store.plan === "FREE") {
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthOrders = await db.order.count({
        where: { storeId: store.id, createdAt: { gte: startOfMonth } },
      });
      if (monthOrders >= 50) {
        return NextResponse.json(
          { success: false, error: "This store has reached its monthly order limit. Please try again next month." },
          { status: 429 }
        );
      }
    }

    // Fetch products + validate
    const productIds = data.items.map((i) => i.productId);
    const products = await db.product.findMany({
      where: { id: { in: productIds }, storeId: store.id, status: { not: "DRAFT" } },
      include: { images: { take: 1 }, variants: true },
    });

    if (products.length !== productIds.length) {
      return NextResponse.json({ success: false, error: "One or more products are unavailable" }, { status: 400 });
    }

    // Validate coupon
    let coupon = null;
    let discountAmount = 0;
    if (data.couponCode) {
      coupon = await db.coupon.findUnique({
        where: { storeId_code: { storeId: store.id, code: data.couponCode.toUpperCase() } },
      });
      if (!coupon || !coupon.isActive) {
        return NextResponse.json({ success: false, error: "Invalid or expired coupon code" }, { status: 400 });
      }
      if (coupon.expiresAt && coupon.expiresAt < new Date()) {
        return NextResponse.json({ success: false, error: "This coupon has expired" }, { status: 400 });
      }
      if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) {
        return NextResponse.json({ success: false, error: "This coupon has reached its usage limit" }, { status: 400 });
      }
    }

    // Build order items
    const orderItems: {
      productId: string; variantId?: string;
      productName: string; variantInfo?: string; imageUrl?: string;
      quantity: number; unitPrice: number; totalPrice: number;
    }[] = [];
    let subtotal = 0;

    for (const item of data.items) {
      const product = products.find((p) => p.id === item.productId)!;
      let unitPrice = Number(product.discountPrice || product.price);
      let variantInfo: string | undefined;

      if (item.variantId) {
        const variant = product.variants.find((v) => v.id === item.variantId);
        if (variant?.price) unitPrice = Number(variant.price);
        if (variant) variantInfo = `${variant.name}: ${variant.value}`;
      }

      const totalPrice = unitPrice * item.quantity;
      subtotal += totalPrice;

      orderItems.push({
        productId: product.id,
        variantId: item.variantId,
        productName: product.name,
        variantInfo,
        imageUrl: product.images[0]?.url,
        quantity: item.quantity,
        unitPrice,
        totalPrice,
      });
    }

    // Apply coupon discount
    if (coupon) {
      if (coupon.minOrderValue && subtotal < Number(coupon.minOrderValue)) {
        return NextResponse.json(
          { success: false, error: `Minimum order value of ₹${coupon.minOrderValue} required for this coupon` },
          { status: 400 }
        );
      }
      if (coupon.discountType === "PERCENTAGE") {
        discountAmount = subtotal * (Number(coupon.discountValue) / 100);
      } else {
        discountAmount = Math.min(Number(coupon.discountValue), subtotal);
      }
    }

    const total = Math.max(0, subtotal - discountAmount);

    // Create order in transaction
    const order = await db.$transaction(async (tx) => {
      const orderNumber = await generateOrderNumber(store.id);

      // Decrement stock if tracking enabled to prevent overselling (Atomic)
      for (const item of data.items) {
        const product = products.find((p) => p.id === item.productId)!;
        if (product.trackStock && item.variantId) {
          const variant = product.variants.find((v) => v.id === item.variantId);
          if (variant && variant.stock !== null) {
            const { count } = await tx.productVariant.updateMany({
              where: { 
                id: item.variantId,
                stock: { gte: item.quantity }
              },
              data: { stock: { decrement: item.quantity } },
            });
            if (count === 0) {
              throw new Error(`Insufficient stock for ${product.name}`);
            }
          }
        }
      }

      // Upsert customer (Proper Guest Checkout handling without race conditions)
      const customer = await tx.customer.upsert({
        where: { storeId_phone: { storeId: store.id, phone: data.customerPhone } },
        create: {
          storeId: store.id,
          name: data.customerName,
          phone: data.customerPhone,
          email: data.customerEmail || undefined,
          address: data.shippingAddress,
          city: data.city,
          state: data.state,
          pincode: data.pincode,
          tag: "NEW",
          totalOrders: 0,
          totalSpent: 0,
        },
        update: {
          name: data.customerName,
          email: data.customerEmail || undefined,
          address: data.shippingAddress,
          city: data.city,
          state: data.state,
          pincode: data.pincode,
          totalOrders: { increment: 1 },
          totalSpent: { increment: total },
        },
      });

      // Update to REPEAT if second order
      if (customer.totalOrders >= 1 && customer.tag === "NEW") {
        await tx.customer.update({
          where: { id: customer.id },
          data: { tag: "REPEAT" },
        });
      }

      const newOrder = await tx.order.create({
        data: {
          orderNumber,
          storeId: store.id,
          customerId: customer.id,
          customerName: data.customerName,
          customerPhone: data.customerPhone,
          customerEmail: data.customerEmail || undefined,
          shippingAddress: data.shippingAddress,
          city: data.city,
          state: data.state,
          pincode: data.pincode,
          paymentMethod: data.paymentMethod,
          customerNote: data.customerNote,
          couponId: coupon?.id,
          subtotal,
          discountAmount,
          total,
          status: "PENDING",
          items: {
            create: orderItems,
          },
          timeline: {
            create: { status: "PENDING", note: "Order placed by customer" },
          },
        },
      });

      // Increment coupon usage
      if (coupon) {
        await tx.coupon.update({
          where: { id: coupon.id },
          data: { usedCount: { increment: 1 } },
        });
      }

      return newOrder;
    });

    // Generate WhatsApp link
    const waItems = orderItems.map((i) => ({
      name: i.variantInfo ? `${i.productName} (${i.variantInfo})` : i.productName,
      qty: i.quantity,
      price: i.totalPrice,
    }));

    const whatsappLink = store.whatsappNumber
      ? generateOrderWhatsAppLink(store.whatsappNumber, store.name, order.orderNumber, waItems, total, data.paymentMethod)
      : null;

    return NextResponse.json({
      success: true,
      data: {
        orderNumber: order.orderNumber,
        total,
        whatsappLink,
      },
    });
  } catch (error: any) {
    console.error("[CHECKOUT]", error);

    // Provide friendly message for insufficient stock throws
    if (error instanceof Error && error.message.includes("Insufficient stock")) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: false, error: "Failed to place order" }, { status: 500 });
  }
}
