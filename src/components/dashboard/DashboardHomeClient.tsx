"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart, Package, TrendingUp, DollarSign,
  CheckCircle2, Circle, ArrowRight, Plus, Link2,
  AlertTriangle, BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { OrderStatus, PlanType, PaymentMethod } from "@prisma/client";
import { PLAN_LIMITS } from "@/types";
import { format } from "date-fns";

const STATUS_COLORS: Record<string, string> = {
  PENDING: "#fbbf24",
  CONFIRMED: "#60a5fa",
  PACKED: "#fb923c",
  SHIPPED: "#a78bfa",
  DELIVERED: "#34d399",
  CANCELLED: "#f87171",
  REFUNDED: "#94a3b8",
};

const STATUS_LABELS: Record<string, string> = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  PACKED: "Packed",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
  REFUNDED: "Refunded",
};

type Props = {
  store: { id: string; name: string; slug: string; plan: PlanType; whatsappNumber: string | null };
  stats: { todayOrders: number; pendingOrders: number; monthRevenue: number; totalProducts: number };
  recentOrders: {
    id: string; orderNumber: string; customerName: string;
    total: number; status: OrderStatus; paymentMethod: PaymentMethod;
    createdAt: string; firstItem?: string;
  }[];
  statusBreakdown: { status: string; count: number }[];
  revenueChart: { date: string; revenue: number }[];
  onboardingChecklist: {
    storeCreated: boolean; hasProducts: boolean; hasOrders: boolean; hasWhatsapp: boolean;
  };
};

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export function DashboardHomeClient({
  store, stats, recentOrders, statusBreakdown, revenueChart, onboardingChecklist,
}: Props) {
  const planLimits = PLAN_LIMITS[store.plan];
  const showOnboarding = !onboardingChecklist.hasOrders;

  return (
    <div className="p-4 md:p-10 space-y-10 selection:bg-[#f9cc61] selection:text-[#5b4400]">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden bg-[#2B1B3D] rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 group shadow-[0_8px_32px_rgba(255,209,102,0.1)]">
        <div className="z-10 max-w-xl">
          <h2 className="font-['Clash_Display'] text-3xl md:text-4xl font-black text-[#FFD166] leading-tight">
            Welcome back to {store.name}! ☀️
          </h2>
          <p className="text-slate-300 text-lg mt-4 font-['Satoshi']">
            {showOnboarding 
              ? "Let's complete your store setup so you can start receiving orders right away."
              : `Your shop has generated ₹${stats.monthRevenue.toLocaleString('en-IN')} this month. Keep up the momentum!`
            }
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {showOnboarding ? (
              <Link href="/dashboard/settings/store">
                <button className="bg-[#FFD166] text-[#2B1B3D] px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(255,209,102,0.3)]">
                  Complete Setup
                </button>
              </Link>
            ) : (
              <Link href={`/store/${store.slug}`} target="_blank">
                <button className="bg-[#FFD166] text-[#2B1B3D] px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(255,209,102,0.3)] flex items-center gap-2">
                  <Link2 className="w-5 h-5" /> View Public Store
                </button>
              </Link>
            )}
            <Link href="/dashboard/products/new">
              <button className="border border-slate-500 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <Plus className="w-5 h-5" /> Add Product
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/3 aspect-square max-w-[240px]">
          <div className="absolute inset-0 bg-[#FFD166] rounded-full opacity-10 animate-pulse"></div>
          <img 
            alt="Success Illustration" 
            className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform group-hover:scale-105 duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GTly6xBJUG8l93-Grb7BJv--p10vjyipFFTwOvBuusvKGI2IW8o_s_9g_aYQJg7QB9nsWjcDGu1r27OscT7F7Y-EBtDZSIC5WAINxR4nO7b3dLTP6jelVpttBxdiQKaiTmOlaWriY2ynl5Ahhm62DHn8sdl9yC16ISgyn79zvpKWqL2fw_poYXPXPC2izDQqNk87g5Z3YIGn8BJP0WLOfsPGbRHK6sm49PxHB3DBFRR3g3N6Ac_zAXDgCx_Ujjc1rKOwlcqRpyCx" 
          />
        </div>
        {/* Decorative background elements */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FFD166] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#FFD166] opacity-5 rounded-full blur-3xl"></div>
      </section>

      {/* Bento Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue Card */}
        <div className="bg-[#ffffff] p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#745700] hover:border-[#f9cc61] flex flex-col justify-between group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#f9cc61]/20 rounded-xl text-[#745700]">
              <span className="material-symbols-outlined">payments</span>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[#5c5b59] font-medium text-sm border-[#f9cc61] uppercase tracking-wider mb-2">Total Revenue (Month)</p>
            <h3 className="text-3xl font-black text-[#2f2f2d]">₹{stats.monthRevenue.toLocaleString('en-IN')}</h3>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-[#ffffff] p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#a3003c] flex flex-col justify-between group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#ffc2c9]/40 rounded-xl text-[#a3003c]">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            {stats.todayOrders > 0 && <span className="text-[#920035] font-bold text-xs bg-[#ffc2c9] px-2 py-1 rounded-full uppercase tracking-widest">+{stats.todayOrders} Today</span>}
          </div>
          <div className="mt-8">
            <p className="text-[#5c5b59] font-medium text-sm uppercase tracking-wider mb-2">Orders Today</p>
            <h3 className="text-3xl font-black text-[#2f2f2d]">{stats.todayOrders}</h3>
          </div>
        </div>

        {/* Pending Orders */}
        <Link href="/dashboard/orders?status=PENDING">
          <div className="bg-[#ffffff] h-full p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-amber-500 flex flex-col justify-between group transition-all hover:-translate-y-1 cursor-pointer hover:bg-amber-50">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              {stats.pendingOrders > 0 && <span className="text-amber-800 font-bold text-xs bg-amber-200 px-2 py-1 rounded-full uppercase tracking-widest">Action Needed</span>}
            </div>
            <div className="mt-8">
              <p className="text-[#5c5b59] font-medium text-sm uppercase tracking-wider mb-2">Pending Orders</p>
              <h3 className="text-3xl font-black text-[#2f2f2d]">{stats.pendingOrders}</h3>
            </div>
          </div>
        </Link>

        {/* Total Products */}
        <Link href="/dashboard/products">
          <div className="bg-[#ffffff] h-full p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#66547a] flex flex-col justify-between group transition-all hover:-translate-y-1 cursor-pointer hover:bg-[#e8d1fe]/20">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-[#e8d1fe] rounded-xl text-[#433356]">
                <span className="material-symbols-outlined">category</span>
              </div>
              <span className="text-[#66547a] text-xs font-bold uppercase tracking-widest hover:underline">Manage</span>
            </div>
            <div className="mt-8">
              <p className="text-[#5c5b59] font-medium text-sm uppercase tracking-wider mb-2">Total Products</p>
              <h3 className="text-3xl font-black text-[#2f2f2d]">{stats.totalProducts}</h3>
            </div>
          </div>
        </Link>
      </section>

      {/* Charts & Visuals */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Revenue Trend */}
        <div className="lg:col-span-2 bg-[#ffffff] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)] border border-[#e4e2df]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="font-['Clash_Display'] text-xl font-black text-[#2f2f2d]">Revenue Trend</h4>
              <p className="text-sm font-bold text-[#787774]">Performance over the last 7 days</p>
            </div>
            <Link href="/dashboard/analytics">
              <button className="bg-[#f3f0ed] hover:bg-[#e4e2df] border-none rounded-full text-sm font-bold px-4 py-2 transition-colors flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Full Report
              </button>
            </Link>
          </div>
          
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueChart}>
                <defs>
                  <linearGradient id="revenueGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f9cc61" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#f9cc61" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eae8e4" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(d) => format(new Date(d), "dd MMM")}
                  tick={{ fontSize: 11, fill: "#787774", fontWeight: 700 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tickFormatter={(v) => `₹${v}`}
                  tick={{ fontSize: 11, fill: "#787774", fontWeight: 700 }}
                  axisLine={false}
                  tickLine={false}
                  width={60}
                />
                <Tooltip 
                  formatter={(v: any) => [`₹${Number(v).toLocaleString("en-IN")}`, "Revenue"]}
                  labelFormatter={(l) => format(new Date(l), "dd MMM yyyy")}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#745700" 
                  strokeWidth={4} 
                  fill="url(#revenueGrad2)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Status Donut */}
        <div className="bg-[#ffffff] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)] border border-[#e4e2df] flex flex-col">
          <h4 className="font-['Clash_Display'] text-xl font-black mb-8 text-[#2f2f2d]">Order Status</h4>
          <div className="relative flex-1 flex flex-col items-center justify-center">
            {statusBreakdown.length > 0 ? (
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={statusBreakdown}
                    dataKey="count"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={90}
                    stroke="none"
                    paddingAngle={4}
                  >
                    {statusBreakdown.map((entry) => (
                      <Cell key={entry.status} fill={STATUS_COLORS[entry.status] || "#94a3b8"} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(v, n) => [v, STATUS_LABELS[n as string] || n]} 
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[220px] flex items-center justify-center text-[#787774] font-bold text-sm">
                No active orders found.
              </div>
            )}
            
            <div className="mt-6 w-full space-y-3">
              {statusBreakdown.map(entry => {
                const total = statusBreakdown.reduce((acc, curr) => acc + curr.count, 0);
                const percent = Math.round((entry.count / total) * 100);
                return (
                  <div key={entry.status} className="flex justify-between items-center text-sm font-bold">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: STATUS_COLORS[entry.status] || '#94a3b8' }}></div>
                      <span className="text-[#5c5b59]">{STATUS_LABELS[entry.status] || entry.status}</span>
                    </div>
                    <span className="text-[#2f2f2d]">{percent}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Orders Table */}
      <section className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)] border border-[#e4e2df]">
        <div className="p-8 border-b border-[#e4e2df] flex justify-between items-center">
          <div>
            <h4 className="font-['Clash_Display'] text-xl font-black text-[#2f2f2d]">Recent Orders</h4>
            <p className="text-sm font-bold text-[#787774]">Real-time update of your latest sales</p>
          </div>
          <Link href="/dashboard/orders">
            <button className="bg-[#f3f0ed] hover:bg-[#e4e2df] px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 tracking-widest text-xs uppercase text-[#2f2f2d]">
              View All
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[11px] font-black uppercase tracking-[0.2em] text-[#787774] border-b border-[#e4e2df] bg-[#f9f6f3]">
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Order ID</th>
                <th className="px-8 py-5">Amount</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4e2df]">
              {recentOrders.length > 0 ? (
                recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#f9f6f3]/80 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#f9cc61]/20 flex items-center justify-center text-[#745700] font-black font-headline">
                          {order.customerName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-black text-[#2f2f2d]">{order.customerName}</p>
                          {order.firstItem && <p className="text-xs font-bold text-[#787774] max-w-[200px] truncate">{order.firstItem}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 font-mono text-sm font-bold tracking-tight text-[#5c5b59]">{order.orderNumber}</td>
                    <td className="px-8 py-5 font-black text-[#2f2f2d]">₹{order.total.toLocaleString("en-IN")}</td>
                    <td className="px-8 py-5">
                      <span 
                        className="px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest shadow-sm border"
                        style={{
                           backgroundColor: STATUS_COLORS[order.status] ? STATUS_COLORS[order.status] + '20' : '#f1f5f9',
                           color: STATUS_COLORS[order.status] || '#475569',
                           borderColor: STATUS_COLORS[order.status] ? STATUS_COLORS[order.status] + '40' : '#e2e8f0',
                        }}
                      >
                        {STATUS_LABELS[order.status] || order.status}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <Link href={`/dashboard/orders/${order.id}`}>
                        <button className="text-[#787774] hover:text-[#745700] transition-colors p-2 bg-[#f3f0ed] rounded-full hover:shadow-sm">
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                   <td colSpan={5} className="py-12 text-center text-[#787774] font-bold text-sm">
                     No orders yet. Keep pushing!
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
