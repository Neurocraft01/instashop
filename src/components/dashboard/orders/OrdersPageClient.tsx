"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generateStatusUpdateWhatsAppLink } from "@/lib/whatsapp";

const STATUS_CONFIG: Record<string, { label: string; className: string; dot: string; }> = {
  PENDING:   { label: "Pending", className: "bg-[#e8d1fe] text-[#57456a]", dot: "bg-[#66547a]" }, // primary-container alternative text colors
  CONFIRMED: { label: "Confirmed", className: "bg-[#E3F2FD] text-[#1565C0]", dot: "bg-[#1565C0]" },
  PACKED:    { label: "Packed", className: "bg-[#FFF3E0] text-[#E65100]", dot: "bg-[#E65100]" },
  SHIPPED:   { label: "Shipped", className: "bg-[#FFF3E0] text-[#E65100]", dot: "bg-[#E65100]" },
  DELIVERED: { label: "Delivered", className: "bg-[#E8F5E9] text-[#2E7D32]", dot: "bg-[#2E7D32]" },
  CANCELLED: { label: "Cancelled", className: "bg-[#ffc2c9] text-[#b02500]", dot: "bg-[#b02500]" },
  REFUNDED:  { label: "Refunded", className: "bg-[#dfdcd9] text-[#5c5b59]", dot: "bg-[#5c5b59]" },
};

const STATUS_FLOW = ["PENDING", "CONFIRMED", "PACKED", "SHIPPED", "DELIVERED"];

type OrderItem = { id: string; productName: string; quantity: number; totalPrice: number };
type Order = {
  id: string; orderNumber: string;
  customerName: string; customerPhone: string;
  status: string; paymentMethod: string; paymentStatus: string;
  total: number; createdAt: string;
  items: OrderItem[];
  customer: { tag: string } | null;
};

type Props = {
  orders: Order[];
  statusBreakdown: { status: string; count: number }[];
  storeId: string;
  whatsappNumber: string | null;
  storeName: string;
};

