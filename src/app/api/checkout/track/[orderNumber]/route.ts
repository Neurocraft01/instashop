import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ orderNumber: string }> }
) {
  try {
    const { orderNumber } = await params;
    const { searchParams } = new URL(req.url);
    const phone = searchParams.get("phone"); // last 4 digits
    const storeSlug = searchParams.get("storeSlug");

    if (!orderNumber) {
      return NextResponse.json({ success: false, error: "Order number required" }, { status: 400 });
    }

    const where: Record<string, unknown> = { orderNumber: orderNumber.toUpperCase() };

    if (storeSlug) {
      const store = await db.store.findUnique({ where: { slug: storeSlug }, select: { id: true } });
      if (store) where.storeId = store.id;
    }

    const order = await db.order.findFirst({
      where,
      include: {
        items: true,
        timeline: { orderBy: { createdAt: "asc" } },
      },
    });

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found. Check your order number and try again." }, { status: 404 });
    }

    // Verify last 4 digits of phone
    if (phone && !order.customerPhone.endsWith(phone)) {
      return NextResponse.json({ success: false, error: "Phone digits don't match. Please check and try again." }, { status: 403 });
    }

    return NextResponse.json({
      success: true,
      data: {
        id: order.id,
        orderNumber: order.orderNumber,
        status: order.status,
        customerName: order.customerName,
        customerPhone: order.customerPhone.slice(-4).padStart(order.customerPhone.length, "*"),
        total: Number(order.total),
        subtotal: Number(order.subtotal),
        discountAmount: Number(order.discountAmount),
        paymentMethod: order.paymentMethod,
        paymentStatus: order.paymentStatus,
        trackingId: order.trackingId,
        courierName: order.courierName,
        createdAt: order.createdAt.toISOString(),
        updatedAt: order.updatedAt.toISOString(),
        items: order.items.map((i) => ({
          id: i.id,
          productName: i.productName,
          variantInfo: i.variantInfo,
          quantity: i.quantity,
          unitPrice: Number(i.unitPrice),
          totalPrice: Number(i.totalPrice),
          imageUrl: i.imageUrl,
        })),
        timeline: order.timeline.map((t) => ({
          id: t.id,
          status: t.status,
          note: t.note,
          createdAt: t.createdAt.toISOString(),
        })),
      },
    });
  } catch (error) {
    console.error("[TRACK_ORDER]", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
