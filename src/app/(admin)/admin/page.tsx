import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";
import { DollarSign, Store, Users, Activity, Eye } from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) redirect("/sign-in");

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  if (user?.role !== "SUPER_ADMIN") {
    redirect("/dashboard");
  }

  // Fetch actual platform data instead of static UI
  const totalStores = await db.store.count();
  const totalUsers = await db.user.count();
  const totalOrders = await db.order.count();
  const stores = await db.store.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true } },
    },
  });

  // Since sum operations might return null, we default to 0
  const ordersTotalResult = await db.order.aggregate({
    _sum: {
      total: true,
    },
    where: {
      status: { in: ["DELIVERED", "SHIPPED", "CONFIRMED"] }
    }
  });
  const totalRevenue = ordersTotalResult._sum.total || 0;

  return (
    <div className="p-4 md:p-10 space-y-10 selection:bg-[#f9cc61] selection:text-[#5b4400] bg-[#f9f6f3] min-h-screen">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-['Clash_Display'] text-3xl font-black text-[#2f2f2d]">Super Admin HQ</h1>
          <p className="text-[#5c5b59] mt-2 font-bold">Platform Overview & Metrics</p>
        </div>
        <div className="flex gap-4">
           <Link href="/dashboard">
              <button className="bg-[#ffffff] border border-[#afadaa]/20 shadow-sm text-[#2f2f2d] px-6 py-2 rounded-full font-bold hover:bg-[#f3f0ed] transition-colors">
                Back to Store
              </button>
           </Link>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#ffffff] p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#745700] flex flex-col justify-between group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#f9cc61]/20 rounded-xl text-[#745700]">
              <Store className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[#5c5b59] font-medium text-sm font-bold uppercase tracking-wider mb-2">Total Tenants</p>
            <h3 className="text-3xl font-black text-[#2f2f2d]">{totalStores} Stores</h3>
          </div>
        </div>

        <div className="bg-[#ffffff] p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#2f2f2d] flex flex-col justify-between group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-gray-100 rounded-xl text-[#2f2f2d]">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[#5c5b59] font-medium text-sm font-bold uppercase tracking-wider mb-2">Registered Users</p>
            <h3 className="text-3xl font-black text-[#2f2f2d]">{totalUsers} Users</h3>
          </div>
        </div>

        <div className="bg-[#ffffff] h-full p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-[#a3003c] flex flex-col justify-between group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#ffc2c9]/40 rounded-xl text-[#a3003c]">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[#5c5b59] font-medium text-sm font-bold uppercase tracking-wider mb-2">Global Orders</p>
            <h3 className="text-3xl font-black text-[#2f2f2d]">{totalOrders}</h3>
          </div>
        </div>

        <div className="bg-[#ffffff] h-full p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-emerald-500 flex flex-col justify-between group transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[#5c5b59] font-medium text-sm font-bold uppercase tracking-wider mb-2">Platform GMV</p>
            <h3 className="text-3xl font-black text-[#2f2f2d]">₹{(totalRevenue).toLocaleString('en-IN')}</h3>
          </div>
        </div>
      </section>

      {/* Recent Tenants Section */}
      <section className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)] border border-[#e4e2df]">
        <div className="p-8 border-b border-[#e4e2df] flex justify-between items-center">
          <div>
            <h4 className="font-['Clash_Display'] text-xl font-black text-[#2f2f2d]">Latest Stores Onboarded</h4>
            <p className="text-sm font-bold text-[#787774]">Real-time tenant activity across the platform</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[11px] font-black uppercase tracking-[0.2em] text-[#787774] border-b border-[#e4e2df] bg-[#f9f6f3]">
                <th className="px-8 py-5">Store Name</th>
                <th className="px-8 py-5">Owner</th>
                <th className="px-8 py-5">Plan</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4e2df]">
              {stores.length > 0 ? (
                stores.map((s) => (
                  <tr key={s.id} className="hover:bg-[#f9f6f3]/80 transition-colors">
                    <td className="px-8 py-5 font-black text-[#2f2f2d]">{s.name}</td>
                    <td className="px-8 py-5 font-bold text-[#5c5b59]">{s.user.email}</td>
                    <td className="px-8 py-5">
                      <span className="bg-[#f9cc61]/20 text-[#745700] px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">{s.plan}</span>
                    </td>
                    <td className="px-8 py-5">
                       {s.onboardingDone ? (
                         <span className="text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">Active</span>
                       ) : (
                         <span className="text-amber-600 bg-amber-100 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">Onboarding</span>
                       )}
                    </td>
                    <td className="px-8 py-5">
                      <Eye className="w-5 h-5 text-gray-400 cursor-pointer" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                   <td colSpan={5} className="py-12 text-center text-[#787774] font-bold text-sm">
                     No stores created yet.
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
