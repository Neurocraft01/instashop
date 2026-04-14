"use client";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { StoreShell } from "@/components/store/StoreShell";
import { useState } from "react";

const VC = {
  primary: "#745700", primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100", onPrimaryContainer: "#5b4400",
  secondary: "#b31446",
  surfaceLowest: "#ffffff", surfaceLow: "#f3f0ed",
  surfaceHigh: "#e4e2df",
  onBackground: "#2f2f2d", onSurfaceVariant: "#5c5b59",
  brandDark: "#2B1B3D",
};

export default function StoreContactPage({
  storeName, slug, whatsappNumber,
}: {
  storeName: string; slug: string; whatsappNumber?: string | null;
}) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const whatsappBase = whatsappNumber?.replace(/\D/g, "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappBase) return;
    setLoading(true);
    const msg = encodeURIComponent(
      `Hi ${storeName}! My name is ${form.name}.\n${form.message}\nMy phone: ${form.phone}`
    );
    window.open(`https://wa.me/${whatsappBase}?text=${msg}`, "_blank");
    setTimeout(() => { setSent(true); setLoading(false); }, 500);
  };

  if (sent) {
    return (
      <StoreShell slug={slug} storeName={storeName} whatsappNumber={whatsappNumber} activeTab="contact">
        <div className="py-20 text-center">
          <span className="material-symbols-outlined text-6xl mb-4 block" style={{ color: "#25D366", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <h2 className="text-2xl font-black mb-2" style={{ color: VC.brandDark }}>Message Sent!</h2>
          <p className="text-sm mb-6" style={{ color: VC.onSurfaceVariant }}>WhatsApp opened. {storeName} will reply shortly.</p>
          <button onClick={() => setSent(false)}
            className="px-6 py-3 rounded-xl font-bold text-sm"
            style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
            Send Another Message
          </button>
        </div>
      </StoreShell>
    );
  }

  return (
    <StoreShell slug={slug} storeName={storeName} whatsappNumber={whatsappNumber} activeTab="contact">
      <section className="py-8">
        <h1 className="text-2xl font-black mb-1" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
          Contact {storeName}
        </h1>
        <p className="text-sm mb-6" style={{ color: VC.onSurfaceVariant }}>Send a message directly to the seller via WhatsApp.</p>

        {whatsappBase ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: VC.primary }}>Your Name *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="e.g. Priya Sharma"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                style={{ background: VC.surfaceLow, border: "1.5px solid transparent", focusRingColor: VC.primaryContainer, color: VC.onBackground }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: VC.primary }}>WhatsApp Number *</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="e.g. 9876543210"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: VC.surfaceLow, color: VC.onBackground }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: VC.primary }}>Message *</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="I'm interested in ordering... / I have a question about..."
                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                style={{ background: VC.surfaceLow, color: VC.onBackground }}
              />
            </div>
            <button type="submit" disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-base hover:scale-[1.02] transition-transform active:scale-95 disabled:opacity-60"
              style={{ background: "#25D366", color: "#fff" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
            </button>
            <p className="text-xs text-center" style={{ color: VC.onSurfaceVariant }}>
              This will open WhatsApp with your message pre-filled.
            </p>
          </form>
        ) : (
          <div className="rounded-2xl p-8 text-center" style={{ background: VC.surfaceLow }}>
            <span className="material-symbols-outlined text-4xl mb-3 block" style={{ color: VC.onSurfaceVariant }}>chat_bubble</span>
            <p style={{ color: VC.onSurfaceVariant }}>This store hasn&apos;t set up a contact method yet. Check back soon.</p>
          </div>
        )}
      </section>
    </StoreShell>
  );
}
