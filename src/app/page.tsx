import Link from "next/link";
import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

export const metadata: Metadata = {
  title: "InstaShop — Turn Your Social Media Into a Real Business",
  description: "Launch your branded store, manage all orders, and grow with WhatsApp CRM — without any technical skills. Built for Indian social media sellers.",
};

const VC = {
  brandDark: "#2B1B3D", brandYellow: "#FFD166",
  primary: "#745700", primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100", onPrimaryContainer: "#5b4400",
  secondary: "#b31446", secondaryContainer: "#ffc2c9",
  onSecondaryContainer: "#920035",
  surfaceLow: "#f3f0ed", surfaceLowest: "#ffffff",
  onBackground: "#2f2f2d", onSurfaceVariant: "#5c5b59",
};

const testimonials = [
  { name: "Priya S.", city: "Mumbai", text: "I was managing 50+ orders a day in DMs. InstaShop reduced my order confusion to zero.", tag: "Fashion Seller" },
  { name: "Rahul M.", city: "Bangalore", text: "Set up my gadget store in 10 minutes. The inventory tracker alone is worth it.", tag: "Electronics Seller" },
  { name: "Anjali K.", city: "Delhi", text: "Love the WhatsApp button. My customers get instant replies and I get more conversions.", tag: "Handmade Jewellery" },
];

