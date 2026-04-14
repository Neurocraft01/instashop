import Link from "next/link";

const VC = {
  brandDark: "#2B1B3D",
  brandYellow: "#FFD166",
  primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100",
};

const footerLinks = {
  Platform: [
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
  Account: [
    { label: "Sign Up", href: "/sign-up" },
    { label: "Sign In", href: "/sign-in" },
    { label: "Dashboard", href: "/dashboard" },
  ],
};

export default function PublicFooter() {
  return (
    <footer className="pt-20 pb-10 px-6" style={{ background: VC.brandDark }}>
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter block mb-4"
              style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandYellow }}>
              InstaShop
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              The Business OS for Indian social media sellers. Launch your store, manage orders, and grow your brand — all in one place.
            </p>
            <Link href="/sign-up"
              className="inline-block px-6 py-3 rounded-xl text-sm font-black transition-transform hover:scale-105"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
              Start Free Trial →
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <h5 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                {group}
              </h5>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.6)" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} InstaShop Technologies. All rights reserved. Made in India 🇮🇳
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
