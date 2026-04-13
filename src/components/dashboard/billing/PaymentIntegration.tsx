"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Props = {
  planToBuy: "STARTER" | "GROWTH" | "PRO";
  onSuccess: () => void;
};

export function PaymentIntegration({ planToBuy, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Razorpay Script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => toast.error("Failed to load Razorpay SDK");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    if (!scriptLoaded) {
      toast.error("Payment SDK not loaded yet. Please wait.");
      return;
    }

    setLoading(true);
    try {
      // 1. Create order on our backend
      const res = await fetch("/api/dashboard/billing/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planToBuy }),
      });
      
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to create order");
      }

      const { orderId, amount, keyId } = data.data;

      // 2. Initialize Razorpay Checkout
      const options = {
        key: keyId,
        amount: amount,
        currency: "INR",
        name: "InstaShop",
        description: `Upgrade to ${planToBuy} Plan`,
        order_id: orderId,
        handler: async function (response: any) {
          // 3. Verify Payment
          try {
            const verifyRes = await fetch("/api/dashboard/billing/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                plan: planToBuy,
              }),
            });
            const verifyData = await verifyRes.json();
            
            if (verifyData.success) {
              toast.success("Payment successful! Your plan is upgraded.");
              onSuccess();
            } else {
              toast.error("Payment verification failed.");
            }
          } catch (e) {
            toast.error("Error verifying payment.");
          }
        },
        prefill: {
          name: "Store Owner",
        },
        theme: {
          color: "#745700",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        toast.error(`Payment failed: ${response.error.description}`);
      });
      paymentObject.open();

    } catch (err: any) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-[#f9f6f3] rounded-xl border border-[#e4e2df]">
       <div className="w-16 h-16 bg-[#f9cc61] rounded-full flex items-center justify-center mb-6 shadow-sm">
          <span className="material-symbols-outlined text-4xl text-[#5b4400]">credit_card</span>
       </div>
       <h3 className="font-headline font-black text-2xl text-[#2f2f2d] mb-4">Complete Your Upgrade</h3>
       <p className="text-[#5c5b59] mb-8 font-medium max-w-md">
         You are upgrading to the <strong className="text-[#745700] uppercase tracking-wider">{planToBuy}</strong> plan. Secure payment powered by Razorpay.
       </p>
       
       <button 
         onClick={handlePayment} 
         disabled={loading || !scriptLoaded}
         className="w-full max-w-sm py-4 bg-[#745700] text-[#ffe1a6] font-black uppercase text-sm tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-transform shadow-[0_8px_32px_rgba(116,87,0,0.2)] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
       >
         {loading ? (
             <><Loader2 className="w-5 h-5 animate-spin"/> Processing...</>
         ) : (
          <>Pay Now (₹{planToBuy === "STARTER" ? "199" : planToBuy === "GROWTH" ? "499" : "999"})</>
         )}
       </button>
    </div>
  );
}
