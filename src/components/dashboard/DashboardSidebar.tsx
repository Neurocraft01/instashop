"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardSidebar({ storeName, storeSlug, pendingOrders, plan }: any) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard/analytics", icon: "dashboard" },
    { name: "Orders", href: "/dashboard/orders", icon: "shopping_basket", badge: pendingOrders },
    { name: "Inventory", href: "/dashboard/products", icon: "inventory_2" },
    { name: "Customers", href: "/dashboard/customers", icon: "group" },
  ];

  return (
    <aside className="hidden lg:flex flex-col z-40 h-screen w-72 border-none bg-[#2B1B3D] font-['Satoshi'] tracking-tight shadow-[0_8px_32px_rgba(255,209,102,0.1)]">
      <div className="px-8 py-10">
        <h1 className="font-headline text-2xl font-bold text-[#FFD166] truncate">{storeName}</h1>
        <p className="text-slate-400 text-sm mt-1">Seller Portal • {plan}</p>
      </div>
      <nav className="flex-1 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={
                isActive
                  ? "bg-[#3d2b52] text-[#FFD166] rounded-full mx-4 px-6 py-3 font-bold flex items-center justify-between transition-transform scale-95"
                  : "text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center justify-between hover:bg-[#3d2b52] hover:rounded-full"
              }
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.name}
              </div>
              {item.badge ? (
                <span className="bg-[#FFD166] text-[#2B1B3D] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
      <div className="px-6 py-8">
        <Link href="/dashboard/products">
            <button className="w-full bg-[#FFD166] text-[#2B1B3D] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-[#FFD166]/20">
            <span className="material-symbols-outlined">add_circle</span>
            Create New Listing
            </button>
        </Link>
      </div>
      <div className="border-t border-slate-700/50 py-6">
        <Link
          href="/dashboard/settings/store"
          className={
            pathname?.includes("/settings")
              ? "bg-[#3d2b52] text-[#FFD166] rounded-full mx-4 px-6 py-3 font-bold flex items-center gap-3 transition-transform scale-95"
              : "text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center gap-3 hover:bg-[#3d2b52] hover:rounded-full"
          }
        >
          <span className="material-symbols-outlined">settings</span>
          Settings
        </Link>
        <a href="mailto:support@instashop.test" className="text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center gap-3 hover:bg-[#3d2b52] hover:rounded-full mt-2">
          <span className="material-symbols-outlined">contact_support</span>
          Help
        </a>
      </div>
    </aside>
  );
}
