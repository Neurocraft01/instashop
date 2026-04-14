import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;

    const user = await db.user.findUnique({
      where: { id: userId },
      include: { stores: true },
    });
    const store = user?.stores?.[0];
    if (!store) return NextResponse.json({ error: "Store not found" }, { status: 404 });

    const order = await db.order.findFirst({
      where: { id, storeId: store.id },
      include: {
        items: true,
        timeline: { orderBy: { createdAt: "asc" } },
      },
    });
    if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

    const formatCurrency = (n: number) =>
      `&#8377;${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Invoice ${order.orderNumber} | ${store.name}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #2f2f2d; background: #fff; font-size: 13px; }
    .page { max-width: 800px; margin: 0 auto; padding: 48px; }
    .header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:40px; padding-bottom:24px; border-bottom:3px solid #f9cc61; }
    .brand { font-size:28px; font-weight:900; color:#2B1B3D; letter-spacing:-0.5px; }
    .brand span { color:#745700; }
    .invoice-meta { text-align:right; }
    .invoice-meta h2 { font-size:20px; font-weight:900; color:#2B1B3D; }
    .invoice-meta .num { font-size:14px; color:#5c5b59; margin-top:4px; }
    .invoice-meta .date { font-size:12px; color:#787774; margin-top:2px; }
    .status-badge { display:inline-block; padding:4px 14px; border-radius:999px; font-weight:700; font-size:12px; margin-top:8px;
      background:${order.status === 'DELIVERED' ? '#e8f5e9' : order.status === 'PENDING' ? '#ffc2c9' : '#fff3e0'};
      color:${order.status === 'DELIVERED' ? '#2e7d32' : order.status === 'PENDING' ? '#920035' : '#e65100'}; }
    .two-col { display:grid; grid-template-columns:1fr 1fr; gap:32px; margin-bottom:32px; }
    .section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:#787774; font-weight:700; margin-bottom:8px; }
    .section-value { font-weight:600; color:#2f2f2d; line-height:1.6; }
    .section-value strong { display:block; font-weight:800; font-size:14px; color:#2B1B3D; }
    table { width:100%; border-collapse:collapse; margin-bottom:24px; }
    thead tr { background:#2B1B3D; color:#fff; }
    thead th { padding:12px 16px; text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:0.05em; font-weight:700; }
    tbody tr { border-bottom:1px solid #f3f0ed; }
    tbody tr:nth-child(even) { background:#fafafa; }
    tbody td { padding:12px 16px; }
    .totals { display:flex; justify-content:flex-end; }
    .totals-box { width:280px; }
    .totals-row { display:flex; justify-content:space-between; padding:6px 0; font-size:13px; }
    .totals-row.grand { border-top:2px solid #2B1B3D; margin-top:8px; padding-top:12px; font-size:16px; font-weight:900; color:#2B1B3D; }
    .payment-section { margin-top:32px; padding:20px; background:#f3f0ed; border-radius:12px; display:flex; justify-content:space-between; align-items:center; }
    .payment-method { font-weight:700; font-size:14px; color:#2B1B3D; }
    .payment-status { padding:6px 16px; border-radius:999px; font-weight:700; font-size:12px;
      background:${order.paymentStatus === 'PAID' ? '#e8f5e9' : '#ffc2c9'};
      color:${order.paymentStatus === 'PAID' ? '#2e7d32' : '#920035'}; }
    .footer { margin-top:48px; text-align:center; color:#787774; font-size:12px; border-top:1px solid #f3f0ed; padding-top:24px; }
    @media print { body { background:white; } .page { padding:32px; } }
  </style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <div class="brand">Insta<span>Shop</span></div>
      <div style="font-size:12px;color:#5c5b59;margin-top:4px;">${store.name}</div>
      ${store.whatsappNumber ? `<div style="font-size:12px;color:#5c5b59;">WhatsApp: ${store.whatsappNumber}</div>` : ""}
    </div>
    <div class="invoice-meta">
      <h2>TAX INVOICE</h2>
      <div class="num">${order.orderNumber}</div>
      <div class="date">Date: ${new Date(order.createdAt).toLocaleDateString("en-IN", { day:"2-digit", month:"long", year:"numeric" })}</div>
      <div><span class="status-badge">${order.status}</span></div>
    </div>
  </div>

  <div class="two-col">
    <div>
      <div class="section-label">Bill To</div>
      <div class="section-value">
        <strong>${order.customerName}</strong>
        ${order.customerPhone}<br/>
        ${order.customerEmail ? order.customerEmail + "<br/>" : ""}
        ${order.shippingAddress}<br/>
        ${[order.city, order.state, order.pincode].filter(Boolean).join(", ")}
      </div>
    </div>
    <div>
      <div class="section-label">Payment Info</div>
      <div class="section-value">
        <strong>${order.paymentMethod}</strong>
        Status: ${order.paymentStatus}<br/>
        ${order.trackingId ? `Tracking: ${order.trackingId}<br/>` : ""}
        ${order.courierName ? `Courier: ${order.courierName}` : ""}
      </div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Variant</th>
        <th>Qty</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      ${order.items.map((item, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td style="font-weight:600;">${item.productName}</td>
          <td style="color:#5c5b59;">${item.variantInfo ?? "—"}</td>
          <td>${item.quantity}</td>
          <td>${formatCurrency(Number(item.unitPrice))}</td>
          <td style="font-weight:700;">${formatCurrency(Number(item.totalPrice))}</td>
        </tr>`).join("")}
    </tbody>
  </table>

  <div class="totals">
    <div class="totals-box">
      <div class="totals-row"><span>Subtotal</span><span>${formatCurrency(Number(order.subtotal))}</span></div>
      ${Number(order.discountAmount) > 0 ? `<div class="totals-row" style="color:#b31446;"><span>Discount</span><span>- ${formatCurrency(Number(order.discountAmount))}</span></div>` : ""}
      ${Number(order.shippingCharge) > 0 ? `<div class="totals-row"><span>Shipping</span><span>${formatCurrency(Number(order.shippingCharge))}</span></div>` : ""}
      <div class="totals-row grand"><span>TOTAL</span><span>${formatCurrency(Number(order.total))}</span></div>
    </div>
  </div>

  <div class="payment-section">
    <div>
      <div class="section-label">Payment Method</div>
      <div class="payment-method">${order.paymentMethod === "UPI" ? "UPI / Online Transfer" : order.paymentMethod === "COD" ? "Cash on Delivery" : "Razorpay"}</div>
    </div>
    <span class="payment-status">${order.paymentStatus}</span>
  </div>

  ${order.notes ? `<div style="margin-top:24px;padding:16px;background:#f9f6f3;border-radius:8px;"><div class="section-label">Notes</div><p style="color:#5c5b59;margin-top:4px;">${order.notes}</p></div>` : ""}

  <div class="footer">
    <p>Thank you for your order! For support, reach us on WhatsApp${store.whatsappNumber ? ` at ${store.whatsappNumber}` : ""}.</p>
    <p style="margin-top:8px;">Powered by <strong>InstaShop</strong> — instashop.in</p>
  </div>
</div>
<script>window.onload = () => window.print();</script>
</body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    console.error("[INVOICE]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
