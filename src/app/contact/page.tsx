"use client";
import { useState } from "react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import type { Metadata } from "next";

const VC = {
  primary: "#745700", primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100", onPrimaryContainer: "#5b4400",
  secondary: "#b31446", tertiary: "#66547a",
  surfaceLowest: "#ffffff", surfaceLow: "#f3f0ed",
  surfaceHigh: "#e4e2df", onBackground: "#2f2f2d",
  onSurfaceVariant: "#5c5b59", brandDark: "#2B1B3D",
  brandYellow: "#FFD166",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", handle: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch { /* ignore */ }
    setTimeout(() => { setSent(true); setLoading(false); }, 600);
  };

  return (
    <div style={{ background: "#f9f6f3", color: VC.onBackground, fontFamily: "Plus Jakarta Sans, sans-serif", minHeight: "100vh" }}>
      <PublicNavbar />
      <main className="pt-28 pb-24 px-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-widest font-bold mb-4" style={{ color: VC.secondary }}>Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6"
            style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
            We&apos;d love to<br />
            <span style={{ color: VC.primary }}>hear from you.</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
            Whether you have a question about our platform, need help setting up your store, or want to partner with us — we&apos;re always happy to chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl p-8 md:p-10" style={{ background: VC.surfaceLowest, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            {sent ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6" style={{ background: VC.primaryContainer }}>
                  <span className="material-symbols-outlined text-4xl" style={{ color: VC.onPrimaryFixed, fontVariationSettings: "'FILL' 1" }}>task_alt</span>
                </div>
                <h2 className="text-2xl font-black mb-3" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>Message Sent!</h2>
                <p className="mb-6" style={{ color: VC.onSurfaceVariant }}>We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", handle: "", email: "", message: "" }); }}
                  className="px-6 py-3 rounded-xl font-bold text-sm"
                  style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: VC.tertiary }}>Your Name *</label>
                    <input required type="text" value={form.name}
                      onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Priya Sharma"
                      className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                      style={{ background: VC.surfaceLow, color: VC.onBackground }} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: VC.tertiary }}>Social Media Handle</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-sm font-semibold" style={{ color: VC.onSurfaceVariant }}>@</span>
                      <input type="text" value={form.handle}
                        onChange={(e) => setForm(f => ({ ...f, handle: e.target.value }))}
                        placeholder="your_handle"
                        className="w-full pl-8 pr-4 py-3 rounded-xl outline-none text-sm"
                        style={{ background: VC.surfaceLow, color: VC.onBackground }} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: VC.tertiary }}>Email *</label>
                  <input required type="email" value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                    style={{ background: VC.surfaceLow, color: VC.onBackground }} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: VC.tertiary }}>Message *</label>
                  <textarea required rows={5} value={form.message}
                    onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl outline-none text-sm resize-none"
                    style={{ background: VC.surfaceLow, color: VC.onBackground }} />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-4 rounded-xl font-black text-base hover:scale-[1.01] transition-transform active:scale-95 disabled:opacity-60"
                  style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed, boxShadow: "0 8px 24px rgba(249,204,97,0.3)" }}>
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: "mail", title: "Email Us", sub: "support@instashop.in", href: "mailto:support@instashop.in" },
              { icon: "chat", title: "WhatsApp Support", sub: "Available 9am–7pm IST", href: "https://wa.me/919876543210" },
              { icon: "location_on", title: "Based in India", sub: "Serving social media sellers across India", href: null },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ background: VC.surfaceLowest, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: VC.primaryContainer }}>
                    <span className="material-symbols-outlined text-xl" style={{ color: VC.onPrimaryFixed }}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-black text-sm mb-1" style={{ color: VC.brandDark }}>{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm hover:underline" style={{ color: VC.primary }}>{item.sub}</a>
                    ) : (
                      <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>{item.sub}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick links */}
            <div className="p-6 rounded-2xl" style={{ background: VC.brandDark }}>
              <p className="font-black text-sm mb-4" style={{ color: VC.brandYellow }}>Quick Links</p>
              <div className="space-y-2">
                {[
                  { label: "View Pricing →", href: "/pricing" },
                  { label: "Read About Us →", href: "/about" },
                  { label: "Privacy Policy →", href: "/privacy" },
                ].map((l) => (
                  <a key={l.label} href={l.href}
                    className="block text-sm py-2 hover:opacity-70 transition-opacity"
                    style={{ color: "rgba(255,255,255,0.7)" }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