export default function HomePage() {
  return (
    <div style={{ background: "#f9f6f3", color: VC.onBackground, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
      <PublicNavbar />

      <main className="pt-20">

        {/* ─── HERO — Original split layout ─── */}
        <section className="relative overflow-hidden py-24 lg:py-32 px-6" style={{ background: "#f9f6f3" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div className="z-10 text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6"
                style={{ background: VC.secondaryContainer, color: VC.onSecondaryContainer }}>
                For Social Media Sellers
              </span>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight"
                style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
                Turn Your Social Media Into a{" "}
                <span style={{ color: VC.primary }}>Real Business</span>
              </h1>
              <p className="text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                style={{ color: VC.onSurfaceVariant }}>
                Stop managing orders through DMs. Scale your brand with automated checkouts, inventory tracking, and direct WhatsApp CRM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/sign-up"
                  className="px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform active:scale-95"
                  style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed, boxShadow: "0 8px 32px rgba(249,204,97,0.35)" }}>
                  Start Free Trial →
                </Link>
                <Link href="/pricing"
                  className="px-10 py-5 rounded-xl font-bold text-lg hover:bg-black/5 transition-colors border-2"
                  style={{ borderColor: VC.brandDark, color: VC.brandDark }}>
                  View Plans
                </Link>
              </div>
              <p className="mt-5 text-sm" style={{ color: VC.onSurfaceVariant }}>14-day free trial · No credit card · Cancel anytime</p>
            </div>

            {/* Right — widget mockup */}
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: VC.primaryContainer }} />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: VC.secondaryContainer }} />
              {/* Dashboard preview card */}
              <div className="relative rounded-2xl p-6 hover:rotate-0 transition-transform duration-500 rotate-2"
                style={{ background: VC.brandDark, boxShadow: "0 24px 64px rgba(43,27,61,0.4)" }}>
                {/* Mini header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-black text-sm" style={{ color: VC.brandYellow }}>FashionBee Dashboard</span>
                  <div className="flex gap-1.5">
                    {["#ef4444","#f59e0b","#22c55e"].map(c => <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
                  </div>
                </div>
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Revenue", value: "₹48,200", up: true },
                    { label: "Orders", value: "124", up: true },
                    { label: "Pending", value: "7", up: false },
                  ].map(s => (
                    <div key={s.label} className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <p className="text-[10px] font-semibold mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
                      <p className="font-black text-white text-sm">{s.value}</p>
                    </div>
                  ))}
                </div>
                {/* Mini order list */}
                {[
                  { name: "Anjali M.", amount: "₹699", status: "Delivered", color: "#22c55e" },
                  { name: "Sneha K.", amount: "₹999", status: "Shipped", color: "#3b82f6" },
                  { name: "Ritu D.", amount: "₹649", status: "Pending", color: "#f59e0b" },
                ].map(o => (
                  <div key={o.name} className="flex items-center justify-between py-2.5 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs"
                        style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>{o.name[0]}</div>
                      <span className="text-white text-xs font-medium">{o.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-white text-xs">{o.amount}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: `${o.color}22`, color: o.color }}>{o.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 p-4 rounded-2xl flex items-center gap-3 shadow-xl animate-bounce"
                style={{ background: "#fff" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#e8f5e9" }}>
                  <span className="material-symbols-outlined text-sm" style={{ color: "#2e7d32" }}>payments</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold" style={{ color: VC.onSurfaceVariant }}>New Order!</p>
                  <p className="font-black text-base" style={{ color: VC.brandDark }}>₹1,199</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SOCIAL PROOF STRIP ─── */}
        <div className="py-5 overflow-hidden" style={{ background: VC.brandDark }}>
          <div className="flex gap-12 items-center justify-center flex-wrap px-6">
            {[
              { value: "10,000+", label: "Sellers" },
              { value: "₹2Cr+", label: "GMV" },
              { value: "500K+", label: "Orders" },
              { value: "< 2 min", label: "Setup" },
              { value: "3 Plans", label: "From ₹199" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <span className="font-black text-xl block" style={{ color: VC.brandYellow }}>{s.value}</span>
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── FEATURES BENTO GRID — Original design ─── */}
        <section className="py-24 px-6" style={{ background: VC.surfaceLow }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
                Everything You Need to Scale
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: VC.onSurfaceVariant }}>
                Skip the complicated setups. InstaShop is built specifically for creators who sell on social media.
              </p>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 — wide card */}
              <div className="md:col-span-2 p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-center overflow-hidden group"
                style={{ background: VC.surfaceLowest, boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: VC.primaryContainer }}>
                    <span className="material-symbols-outlined" style={{ color: VC.onPrimaryFixed }}>storefront</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>Branded Mini-Store</h3>
                  <p className="mb-6" style={{ color: VC.onSurfaceVariant }}>A gorgeous, lightning-fast mobile shop that lives in your bio. No coding required. Live in 2 minutes.</p>
                  <ul className="space-y-2">
                    {["Custom store link in your bio", "Product categories & variants", "One-tap WhatsApp checkout"].map(f => (
                      <li key={f} className="flex items-center gap-2 font-semibold text-sm" style={{ color: VC.onBackground }}>
                        <span className="material-symbols-outlined text-base" style={{ color: "#22c55e", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Mini storefront preview */}
                <div className="flex-1 flex justify-center group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-48 rounded-2xl overflow-hidden" style={{ background: VC.brandDark, boxShadow: "0 16px 48px rgba(43,27,61,0.3)" }}>
                    <div className="p-3 text-center border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                      <p className="font-black text-xs" style={{ color: VC.brandYellow }}>FashionBee</p>
                    </div>
                    {["Floral Kurti — ₹699", "Co-ord Set — ₹999", "Earrings — ₹299"].map(p => (
                      <div key={p} className="p-3 border-b text-xs font-medium flex justify-between items-center"
                        style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.06)" }}>
                        <span>{p.split("—")[0]}</span>
                        <span className="font-black text-white">{p.split("—")[1]}</span>
                      </div>
                    ))}
                    <div className="p-3">
                      <div className="w-full py-2 rounded-xl text-center text-xs font-black"
                        style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>Order on WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 — dark card */}
              <div className="p-10 rounded-2xl flex flex-col" style={{ background: VC.brandDark }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <span className="material-symbols-outlined" style={{ color: VC.brandYellow }}>chat</span>
                </div>
                <h3 className="text-3xl font-black mb-4" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandYellow }}>WhatsApp CRM</h3>
                <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>Click one button to send a pre-filled WhatsApp order message — no API needed. Your customers reply, you confirm.</p>
                <div className="mt-auto p-4 rounded-xl border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: VC.brandYellow }}>Pre-filled Message</p>
                  <p className="italic text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>&quot;Hi! I&apos;d like to order: Floral Kurti (₹699). Name: Anjali. Address: Koramangala...&quot;</p>
                </div>
              </div>

              {/* Feature 3 — order dashboard */}
              <div className="p-10 rounded-2xl flex flex-col items-center text-center"
                style={{ background: VC.surfaceLowest, boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ background: VC.secondaryContainer }}>
                  <span className="material-symbols-outlined" style={{ color: VC.onSecondaryContainer }}>receipt_long</span>
                </div>
                <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>Order Dashboard</h3>
                <p style={{ color: VC.onSurfaceVariant }}>Track every order from Pending to Delivered. Print invoices, export CSV, add tracking details.</p>
              </div>

              {/* Feature 4 — analytics wide */}
              <div className="md:col-span-2 rounded-2xl overflow-hidden"
                style={{ background: VC.primaryContainer, boxShadow: "0 8px 32px rgba(249,204,97,0.3)" }}>
                <div className="p-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-4" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>Revenue Analytics</h3>
                    <p className="mb-4" style={{ color: VC.onPrimaryContainer }}>30-day revenue charts, top products, payment breakdowns. Know exactly what&apos;s selling.</p>
                  </div>
                  {/* Mini chart bars */}
                  <div className="flex items-end gap-2 h-20">
                    {[40, 65, 50, 80, 70, 90, 75, 95, 60, 100].map((h, i) => (
                      <div key={i} className="w-4 rounded-t-md" style={{ height: `${h}%`, background: i === 9 ? VC.brandDark : `${VC.brandDark}33` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS — Original numbered steps ─── */}
        <section className="py-24 px-6" style={{ background: "#f9f6f3" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-black mb-12 leading-tight"
                  style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
                  3 Steps to Your Own Online Store
                </h2>
                <div className="space-y-10">
                  {[
                    { n: "1", title: "Sign Up & Set Up", desc: "Create your account in 60 seconds. Add your store name, upload a logo, and you're live." },
                    { n: "2", title: "List Your Products", desc: "Add product images, set prices, variants, and stock. Your catalog is ready instantly." },
                    { n: "3", title: "Share Your Bio Link", desc: "Put your InstaShop link in your social bio. Customers tap, browse, and order." },
                  ].map(s => (
                    <div key={s.n} className="flex gap-6">
                      <span className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl"
                        style={{ background: VC.brandDark, color: VC.brandYellow }}>
                        {s.n}
                      </span>
                      <div>
                        <h4 className="text-xl font-black mb-2" style={{ color: VC.brandDark }}>{s.title}</h4>
                        <p style={{ color: VC.onSurfaceVariant }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — success chart visual */}
              <div className="p-8 rounded-2xl" style={{ background: VC.surfaceLow }}>
                <p className="font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: VC.onSurfaceVariant }}>Revenue This Month</p>
                <div className="flex items-end gap-2 h-40 mb-4">
                  {[20, 35, 28, 55, 45, 70, 60, 85, 65, 90, 72, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${h}%`, background: i >= 10 ? VC.primaryContainer : `${VC.primaryContainer}66` }} />
                  ))}
                </div>
                <div className="flex justify-between text-xs" style={{ color: VC.onSurfaceVariant }}>
                  <span>Apr 1</span><span>Apr 15</span><span>Apr 30</span>
                </div>
                <div className="mt-6 flex items-center gap-3 p-4 rounded-xl" style={{ background: "#fff" }}>
                  <span className="material-symbols-outlined" style={{ color: "#22c55e", fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                  <div>
                    <p className="font-black" style={{ color: VC.brandDark }}>₹48,200 this month</p>
                    <p className="text-xs" style={{ color: VC.onSurfaceVariant }}>+24% vs last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-24 px-6" style={{ background: VC.brandDark }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16"
              style={{ fontFamily: "Epilogue, sans-serif" }}>
              Sellers Love InstaShop
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div key={t.name} className="p-7 rounded-2xl flex flex-col gap-5"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="text-white leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-auto flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                      style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name} · {t.city}</p>
                      <p className="text-xs" style={{ color: VC.brandYellow }}>{t.tag}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING TEASER ─── */}
        <section className="py-24 px-6" style={{ background: VC.surfaceLow }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
                Simple, Fair Pricing
              </h2>
              <p style={{ color: VC.onSurfaceVariant }}>14-day free trial on all plans. No credit card required.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Starter", price: "₹199", desc: "For creators just starting out", features: ["10 Products", "100 Orders/month", "Branded Store", "WhatsApp CRM", "Invoice Printing"], highlight: false },
                { name: "Growth", price: "₹499", desc: "For serious sellers scaling fast", features: ["100 Products", "1,000 Orders/month", "Full CRM & Leads", "Advanced Analytics", "CSV Export"], highlight: true },
                { name: "Pro", price: "₹999", desc: "For high-volume power sellers", features: ["Unlimited Products", "Unlimited Orders", "Custom Domain", "2 Staff Accounts", "Razorpay Payments"], highlight: false },
              ].map(plan => (
                <div key={plan.name} className="p-8 rounded-2xl flex flex-col"
                  style={{
                    background: plan.highlight ? VC.brandDark : VC.surfaceLowest,
                    border: plan.highlight ? "none" : `2px solid ${VC.surfaceLow}`,
                    boxShadow: plan.highlight ? "0 16px 48px rgba(43,27,61,0.3)" : "0 4px 24px rgba(0,0,0,0.06)",
                    transform: plan.highlight ? "scale(1.04)" : "none",
                  }}>
                  {plan.highlight && (
                    <span className="text-xs font-black uppercase tracking-widest mb-4 px-3 py-1 rounded-full self-start"
                      style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>Most Popular</span>
                  )}
                  <h3 className="text-xl font-black mb-1" style={{ color: plan.highlight ? VC.brandYellow : VC.brandDark }}>{plan.name}</h3>
                  <p className="text-xs mb-6" style={{ color: plan.highlight ? "rgba(255,255,255,0.55)" : VC.onSurfaceVariant }}>{plan.desc}</p>
                  <div className="text-4xl font-black mb-2" style={{ color: plan.highlight ? "#fff" : VC.brandDark }}>
                    {plan.price}<span className="text-sm font-normal ml-1" style={{ color: plan.highlight ? "rgba(255,255,255,0.5)" : VC.onSurfaceVariant }}>/mo</span>
                  </div>
                  <p className="text-xs mb-8 italic" style={{ color: plan.highlight ? "rgba(255,255,255,0.4)" : VC.onSurfaceVariant }}>After 14-day free trial</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm"
                        style={{ color: plan.highlight ? "rgba(255,255,255,0.8)" : VC.onBackground }}>
                        <span className="material-symbols-outlined text-base" style={{ color: plan.highlight ? VC.brandYellow : VC.primary, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/sign-up?plan=${plan.name.toLowerCase()}`}
                    className="py-4 rounded-xl font-black text-center hover:scale-[1.02] transition-transform active:scale-95"
                    style={{
                      background: plan.highlight ? VC.primaryContainer : VC.brandDark,
                      color: plan.highlight ? VC.onPrimaryFixed : VC.brandYellow,
                    }}>
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-sm" style={{ color: VC.onSurfaceVariant }}>
              Need a comparison?{" "}
              <Link href="/pricing" className="font-bold hover:underline" style={{ color: VC.primary }}>
                See full feature list →
              </Link>
            </p>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-24 px-6" style={{ background: "#f9f6f3" }}>
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-20"
            style={{ background: VC.primaryContainer, boxShadow: "0 16px 60px rgba(249,204,97,0.5)" }}>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
              Your Store is<br />One Click Away.
            </h2>
            <p className="text-lg mb-10" style={{ color: VC.onPrimaryContainer }}>
              Join 10,000+ sellers who stopped losing orders in DMs.
            </p>
            <Link href="/sign-up"
              className="inline-block px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform"
              style={{ background: VC.brandDark, color: VC.brandYellow, boxShadow: "0 8px 32px rgba(43,27,61,0.4)" }}>
              Create My Store — Free →
            </Link>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
