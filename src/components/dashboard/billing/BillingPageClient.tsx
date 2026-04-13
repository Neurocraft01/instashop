"use client";

import { useState } from "react";
import { format, addMonths } from "date-fns";
import { PaymentIntegration } from "./PaymentIntegration";

type Props = {
  plan: "FREE" | "STARTER" | "GROWTH" | "PRO";
  planExpiresAt: string | null;
  productCount: number;
  orderCount: number;
};

const PLAN_LIMITS = {
  FREE: { products: 10, orders: 50 },
  STARTER: { products: 100, orders: 500 },
  GROWTH: { products: 500, orders: 2000 },
  PRO: { products: Infinity, orders: Infinity },
};

export function BillingPageClient({ plan, planExpiresAt, productCount, orderCount }: Props) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"STARTER" | "GROWTH" | "PRO" | null>(null);

  const limits = PLAN_LIMITS[plan];
  
  const prodPercent = limits.products === Infinity ? 0 : Math.min(100, Math.round((productCount / limits.products) * 100));
  const ordPercent = limits.orders === Infinity ? 0 : Math.min(100, Math.round((orderCount / limits.orders) * 100));

  const nextBillingDate = planExpiresAt ? format(new Date(planExpiresAt), "MMMM dd, yyyy") : format(addMonths(new Date(), 1), "MMMM dd, yyyy");
  
  const handleUpgrade = (targetPlan: "STARTER" | "GROWTH" | "PRO") => {
    setSelectedPlan(targetPlan);
    setShowCheckout(true);
  };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto selection:bg-[#f9cc61] selection:text-[#5b4400]">
      {showCheckout && selectedPlan && (
         <div className="fixed inset-0 bg-[#2f2f2d]/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#ffffff] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
               <div className="p-6 border-b border-[#f3f0ed] flex justify-between items-center sticky top-0 bg-[#ffffff] z-10">
                 <h2 className="font-headline font-black text-2xl text-[#2f2f2d]">Checkout</h2>
                 <button onClick={() => setShowCheckout(false)} className="p-2 hover:bg-[#f3f0ed] rounded-full text-[#787774] transition-colors">
                   <span className="material-symbols-outlined">close</span>
                 </button>
               </div>
               <div className="p-6">
                 <PaymentIntegration planToBuy={selectedPlan} onSuccess={() => window.location.reload()} />
               </div>
            </div>
         </div>
      )}

      {/* Top Header Area */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-[#66547a] font-label uppercase tracking-[0.2em] text-xs font-bold">Billing & Usage</span>
          <h2 className="font-headline text-5xl font-black text-[#2f2f2d] mt-4 tracking-tight leading-none">Manage Your Plan.</h2>
          <p className="text-[#5c5b59] max-w-md mt-6 text-lg font-medium">
            Scale your InstaShop seamlessly as your business grows. Review your current usage and upgrade to unlock premium features.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#f3f0ed] px-6 py-4 rounded-xl flex items-center gap-4 shadow-sm border border-[#e4e2df]">
            <div className="w-12 h-12 rounded-full bg-[#ffc2c9] flex items-center justify-center text-[#920035]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#66547a]">Current Plan</p>
              <p className="text-lg font-black text-[#2f2f2d] font-headline">{plan === "FREE" ? "Hobbyist" : plan === "STARTER" ? "Starter" : "Pro"} Plan</p>
            </div>
          </div>
        </div>
      </header>

      {/* Usage Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Usage Meter 1 */}
        <div className="md:col-span-1 bg-[#ffffff] rounded-xl p-8 border border-[#afadaa]/15 shadow-[0_8px_32px_rgba(255,209,102,0.05)]">
          <div className="flex justify-between items-start mb-8">
             <span className="material-symbols-outlined text-[#745700] text-4xl">shopping_bag</span>
             {limits.products !== Infinity && (
               <span className="text-xs font-black bg-[#f9cc61]/80 text-[#5b4400] px-3 py-1 rounded-full uppercase tracking-widest">{prodPercent}% Used</span>
             )}
          </div>
          <h3 className="font-headline text-2xl font-black text-[#2f2f2d] mb-2">Products</h3>
          <p className="text-[#5c5b59] text-sm mb-6 font-bold">{productCount} / {limits.products === Infinity ? "Unlimited" : limits.products} products added</p>
          
          {limits.products !== Infinity && (
            <div className="w-full h-3 bg-[#eae8e4] rounded-full overflow-hidden">
               <div className="h-full bg-[#f9cc61] rounded-full transition-all duration-1000" style={{ width: `${prodPercent}%` }}></div>
            </div>
          )}
        </div>

        {/* Usage Meter 2 */}
        <div className="md:col-span-1 bg-[#ffffff] rounded-xl p-8 border border-[#afadaa]/15 shadow-[0_8px_32px_rgba(255,209,102,0.05)]">
          <div className="flex justify-between items-start mb-8">
             <span className="material-symbols-outlined text-[#b31446] text-4xl">receipt_long</span>
             {limits.orders !== Infinity && (
               <span className="text-xs font-black bg-[#ffc2c9] text-[#920035] px-3 py-1 rounded-full uppercase tracking-widest">{ordPercent}% Used</span>
             )}
          </div>
          <h3 className="font-headline text-2xl font-black text-[#2f2f2d] mb-2">Monthly Orders</h3>
          <p className="text-[#5c5b59] text-sm mb-6 font-bold">{orderCount} / {limits.orders === Infinity ? "Unlimited" : limits.orders} orders processed</p>
          
          {limits.orders !== Infinity && (
            <div className="w-full h-3 bg-[#eae8e4] rounded-full overflow-hidden">
               <div className="h-full bg-[#b31446] rounded-full transition-all duration-1000" style={{ width: `${ordPercent}%` }}></div>
            </div>
          )}
        </div>

        {/* Next Billing Card */}
        {plan !== "FREE" ? (
          <div className="md:col-span-1 bg-[#66547a] text-[#faefff] rounded-xl p-8 shadow-[0_8px_32px_rgba(255,209,102,0.2)] flex flex-col justify-between relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="font-headline text-xl font-black mb-2 pt-2">Next Billing Date</h3>
                <p className="text-3xl font-black tracking-tighter">{nextBillingDate}</p>
             </div>
             <div className="mt-8 relative z-10">
                <p className="text-sm font-medium opacity-80 mb-4">You'll be charged {plan === "STARTER" ? "₹1,499.00" : "₹4,999.00"}</p>
                <button className="w-full py-4 bg-[#ffffff] text-[#66547a] font-black uppercase text-xs tracking-widest rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg">
                   View Invoices
                </button>
             </div>
             <span className="material-symbols-outlined absolute -bottom-10 -right-6 text-[150px] opacity-10 text-white">credit_card</span>
          </div>
        ) : (
          <div className="md:col-span-1 bg-[#f3f0ed] text-[#2f2f2d] border border-[#e4e2df] rounded-xl p-8 flex flex-col justify-between">
             <div>
                <h3 className="font-headline text-2xl font-black mb-2">Free Plan</h3>
                <p className="text-[#5c5b59] font-medium text-sm">You are currently on the free hobbyist plan.</p>
             </div>
             <div className="mt-8">
                <button onClick={() => {
                   document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }} className="w-full py-4 bg-[#745700] text-[#ffe1a6] font-black uppercase text-xs tracking-widest rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg">
                   Explore Upgrades
                </button>
             </div>
          </div>
        )}
      </section>

      {/* Pricing Comparison Table */}
      <section id="pricing" className="mb-24 pt-10">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-black text-[#2f2f2d]">Find the perfect fit.</h2>
          <p className="text-[#5c5b59] mt-2 font-medium text-lg">Transparent pricing for creators at every stage.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Free Trial Plan */}
          <div className="bg-[#f9f6f3] rounded-2xl p-8 flex flex-col items-center text-center border border-[#afadaa]/15 hover:bg-[#ffffff] transition-colors group">
             <span className="text-[10px] font-black uppercase tracking-widest text-[#66547a] mb-4 group-hover:text-[#745700] transition-colors">Start Here</span>
             <h4 className="font-headline text-2xl font-black mb-2 text-[#2f2f2d]">Trial</h4>
             <div className="flex items-baseline mb-8 text-[#2f2f2d]">
                <span className="text-3xl font-black">Free</span>
                <span className="text-[#787774] ml-1 font-bold text-xs uppercase tracking-widest">/ 10 Days</span>
             </div>
             <ul className="space-y-4 mb-10 w-full text-left">
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#745700] text-xl">check_circle</span> 10 Products
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#745700] text-xl">check_circle</span> 50 Monthly Orders
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#afadaa] opacity-60">
                   <span className="material-symbols-outlined text-xl">cancel</span> Custom Domain
                </li>
             </ul>
             
             {plan === "FREE" ? (
               <button className="mt-auto w-full py-4 border-2 border-[#afadaa] text-[#5c5b59] font-black rounded-xl uppercase text-xs tracking-widest cursor-default">Current Plan</button>
             ) : (
               <button className="mt-auto w-full py-4 border-2 border-[#afadaa] hover:border-[#2f2f2d] text-[#5c5b59] hover:text-[#2f2f2d] font-black rounded-xl uppercase text-xs tracking-widest">Downgrade</button>
             )}
          </div>

          {/* Starter Plan */}
          <div className="bg-[#ffffff] rounded-2xl p-8 flex flex-col items-center text-center border border-[#afadaa]/15 hover:border-[#f9cc61] shadow-sm transition-colors relative group">
             {plan === "STARTER" && <div className="absolute -top-3 bg-[#2E7D32] text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm">Your Plan</div>}
             <span className="text-[10px] font-black uppercase tracking-widest text-[#66547a] mb-4 mt-2">Growing Creator</span>
             <h4 className="font-headline text-2xl font-black mb-2 text-[#2f2f2d]">Starter</h4>
             <div className="flex items-baseline mb-8 text-[#2f2f2d]">
                <span className="text-3xl font-black">₹199</span>
                <span className="text-[#787774] ml-1 font-bold">/mo</span>
             </div>
             <ul className="space-y-4 mb-10 w-full text-left">
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#745700] text-xl">check_circle</span> 100 Products
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#745700] text-xl">check_circle</span> 500 Monthly Orders
                </li>
             </ul>
             
             {plan === "STARTER" ? (
                <button className="mt-auto w-full py-4 border-2 border-[#f9cc61] text-[#5b4400] font-black rounded-xl uppercase text-xs tracking-widest cursor-default">Current Plan</button>
             ) : (
                <button onClick={() => handleUpgrade("STARTER")} className="mt-auto w-full py-4 bg-[#f9cc61] text-[#5b4400] font-black rounded-xl hover:bg-[#eabe55] hover:shadow-lg transition-all uppercase text-xs tracking-widest active:scale-95">Upgrade</button>
             )}
          </div>

          {/* Growth Plan */}
          <div className="relative bg-[#ffffff] rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_8px_32px_rgba(255,209,102,0.2)] lg:scale-105 z-10 border-2 border-[#f9cc61]">
             {plan !== "GROWTH" && <div className="absolute -top-4 bg-[#f9cc61] text-[#5b4400] px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">Recommended</div>}
             {plan === "GROWTH" && <div className="absolute -top-4 bg-[#2E7D32] text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">Your Plan</div>}
             <span className="text-[10px] font-black uppercase tracking-widest text-[#66547a] mb-4 mt-2">Emerging Brand</span>
             <h4 className="font-headline text-2xl font-black mb-2 text-[#2f2f2d]">Growth</h4>
             <div className="flex items-baseline mb-8 text-[#2f2f2d]">
                <span className="text-3xl font-black">₹499</span>
                <span className="text-[#787774] ml-1 font-bold">/mo</span>
             </div>
             <ul className="space-y-4 mb-10 w-full text-left">
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#745700] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 500 Products
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#745700] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 2000 Monthly Orders
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#745700] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Custom Domain
                </li>
             </ul>
             
             {plan === "GROWTH" ? (
                <button className="mt-auto w-full py-4 border-2 border-[#f9cc61] text-[#5b4400] font-black rounded-xl uppercase text-xs tracking-widest cursor-default">Current Plan</button>
             ) : (
                <button onClick={() => handleUpgrade("GROWTH" as any)} className="mt-auto w-full py-4 bg-[#f9cc61] text-[#5b4400] font-black rounded-xl hover:bg-[#eabe55] hover:shadow-lg transition-all uppercase text-xs tracking-widest active:scale-95">Upgrade</button>
             )}
          </div>

          {/* Pro Plan */}
          <div className="bg-[#f9f6f3] text-[#2f2f2d] rounded-2xl p-8 flex flex-col items-center text-center border border-[#afadaa]/15 hover:bg-[#ffffff] transition-colors relative overflow-hidden group">
             {plan === "PRO" && <div className="absolute -top-3 bg-[#2E7D32] text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm z-20">Your Plan</div>}
             <span className="text-[10px] font-black uppercase tracking-widest text-[#66547a] mb-4 relative z-10 group-hover:text-[#b31446] transition-colors">Power Seller</span>
             <h4 className="font-headline text-2xl font-black mb-2 relative z-10">Pro</h4>
             <div className="flex items-baseline mb-8 relative z-10">
                <span className="text-3xl font-black">₹999</span>
                <span className="text-[#787774] ml-1 font-bold">/mo</span>
             </div>
             <ul className="space-y-4 mb-10 w-full text-left relative z-10">
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#b31446] text-xl">check_circle</span> Unlimited Everything
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#b31446] text-xl">check_circle</span> Priority Support
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#2f2f2d]">
                   <span className="material-symbols-outlined text-[#b31446] text-xl">check_circle</span> Remove Branding
                </li>
             </ul>
             
             {plan === "PRO" ? (
                <button className="mt-auto w-full py-4 border-2 border-[#b31446] text-[#b31446] font-black rounded-xl uppercase text-xs tracking-widest cursor-default">Current Plan</button>
             ) : (
                <button onClick={() => handleUpgrade("PRO")} className="mt-auto w-full py-4 bg-[#b31446] text-[#ffeff0] font-black rounded-xl hover:shadow-xl transition-all uppercase text-xs tracking-widest hover:bg-[#a1003b] active:scale-95 relative z-10">Go Pro</button>
             )}

             <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-[#ffc2c9] opacity-20 rotate-12 group-hover:scale-110 transition-transform">rocket_launch</span>
          </div>
        </div>
      </section>

      {/* FAQ / Upgrade Banner */}
      <section className="bg-[#e4e2df] rounded-2xl p-12 overflow-hidden relative mb-12 border border-[#dfdcd9]">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-headline text-3xl font-black mb-6 text-[#2f2f2d]">Need more power?</h3>
            <p className="text-[#5c5b59] mb-8 font-medium text-lg leading-relaxed">
              InstaShop Enterprise offers custom solutions for businesses processing over 10,000 orders monthly. Get dedicated support, priority SLAs, and custom API integrations.
            </p>
            <button className="inline-flex items-center gap-2 font-black text-[#5a486d] hover:gap-4 transition-all text-sm uppercase tracking-widest bg-[#e8d1fe] px-6 py-4 rounded-full shadow-sm hover:shadow-md">
               Contact Sales
               <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 bg-[#ffffff] rounded-2xl shadow-xl flex items-center justify-center rotate-3 border-8 border-[#f3f0ed]">
               <span className="material-symbols-outlined text-[100px] text-[#5a486d]">business</span>
            </div>
          </div>
        </div>
        
        {/* Abstract Decorative Shapes */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#f9cc61]/40 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#e8d1fe]/50 rounded-full blur-3xl"></div>
      </section>

    </div>
  );
}
