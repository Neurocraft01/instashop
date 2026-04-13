"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Package, Check, MessageCircle, ArrowLeft, Truck, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

const ORDER_STEPS = ["PENDING", "CONFIRMED", "PACKED", "SHIPPED", "DELIVERED"];

const STEP_LABELS: Record<string, string> = {
  PENDING: "Order Placed",
  CONFIRMED: "Confirmed",
  PACKED: "Packed",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
};
const STEP_ICONS: Record<string, React.ReactNode> = {
  PENDING: <ShoppingBag className="w-4 h-4" />,
  CONFIRMED: <Check className="w-4 h-4" />,
  PACKED: <Package className="w-4 h-4" />,
  SHIPPED: <Truck className="w-4 h-4" />,
  DELIVERED: <Check className="w-4 h-4" />,
};

type Store = { id: string; name: string; slug: string; whatsappNumber: string | null; logoUrl: string | null; accentColor: string };
type Order = {
  id: string; orderNumber: string; status: string;
  customerName: string; customerPhone: string;
  total: number; subtotal: number; discountAmount: number;
  paymentMethod: string; paymentStatus: string;
  trackingId: string | null; courierName: string | null;
  createdAt: string;
  items: { id: string; productName: string; variantInfo: string | null; quantity: number; unitPrice: number; totalPrice: number; imageUrl: string | null }[];
  timeline: { id: string; status: string; note: string | null; createdAt: string }[];
};

export function TrackOrderClient({
  store,
  preloadedOrder,
  preloadedOrderNumber,
}: {
  store: Store;
  preloadedOrder: Order | null;
  preloadedOrderNumber?: string;
}) {
  const [orderNumber, setOrderNumber] = useState(preloadedOrderNumber || "");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState<Order | null>(preloadedOrder);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!orderNumber.trim()) { setError("Enter your order number"); return; }
    if (!phone.trim() || phone.length < 4) { setError("Enter last 4 digits of phone"); return; }

    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/checkout/track/${orderNumber}?phone=${phone}&storeSlug=${store.slug}`);
      const data = await res.json();
      if (!data.success) { setError(data.error || "Order not found"); setOrder(null); return; }
      setOrder(data.data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const currentStepIndex = order ? ORDER_STEPS.indexOf(order.status) : -1;
  const isCancelled = order?.status === "CANCELLED";
  const isDelivered = order?.status === "DELIVERED";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link href={`/store/${store.slug}`} className="text-gray-400 hover:text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          {store.logoUrl && (
            <Image src={store.logoUrl} alt={store.name} width={28} height={28} className="rounded-full object-cover" />
          )}
          <h1 className="font-bold text-gray-900 text-sm">{store.name} — Track Order</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Search */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Search className="w-4 h-4 text-indigo-500" /> Track Your Order
          </h2>
          <div className="space-y-4">
            <div>
              <Label>Order Number</Label>
              <Input
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                placeholder="IS-2024-00001"
                className="mt-1 font-mono"
              />
            </div>
            <div>
              <Label>Last 4 digits of phone number</Label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value.slice(0, 4))}
                placeholder="3210"
                maxLength={4}
                className="mt-1"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              onClick={handleTrack}
              disabled={loading}
              className="w-full py-5 font-semibold text-white rounded-xl"
              style={{ backgroundColor: store.accentColor }}
            >
              {loading ? "Searching..." : "Track Order"}
            </Button>
          </div>
        </div>

        {/* Order result */}
        {order && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Status stepper */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-mono font-bold text-indigo-600 text-lg">{order.orderNumber}</p>
                  <p className="text-gray-500 text-sm">
                    Placed on {format(new Date(order.createdAt), "dd MMM yyyy, hh:mm a")}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  isDelivered ? "bg-green-100 text-green-700" :
                  isCancelled ? "bg-red-100 text-red-700" : "bg-indigo-100 text-indigo-700"
                }`}>
                  {isCancelled ? "Cancelled" : order.status}
                </span>
              </div>

              {isCancelled ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <p className="text-red-600 font-medium">This order has been cancelled.</p>
                  <p className="text-red-500 text-sm mt-1">Contact the seller for more information.</p>
                </div>
              ) : (
                <div className="relative">
                  {/* Progress line */}
                  <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200" />
                  <div
                    className="absolute left-5 top-5 w-0.5 bg-indigo-500 transition-all duration-500"
                    style={{ height: `${Math.max(0, (currentStepIndex / (ORDER_STEPS.length - 1)) * 100)}%` }}
                  />

                  <div className="space-y-6 relative">
                    {ORDER_STEPS.map((step, i) => {
                      const isDone = i <= currentStepIndex;
                      const isCurrent = i === currentStepIndex;
                      const tl = order.timeline.find((t) => t.status === step);
                      return (
                        <div key={step} className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 z-10 transition-colors ${
                            isDone
                              ? "bg-indigo-500 border-indigo-500 text-white"
                              : "bg-white border-gray-200 text-gray-300"
                          } ${isCurrent ? "ring-4 ring-indigo-100" : ""}`}>
                            {STEP_ICONS[step]}
                          </div>
                          <div className="flex-1 pt-2">
                            <p className={`font-medium text-sm ${isDone ? "text-gray-900" : "text-gray-400"}`}>
                              {STEP_LABELS[step]}
                            </p>
                            {tl && (
                              <p className="text-gray-400 text-xs mt-0.5">
                                {format(new Date(tl.createdAt), "dd MMM, hh:mm a")}
                                {tl.note && ` · ${tl.note}`}
                              </p>
                            )}
                            {step === "SHIPPED" && isDone && order.trackingId && (
                              <p className="text-indigo-600 text-xs mt-1 font-mono">
                                Tracking: {order.trackingId} {order.courierName && `(${order.courierName})`}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Order items */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    {item.imageUrl ? (
                      <Image src={item.imageUrl} alt={item.productName} width={44} height={44} className="rounded-lg object-cover" />
                    ) : (
                      <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center">📦</div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.productName}</p>
                      {item.variantInfo && <p className="text-xs text-gray-400">{item.variantInfo}</p>}
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">₹{item.totalPrice.toLocaleString("en-IN")}</p>
                  </div>
                ))}
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{order.total.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Contact seller */}
            {store.whatsappNumber && (
              <a href={`https://wa.me/${store.whatsappNumber}?text=Hi! I have a query about my order ${order.orderNumber}`} target="_blank" rel="noreferrer">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-xl">
                  <MessageCircle className="w-4 h-4 mr-2" /> Contact Seller on WhatsApp
                </Button>
              </a>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
