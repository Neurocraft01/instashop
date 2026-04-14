/**
 * Shared layout component for all store public pages.
 * Provides consistent header/footer navigation.
 */
import Link from "next/link";
import type { ReactNode } from "react";

const VC = {
  brandDark: "#2B1B3D", brandYellow: "#FFD166",
  primaryContainer: "#f9cc61", onPrimaryFixed: "#443100",
  surfaceHigh: "#e4e2df", onBackground: "#2f2f2d",
  onSurfaceVariant: "#5c5b59",
};

interface StoreShellProps {
  slug: string;
  storeName: string;
  whatsappNumber?: string | null;
  children: ReactNode;
  activeTab?: "home" | "about" | "contact";
}

export function StoreShell({ slug, storeName, whatsappNumber, children, activeTab = "home" }: StoreShellProps) {
  const tabs = [
    { key: "home", label: "Shop", icon: "storefront", href: `/store/${slug}` },
    { key: "about", label: "About", icon: "info", href: `/store/${slug}/about` },
    { key: "contact", label: "Contact", icon: "chat", href: `/store/${slug}/contact` },
  ] as const;

  return (
    <div style={{ background: "#f9f6f3", color: VC.onBackground, fontFamily: "Plus Jakarta Sans, sans-serif", minHeight: "100vh" }}>
      {/* Top Header */}
      <header className="flex items-center justify-between px-5 h-16 w-full sticky top-0 z-50"
        style={{ background: "rgba(255,252,249,0.9)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${VC.surfaceHigh}` }}>
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Back to InstaShop">
            <span className="material-symbols-outlined p-1.5 rounded-full hover:bg-black/5 transition text-xl"
              style={{ color: VC.onBackground }}>arrow_back</span>
          </Link>
          <span className="font-black text-base" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
            {storeName}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {whatsappNumber && (
            <a href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
              target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-black/5 transition"
              aria-label="WhatsApp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          )}
          <Link href={`/store/${slug}`} aria-label="Shop"
            className="p-2 rounded-full hover:bg-black/5 transition"
            style={{ color: VC.onBackground }}>
            <span className="material-symbols-outlined text-xl">storefront</span>
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-2xl mx-auto px-4 pb-28">
        {children}
      </main>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-1 px-3 py-2 rounded-full"
          style={{
            background: "rgba(255,252,249,0.9)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(43,27,61,0.15)",
            border: `1px solid ${VC.surfaceHigh}`,
          }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <Link key={tab.key} href={tab.href}
                className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-full transition-all"
                style={{
                  background: isActive ? VC.primaryContainer : "transparent",
                  color: isActive ? VC.onPrimaryFixed : VC.onSurfaceVariant,
                }}>
                <span className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                  {tab.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Store Footer */}
      <div className="pb-4 pt-6 text-center px-4" style={{ background: "#f9f6f3", marginBottom: "72px" }}>
        <p className="text-xs" style={{ color: VC.onSurfaceVariant }}>
          © {new Date().getFullYear()} {storeName} · Powered by{" "}
          <Link href="/" className="font-bold hover:underline" style={{ color: VC.brandDark }}>InstaShop</Link>
        </p>
      </div>
    </div>
  );
}
