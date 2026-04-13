import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { AdminSidebar } from '@/components/vibrant/VibrantLayout';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', primaryDim: '#664c00',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', secondaryContainer: '#ffc2c9', onSecondaryContainer: '#920035',
  tertiary: '#66547a', tertiaryContainer: '#e8d1fe', onTertiaryContainer: '#57456a',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainer: '#eae8e4', surfaceContainerHigh: '#e4e2df',
  surfaceContainerHighest: '#dfdcd9',
  background: '#f9f6f3', onBackground: '#2f2f2d', onSurface: '#2f2f2d',
  onSurfaceVariant: '#5c5b59', outline: '#787774', outlineVariant: '#afadaa',
  brandDark: '#2B1B3D', brandYellow: '#FFD166',
};

export default async function PlatformAnalyticsPage() {
  const session = await auth();
  if (!session?.user) redirect('/sign-in');
  // Could add SUPER_ADMIN role check here

  return (
    <div style={{ minHeight: '100vh', background: VC.background, fontFamily: 'Plus Jakarta Sans, sans-serif', color: VC.onBackground }}>
      <div className="flex min-h-screen">
        {/* Header */}
        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between px-10 py-5 border-b"
            style={{ background: VC.surfaceContainerLow, borderColor: `${VC.outlineVariant}1A` }}>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4" style={{ color: VC.onSurface }}>
                <div className="size-6" style={{ color: VC.primary }}>
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" />
                  </svg>
                </div>
                <h2 className="text-xl font-black leading-tight tracking-tight" style={{ fontFamily: 'Epilogue, sans-serif' }}>SuperAdmin</h2>
              </div>
              <div className="flex h-12 rounded-xl" style={{ background: `${VC.surfaceContainerHighest}4D`, width: '256px' }}>
                <div className="flex items-center pl-4 rounded-l-xl" style={{ color: VC.onSurfaceVariant }}>
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="flex-1 bg-transparent px-4 text-base outline-none border-none placeholder:opacity-60"
                  placeholder="Search insights..." style={{ color: VC.onSurface }} />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-3">
                <button className="rounded-full size-11 flex items-center justify-center hover:opacity-70 transition" style={{ background: `${VC.surfaceContainerHighest}66`, color: VC.onSurface }}>
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="rounded-full size-11 flex items-center justify-center hover:opacity-70 transition" style={{ background: `${VC.surfaceContainerHighest}66`, color: VC.onSurface }}>
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </div>
              <div className="size-11 rounded-full border-2 flex items-center justify-center" style={{ background: VC.primaryContainer, borderColor: VC.primaryContainer }}>
                <span className="material-symbols-outlined" style={{ color: VC.onPrimaryFixed }}>person</span>
              </div>
            </div>
          </header>

          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="w-72 p-8 flex flex-col gap-10" style={{ background: VC.surfaceContainerHigh }}>
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-lg" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>SaaS Engine</h1>
                <p className="text-sm font-medium tracking-wide uppercase" style={{ color: VC.onSurfaceVariant }}>Global Control</p>
              </div>
              <nav className="flex flex-col gap-2">
                {[
                  { icon: 'grid_view', label: 'Dashboard', href: '/admin', active: false },
                  { icon: 'storefront', label: 'Sellers', href: '/admin/stores', active: false },
                  { icon: 'monetization_on', label: 'Revenue', href: '/admin/revenue', active: false },
                  { icon: 'bar_chart', label: 'Analytics', href: '/admin/analytics', active: true },
                  { icon: 'hub', label: 'Network', href: '/admin/network', active: false },
                ].map((item) => (
                  <Link key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl font-bold text-sm transition-colors"
                    style={{
                      background: item.active ? VC.primaryContainer : 'transparent',
                      color: item.active ? VC.onPrimaryContainer : VC.onSurfaceVariant,
                      boxShadow: item.active ? '0 8px 32px rgba(255,209,102,0.2)' : undefined,
                    }}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-6 rounded-xl border" style={{ background: `${VC.secondaryContainer}33`, borderColor: `${VC.secondary}20` }}>
                <p className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: VC.secondary }}>System Health</p>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-500" />
                  <span className="font-semibold text-sm italic" style={{ color: VC.onSurface }}>99.9% Uptime</span>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <section className="flex-1 p-12 overflow-y-auto" style={{ background: VC.background }}>
              <div className="mb-12">
                <h1 className="text-5xl font-black tracking-tight mb-3" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                  Platform Analytics
                </h1>
                <p className="text-lg font-medium max-w-2xl" style={{ color: VC.onSurfaceVariant }}>
                  Monitoring the pulse of your global commerce ecosystem with real-time scaling and performance metrics.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { label: 'Total MRR', value: '$450,230', change: '+12.5% vs last month', icon: 'trending_up', positive: true },
                  { label: 'Churn Rate', value: '2.4%', change: '0.8% decrease', icon: 'analytics', positive: true },
                  { label: 'Avg. ARPU', value: '$89.50', change: '3.2% growth', icon: 'group', positive: true },
                ].map((metric) => (
                  <div key={metric.label}
                    className="p-8 rounded-xl border transition-all group"
                    style={{ background: VC.surfaceContainerLowest, borderColor: `${VC.outlineVariant}20` }}>
                    <div className="flex justify-between items-start mb-6">
                      <p className="text-sm font-bold uppercase tracking-wider" style={{ color: VC.onSurfaceVariant }}>{metric.label}</p>
                      <span className="material-symbols-outlined" style={{ color: VC.primary }}>{metric.icon}</span>
                    </div>
                    <p className="text-4xl font-black mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>{metric.value}</p>
                    <p className="font-bold text-sm flex items-center gap-1" style={{ color: '#2e7d32' }}>
                      <span className="material-symbols-outlined text-xs">arrow_upward</span> {metric.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Revenue Trajectory */}
                <div className="p-10 rounded-xl border relative overflow-hidden" style={{ background: VC.surfaceContainerLow, borderColor: `${VC.outlineVariant}20` }}>
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h3 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Revenue Trajectory</h3>
                      <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>Monthly recurring revenue (6 months)</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                      style={{ background: `${VC.primary}1A`, color: VC.primary }}>Active</span>
                  </div>
                  <div className="min-h-[250px] flex items-end gap-2">
                    {[40, 55, 48, 72, 85, 100].map((h, i) => (
                      <div key={i}
                        className="flex-1 rounded-t-xl transition-all cursor-pointer hover:opacity-80"
                        style={{ height: `${h * 2.5}px`, background: i === 5 ? VC.primary : `${VC.primary}33` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 px-2 text-xs font-bold uppercase tracking-widest" style={{ color: VC.onSurfaceVariant }}>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => <span key={m}>{m}</span>)}
                  </div>
                </div>

                {/* New Signups */}
                <div className="p-10 rounded-xl border" style={{ background: VC.surfaceContainerLow, borderColor: `${VC.outlineVariant}20` }}>
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h3 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>New Signups</h3>
                      <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>Store registrations (Last 30 Days)</p>
                    </div>
                    <p className="text-3xl font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>1,240</p>
                  </div>
                  <div className="relative h-[250px] w-full rounded-xl border flex items-center justify-center overflow-hidden"
                    style={{ background: VC.surfaceContainerLowest, borderColor: `${VC.outlineVariant}20` }}>
                    <svg className="w-full h-full px-6 py-10" preserveAspectRatio="none" viewBox="0 0 400 150">
                      <path d="M0 130 Q 50 110, 100 120 T 200 60 T 300 80 T 400 10" fill="none" stroke={VC.secondary} strokeLinecap="round" strokeWidth="4" />
                      <path d="M0 130 Q 50 110, 100 120 T 200 60 T 300 80 T 400 10 V 150 H 0 Z" fill={`${VC.secondary}1A`} />
                    </svg>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-around text-xs font-bold uppercase tracking-widest" style={{ color: VC.onSurfaceVariant }}>
                      <span>W1</span><span>W2</span><span>W3</span><span>W4</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seller Density */}
              <div className="p-10 rounded-xl border" style={{ background: VC.surfaceContainerLow, borderColor: `${VC.outlineVariant}20` }}>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Seller Density</h3>
                    <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>Geographical distribution of storefronts across India</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full" style={{ background: VC.primary }} />
                      <span className="text-xs font-bold">High Density</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full" style={{ background: `${VC.primary}33` }} />
                      <span className="text-xs font-bold">Low Density</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 rounded-xl h-[400px] relative group"
                    style={{ background: VC.surfaceContainerLowest, border: `1px solid ${VC.outlineVariant}20` }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-8xl opacity-20" style={{ color: VC.primary }}>map</span>
                    </div>
                    {/* Hotspots */}
                    <div className="absolute top-1/2 left-1/3 size-16 rounded-full animate-pulse border-2" style={{ background: `${VC.primary}4D`, borderColor: VC.primaryContainer }} />
                    <div className="absolute top-1/4 left-1/2 size-12 rounded-full border-2" style={{ background: `${VC.primary}33`, borderColor: VC.primaryContainer }} />
                    <div className="absolute bottom-1/4 right-1/4 size-20 rounded-full animate-pulse border-2" style={{ background: `${VC.primary}66`, borderColor: VC.primaryContainer }} />
                    {/* Overlay */}
                    <div className="absolute top-6 left-6 p-4 rounded-xl border"
                      style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.2)' }}>
                      <p className="text-xs font-bold tracking-widest uppercase" style={{ color: VC.primary }}>Live Peak</p>
                      <p className="text-lg font-black italic" style={{ color: VC.onBackground }}>Maharashtra Region</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="p-6 rounded-xl border" style={{ background: VC.surfaceContainerLowest, borderColor: `${VC.outlineVariant}20` }}>
                      <h4 className="font-bold text-sm mb-4" style={{ color: VC.onBackground }}>Top Regions</h4>
                      <div className="flex flex-col gap-4">
                        {[
                          { region: 'Maharashtra', count: '3,420 stores', pct: '85%' },
                          { region: 'Karnataka', count: '2,890 stores', pct: '70%' },
                          { region: 'Tamil Nadu', count: '2,150 stores', pct: '55%' },
                        ].map((r) => (
                          <div key={r.region}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">{r.region}</span>
                              <span className="text-sm font-black" style={{ color: VC.primary }}>{r.count}</span>
                            </div>
                            <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: VC.surfaceContainerHighest }}>
                              <div className="h-full" style={{ width: r.pct, background: VC.primary }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 rounded-xl border flex flex-col items-center justify-center text-center gap-4 group cursor-pointer hover:opacity-80 transition"
                      style={{ background: VC.surfaceContainerLowest, borderColor: `${VC.outlineVariant}20` }}>
                      <div className="size-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ background: VC.primaryContainer, color: VC.onPrimaryContainer }}>
                        <span className="material-symbols-outlined text-3xl">download</span>
                      </div>
                      <div>
                        <p className="font-bold" style={{ color: VC.onBackground }}>Export Regional Report</p>
                        <p className="text-xs" style={{ color: VC.onSurfaceVariant }}>CSV, PDF, or XLSX available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Floating Creator Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="px-8 py-4 rounded-full border flex items-center gap-8"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(255,209,102,0.2)', borderColor: 'rgba(255,255,255,0.3)' }}>
          {[
            { icon: 'auto_awesome', label: 'Insights' },
            { icon: 'schedule', label: 'Schedules' },
            { icon: 'share', label: 'Collaborate' },
          ].map((action, i) => (
            <div key={action.label}>
              {i > 0 && <div className="w-px h-4 inline-block align-middle mx-4" style={{ background: `${VC.outlineVariant}4D` }} />}
              <button className="flex items-center gap-2 transition-colors hover:opacity-70 inline-flex" style={{ color: VC.onSurface }}>
                <span className="material-symbols-outlined text-sm">{action.icon}</span>
                <span className="text-xs font-black uppercase tracking-widest">{action.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
