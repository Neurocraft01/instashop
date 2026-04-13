"use client";

import Link from 'next/link';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#fff1da',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', secondaryContainer: '#ffc2c9', onSecondaryContainer: '#920035',
  tertiary: '#66547a', tertiaryContainer: '#e8d1fe', onTertiaryContainer: '#57456a',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainer: '#eae8e4', surfaceContainerHigh: '#e4e2df',
  background: '#f9f6f3', onBackground: '#2f2f2d', onSurfaceVariant: '#5c5b59',
  outline: '#787774', outlineVariant: '#afadaa',
};

export default function TrackOrderPage() {
  return (
    <div style={{ minHeight: '100vh', background: VC.background, fontFamily: 'Plus Jakarta Sans, sans-serif', color: VC.onBackground }}>
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center w-full px-8 py-4 border-b"
        style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(255,209,102,0.15)', borderColor: VC.surfaceContainerHigh }}>
        <Link href="/" className="text-2xl font-black tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>InstaShop</Link>
        <nav className="hidden md:flex items-center gap-8" style={{ fontFamily: 'Epilogue, sans-serif' }}>
          {['Storefront', 'Inbox', 'Help'].map((l) => (
            <Link key={l} href="#" className="transition-colors hover:opacity-70" style={{ color: VC.onSurfaceVariant }}>{l}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:opacity-70 transition">
            <span className="material-symbols-outlined" style={{ color: VC.onBackground }}>notifications</span>
          </button>
          <button className="p-2 rounded-full hover:opacity-70 transition">
            <span className="material-symbols-outlined" style={{ color: VC.onBackground }}>account_circle</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="relative mb-20">
          <div className="absolute -top-24 -left-20 w-64 h-64 rounded-full blur-[100px] -z-10 opacity-30" style={{ background: VC.primaryContainer }} />
          <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full blur-[100px] -z-10 opacity-20" style={{ background: VC.secondaryContainer }} />

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
              Track your <span style={{ color: VC.primary }}>magic</span> delivery.
            </h1>
            <p className="text-lg font-medium max-w-xl mb-10 leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
              Enter your order details below to see exactly where your InstaShop finds are in their journey to your doorstep.
            </p>

            {/* Search Card */}
            <div className="p-8 md:p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-6 items-end"
              style={{ background: VC.surfaceContainerLowest, boxShadow: '0 20px 50px rgba(116,87,0,0.08)' }}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase px-1" style={{ color: VC.tertiary }}>Order ID</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2" style={{ color: VC.outline }}>shopping_bag</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-xl font-medium outline-none border-none focus:ring-2"
                    style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}
                    placeholder="#IS-99201"
                    type="text"
                    onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                    onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase px-1" style={{ color: VC.tertiary }}>Phone Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2" style={{ color: VC.outline }}>call</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-xl font-medium outline-none border-none"
                    style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}
                    placeholder="+91 98765 43210"
                    type="tel"
                    onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                    onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>
              <button
                className="h-[60px] px-10 rounded-xl font-bold tracking-tight flex items-center justify-center gap-2 group transition-all active:scale-95"
                style={{ background: VC.primary, color: VC.onPrimary, boxShadow: '0 8px 20px rgba(116,87,0,0.2)' }}>
                Track Order
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tracking Progress */}
          <div className="lg:col-span-8 rounded-xl p-8 md:p-12 relative overflow-hidden" style={{ background: VC.surfaceContainerLow }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-3"
                  style={{ background: VC.secondaryContainer, color: VC.onSecondaryContainer }}>Live Status</span>
                <h2 className="text-3xl font-black tracking-tight" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>On its way to you!</h2>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: VC.outline }}>Est. Delivery</p>
                <p className="text-2xl font-bold" style={{ color: VC.primary }}>Oct 24, 2025</p>
              </div>
            </div>

            {/* Stepper */}
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 w-full">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[22px] left-0 right-0 h-1 rounded-full" style={{ background: VC.surfaceContainerHigh }} />
              <div className="hidden md:block absolute top-[22px] left-0 h-1 rounded-full" style={{ width: '70%', background: VC.primary }} />

              {[
                { icon: 'check', label: 'Placed', time: 'Oct 19, 09:12 AM', completed: true, active: false },
                { icon: 'check', label: 'Confirmed', time: 'Oct 19, 11:45 AM', completed: true, active: false },
                { icon: 'local_shipping', label: 'Shipped', time: 'Oct 21, 04:30 PM', completed: true, active: true },
                { icon: 'inventory_2', label: 'Delivered', time: 'Expected Oct 24', completed: false, active: false },
              ].map((step) => (
                <div key={step.label} className={`relative z-10 flex md:flex-col items-center gap-4 md:text-center ${!step.completed && !step.active ? 'opacity-40' : ''}`}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: step.completed || step.active ? VC.primary : VC.surfaceContainerHigh,
                      color: step.completed || step.active ? '#fff1da' : VC.outline,
                      boxShadow: step.active ? `0 4px 12px rgba(116,87,0,0.3)` : undefined,
                      border: step.active ? `4px solid ${VC.surfaceContainerLowest}` : undefined,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: step.active ? "'FILL' 1" : "'FILL' 0" }}>{step.icon}</span>
                  </div>
                  <div className="flex flex-col md:items-center">
                    <span className="text-sm font-black" style={{ color: step.active ? VC.primary : VC.onBackground }}>{step.label}</span>
                    <span className="text-xs font-medium" style={{ color: VC.outline }}>{step.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Package Details */}
            <div className="mt-16 pt-8 border-t flex items-center gap-6" style={{ borderColor: `${VC.outlineVariant}33` }}>
              <div className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center" style={{ background: VC.primaryContainer }}>
                <span className="material-symbols-outlined text-3xl" style={{ color: VC.onPrimaryFixed }}>package_2</span>
              </div>
              <div>
                <p className="font-bold" style={{ color: VC.onBackground }}>Package Details</p>
                <p className="text-sm leading-tight" style={{ color: VC.onSurfaceVariant }}>2 Items • Standard Courier • #99210-XC-01</p>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* WhatsApp Support */}
            <div className="p-8 rounded-xl text-white relative overflow-hidden" style={{ background: '#25D366', boxShadow: '0 20px 40px rgba(37,211,102,0.2)' }}>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                <h3 className="text-2xl font-black mb-2 leading-tight">Need help with this order?</h3>
                <p className="text-white/80 font-medium mb-8 leading-snug">Our seller typically responds in less than 15 minutes on WhatsApp.</p>
                <button className="w-full py-4 rounded-xl font-black text-lg hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: '#ffffff', color: '#25D366' }}>
                  Contact Seller on WhatsApp
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl" style={{ background: 'rgba(255,255,255,0.1)' }} />
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-xl shadow-sm border" style={{ background: VC.surfaceContainerLowest, borderColor: `${VC.outlineVariant}20` }}>
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold" style={{ color: VC.onBackground }}>Last Tracked Location</p>
                <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ background: VC.secondary }} />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden mb-4" style={{ background: VC.surfaceContainerHigh }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-5xl" style={{ color: `${VC.outline}60` }}>map</span>
                    <p className="text-sm font-bold mt-2" style={{ color: `${VC.outline}80` }}>Distribution Center</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                    style={{ background: VC.primaryContainer, color: VC.primary }}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium" style={{ color: VC.onSurfaceVariant }}>Sorting Facility: Distribution Center 4B, Mumbai, MH</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-12 px-8 flex flex-col items-center justify-center text-center gap-4"
        style={{ background: `${VC.surfaceContainerLow}80` }}>
        <div className="font-black text-xl" style={{ color: `${VC.onBackground}40` }}>InstaShop</div>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.outline }}>© 2025 InstaShop Premium Tier</p>
      </footer>

      {/* Mobile Floating Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] flex justify-between items-center px-6 py-4 rounded-full"
        style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(255,209,102,0.3)' }}>
        {[
          { icon: 'explore', label: 'Discover', active: true },
          { icon: 'shopping_cart', label: 'Orders', active: false },
          { icon: 'person', label: 'Profile', active: false },
        ].map((item) => (
          <button key={item.label} className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined" style={{
              color: item.active ? VC.primary : VC.onSurfaceVariant,
              fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0",
            }}>{item.icon}</span>
            <span className="text-xs font-bold" style={{ color: item.active ? VC.primary : VC.onSurfaceVariant }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
