import Link from "next/link";
import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

export const metadata: Metadata = {
  title: "Subscription Required — InstaShop",
};

const VC = {
  brandDark: "#2B1B3D", brandYellow: "#FFD166",
  primaryContainer: "#f9cc61", onPrimaryFixed: "#443100",
  surfaceLow: "#f3f0ed", onSurfaceVariant: "#5c5b59",
};

export default function PlanExpiredPage() {
  return (
    <div style={{ background: "#f9f6f3", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
      <PublicNavbar />
      <main className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: VC.primaryContainer }}>
            <span className="material-symbols-outlined text-4xl" style={{ color: VC.onPrimaryFixed }}>lock</span>
          </div>
          <h1 className="text-4xl font-black mb-4" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
            Your Free Trial Has Ended
          </h1>
          <p className="text-lg mb-10" style={{ color: VC.onSurfaceVariant }}>
            Your 14-day free trial has expired. Choose a plan to keep your store live and continue receiving orders.
          </p>
          <Link href="/pricing"
            className="inline-block px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform mb-4"
            style={{ background: VC.brandDark, color: VC.brandYellow }}>
            View Plans & Upgrade
          </Link>
          <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>
            Your store data is safe. Upgrade to restore access instantly.
          </p>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
