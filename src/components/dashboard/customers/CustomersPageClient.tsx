"use client";

import { useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Customer = {
  id: string; name: string; phone: string; email: string | null;
  totalOrders: number; totalSpent: number; tag: string;
  createdAt: string; lastOrderAt: string | null;
};

export function CustomersPageClient({ customers }: { customers: Customer[] }) {
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState("all");

  const filtered = customers.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search);
    const matchTag = filterTag === "all" || c.tag === filterTag;
    return matchSearch && matchTag;
  });

  const exportCSV = () => {
    const headers = ["Name", "Phone", "Email", "Orders", "Spent", "Tag", "Joined"];
    const rows = filtered.map((c) => [
      c.name, c.phone, c.email || "-", c.totalOrders, c.totalSpent, c.tag, format(new Date(c.createdAt), "dd/MM/yyyy")
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `customers-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    toast.success("CSV exported");
  };

  const updateTag = async (id: string, newTag: string) => {
    toast.error("Tag updates require backend endpoint (to be implemented)");
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#f9f6f3] selection:bg-[#f9cc61] selection:text-[#5b4400]">
      {/* Page Header Section */}
      <section className="pt-2 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[#66547a] font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Customer Management</span>
          <h2 className="text-5xl font-black text-[#2f2f2d] tracking-tighter leading-none font-headline">Customers CRM</h2>
        </div>
        <button onClick={exportCSV} className="flex items-center gap-2 bg-[#f9cc61] text-[#5b4400] px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_32px_rgba(255,209,102,0.2)] hover:translate-y-[-2px] active:scale-95 transition-all">
          <span className="material-symbols-outlined">download</span>
          Export CSV
        </button>
      </section>

      {/* Main Product Table Container */}
      <div className="mb-20">
        <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
          {/* Table Filters */}
          <div className="p-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#f3f0ed]">
            <div className="flex items-center gap-4">
              <button onClick={() => setFilterTag("all")} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filterTag === "all" ? "bg-[#f9cc61] text-[#5b4400]" : "bg-[#f3f0ed] text-[#66547a]"}`}>All Customers</button>
              <button onClick={() => setFilterTag("VIP")} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filterTag === "VIP" ? "bg-[#f9cc61] text-[#5b4400]" : "bg-[#f3f0ed] text-[#66547a]"}`}>VIP</button>
              <button onClick={() => setFilterTag("REGULAR")} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filterTag === "REGULAR" ? "bg-[#f9cc61] text-[#5b4400]" : "bg-[#f3f0ed] text-[#66547a]"}`}>Regular</button>
              <button onClick={() => setFilterTag("NEW")} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filterTag === "NEW" ? "bg-[#f9cc61] text-[#5b4400]" : "bg-[#f3f0ed] text-[#66547a]"}`}>New</button>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#afadaa] text-sm">search</span>
              <input
                className="pl-9 pr-4 py-2 bg-[#f3f0ed] border-none rounded-full w-64 focus:ring-2 focus:ring-[#f9cc61] text-sm text-[#2f2f2d] placeholder-[#afadaa]"
                placeholder="Search customers..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          
          {filtered.length === 0 ? (
            <div className="text-center py-20 px-4">
               <span className="material-symbols-outlined text-[100px] text-[#e4e2df] mb-4">group</span>
               <h3 className="text-[#2f2f2d] font-headline font-bold text-2xl mb-2">No customers found</h3>
               <p className="text-[#5c5b59] font-medium mb-6">You don't have any customers matching that criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f0ed]/50">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Customer</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Contact</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Orders</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Total Spent</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Tag</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a]">Last Order</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#66547a] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3f0ed]">
                  {filtered.map((c) => (
                    <tr key={c.id} className="hover:bg-[#f3f0ed]/50 transition-colors group">
                      <td className="px-6 py-5 font-bold text-[#2f2f2d]">{c.name}</td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-bold text-[#2f2f2d]">{c.phone}</p>
                        {c.email && <p className="text-xs text-[#5c5b59]">{c.email}</p>}
                      </td>
                      <td className="px-6 py-5 font-black text-[#2f2f2d]">{c.totalOrders}</td>
                      <td className="px-6 py-5 font-headline font-black text-[#2f2f2d]">₹{c.totalSpent.toLocaleString("en-IN")}</td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          c.tag === "VIP" ? "bg-[#f9cc61] text-[#5b4400]" :
                          c.tag === "REGULAR" ? "bg-[#e8d1fe]/40 text-[#66547a]" :
                          "bg-green-100 text-green-700"
                        }`}>
                          {c.tag === "VIP" && <span className="material-symbols-outlined text-[12px]">star</span>}
                          {c.tag}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-[#5c5b59]">
                        {c.lastOrderAt ? format(new Date(c.lastOrderAt), "dd MMM yyyy") : "-"}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger className="text-[#787774] hover:text-[#b31446] transition-colors p-2 outline-none">
                              <span className="material-symbols-outlined">more_vert</span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => updateTag(c.id, "VIP")} className="font-bold text-[#2f2f2d]">Mark as VIP</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateTag(c.id, "REGULAR")} className="font-bold text-[#2f2f2d]">Mark as Regular</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateTag(c.id, "NEW")} className="font-bold text-[#2f2f2d]">Mark as New</DropdownMenuItem>
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
