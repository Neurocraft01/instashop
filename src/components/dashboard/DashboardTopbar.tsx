"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function DashboardTopbar({ storeName, storeSlug, logoUrl }: { storeName: string; storeSlug?: string; logoUrl?: string | null }) {
  return (
    <header className="flex items-center justify-between px-6 lg:px-10 w-full h-20 bg-white border-b border-[#e4e2df] sticky top-0 z-30">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-full max-w-sm hidden md:block">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5b59]">search</span>
          <input
            className="w-full bg-[#f3f0ed] border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[#745700] transition-all text-[#2f2f2d] placeholder-[#5c5b59]"
            placeholder="Search orders, products, or customers..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        {storeSlug && (
          <Link href={`/store/${storeSlug}`} target="_blank">
            <button className="text-[#745700] font-bold flex items-center gap-2 hover:bg-[#f3f0ed] px-4 py-2 rounded-full transition-all text-sm">
              <span className="hidden sm:inline">View My Store</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </button>
          </Link>
        )}
        <button className="hover:bg-[#f3f0ed] rounded-full p-2 text-[#5c5b59] transition-all relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#b31446] rounded-full" />
        </button>
        <button
          onClick={() => signOut({ callbackUrl: "/sign-in" })}
          className="flex items-center gap-2 h-10 px-4 bg-[#f3f0ed] hover:bg-[#e4e2df] rounded-full text-sm font-bold text-[#2f2f2d] transition-all"
          title="Sign Out"
        >
          {logoUrl ? (
            <Image src={logoUrl} alt={storeName} width={28} height={28} className="rounded-full object-cover" />
          ) : (
            <span className="w-7 h-7 rounded-full bg-[#2B1B3D] text-[#f9cc61] flex items-center justify-center font-black text-sm">
              {storeName?.[0]?.toUpperCase() ?? "S"}
            </span>
          )}
          <span className="hidden sm:inline">Sign Out</span>
          <span className="material-symbols-outlined text-[16px]">logout</span>
        </button>
      </div>
    </header>
  );
}

