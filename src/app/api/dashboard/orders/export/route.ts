import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await db.user.findUnique({
      where: { id: userId },
      include: { stores: { select: { id: true, name: true } } },
    });
    const store = user?.stores?.[0];
    if (!store) return NextResponse.json({ error: "Store not found" }, { status: 404 });

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    const orders = await db.order.findMany({
      where: {
        storeId: store.id,
        ...(status && { status: status as never }),
        ...(from && to && { createdAt: { gte: new Date(from), lte: new Date(to) } }),
      },
      include: { items: { include: { product: { select: { name: true } } } } },
      orderBy: { createdAt: "desc" },
    });

    // Build CSV manually (no paid library needed)
    const headers = [
      "Order Number", "Date", "Customer Name", "Customer Phone", "Customer Email",
      "Shipping Address", "City", "State", "Pincode",
      "Status", "Payment Method", "Payment Status",
      "Subtotal (₹)", "Discount (₹)", "Shipping (₹)", "Total (₹)",
      "Tracking ID", "Courier", "Items",
    ];

    const rows = orders.map((o) => [
      o.orderNumber,
      new Date(o.createdAt).toLocaleDateString("en-IN"),
      o.customerName,
      o.customerPhone,
      o.customerEmail ?? "",
      `"${o.shippingAddress.replace(/"/g, '""')}"`,
      o.city ?? "",
      o.state ?? "",
      o.pincode ?? "",
      o.status,
      o.paymentMethod,
      o.paymentStatus,
      Number(o.subtotal).toFixed(2),
      Number(o.discountAmount).toFixed(2),
      Number(o.shippingCharge).toFixed(2),
      Number(o.total).toFixed(2),
      o.trackingId ?? "",
      o.courierName ?? "",
      `"${o.items.map((i) => `${i.productName} x${i.quantity}`).join(", ")}"`,
    ]);

    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const filename = `instashop_orders_${store.name.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.csv`;

    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("[ORDERS_EXPORT]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
