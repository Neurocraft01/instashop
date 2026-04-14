"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const VC = {
  brandDark: "#2B1B3D", brandYellow: "#FFD166",
  primaryContainer: "#f9cc61", onPrimaryFixed: "#443100",
  secondary: "#b31446",
};

const navItems = [
  { icon: "dashboard", label: "Overview", href: "/admin" },
  { icon: "people", label: "Users & Sellers", href: "/admin/users" },
  { icon: "storefront", label: "All Stores", href: "/admin/stores" },
  { icon: "article", label: "CMS Content", href: "/admin/cms" },
  { icon: "campaign", label: "Announcements", href: "/admin/announcements" },
  { icon: "sell", label: "Plan Config", href: "/admin/plan-config" },
  { icon: "analytics", label: "Platform Analytics", href: "/admin/analytics" },
];

export default function AdminSidebar() {
  const path = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 z-40 flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}
      style={{ background: VC.brandDark, borderRight: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        {!collapsed && (
          <div>
            <span className="font-black text-lg" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandYellow }}>InstaShop</span>
            <p className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>Admin Panel</p>
          </div>
        )}
        <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 rounded-lg hover:bg-white/10 transition"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          <span className="material-symbols-outlined text-xl">{collapsed ? "chevron_right" : "chevron_left"}</span>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
        {navItems.map(item => {
          const isActive = path === item.href;
          return (
            <Link key={item.href} href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 mx-2 px-3 py-2.5 rounded-xl transition-all ${collapsed ? "justify-center" : ""}`}
              style={{
                background: isActive ? VC.primaryContainer : "transparent",
                color: isActive ? VC.onPrimaryFixed : "rgba(255,255,255,0.65)",
              }}>
              <span className="material-symbols-outlined text-xl shrink-0"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
              {!collapsed && <span className="text-sm font-semibold">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <Link href="/dashboard"
          className={`flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition text-sm ${collapsed ? "justify-center" : ""}`}
          style={{ color: "rgba(255,255,255,0.5)" }}>
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          {!collapsed && <span>Back to Dashboard</span>}
        </Link>
      </div>
    </aside>
  );
}
