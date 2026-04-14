import Link from "next/link";
import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

export const metadata: Metadata = {
  title: "Pricing — InstaShop | Start Your Free Trial",
  description: "14-day free trial with all features. Plans from ₹199/month. No credit card required. Cancel anytime.",
};

const VC = {
  brandDark: "#2B1B3D", brandYellow: "#FFD166",
  primary: "#745700", primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100", onPrimaryContainer: "#5b4400",
  secondary: "#b31446", secondaryContainer: "#ffc2c9",
  onSecondaryContainer: "#920035", tertiary: "#66547a",
  surfaceLow: "#f3f0ed", surfaceLowest: "#ffffff",
  onBackground: "#2f2f2d", onSurfaceVariant: "#5c5b59",
};

// Only features ACTUALLY IMPLEMENTED in codebase
const plans = [
  {
    name: "Starter",
    tagline: "Perfect for creators just getting started",
    price: "₹199",
    period: "per month",
    badge: null,
    highlight: false,
    features: [
      "10 Products",
      "100 Orders / month",
      "Branded Mini-Store",
      "Custom Store Slug (yourname.instashop.in)",
      "Product Categories & Variants",
      "COD & UPI Payments",
      "Basic Order Dashboard",
      "Print Invoice (PDF)",
      "Customer profiles auto-saved",
      "Basic Analytics (7-day)",
      "WhatsApp Click-to-Chat button",
      "Store QR Code",
      "2 Coupon Codes",
      "Email Support",
    ],
    notIncluded: ["Custom Domain", "CSV Export", "Lead Management", "Advanced Analytics"],
    cardBg: VC.surfaceLowest,
    cardBorder: `2px solid ${VC.surfaceLow}`,
    ctaBg: VC.surfaceLow,
    ctaColor: VC.onBackground,
    ctaText: "Start with Starter",
  },
  {
    name: "Growth",
    tagline: "For serious sellers scaling their brand",
    price: "₹499",
    period: "per month",
    badge: "Most Popular",
    highlight: true,
    features: [
      "100 Products",
      "1,000 Orders / month",
      "Everything in Starter",
      "Full Customer CRM (tags, notes, spend)",
      "Lead Management Pipeline",
      "Advanced Analytics (30-day charts)",
      "Revenue & Top Products report",
      "CSV Order Export",
      "Unlimited Coupon Codes",
      "Product-level discount prices",
      "Low-stock email alerts",
      "Order timeline & status updates",
      "Priority Email Support",
    ],
    notIncluded: ["Custom Domain", "Staff Accounts", "Remove Branding"],
    cardBg: VC.surfaceLowest,
    cardBorder: `2px solid ${VC.primaryContainer}`,
    ctaBg: VC.primaryContainer,
    ctaColor: VC.onPrimaryFixed,
    ctaText: "Get Growth",
  },
  {
    name: "Pro",
    tagline: "For high-volume power sellers",
    price: "₹999",
    period: "per month",
    badge: "Best Value",
    highlight: false,
    features: [
      "Unlimited Products",
      "Unlimited Orders",
      "Everything in Growth",
      "Custom Domain (CNAME)",
      "2 Staff Accounts",
      "Full 30-day Analytics",
      "Store Announcements",
      "Advanced Coupon Rules",
      "Remove InstaShop Branding",
      "Razorpay Online Payments",
      "Priority WhatsApp Support",
      "Early Access to New Features",
    ],
    notIncluded: [],
    cardBg: VC.brandDark,
    cardBorder: "2px solid transparent",
    ctaBg: VC.brandYellow,
    ctaColor: VC.onPrimaryFixed,
    ctaText: "Go Pro",
  },
];

const faqs = [
  { q: "What happens after the 14-day free trial?", a: "You can choose to upgrade to any paid plan. All your store data, products, and orders are preserved. If you don't upgrade, your store goes into read-only mode (customers can't place new orders, but your data is safe)." },
  { q: "Do I need a credit card for the free trial?", a: "No. You can start the full 14-day trial completely free with just your email address. No credit card required." },
  { q: "Are these features actually available right now?", a: "Yes. Every feature listed under each plan is fully built and functional in your dashboard from day one of your subscription." },
  { q: "How do I accept payments from my customers?", a: "For COD (Cash on Delivery) and UPI, your customers pay directly and you confirm manually. Razorpay online payment processing is available on the Pro plan." },
  { q: "What is WhatsApp Click-to-Chat?", a: "It's a button on your product page that opens WhatsApp with a pre-filled order message to you — no WhatsApp API or monthly fee needed. Your customer taps it and your WhatsApp app opens instantly." },
  { q: "Can I cancel my plan anytime?", a: "Yes. Cancel from Settings → Billing at any time. Your plan stays active until the end of the billing period. No cancellation fee." },
  { q: "Is there a setup fee or hidden charges?", a: "None. You only pay the monthly plan price. We don't charge transaction fees on your sales." },
];

