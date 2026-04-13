import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/lib/db";

async function getStoreFromAuth(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { stores: { select: { id: true } } },
  });
  return user?.stores?.[0] ?? null;
}

const updateOrderSchema = z.object({
  status: z.enum(["PENDING","CONFIRMED","PACKED","SHIPPED","DELIVERED","CANCELLED","REFUNDED"]).optional(),
  note: z.string().optional(),
  trackingId: z.string().optional(),
  courierName: z.string().optional(),
  notes: z.string().optional(),
  paymentStatus: z.enum(["PENDING","PAID","FAILED","REFUNDED"]).optional(),
});

export async function GET(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const store = await getStoreFromAuth(userId);
    if (!store) return NextResponse.json({ success: false, error: "Store not found" }, { status: 404 });

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    const where = {
      storeId: store.id,
      ...(status && { status: status as "PENDING" | "CONFIRMED" | "PACKED" | "SHIPPED" | "DELIVERED" | "CANCELLED" }),
      ...(from && to && { createdAt: { gte: new Date(from), lte: new Date(to) } }),
      ...(search && {
        OR: [
          { orderNumber: { contains: search } },
          { customerName: { contains: search } },
          { customerPhone: { contains: search } },
        ],
      }),
    };

    const [orders, total] = await Promise.all([
      db.order.findMany({
        where,
        include: {
          items: { take: 2, include: { product: { select: { name: true } } } },
          customer: { select: { tag: true } },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      db.order.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        orders: orders.map((o) => ({
          ...o,
          subtotal: Number(o.subtotal),
          discountAmount: Number(o.discountAmount),
          shippingCharge: Number(o.shippingCharge),
          total: Number(o.total),
          createdAt: o.createdAt.toISOString(),
          updatedAt: o.updatedAt.toISOString(),
          items: o.items.map((i) => ({
            ...i,
            unitPrice: Number(i.unitPrice),
            totalPrice: Number(i.totalPrice),
          })),
        })),
        total,
        pages: Math.ceil(total / limit),
        page,
      },
    });
  } catch (error) {
    console.error("[ORDERS_GET]", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const store = await getStoreFromAuth(userId);
    if (!store) return NextResponse.json({ success: false, error: "Store not found" }, { status: 404 });

    // Manual order creation schema
    const manualOrderSchema = z.object({
      customerName: z.string().min(1),
      customerPhone: z.string().min(8),
      customerEmail: z.string().email().optional().or(z.literal("")),
      shippingAddress: z.string().min(1),
      city: z.string().optional(),
      state: z.string().optional(),
      pincode: z.string().optional(),
      paymentMethod: z.enum(["COD", "UPI", "RAZORPAY"]),
      paymentStatus: z.enum(["PENDING", "PAID"]).default("PENDING"),
      notes: z.string().optional(),
      items: z.array(z.object({
        productId: z.string(),
        variantId: z.string().optional(),
        quantity: z.number().int().positive(),
        unitPrice: z.number().positive(),
      })).min(1),
    });

    const body = await req.json();
    const parsed = manualOrderSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    }

    const data = parsed.data;

    // Generate order number
    const year = new Date().getFullYear();
    const count = await db.order.count({ where: { storeId: store.id, createdAt: { gte: new Date(`${year}-01-01`) } } });
    const orderNumber = `IS-${year}-${String(count + 1).padStart(5, "0")}`;

    const subtotal = data.items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);

    // Fetch product names
    const products = await db.product.findMany({
      where: { id: { in: data.items.map((i) => i.productId) }, storeId: store.id },
      include: { images: { take: 1 }, variants: true },
    });

    const order = await db.order.create({
      data: {
        orderNumber,
        storeId: store.id,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail || undefined,
        shippingAddress: data.shippingAddress,
        city: data.city,
        state: data.state,
        pincode: data.pincode,
        paymentMethod: data.paymentMethod,
        paymentStatus: data.paymentStatus,
        notes: data.notes,
        subtotal,
        total: subtotal,
        status: "CONFIRMED",
        items: {
          create: data.items.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            const variant = product?.variants.find((v) => v.id === item.variantId);
            return {
              productId: item.productId,
              variantId: item.variantId,
              productName: product?.name || "Unknown",
              variantInfo: variant ? `${variant.name}: ${variant.value}` : undefined,
              imageUrl: product?.images[0]?.url,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              totalPrice: item.unitPrice * item.quantity,
            };
          }),
        },
        timeline: { create: { status: "CONFIRMED", note: "Manual order created by seller" } },
      },
    });

    return NextResponse.json({ success: true, data: { orderId: order.id, orderNumber: order.orderNumber } }, { status: 201 });
  } catch (error) {
    console.error("[ORDERS_POST]", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