export function OrdersPageClient({ orders: initialOrders, statusBreakdown, storeId, whatsappNumber, storeName }: Props) {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const filtered = useMemo(() =>
    orders.filter((o) => {
      const matchSearch = !search || o.orderNumber.toLowerCase().includes(search.toLowerCase())
        || o.customerName.toLowerCase().includes(search.toLowerCase())
        || o.customerPhone.includes(search);
      const matchStatus = filterStatus === "all" || o.status === filterStatus;
      return matchSearch && matchStatus;
    }),
    [orders, search, filterStatus]
  );

  const updateStatus = async (id: string, newStatus: string, note?: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/dashboard/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus, note }),
      });
      const data = await res.json();
      if (!data.success) { toast.error(data.error); return; }
      setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: newStatus } : o));
      toast.success(`Order ${newStatus.toLowerCase()}`);
    } catch {
      toast.error("Failed to update order");
    } finally {
      setUpdatingId(null);
    }
  };

  const exportCSV = () => {
    const headers = ["Order Number", "Customer", "Phone", "Status", "Total", "Payment", "Date"];
    const rows = filtered.map((o) => [
      o.orderNumber, o.customerName, o.customerPhone,
      o.status, o.total.toLocaleString("en-IN"),
      o.paymentMethod, format(new Date(o.createdAt), "dd/MM/yyyy"),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `orders-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    toast.success("CSV exported");
  };

  const totalPending = statusBreakdown.find((s) => s.status === "PENDING")?.count || 0;
  const totalSales = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="flex-1 min-w-0 flex flex-col bg-[#f9f6f3] selection:bg-[#f9cc61] selection:text-[#5b4400]">
      {/* Page Header & Stats Section */}
      <section className="pt-2 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <span className="uppercase tracking-[0.1em] text-[#66547a] font-bold text-xs">Merchant Dashboard</span>
          <h2 className="text-4xl font-black text-[#2f2f2d] leading-none font-headline tracking-tighter">Order Management</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <div className="bg-[#ffffff] p-6 rounded-xl border-l-4 border-[#745700] shadow-[0_8px_32px_rgba(0,0,0,0.02)] min-w-[200px] flex items-center gap-4 shrink-0">
            <div className="bg-[#f9cc61] w-12 h-12 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[#5b4400]">trending_up</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#66547a] uppercase tracking-widest">Total Sales</p>
              <p className="text-xl font-black text-[#2f2f2d] font-headline">₹{totalSales.toLocaleString("en-IN")}</p>
            </div>
          </div>
          <div className="bg-[#ffffff] p-6 rounded-xl border-l-4 border-[#b31446] shadow-[0_8px_32px_rgba(0,0,0,0.02)] min-w-[200px] flex items-center gap-4 shrink-0">
            <div className="bg-[#ffc2c9] w-12 h-12 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[#920035]">pending_actions</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#66547a] uppercase tracking-widest">New Orders</p>
              <p className="text-xl font-black text-[#2f2f2d] font-headline">{totalPending}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Tabs */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2 items-center">
          <button onClick={() => setFilterStatus("all")} className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${filterStatus === "all" ? "bg-[#745700] text-[#ffe1a6] shadow-[0_4px_12px_rgba(116,87,0,0.2)]" : "bg-[#f3f0ed] text-[#66547a] hover:bg-[#e4e2df]"}`}>All Orders</button>
          {statusBreakdown.map((s) => (
            <button
               key={s.status} 
               onClick={() => setFilterStatus(s.status)} 
               className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${filterStatus === s.status ? "bg-[#745700] text-[#ffe1a6] shadow-[0_4px_12px_rgba(116,87,0,0.2)]" : "bg-[#f3f0ed] text-[#66547a] hover:bg-[#e4e2df]"}`}
            >
               {STATUS_CONFIG[s.status]?.label || s.status} <span className="opacity-75 relative bottom-[0.5px] font-black text-[10px] ml-1">({s.count})</span>
            </button>
          ))}
          <div className="ml-auto min-w-[240px] relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#afadaa] text-sm">search</span>
            <input
              className="pl-9 pr-4 py-2 bg-[#f3f0ed] border-none rounded-full w-full focus:ring-2 focus:ring-[#f9cc61] text-sm text-[#2f2f2d] placeholder-[#afadaa]"
              placeholder="Search orders..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table Content */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 px-4 bg-[#ffffff] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
             <span className="material-symbols-outlined text-[100px] text-[#e4e2df] mb-4">receipt_long</span>
             <h3 className="text-[#2f2f2d] font-headline font-bold text-2xl mb-2">No orders found</h3>
             <p className="text-[#5c5b59] font-medium mb-6">You don't have any orders matching that status.</p>
          </div>
        ) : (
          <div className="bg-[#f3f0ed] rounded-2xl overflow-hidden p-[3px] shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
            <div className="bg-[#ffffff] rounded-[1.4rem] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#e4e2df]/30 text-[#5c5b59]">
                      <th className="px-8 py-5 font-headline font-black text-[11px] tracking-widest uppercase text-[#5a486d]">Order #</th>
                      <th className="px-8 py-5 font-headline font-black text-[11px] tracking-widest uppercase text-[#5a486d]">Customer</th>
                      <th className="px-8 py-5 font-headline font-black text-[11px] tracking-widest uppercase text-[#5a486d]">Date</th>
                      <th className="px-8 py-5 font-headline font-black text-[11px] tracking-widest uppercase text-[#5a486d]">Payment</th>
                      <th className="px-8 py-5 font-headline font-black text-[11px] tracking-widest uppercase text-[#5a486d]">Total</th>
                      <th className="px-8 py-5 font-headline font-black text-[11px] tracking-widest uppercase text-[#5a486d]">Status</th>
                      <th className="px-8 py-5 font-headline font-black text-[11px] tracking-widest uppercase text-[#5a486d]"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f3f0ed]">
                    {filtered.map((order, i) => {
                      const statusConf = STATUS_CONFIG[order.status] || STATUS_CONFIG.PENDING;
                      const currentIdx = STATUS_FLOW.indexOf(order.status);
                      const nextStatus = currentIdx >= 0 && currentIdx < STATUS_FLOW.length - 1 ? STATUS_FLOW[currentIdx + 1] : null;

                      return (
                        <tr key={order.id} className="hover:bg-[#f9cc61]/5 transition-colors group">
                          <td className="px-8 py-6 font-black font-headline text-[#2f2f2d] hover:text-[#b31446] transition-colors">
                             <Link href={`/dashboard/orders/${order.id}`}>#{order.orderNumber.toUpperCase()}</Link>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#f3f0ed] overflow-hidden flex items-center justify-center text-[#9e9d9a]">
                                <span className="material-symbols-outlined">person</span>
                              </div>
                              <div>
                                <p className="font-black text-[#2f2f2d] leading-tight">{order.customerName}</p>
                                <p className="text-xs text-[#66547a] font-bold">{order.customerPhone}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-sm text-[#5c5b59] font-bold">{format(new Date(order.createdAt), "MMM dd, yyyy")}</td>
                          <td className="px-8 py-6">
                            <span className={`text-[10px] font-black px-3 py-1 rounded-full ${order.paymentMethod === "UPI" ? "bg-[#e8d1fe]/50 text-[#57456a]" : "bg-[#f3f0ed] text-[#2f2f2d]"}`}>
                              {order.paymentMethod}
                            </span>
                          </td>
                          <td className="px-8 py-6 font-black font-headline text-[#2f2f2d]">₹{order.total.toLocaleString("en-IN")}</td>
                          <td className="px-8 py-6">
                            <span className={`inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-[10px] font-black tracking-widest uppercase ${statusConf.className}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusConf.dot}`}></span>
                              {statusConf.label}
                            </span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger className="p-2 rounded-full hover:bg-[#f3f0ed] text-[#787774] opacity-0 group-hover:opacity-100 transition-all outline-none">
                                <span className="material-symbols-outlined">more_vert</span>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-52">
                                <DropdownMenuItem>
                                  <Link href={`/dashboard/orders/${order.id}`} className="font-bold text-[#2f2f2d] w-full flex items-center">View Details</Link>
                                </DropdownMenuItem>
                                {nextStatus && (
                                  <DropdownMenuItem onClick={() => updateStatus(order.id, nextStatus)} className="font-bold text-[#2f2f2d]">
                                    Mark as {STATUS_CONFIG[nextStatus]?.label}
                                  </DropdownMenuItem>
                                )}
                                {order.status !== "CANCELLED" && order.status !== "DELIVERED" && (
                                  <DropdownMenuItem className="text-[#b02500] font-bold" onClick={() => updateStatus(order.id, "CANCELLED")}>
                                    Cancel Order
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuSeparator />
                                {whatsappNumber && (
                                  <DropdownMenuItem>
                                    <a href={generateStatusUpdateWhatsAppLink(order.customerPhone, storeName, order.orderNumber, order.status)} target="_blank" className="flex items-center gap-2 font-bold text-[#2E7D32] w-full">
                                      Send WhatsApp Update
                                    </a>
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contextual Bento Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="md:col-span-2 bg-gradient-to-br from-[#745700] to-[#eabe55] p-8 rounded-xl text-[#443100] relative overflow-hidden shadow-[0_8px_32px_rgba(116,87,0,0.15)]">
          <div className="relative z-10 space-y-4">
            <h3 className="text-3xl font-black font-headline">Export Order Insights</h3>
            <p className="max-w-md opacity-90 font-medium">Generate detailed CSV reports of your orders to optimize your logistics and understand customer buying trends.</p>
            <button onClick={exportCSV} className="bg-[#443100] text-[#f9cc61] font-black px-8 py-4 rounded-full hover:bg-[#674d00] transition-colors active:scale-95 text-sm uppercase tracking-widest mt-2 block">Download Report</button>
          </div>
          <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] opacity-20 rotate-12">receipt_long</span>
        </div>
        <div className="bg-[#e8d1fe]/40 p-8 rounded-xl flex flex-col justify-between border border-[#e8d1fe]">
          <div className="space-y-3">
            <span className="material-symbols-outlined text-[#57456a] text-4xl">auto_awesome</span>
            <h4 className="font-black text-[#57456a] text-xl font-headline">Quick Insights</h4>
            <p className="text-sm text-[#614e74] font-medium leading-relaxed">Check your Analytics dashboard regularly to map your best-selling items to your Instagram post schedule.</p>
          </div>
          <Link href="/dashboard/analytics" className="text-[#57456a] font-black text-sm flex items-center gap-2 group mt-4 hover:opacity-80 transition-opacity">
            Explore Analytics
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
      
      {/* Floating Action Button for mobile specific flow */}
      <Link href="/dashboard/orders/new" className="fixed bottom-8 right-8 bg-[#745700] text-[#ffe1a6] p-4 rounded-full shadow-[0_8px_32px_rgba(116,87,0,0.3)] hover:scale-105 active:scale-95 transition-all z-50 flex items-center gap-2 pr-6 border border-[#eabe55]/30">
        <span className="material-symbols-outlined">add</span>
        <span className="font-black tracking-widest text-xs uppercase">Create Order</span>
      </Link>
    </div>
  );
}
