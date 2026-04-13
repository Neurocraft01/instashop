"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, Check, ArrowLeft, MessageCircle, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useCartStore } from "@/hooks/use-cart";
import confetti from "canvas-confetti";

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh",
];

const checkoutSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerPhone: z.string().min(10, "Enter a valid 10-digit phone number").max(10, "Enter a valid 10-digit phone number").regex(/^\d+$/, "Numbers only"),
  customerEmail: z.string().email("Invalid email").optional().or(z.literal("")),
  shippingAddress: z.string().min(10, "Enter complete address"),
  city: z.string().min(2, "Enter city name"),
  state: z.string().min(1, "Select state"),
  pincode: z.string().length(6, "Pincode must be 6 digits").regex(/^\d+$/, "Numbers only"),
  paymentMethod: z.enum(["COD", "UPI"]),
  customerNote: z.string().optional(),
  couponCode: z.string().optional(),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

type Store = {
  id: string; name: string; slug: string;
  whatsappNumber: string | null; logoUrl: string | null;
  upiId: string | null; upiQrUrl: string | null;
  accentColor: string;
};

type OrderResult = { orderNumber: string; total: number; whatsappLink: string | null };

export function CheckoutPageClient({ store }: { store: Store }) {
  const router = useRouter();
  const { items, total, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [couponApplied, setCouponApplied] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [orderResult, setOrderResult] = useState<OrderResult | null>(null);

  const {
    register, handleSubmit, watch,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { paymentMethod: "COD" },
  });

  const paymentMethod = watch("paymentMethod");

  if (items.length === 0 && !orderResult) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-4">Add some products before checking out.</p>
          <Link href={`/store/${store.slug}`}>
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Store
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (orderResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed! 🎉</h2>
          <p className="text-gray-500 text-sm mb-4">
            Your order has been placed successfully.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-xs text-gray-500 mb-1">Order Number</p>
            <p className="font-mono font-bold text-indigo-600 text-lg">{orderResult.orderNumber}</p>
            <p className="text-xs text-gray-500 mt-2">Total: <strong>₹{orderResult.total.toLocaleString("en-IN")}</strong></p>
          </div>

          <div className="space-y-3">
            {orderResult.whatsappLink && (
              <a href={orderResult.whatsappLink} target="_blank" rel="noreferrer">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" /> Confirm on WhatsApp
                </Button>
              </a>
            )}
            <Link href={`/store/${store.slug}/track?order=${orderResult.orderNumber}`}>
              <Button variant="outline" className="w-full py-5 rounded-xl">
                Track My Order
              </Button>
            </Link>
            <Link href={`/store/${store.slug}`}>
              <Button variant="ghost" className="w-full text-gray-500">
                Back to Store
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const subtotal = total();
  const finalTotal = Math.max(0, subtotal - couponDiscount);

  const onSubmit = async (data: CheckoutForm) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/checkout/${store.slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          customerPhone: `+91${data.customerPhone}`,
          items: items.map((i) => ({
            productId: i.productId,
            variantId: i.variantId,
            quantity: i.quantity,
          })),
          couponCode: couponApplied || undefined,
        }),
      });

      const result = await res.json();
      if (!result.success) {
        toast.error(result.error || "Failed to place order");
        return;
      }

      clearCart();
      setOrderResult(result.data);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link href={`/store/${store.slug}`} className="text-gray-400 hover:text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          {store.logoUrl && (
            <Image src={store.logoUrl} alt={store.name} width={32} height={32} className="rounded-full object-cover" />
          )}
          <h1 className="font-bold text-gray-900">{store.name} — Checkout</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 grid lg:grid-cols-5 gap-6">
        {/* Form — left */}
        <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 space-y-6">
          {/* Customer details */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-4">Delivery Details</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Full Name *</Label>
                  <Input {...register("customerName")} placeholder="Your name" className="mt-1" />
                  {errors.customerName && <p className="text-red-500 text-xs mt-1">{errors.customerName.message}</p>}
                </div>
                <div>
                  <Label>Phone Number *</Label>
                  <div className="flex mt-1">
                    <span className="px-3 py-2 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50 text-sm text-gray-600">+91</span>
                    <Input {...register("customerPhone")} placeholder="9876543210" className="rounded-l-none" maxLength={10} />
                  </div>
                  {errors.customerPhone && <p className="text-red-500 text-xs mt-1">{errors.customerPhone.message}</p>}
                </div>
              </div>
              <div>
                <Label>Email <span className="text-gray-400">(optional)</span></Label>
                <Input {...register("customerEmail")} type="email" placeholder="your@email.com" className="mt-1" />
              </div>
              <div>
                <Label>Full Address *</Label>
                <Textarea {...register("shippingAddress")} placeholder="House/Flat No., Street, Area..." className="mt-1 resize-none" rows={2} />
                {errors.shippingAddress && <p className="text-red-500 text-xs mt-1">{errors.shippingAddress.message}</p>}
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <Label>City *</Label>
                  <Input {...register("city")} placeholder="City" className="mt-1" />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <Label>State *</Label>
                  <select
                    {...register("state")}
                    className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select state</option>
                    {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
                </div>
                <div>
                  <Label>Pincode *</Label>
                  <Input {...register("pincode")} placeholder="110001" className="mt-1" maxLength={6} />
                  {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode.message}</p>}
                </div>
              </div>
              <div>
                <Label>Special Instructions <span className="text-gray-400">(optional)</span></Label>
                <Textarea {...register("customerNote")} placeholder="Any special instructions for seller..." className="mt-1 resize-none" rows={2} />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${paymentMethod === "COD" ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"}`}>
                <input type="radio" value="COD" {...register("paymentMethod")} className="text-indigo-600" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">Cash on Delivery</p>
                  <p className="text-gray-500 text-xs">Pay when your order arrives</p>
                </div>
              </label>
              <label className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${paymentMethod === "UPI" ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"}`}>
                <input type="radio" value="UPI" {...register("paymentMethod")} className="text-indigo-600" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">UPI Payment</p>
                  <p className="text-gray-500 text-xs">Pay via any UPI app (GPay, PhonePe, etc.)</p>
                </div>
              </label>
            </div>

            {paymentMethod === "UPI" && store.upiId && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm font-medium text-green-800 mb-2">UPI Payment Details</p>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-green-700 text-sm">{store.upiId}</p>
                  <button
                    type="button"
                    onClick={() => { navigator.clipboard.writeText(store.upiId!); toast.success("UPI ID copied!"); }}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                {store.upiQrUrl && (
                  <Image src={store.upiQrUrl} alt="UPI QR" width={120} height={120} className="mt-3 rounded-lg border border-green-200" />
                )}
                <p className="text-green-700 text-xs mt-2">Screenshot your payment — seller will verify manually.</p>
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-6 text-base font-semibold rounded-xl text-white"
            style={{ backgroundColor: store.accentColor }}
          >
            {loading ? (
              <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Placing Order...</>
            ) : (
              <><MessageCircle className="w-5 h-5 mr-2" /> Place Order &amp; Confirm on WhatsApp</>
            )}
          </Button>
        </form>

        {/* Order summary — right */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-4">
            <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variantId}`} className="flex items-center gap-3">
                  {item.imageUrl ? (
                    <Image src={item.imageUrl} alt={item.name} width={44} height={44} className="rounded-lg object-cover" />
                  ) : (
                    <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-lg">📦</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                    {item.variantInfo && <p className="text-xs text-gray-400">{item.variantInfo}</p>}
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({couponApplied})</span>
                  <span>− ₹{couponDiscount.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-100 pt-2">
                <span>Total</span>
                <span>₹{finalTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <Link href={`/store/${store.slug}`} className="flex items-center gap-1 text-indigo-600 text-xs mt-4 hover:underline">
              <ArrowLeft className="w-3 h-3" /> Edit cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
