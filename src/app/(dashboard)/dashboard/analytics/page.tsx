import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { SellerSidebar } from '@/components/vibrant/VibrantLayout';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', primaryFixedDim: '#eabe55',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', secondaryContainer: '#ffc2c9', onSecondaryContainer: '#920035',
  tertiary: '#66547a', tertiaryContainer: '#e8d1fe', onTertiaryContainer: '#57456a',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainer: '#eae8e4', surfaceContainerHigh: '#e4e2df',
  background: '#f9f6f3', onBackground: '#2f2f2d', onSurface: '#2f2f2d',
  onSurfaceVariant: '#5c5b59', outline: '#787774', outlineVariant: '#afadaa',
};

export default async function StoreAnalyticsPage() {
  const session = await auth();
  if (!session?.user) redirect('/sign-in');

  return (
    <div className="min-h-screen flex" style={{ background: VC.background, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <SellerSidebar activeItem="Analytics" />

      <main className="flex-1 flex flex-col">
        {/* Top Nav */}
        <header className="sticky top-0 z-50 flex justify-between items-center w-full px-8 py-4"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(255,209,102,0.15)' }}>
          <div className="flex items-center gap-6">
            <div className="md:hidden"><span className="material-symbols-outlined" style={{ color: VC.onBackground }}>menu</span></div>
            <div className="hidden md:flex gap-6">
              {['Storefront', 'Inbox', 'Help'].map((l) => (
                <Link key={l} href="#" className="hover:opacity-70 transition-opacity" style={{ color: VC.onSurfaceVariant }}>{l}</Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input className="pl-10 pr-4 py-2 rounded-full border-none text-sm w-64 outline-none"
                style={{ background: VC.surfaceContainer, color: VC.onBackground }}
                placeholder="Search analytics..." type="text" />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2" style={{ color: VC.onSurfaceVariant }}>search</span>
            </div>
            <button className="p-2 rounded-full hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" style={{ color: VC.onSurfaceVariant }}>notifications</span>
            </button>
            <button className="p-2 rounded-full hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" style={{ color: VC.onSurfaceVariant }}>account_circle</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
          {/* Hero Header */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-black tracking-tighter leading-none mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                Performance<br />Insights
              </h1>
              <p className="text-lg max-w-md" style={{ color: VC.onSurfaceVariant }}>Your shop&apos;s radiant growth, visualized in real-time. Everything is looking golden today.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                style={{ background: VC.secondaryContainer, color: VC.onSecondaryContainer }}>
                <span className="material-symbols-outlined">download</span>
                Export Report
              </button>
              <button className="px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                style={{ background: VC.primary, color: '#fff1da', boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                Boost Sales
              </button>
            </div>
          </section>

          {/* Metrics Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Revenue */}
            <div className="p-8 rounded-xl relative overflow-hidden group" style={{ background: VC.surfaceContainerLowest }}>
              <div className="absolute -right-4 -top-4 w-32 h-32 rounded-full blur-3xl group-hover:scale-125 transition-transform pointer-events-none" style={{ background: `${VC.primaryFixedDim}33` }} />
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: VC.tertiary }}>Total Revenue</p>
              <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>₹1,28,492</h2>
              <div className="flex items-center gap-2 font-bold" style={{ color: VC.primary }}>
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span>+14.2% from last month</span>
              </div>
            </div>

            {/* Orders */}
            <div className="p-8 rounded-xl border group" style={{ background: VC.surfaceContainerLow, borderColor: `${VC.outlineVariant}20` }}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: VC.tertiary }}>Total Orders</p>
              <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>3,842</h2>
              <div className="flex items-center gap-2 font-bold" style={{ color: VC.secondary }}>
                <span className="material-symbols-outlined text-sm">shopping_cart</span>
                <span>842 new today</span>
              </div>
            </div>

            {/* Conversion */}
            <div className="p-8 rounded-xl group" style={{ background: VC.primaryContainer, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: VC.onPrimaryContainer }}>Conversion Rate</p>
              <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onPrimaryContainer }}>4.82%</h2>
              <div className="flex items-center gap-2 font-bold" style={{ color: `${VC.onPrimaryContainer}b3` }}>
                <span className="material-symbols-outlined text-sm">ads_click</span>
                <span>Above industry avg (2.1%)</span>
              </div>
            </div>
          </section>

          {/* Charts */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Trend */}
            <div className="lg:col-span-2 p-8 rounded-xl space-y-6" style={{ background: VC.surfaceContainerLowest }}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Revenue Trend</h3>
                <select className="rounded-lg text-sm px-4 py-2 border-none outline-none" style={{ background: VC.surfaceContainer, color: VC.onBackground }}>
                  <option>Last 30 Days</option>
                  <option>Last 6 Months</option>
                  <option>Year to Date</option>
                </select>
              </div>
              {/* Bar Chart */}
              <div className="h-64 flex items-end justify-between gap-1">
                {[33, 50, 40, 75, 50, 66, 80, 100].map((h, i) => (
                  <div key={i} className="w-full rounded-t-lg relative group/bar transition-colors cursor-pointer"
                    style={{
                      height: `${h}%`,
                      background: i === 7 ? VC.primaryContainer : `${VC.primaryContainer}33`,
                    }}>
                    {i === 7 && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap"
                        style={{ background: VC.onBackground }}>₹1.2L</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs font-bold px-2" style={{ color: VC.onSurfaceVariant }}>
                <span>WK 1</span><span>WK 2</span><span>WK 3</span><span>WK 4</span>
              </div>
            </div>

            {/* Order Status Donut */}
            <div className="p-8 rounded-xl flex flex-col justify-between" style={{ background: VC.surfaceContainerHigh }}>
              <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Order Status</h3>
              <div className="relative flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-[18px] flex items-center justify-center relative" style={{ borderColor: VC.primaryContainer }}>
                  <div className="absolute inset-0 border-[18px] rounded-full rotate-45 border-t-transparent border-l-transparent" style={{ borderColor: VC.secondary }} />
                  <div className="absolute inset-0 border-[18px] rounded-full -rotate-12 border-r-transparent border-b-transparent border-l-transparent" style={{ borderColor: VC.tertiary }} />
                  <div className="text-center">
                    <p className="text-3xl font-black" style={{ color: VC.onBackground }}>92%</p>
                    <p className="text-xs font-bold" style={{ color: VC.onSurfaceVariant }}>Success Rate</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Delivered', color: VC.primary },
                  { label: 'Processing', color: VC.secondary },
                  { label: 'Returned', color: VC.tertiary },
                  { label: 'Cancelled', color: VC.outlineVariant },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                    <span className="text-sm font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Top Selling Products */}
          <section className="rounded-xl p-8 overflow-hidden" style={{ background: VC.surfaceContainerLow }}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Top Selling Products</h3>
              <Link href="/dashboard/products" className="font-bold hover:underline" style={{ color: VC.primary }}>View All Inventory</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs uppercase tracking-widest" style={{ color: VC.onSurfaceVariant }}>
                    <th className="pb-6">Product</th>
                    <th className="pb-6">Price</th>
                    <th className="pb-6">Sold</th>
                    <th className="pb-6">Revenue</th>
                    <th className="pb-6">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: `${VC.outlineVariant}20` }}>
                  {[
                    { name: 'Luxe Chrono White', cat: 'Tech & Wearables', price: '₹24,990', sold: 842, revenue: '₹2,10,41,580', rating: 4.9 },
                    { name: 'Sonic Sprint Elite', cat: 'Footwear', price: '₹12,500', sold: 1204, revenue: '₹1,50,50,000', rating: 4.7 },
                    { name: 'Amber Glow Shades', cat: 'Accessories', price: '₹7,100', sold: 2110, revenue: '₹1,49,81,000', rating: 4.8 },
                  ].map((p) => (
                    <tr key={p.name} className="group hover:opacity-80 transition-opacity">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl overflow-hidden" style={{ background: VC.primaryContainer }}>
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="material-symbols-outlined" style={{ color: VC.onPrimaryFixed }}>inventory</span>
                            </div>
                          </div>
                          <div>
                            <p className="font-bold" style={{ color: VC.onBackground }}>{p.name}</p>
                            <p className="text-xs" style={{ color: VC.onSurfaceVariant }}>{p.cat}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 font-medium" style={{ color: VC.onBackground }}>{p.price}</td>
                      <td className="py-4 font-medium" style={{ color: VC.onBackground }}>{p.sold}</td>
                      <td className="py-4 font-black" style={{ color: VC.onBackground }}>{p.revenue}</td>
                      <td className="py-4">
                        <div className="flex items-center" style={{ color: '#664c00' }}>
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="ml-1 font-bold">{p.rating}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center group hover:scale-110 transition-all z-50"
        style={{ background: VC.primary, color: '#fff1da', boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
        <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
        <div className="absolute right-20 py-2 px-4 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
          style={{ background: VC.onBackground, color: '#ffffff' }}>New Campaign</div>
      </button>
    </div>
  );
}
