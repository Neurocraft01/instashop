"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const STATUS_COLORS: Record<string, string> = {
  PENDING: "#f9cc61", CONFIRMED: "#60a5fa", PACKED: "#fb923c",
  SHIPPED: "#a78bfa", DELIVERED: "#22c55e", CANCELLED: "#f87171", REFUNDED: "#94a3b8",
};
const STATUS_LABELS: Record<string, string> = {
  PENDING: "Pending", CONFIRMED: "Confirmed", PACKED: "Packed",
  SHIPPED: "Shipped", DELIVERED: "Delivered", CANCELLED: "Cancelled", REFUNDED: "Refunded",
};

type Props = {
  stats: {
    thisMonthRevenue: number; lastMonthRevenue: number;
    thisMonthOrders: number; lastMonthOrders: number;
    totalCustomers: number; newCustomers: number;
    revenueChange: number; ordersChange: number; avgOrderValue: number;
  };
  chartData: { date: string; revenue: number; orders: number }[];
  statusBreakdown: { status: string; count: number }[];
  topProducts: { productId: string; productName: string; orders: number; revenue: number }[];
  plan: string;
};

export function AnalyticsPageClient({ stats, chartData, statusBreakdown, topProducts, plan }: Props) {
  return (
    <div className="space-y-10 selection:bg-[#f9cc61] selection:text-[#5b4400]">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden bg-[#2B1B3D] rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
        <div className="z-10 max-w-xl">
          <h2 className="font-headline text-4xl font-black text-[#FFD166] leading-tight">Welcome back! ☀️</h2>
          <p className="text-slate-300 text-lg mt-4 font-body">Your shop has generated <span className="text-[#FFD166] font-bold">₹{stats.thisMonthRevenue.toLocaleString("en-IN")}</span> this month. Keep up the momentum with these curated insights.</p>
          <div className="mt-8 flex gap-4">
            <button className="bg-[#FFD166] text-[#2B1B3D] px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95">Explore Tips</button>
            <button className="border border-slate-500 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">Dismiss</button>
          </div>
        </div>
        <div className="relative w-full md:w-1/3 aspect-square max-w-[240px]">
          <div className="absolute inset-0 bg-[#FFD166] rounded-full opacity-10 animate-pulse"></div>
          <img alt="Success Illustration" className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform group-hover:scale-105 duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GTly6xBJUG8l93-Grb7BJv--p10vjyipFFTwOvBuusvKGI2IW8o_s_9g_aYQJg7QB9nsWjcDGu1r27OscT7F7Y-EBtDZSIC5WAINxR4nO7b3dLTP6jelVpttBxdiQKaiTmOlaWriY2ynl5Ahhm62DHn8sdl9yC16ISgyn79zvpKWqL2fw_poYXPXPC2izDQqNk87g5Z3YIGn8BJP0WLOfsPGbRHK6sm49PxHB3DBFRR3g3N6Ac_zAXDgCx_Ujjc1rKOwlcqRpyCx"/>
        </div>
        {/* Decorative background elements */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#f9cc61] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#f9cc61] opacity-5 rounded-full blur-3xl"></div>
      </section>

      {/* Bento Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue */}
        <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#745700] group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#f9cc61]/20 rounded-xl text-[#745700]">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className={`${stats.revenueChange >= 0 ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"} font-bold text-sm px-2 py-1 rounded-md`}>
              {stats.revenueChange >= 0 ? "+" : ""}{stats.revenueChange.toFixed(1)}%
            </span>
          </div>
          <p className="text-[#5c5b59] font-medium mt-6 text-sm uppercase tracking-wider">Total Revenue</p>
          <h3 className="text-3xl font-black text-[#2f2f2d] mt-2">₹{stats.thisMonthRevenue.toLocaleString("en-IN")}</h3>
        </div>

        {/* Orders */}
        <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#b31446] group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#ffc2c9]/20 rounded-xl text-[#b31446]">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <span className={`${stats.ordersChange >= 0 ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"} font-bold text-sm px-2 py-1 rounded-md`}>
              {stats.ordersChange >= 0 ? "+" : ""}{stats.ordersChange.toFixed(1)}%
            </span>
          </div>
          <p className="text-[#5c5b59] font-medium mt-6 text-sm uppercase tracking-wider">Total Orders</p>
          <h3 className="text-3xl font-black text-[#2f2f2d] mt-2">{stats.thisMonthOrders}</h3>
        </div>

        {/* Customers */}
        <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#66547a] group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#e8d1fe]/20 rounded-xl text-[#66547a]">
              <span className="material-symbols-outlined">group</span>
            </div>
            <span className="text-[#57456a] font-bold text-xs bg-[#e8d1fe]/40 px-2 py-1 rounded-md">New: {stats.newCustomers}</span>
          </div>
          <p className="text-[#5c5b59] font-medium mt-6 text-sm uppercase tracking-wider">Total Customers</p>
          <h3 className="text-3xl font-black text-[#2f2f2d] mt-2">{stats.totalCustomers}</h3>
        </div>

        {/* AOV */}
        <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#745700] group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#f9cc61]/20 rounded-xl text-[#745700]">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
          </div>
          <p className="text-[#5c5b59] font-medium mt-6 text-sm uppercase tracking-wider">Avg Order Value</p>
          <h3 className="text-3xl font-black text-[#2f2f2d] mt-2">₹{stats.avgOrderValue.toFixed(0)}</h3>
        </div>
      </section>

      {/* Charts & Visuals */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-[#ffffff] rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="font-headline text-xl font-bold">Revenue Trend</h4>
              <p className="text-sm text-[#5c5b59]">Performance over the last 30 days</p>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2 relative -ml-4">
             <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="rev30" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#745700" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#745700" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tickFormatter={(d) => format(new Date(d), "dd MMM")} tick={{ fontSize: 10, fill: "#9e9d9a" }} interval={5} />
                  <YAxis tickFormatter={(v) => `₹${v}`} tick={{ fontSize: 10, fill: "#9e9d9a" }} width={60} />
                  <Tooltip formatter={(v: any) => [`₹${Number(v).toLocaleString("en-IN")}`, "Revenue"]} labelFormatter={(l) => format(new Date(l), "dd MMM")} />
                  <Area type="monotone" dataKey="revenue" stroke="#745700" strokeWidth={2} fill="url(#rev30)" />
                </AreaChart>
              </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#ffffff] rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex flex-col">
          <h4 className="font-headline text-xl font-bold mb-8">Order Status</h4>
          <div className="relative flex-1 flex flex-col items-center justify-center">
            {statusBreakdown.length > 0 ? (
               <div className="w-full h-full -ml-4">
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie data={statusBreakdown} dataKey="count" nameKey="status" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2}>
                        {statusBreakdown.map((s) => <Cell key={s.status} fill={STATUS_COLORS[s.status] || "#94a3b8"} />)}
                      </Pie>
                      <Tooltip formatter={(v, n) => [v, STATUS_LABELS[n as string] || n]} />
                      <Legend formatter={(v) => STATUS_LABELS[v as string] || v} wrapperStyle={{ fontSize: "11px" }} />
                    </PieChart>
                  </ResponsiveContainer>
               </div>
              ) : (
                <div className="h-[220px] flex items-center justify-center text-gray-400 text-sm">No order data yet</div>
              )}
          </div>
        </div>
      </section>
      
      {/* Top Products */}
      <section className="bg-[#ffffff] rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
        <div className="p-8 border-b border-[#e4e2df] flex justify-between items-center">
          <div>
            <h4 className="font-headline text-xl font-bold">Top Products</h4>
            <p className="text-sm text-[#5c5b59]">Based on total revenue generation</p>
          </div>
        </div>
        <div className="p-8">
           {topProducts.length === 0 ? (
                <div className="h-20 flex items-center justify-center text-[#5c5b59] text-sm">
                  No product sales data yet
                </div>
              ) : (
                <div className="space-y-6">
                  {topProducts.map((p, i) => {
                    const maxRevenue = topProducts[0]?.revenue || 1;
                    const pct = (p.revenue / maxRevenue) * 100;
                    return (
                      <div key={p.productId}>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#f9cc61] text-[#5b4400] text-xs font-bold flex items-center justify-center">
                              {i + 1}
                            </span>
                            <span className="text-[#2f2f2d] font-bold truncate max-w-[250px]">{p.productName}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-black text-[#2f2f2d]">₹{p.revenue.toLocaleString("en-IN")}</p>
                            <p className="text-xs text-[#5c5b59]">{p.orders} orders</p>
                          </div>
                        </div>
                        <div className="h-2 bg-[#dfdcd9] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#745700] rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
        </div>
      </section>
    </div>
  );
}
