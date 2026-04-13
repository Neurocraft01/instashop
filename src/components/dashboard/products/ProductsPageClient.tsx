"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { PLAN_LIMITS } from "@/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Product = {
  id: string; name: string; status: string; price: number;
  discountPrice: number | null; isFeatured: boolean;
  images: { url: string }[]; category: { id: string; name: string } | null;
  stock: number | null; trackStock: boolean;
  _count: { orderItems: number }; createdAt: string;
};
type Category = { id: string; name: string; slug: string };

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: "bg-green-100 text-green-700 font-black",
  DRAFT: "bg-blue-100 text-blue-700 font-black",
  OUT_OF_STOCK: "bg-[#e4e2df] text-[#787774] font-black",
};

export function ProductsPageClient({
  products: initialProducts, categories, plan, productCount,
}: {
  products: Product[]; categories: Category[]; plan: string; productCount: number;
}) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const planLimit = PLAN_LIMITS[plan as "FREE" | "STARTER" | "PRO"].products;
  const atLimit = planLimit !== Infinity && productCount >= planLimit;

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || p.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/dashboard/products/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!data.success) { toast.error(data.error); return; }
      setProducts((p) => p.filter((pr) => pr.id !== id));
      toast.success("Product deleted");
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleStatus = async (product: Product) => {
    const newStatus = product.status === "ACTIVE" ? "DRAFT" : "ACTIVE";
    try {
      const res = await fetch(`/api/dashboard/products/${product.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!data.success) { toast.error(data.error); return; }
      setProducts((prev) => prev.map((p) => p.id === product.id ? { ...p, status: newStatus } : p));
      toast.success(`Product ${newStatus === "ACTIVE" ? "published" : "hidden"}`);
    } catch {
      toast.error("Failed to update product");
    }
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#f9f6f3] selection:bg-[#f9cc61] selection:text-[#5b4400]">
      {/* Page Header Section */}
      <section className="pt-2 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[#b31446] font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Inventory Management</span>
          <h2 className="text-5xl font-black text-[#2f2f2d] tracking-tighter leading-none font-headline">Product Library</h2>
        </div>
        <Link href="/dashboard/products/new">
          <button disabled={atLimit} className="flex items-center gap-2 bg-[#f9cc61] text-[#5b4400] px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_32px_rgba(255,209,102,0.2)] hover:translate-y-[-2px] active:scale-95 transition-all disabled:opacity-50">
            <span className="material-symbols-outlined">add</span>
            Create New
          </button>
        </Link>
      </section>

      {atLimit && (
        <div className="mb-6 bg-[#ffc2c9] border border-[#a1003b] rounded-xl p-4 flex items-center justify-between">
          <p className="text-[#920035] text-sm font-bold tracking-tight">
            You&apos;ve reached the {plan} plan limit of {planLimit} products.
          </p>
          <Link href="/dashboard/settings/billing">
            <button className="bg-[#b31446] hover:bg-[#a1003b] text-white px-4 py-2 rounded-lg text-sm font-black transition-colors">Upgrade Plan</button>
          </Link>
        </div>
      )}

      {/* Main Product Table Container */}
      <div className="mb-20">
        <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
          {/* Table Filters */}
          <div className="p-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#f3f0ed]">
            <div className="flex items-center gap-4">
              <button onClick={() => setFilterStatus("all")} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filterStatus === "all" ? "bg-[#f9cc61] text-[#5b4400]" : "bg-[#f3f0ed] text-[#66547a]"}`}>All Products</button>
              <button onClick={() => setFilterStatus("ACTIVE")} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filterStatus === "ACTIVE" ? "bg-[#f9cc61] text-[#5b4400]" : "bg-[#f3f0ed] text-[#66547a]"}`}>Active</button>
              <button onClick={() => setFilterStatus("DRAFT")} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filterStatus === "DRAFT" ? "bg-[#f9cc61] text-[#5b4400]" : "bg-[#f3f0ed] text-[#66547a]"}`}>Draft</button>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#afadaa] text-sm">search</span>
              <input
                className="pl-9 pr-4 py-2 bg-[#f3f0ed] border-none rounded-full w-64 focus:ring-2 focus:ring-[#f9cc61] text-sm text-[#2f2f2d] placeholder-[#afadaa]"
                placeholder="Search products..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          
          {filtered.length === 0 ? (
            <div className="text-center py-20 px-4">
               <span className="material-symbols-outlined text-[100px] text-[#e4e2df] mb-4">inventory_2</span>
               <h3 className="text-[#2f2f2d] font-headline font-bold text-2xl mb-2">No products found</h3>
               <p className="text-[#5c5b59] font-medium mb-6">Create your first product to start selling.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f0ed]/50">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Product</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Category</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Price</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Stock</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3f0ed]">
                  {filtered.map((product) => (
                    <tr key={product.id} className="hover:bg-[#f3f0ed]/50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-lg bg-[#e4e2df] overflow-hidden flex-shrink-0">
                            {product.images[0]?.url ? (
                              <img src={product.images[0].url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-[#9e9d9a]"><span className="material-symbols-outlined">image</span></div>
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-[#2f2f2d]">{product.name} {product.isFeatured && <span className="text-[#f9cc61] ml-1">★</span>}</p>
                            <p className="text-xs text-[#5c5b59]">ID: {product.id.split("-")[0]}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm text-[#66547a] bg-[#e8d1fe]/40 px-3 py-1 rounded-full font-bold">{product.category?.name || "Uncategorized"}</span>
                      </td>
                      <td className="px-6 py-5 font-headline font-black text-[#2f2f2d]">
                         ₹{(product.discountPrice ?? product.price).toLocaleString("en-IN")}
                         {product.discountPrice && <span className="block text-xs font-medium text-[#afadaa] line-through decoration-1">₹{product.price.toLocaleString("en-IN")}</span>}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-1">
                          <p className={`text-sm font-black ${product.stock === 0 ? "text-[#b02500]" : "text-[#745700]"}`}>{product.trackStock ? `${product.stock} units` : "Not Tracked"}</p>
                          {product.trackStock && (
                            <div className="w-24 h-1.5 bg-[#e4e2df] rounded-full overflow-hidden">
                              <div className={`${product.stock === 0 ? "bg-[#b02500]" : "bg-[#f9cc61]"} h-full`} style={{ width: `${Math.min(((product.stock ?? 0) / 100) * 100, 100)}%` }}></div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase ${STATUS_COLORS[product.status]}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                          {product.status.replace("_", " ")}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <DropdownMenu>
                          <DropdownMenuTrigger className="text-[#787774] hover:text-[#b31446] transition-colors p-2 outline-none">
                            <span className="material-symbols-outlined">more_vert</span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href={`/dashboard/products/${product.id}/edit`} className="flex items-center gap-2 font-bold text-[#2f2f2d] w-full"><span className="material-symbols-outlined text-[18px]">edit</span> Edit</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleToggleStatus(product)} className="flex items-center gap-2 font-bold text-[#2f2f2d]">
                              <span className="material-symbols-outlined text-[18px]">{product.status === "ACTIVE" ? "visibility_off" : "visibility"}</span>
                              {product.status === "ACTIVE" ? "Hide" : "Publish"}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-[#b02500] font-bold flex items-center gap-2" onClick={() => handleDelete(product.id)} disabled={deletingId === product.id}>
                              <span className="material-symbols-outlined text-[18px]">delete</span> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