export default function PricingPage() {
  return (
    <div style={{ background: "#f9f6f3", color: VC.onBackground, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
      <PublicNavbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            14-Day Full-Feature Trial — No Card Needed
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
            Honest Plans.<br />Real Features.
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-4" style={{ color: VC.onSurfaceVariant }}>
            Every plan starts with a 14-day free trial with <strong>all features unlocked</strong>. No credit card. No surprises.
          </p>
          <p className="text-sm font-semibold" style={{ color: VC.primary }}>
            Only listing features that actually work in your dashboard today.
          </p>
        </section>

        {/* Trial Banner */}
        <section className="px-6 mb-6">
          <div className="max-w-5xl mx-auto rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 justify-between"
            style={{ background: VC.brandDark }}>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-3xl" style={{ color: VC.brandYellow }}>celebration</span>
              <div>
                <p className="font-black text-white text-lg">All plans include a 14-day free trial</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Try every feature — Starter, Growth, or Pro — for free for 14 days.</p>
              </div>
            </div>
            <Link href="/sign-up"
              className="shrink-0 px-7 py-3 rounded-xl font-black hover:scale-105 transition-transform"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
              Start Free Trial
            </Link>
          </div>
        </section>

        {/* Plans */}
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => {
              const isDark = plan.name === "Pro";
              const text = isDark ? "#fff" : VC.onBackground;
              const sub = isDark ? "rgba(255,255,255,0.55)" : VC.onSurfaceVariant;
              const check = isDark ? VC.brandYellow : VC.primary;

              return (
                <div key={plan.name}
                  className="rounded-3xl p-8 flex flex-col relative transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: plan.cardBg, border: plan.cardBorder, boxShadow: plan.highlight ? "0 16px 48px rgba(249,204,97,0.35)" : "0 4px 24px rgba(0,0,0,0.06)" }}>

                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
                      style={{ background: plan.highlight ? VC.primaryContainer : VC.secondaryContainer, color: plan.highlight ? VC.onPrimaryFixed : VC.onSecondaryContainer }}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Name & price */}
                  <h2 className="text-xl font-black mb-1" style={{ color: plan.highlight ? VC.primary : isDark ? VC.brandYellow : text }}>{plan.name}</h2>
                  <p className="text-xs mb-6" style={{ color: sub }}>{plan.tagline}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-black" style={{ color: text }}>{plan.price}</span>
                    <span className="text-sm ml-2" style={{ color: sub }}>/{plan.period}</span>
                  </div>
                  <p className="text-xs mb-8 italic" style={{ color: sub }}>After 14-day free trial</p>

                  <Link href={`/sign-up?plan=${plan.name.toLowerCase()}`}
                    className="w-full py-3.5 rounded-2xl font-black text-center text-sm mb-8 transition-all hover:scale-105 block"
                    style={{ background: plan.ctaBg, color: plan.ctaColor }}>
                    {plan.ctaText}
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 text-sm">
                        <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5" style={{ color: check, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span style={{ color: text }}>{f}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-3 text-sm opacity-30">
                        <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5" style={{ color: text }}>remove</span>
                        <span style={{ color: text }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-6" style={{ background: VC.surfaceLow }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>Feature Comparison</h2>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: VC.brandDark, color: "#fff" }}>
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="px-4 py-4 text-center font-semibold">Starter</th>
                    <th className="px-4 py-4 text-center font-black" style={{ color: VC.brandYellow }}>Growth</th>
                    <th className="px-4 py-4 text-center font-semibold" style={{ color: VC.brandYellow }}>Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Products", "10", "100", "Unlimited"],
                    ["Orders / month", "100", "1,000", "Unlimited"],
                    ["Branded Storefront", "✓", "✓", "✓"],
                    ["COD & UPI Payments", "✓", "✓", "✓"],
                    ["Online Payments (Razorpay)", "—", "—", "✓"],
                    ["Print Invoice", "✓", "✓", "✓"],
                    ["CSV Export", "—", "✓", "✓"],
                    ["Customer CRM", "Basic", "Full", "Full"],
                    ["Lead Management", "—", "✓", "✓"],
                    ["Coupon Codes", "2", "Unlimited", "Unlimited"],
                    ["Analytics", "7-day", "30-day", "30-day"],
                    ["Low-Stock Alerts", "—", "✓", "✓"],
                    ["Custom Domain", "—", "—", "✓"],
                    ["Staff Accounts", "—", "—", "2"],
                    ["Remove Branding", "—", "—", "✓"],
                    ["Priority Support", "—", "Email", "WhatsApp"],
                  ].map(([feature, s, g, p], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#fff" : VC.surfaceLow }}>
                      <td className="px-6 py-3 font-medium" style={{ color: VC.onBackground }}>{feature}</td>
                      {[s, g, p].map((v, j) => (
                        <td key={j} className="px-4 py-3 text-center font-semibold"
                          style={{ color: v === "—" ? VC.surfaceLow : v === "✓" ? VC.primary : VC.onBackground }}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>Questions? Answered.</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl p-6 cursor-pointer" style={{ background: VC.surfaceLow }}>
                <summary className="font-bold list-none flex justify-between items-center gap-4" style={{ color: VC.onBackground }}>
                  {faq.q}
                  <span className="material-symbols-outlined shrink-0 group-open:rotate-180 transition-transform" style={{ color: VC.primary }}>expand_more</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: VC.onSurfaceVariant }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-16" style={{ background: VC.brandDark }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white" style={{ fontFamily: "Epilogue, sans-serif" }}>
              Try everything free for 14 days.
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>No credit card. No commitment. Your store goes live in minutes.</p>
            <Link href="/sign-up"
              className="inline-block px-12 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
              Start Free Trial — It's Free
            </Link>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
