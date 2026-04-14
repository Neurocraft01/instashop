"use client";
import { useEffect, useState } from "react";
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

const VC = {
  primary: "#745700",
  primaryContainer: "#f9cc61",
  secondary: "#b31446",
  secondaryContainer: "#ffc2c9",
  tertiary: "#66547a",
  tertiaryContainer: "#e8d1fe",
  brandDark: "#2B1B3D",
  brandYellow: "#FFD166",
  surface: "#f9f6f3",
  surfaceLow: "#f3f0ed",
  onBackground: "#2f2f2d",
  onSurfaceVariant: "#5c5b59",
};

type DayEntry = { date: string; label: string; revenue: number; orders: number; pageViews: number };
type TopProduct = { name: string; quantity: number; revenue: number };
type Summary = {
  totalRevenue: number; totalOrders: number; avgOrderValue: number;
  totalCustomers: number; totalCustomerSpend: number;
};
type AnalyticsData = {
  summary: Summary;
  dailyChart: DayEntry[];
  topProducts: TopProduct[];
  paymentBreakdown: Record<string, number>;
  statusBreakdown: Record<string, number>;
};

const PAYMENT_COLORS = ["#745700", "#b31446", "#66547a", "#2B1B3D"];
const STATUS_COLORS: Record<string, string> = {
  DELIVERED: "#2e7d32", SHIPPED: "#e65100", CONFIRMED: "#1565C0",
  PENDING: "#920035", CANCELLED: "#787774", PACKED: "#6a1b9a",
};

const CustomTooltip = ({ active, payload, label }: {active?:boolean;payload?:{value:number}[];label?:string}) => {
  if (active && payload && payload.length) {
    return (
      <div className="px-4 py-3 rounded-xl text-sm shadow-lg" style={{ background: VC.brandDark, color: "#fff" }}>
        <p className="font-bold mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i}>₹{p.value.toLocaleString("en-IN")}</p>
        ))}
      </div>
    );
  }
  return null;
};

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeChart, setActiveChart] = useState<"revenue" | "orders" | "views">("revenue");

  useEffect(() => {
    fetch("/api/dashboard/analytics")
      .then((r) => r.json())
      .then((r) => { if (r.success) setData(r.data); })
      .finally(() => setLoading(false));
  }, []);

  const handleExport = () => {
    window.open("/api/dashboard/orders/export", "_blank");
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: VC.primaryContainer, borderTopColor: "transparent" }} />
          <p className="text-sm font-semibold" style={{ color: VC.onSurfaceVariant }}>Loading analytics…</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center">
        <span className="material-symbols-outlined text-5xl mb-4 block" style={{ color: VC.onSurfaceVariant }}>analytics</span>
        <p style={{ color: VC.onSurfaceVariant }}>No analytics data yet. Start getting orders to see your stats!</p>
      </div>
    );
  }

  const { summary, dailyChart, topProducts, paymentBreakdown, statusBreakdown } = data;

  const paymentPie = Object.entries(paymentBreakdown).map(([name, value]) => ({ name, value }));
  const statusPie = Object.entries(statusBreakdown).map(([name, value]) => ({ name, value }));

  const statCards = [
    { icon: "payments", label: "Total Revenue (30d)", value: `₹${summary.totalRevenue.toLocaleString("en-IN")}`, bg: VC.primaryContainer, fg: VC.primary },
    { icon: "shopping_bag", label: "Total Orders (30d)", value: summary.totalOrders.toString(), bg: "#e8d1fe", fg: VC.tertiary },
    { icon: "receipt", label: "Avg Order Value", value: `₹${Math.round(summary.avgOrderValue).toLocaleString("en-IN")}`, bg: VC.secondaryContainer, fg: VC.secondary },
    { icon: "people", label: "Total Customers", value: summary.totalCustomers.toString(), bg: "#fff3e0", fg: "#e65100" },
  ];

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: VC.tertiary }}>Last 30 Days</p>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>Analytics</h1>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform"
          style={{ background: VC.primaryContainer, color: VC.primary }}>
          <span className="material-symbols-outlined text-base">download</span>
          Export CSV
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((s) => (
          <div key={s.label} className="p-6 rounded-2xl flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-200"
            style={{ background: s.bg }}>
            <span className="material-symbols-outlined text-2xl" style={{ color: s.fg }}>{s.icon}</span>
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: s.fg }}>{s.label}</div>
            <div className="text-2xl font-black" style={{ color: s.fg }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <div className="rounded-2xl p-6" style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-black" style={{ color: VC.brandDark }}>Revenue & Orders Trend</h2>
          <div className="flex gap-2">
            {(["revenue", "orders", "views"] as const).map((t) => (
              <button key={t} onClick={() => setActiveChart(t)}
                className="px-4 py-2 rounded-full text-xs font-bold capitalize transition-all"
                style={{
                  background: activeChart === t ? VC.brandDark : VC.surfaceLow,
                  color: activeChart === t ? "#fff" : VC.onSurfaceVariant,
                }}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={dailyChart} margin={{ top: 0, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={VC.primaryContainer} stopOpacity={0.8} />
                <stop offset="95%" stopColor={VC.primaryContainer} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={VC.surfaceLow} />
            <XAxis dataKey="label" tick={{ fontSize: 10, fill: VC.onSurfaceVariant }} tickLine={false} axisLine={false} interval={4} />
            <YAxis tick={{ fontSize: 10, fill: VC.onSurfaceVariant }} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey={activeChart === "revenue" ? "revenue" : activeChart === "orders" ? "orders" : "pageViews"}
              stroke={VC.primary}
              strokeWidth={2.5}
              fill="url(#grad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Top Products */}
        <div className="md:col-span-1 rounded-2xl p-6" style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <h2 className="text-lg font-black mb-4" style={{ color: VC.brandDark }}>Top Products</h2>
          {topProducts.length === 0 ? (
            <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>No data yet</p>
          ) : (
            <div className="space-y-3">
              {topProducts.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                    style={{ background: VC.primaryContainer, color: VC.primary }}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate" style={{ color: VC.onBackground }}>{p.name}</p>
                    <p className="text-xs" style={{ color: VC.onSurfaceVariant }}>{p.quantity} units · ₹{p.revenue.toLocaleString("en-IN")}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Payment Breakdown */}
        <div className="rounded-2xl p-6" style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <h2 className="text-lg font-black mb-4" style={{ color: VC.brandDark }}>Payment Methods</h2>
          {paymentPie.length === 0 ? (
            <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>No data yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={paymentPie} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false} fontSize={11}>
                  {paymentPie.map((_, i) => <Cell key={i} fill={PAYMENT_COLORS[i % PAYMENT_COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Order Status */}
        <div className="rounded-2xl p-6" style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <h2 className="text-lg font-black mb-4" style={{ color: VC.brandDark }}>Order Status</h2>
          {statusPie.length === 0 ? (
            <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>No data yet</p>
          ) : (
            <div className="space-y-2">
              {statusPie.map((s) => {
                const total = statusPie.reduce((a, b) => a + b.value, 0);
                const pct = Math.round((s.value / total) * 100);
                return (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span style={{ color: STATUS_COLORS[s.name] ?? VC.onSurfaceVariant }}>{s.name}</span>
                      <span style={{ color: VC.onSurfaceVariant }}>{s.value} ({pct}%)</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: VC.surfaceLow }}>
                      <div className="h-2 rounded-full transition-all duration-700"
                        style={{ width: `${pct}%`, background: STATUS_COLORS[s.name] ?? VC.primary }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
