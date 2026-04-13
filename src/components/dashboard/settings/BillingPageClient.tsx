"use client";

import { useState } from "react";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

type Props = { currentPlan: string; planExpiresAt: string | null; storeId: string };

const PLANS = [
  {
    key: "FREE", name: "Free", price: "₹0", period: "/month",
    description: "For new creators starting their journey.",
    icon: Star, color: "text-gray-600", bg: "bg-gray-100", border: "border-gray-200",
    features: ["Up to 10 products", "Unlimited orders", "Basic storefront theme", "Standard analytics"],
  },
  {
    key: "STARTER", name: "Starter", price: "₹399", period: "/month",
    description: "Perfect for growing Instagram stores.",
    icon: Zap, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200",
    features: ["Up to 50 products", "Custom Store URL (soon)", "Advanced analytics", "Coupon codes", "Priority email support"],
  },
  {
    key: "PRO", name: "Pro", price: "₹999", period: "/month",
    description: "For established businesses needing scale.",
    icon: Crown, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200",
    features: ["Unlimited products", "Remove InstaShop branding", "Custom Domain support (soon)", "API Access (soon)", "24/7 WhatsApp support"],
  },
];

export function BillingPageClient({ currentPlan, planExpiresAt }: Props) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleUpgrade = async (planKey: string) => {
    toast.error("Payment gateway integration (Razorpay) needed to process this upgrade.");
  };

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Plans</h1>
        <p className="text-gray-500">Choose the right plan for your growing business. Upgrade or downgrade at any time.</p>
        
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 text-sm font-medium">
          Current Plan: <strong className="font-bold">{currentPlan}</strong>
          {planExpiresAt && ` (Renews ${new Date(planExpiresAt).toLocaleDateString()})`}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PLANS.map((plan, i) => {
          const isCurrent = currentPlan === plan.key;
          const isPro = plan.key === "PRO";
          
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={plan.key}
              className={`relative bg-white rounded-3xl border-2 p-6 flex flex-col ${
                isCurrent ? "border-indigo-500 shadow-md ring-4 ring-indigo-50" : plan.border
              }`}
            >
              {isCurrent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Current
                </div>
              )}
              {isPro && !isCurrent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.bg}`}>
                  <plan.icon className={`w-5 h-5 ${plan.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              </div>
              
              <div className="mb-2">
                <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm font-medium">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

              <div className="flex-1 space-y-3 mb-6">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={isCurrent ? "outline" : "default"}
                className={`w-full py-6 rounded-xl font-semibold ${
                  !isCurrent && "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
                disabled={isCurrent || loading === plan.key}
                onClick={() => handleUpgrade(plan.key)}
              >
                {isCurrent ? "Current Plan" : `Upgrade to ${plan.name}`}
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
