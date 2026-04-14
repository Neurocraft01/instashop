import Link from "next/link";
import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

export const metadata: Metadata = {
  title: "About InstaShop — Built for Social Media Sellers in India",
  description: "InstaShop was built to solve one problem: social media sellers losing orders in DMs. Here's the story behind our platform.",
};

const VC = {
  brandDark: "#2B1B3D", brandYellow: "#FFD166",
  primary: "#745700", primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100", onPrimaryContainer: "#5b4400",
  secondary: "#b31446", secondaryContainer: "#ffc2c9",
  onSecondaryContainer: "#920035", tertiary: "#66547a",
  surfaceLow: "#f3f0ed", onBackground: "#2f2f2d",
  onSurfaceVariant: "#5c5b59",
};

const values = [
  { icon: "bolt", title: "Instant Setup", desc: "Live in 2 minutes. No developers, no design skills, no technical knowledge needed." },
  { icon: "india", title: "Made for India", desc: "COD, UPI, Indian mobile numbers, ₹ currency, Indian pin codes — all built in by default." },
  { icon: "security", title: "Your Data, Your Store", desc: "Your products, orders, and customers are yours. We never sell your data." },
  { icon: "trending_up", title: "Grows With You", desc: "Start free. Scale to thousands of orders. Your plan upgrades as your business does." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#f9f6f3", color: VC.onBackground, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
      <PublicNavbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 px-6 text-center">
          <p className="text-sm uppercase tracking-widest font-bold mb-4" style={{ color: VC.secondary }}>Our Story</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8"
            style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
            We believe every seller<br />
            <span style={{ color: VC.primary }}>deserves a real business.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
            InstaShop was born from one frustration: talented sellers across India were losing orders in social media DMs, managing inventory in notebooks, and missing out on growth — not because they lacked hustle, but because they lacked the right tools.
          </p>
        </section>

        {/* Stats */}
        <section className="py-16" style={{ background: VC.brandDark }}>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "10K+", label: "Active Sellers" },
              { value: "₹2Cr+", label: "GMV Processed" },
              { value: "500K+", label: "Orders Fulfilled" },
              { value: "< 2 min", label: "To Launch Your Store" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: VC.brandYellow }}>{s.value}</div>
                <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest font-bold mb-4" style={{ color: VC.secondary }}>The Problem We Solved</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
              Your DMs are<br />not a store.
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
              <p>Millions of sellers across India post products on social media (Instagram, Facebook, YouTube) and manage orders entirely through DMs — losing track of who paid, what was shipped, and which customers came back.</p>
              <p>We built InstaShop to be the simplest possible path from &ldquo;I sell on social media&rdquo; to &ldquo;I run a real business.&rdquo; A branded store, a real dashboard, and tools that actually work for Indian selling patterns — COD, UPI, WhatsApp.</p>
              <p>No monthly maintenance. No developers needed. No hidden fees.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "storefront", label: "Branded Store", bg: VC.primaryContainer, fg: VC.onPrimaryFixed },
              { icon: "receipt_long", label: "Order Dashboard", bg: "#e8d1fe", fg: "#433356" },
              { icon: "people", label: "Customer CRM", bg: VC.secondaryContainer, fg: VC.onSecondaryContainer },
              { icon: "analytics", label: "Revenue Analytics", bg: VC.brandDark, fg: VC.brandYellow },
            ].map((item, i) => (
              <div key={item.label}
                className="p-6 rounded-2xl flex flex-col gap-3"
                style={{ background: item.bg, marginTop: i % 2 === 1 ? "32px" : "0" }}>
                <span className="material-symbols-outlined text-3xl" style={{ color: item.fg }}>{item.icon}</span>
                <span className="font-black text-sm" style={{ color: item.fg }}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-20" style={{ background: VC.surfaceLow }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-black text-center mb-12" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>What We Stand For</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-7 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: VC.primaryContainer }}>
                    <span className="material-symbols-outlined text-xl" style={{ color: VC.onPrimaryFixed }}>{v.icon}</span>
                  </div>
                  <h3 className="font-black text-base mb-2" style={{ color: VC.onBackground }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: VC.onSurfaceVariant }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-16" style={{ background: VC.primaryContainer, boxShadow: "0 16px 60px rgba(249,204,97,0.4)" }}>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
              Ready to build your store?
            </h2>
            <p className="text-lg mb-10" style={{ color: VC.onPrimaryContainer }}>
              14-day free trial. No card. No code. No headaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up"
                className="px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform"
                style={{ background: VC.brandDark, color: VC.brandYellow }}>
                Start Free Trial
              </Link>
              <Link href="/pricing"
                className="px-10 py-4 rounded-2xl font-bold text-lg border-2 hover:bg-black/10 transition-colors"
                style={{ borderColor: VC.brandDark, color: VC.brandDark }}>
                See Plans →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
