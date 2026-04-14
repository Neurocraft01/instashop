"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const VC = {
  brandDark: "#2B1B3D",
  brandYellow: "#FFD166",
  primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100",
  surfaceHigh: "#e4e2df",
};

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function PublicNavbar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-18"
      style={{
        background: "rgba(255,252,249,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: `1px solid ${VC.surfaceHigh}`,
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-18 max-w-7xl mx-auto" style={{ height: "72px" }}>
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter shrink-0"
          style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}
        >
          Insta<span style={{ color: "#745700" }}>Shop</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: path === l.href ? VC.primaryContainer : "transparent",
                color: path === l.href ? VC.onPrimaryFixed : `${VC.brandDark}cc`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: VC.brandDark }}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="px-5 py-2.5 rounded-xl text-sm font-black transition-transform hover:scale-105 active:scale-95"
            style={{
              background: VC.primaryContainer,
              color: VC.onPrimaryFixed,
              boxShadow: "0 4px 16px rgba(249,204,97,0.35)",
            }}
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: VC.brandDark }}
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-2"
          style={{ background: "rgba(255,252,249,0.98)", borderBottom: `1px solid ${VC.surfaceHigh}` }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: path === l.href ? VC.primaryContainer : "transparent",
                color: path === l.href ? VC.onPrimaryFixed : VC.brandDark,
              }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <Link href="/sign-in" className="flex-1 py-3 rounded-xl text-sm font-semibold text-center border-2"
              style={{ borderColor: VC.surfaceHigh, color: VC.brandDark }}>
              Sign In
            </Link>
            <Link href="/sign-up" className="flex-1 py-3 rounded-xl text-sm font-black text-center"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
