export function generateOrderWhatsAppLink(
  waNumber: string,
  storeName: string,
  orderNumber: string,
  items: Array<{ name: string; qty: number; price: number }>,
  total: number,
  paymentMethod: string
): string {
  const itemList = items
    .map((i) => `• ${i.name} x${i.qty} = ₹${i.price.toLocaleString("en-IN")}`)
    .join("\n");

  const message = `Hi ${storeName}! 👋\nI just placed Order #${orderNumber}.\n\n*My Order:*\n${itemList}\n\n*Total: ₹${total.toLocaleString("en-IN")}*\nPayment: ${paymentMethod}\n\nPlease confirm my order. Thank you! 🙏`.trim();

  const cleanNumber = waNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function generateStatusUpdateWhatsAppLink(
  waNumber: string,
  storeName: string,
  orderNumber: string,
  status: string,
  trackingId?: string,
  courierName?: string
): string {
  let message = "";

  switch (status) {
    case "CONFIRMED":
      message = `✅ Your order *#${orderNumber}* has been confirmed! We're preparing it for you.\n\nThank you for shopping with ${storeName}! 🙏`;
      break;
    case "PACKED":
      message = `📦 Your order *#${orderNumber}* has been packed and is ready for dispatch!\n\nWe'll update you once it's shipped. — ${storeName}`;
      break;
    case "SHIPPED":
      message = `🚚 Your order *#${orderNumber}* has been shipped!\n${
        trackingId ? `Tracking ID: *${trackingId}*\nCourier: ${courierName || "N/A"}` : ""
      }\n\nExpected delivery in 2-5 business days. — ${storeName}`;
      break;
    case "DELIVERED":
      message = `🎉 Your order *#${orderNumber}* has been delivered!\n\nThank you for shopping with ${storeName}! We hope you love your purchase. Please share a review! ⭐`;
      break;
    case "CANCELLED":
      message = `❌ Your order *#${orderNumber}* has been cancelled.\n\nIf you have any questions, please contact us. — ${storeName}`;
      break;
    default:
      message = `Order *#${orderNumber}* status update from ${storeName}: ${status}`;
  }

  const cleanNumber = waNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function generateEnquiryWhatsAppLink(
  waNumber: string,
  storeName: string,
  productName: string
): string {
  const message = `Hi ${storeName}! 👋\n\nI'm interested in *${productName}*. Could you please share more details?`;
  const cleanNumber = waNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
