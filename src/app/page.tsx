'use client';

import Link from 'next/link';
import Image from 'next/image';

const VC = {
  brandDark: '#2B1B3D',
  brandYellow: '#FFD166',
  primaryContainer: '#f9cc61',
  onPrimaryFixed: '#443100',
  onPrimaryContainer: '#5b4400',
  secondaryContainer: '#ffc2c9',
  onSecondaryContainer: '#920035',
  surfaceContainerLow: '#f3f0ed',
  surfaceContainerHigh: '#e4e2df',
  surfaceContainerLowest: '#ffffff',
  onBackground: '#2f2f2d',
  onSurfaceVariant: '#5c5b59',
};

export default function LandingPage() {
  return (
    <div style={{ background: '#f9f6f3', color: VC.onBackground, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 w-full border-b h-20"
        style={{
          background: 'rgba(255,252,249,0.8)',
          backdropFilter: 'blur(20px)',
          borderColor: VC.surfaceContainerHigh,
        }}
      >
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6">
            <Link href="/pricing" className="hover:bg-[#f3f0ed] rounded-full px-3 py-1 transition-all" style={{ color: `${VC.brandDark}b3` }}>Pricing</Link>
            <Link href="/about" className="hover:bg-[#f3f0ed] rounded-full px-3 py-1 transition-all" style={{ color: `${VC.brandDark}b3` }}>About</Link>
            <Link href="/contact" className="hover:bg-[#f3f0ed] rounded-full px-3 py-1 transition-all" style={{ color: `${VC.brandDark}b3` }}>Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/sign-up" className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full transition-transform active:scale-95 font-bold"
            style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
            Start Selling Free
          </Link>
          <Link href="/sign-in" className="px-6 py-2 rounded-full font-bold border-2 transition-colors"
            style={{ borderColor: VC.primaryContainer, color: VC.onBackground }}>
            Sign In
          </Link>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 lg:py-32 px-6" style={{ background: '#f9f6f3' }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-widest uppercase"
                style={{ background: VC.secondaryContainer, color: VC.onSecondaryContainer }}>
                E-Commerce for Creators
              </span>
              <h1
                className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight"
                style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}
              >
                Turn Your Instagram Into a{' '}
                <span style={{ color: '#745700' }}>Real Business</span>
              </h1>
              <p className="text-xl mb-10 max-w-xl mx-auto lg:mx-0" style={{ color: VC.onSurfaceVariant }}>
                Stop managing orders through DMs. Scale your brand with automated checkouts, inventory tracking, and direct WhatsApp CRM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/sign-up"
                  className="px-10 py-5 rounded-[2rem] font-black text-lg transition-all active:scale-95"
                  style={{
                    background: VC.primaryContainer,
                    color: VC.onPrimaryFixed,
                    boxShadow: '0 8px 32px rgba(255,209,102,0.2)',
                  }}
                >
                  Start Selling Free
                </Link>
                <button className="px-10 py-5 rounded-[2rem] font-bold text-lg transition-colors"
                  style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}>
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: VC.primaryContainer }} />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: VC.secondaryContainer }} />
              <div className="relative rounded-[2rem] overflow-hidden transition-transform duration-500 hover:rotate-0 rotate-2"
                style={{ boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=640&h=480&fit=crop"
                  alt="InstaShop Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 p-6 rounded-[2rem] flex items-center gap-4 animate-bounce"
                style={{ background: '#ffffff', boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: VC.onSurfaceVariant }}>New Sale!</p>
                  <p className="text-lg font-black" style={{ color: VC.brandDark }}>₹12,400</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-6" style={{ background: VC.surfaceContainerLow }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
                Everything You Need to Scale
              </h2>
              <p style={{ color: VC.onSurfaceVariant }}>Skip the complicated setups. InstaShop is built for creators who sell on social media.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="md:col-span-2 p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center overflow-hidden group"
                style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: VC.primaryContainer }}>
                    <span className="material-symbols-outlined" style={{ color: VC.onPrimaryContainer }}>storefront</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif' }}>Mini Storefront</h3>
                  <p className="mb-6" style={{ color: VC.onSurfaceVariant }}>A gorgeous, lightning-fast mobile shop that lives in your bio. No coding required.</p>
                  <ul className="space-y-3 font-bold" style={{ color: VC.onBackground }}>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500">check_circle</span> One-click Checkout</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500">check_circle</span> Instant Inventory Sync</li>
                  </ul>
                </div>
                <div className="flex-1 relative translate-y-12 group-hover:translate-y-6 transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=320&h=400&fit=crop"
                    alt="Mobile Storefront"
                    className="rounded-[2rem] shadow-2xl"
                  />
                </div>
              </div>

              {/* Feature 2: WhatsApp CRM */}
              <div className="p-10 rounded-[2rem] flex flex-col" style={{ background: VC.brandDark, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <span className="material-symbols-outlined" style={{ color: VC.brandYellow }}>forum</span>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandYellow }}>WhatsApp CRM</h3>
                <p className="text-slate-300 mb-8">Automatically send order updates and tracking numbers directly to your customers&apos; WhatsApp.</p>
                <div className="mt-auto p-4 rounded-[1rem] border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: VC.brandYellow }}>Live Auto-Reply</p>
                  <p className="italic text-white">&quot;Hey Sarah! Your order #4201 is packed and ready to ship 📦&quot;</p>
                </div>
              </div>

              {/* Feature 3: Dashboard */}
              <div className="p-10 rounded-[2rem] flex flex-col items-center text-center"
                style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: VC.secondaryContainer, color: VC.onSecondaryContainer }}>
                  <span className="material-symbols-outlined">dashboard</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif' }}>Unified Dashboard</h3>
                <p style={{ color: VC.onSurfaceVariant }}>See your sales, customers, and top products in one editorial-style view.</p>
              </div>

              {/* Feature 4: Logistics */}
              <div className="md:col-span-2 p-[1px] rounded-[2rem]" style={{ background: VC.primaryContainer }}>
                <div className="rounded-[1.9rem] h-full flex flex-col md:flex-row gap-8 items-center p-10" style={{ background: '#ffffff' }}>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>Smart Shipping</h3>
                    <p style={{ color: VC.onSurfaceVariant }}>Print labels and schedule pickups with our integrated logistics partners in one click.</p>
                  </div>
                  <div className="flex-1 flex gap-4">
                    <div className="p-4 rounded-[1rem] flex-1 text-center font-bold" style={{ background: VC.surfaceContainerLow }}>FastTrack</div>
                    <div className="p-4 rounded-[1rem] flex-1 text-center font-bold" style={{ background: VC.surfaceContainerLow }}>GlobalLog</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6" style={{ background: '#f9f6f3' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-black mb-8 leading-tight" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
                  3 Steps to Professional Commerce
                </h2>
                <div className="space-y-12">
                  {[
                    { n: '1', title: 'Connect Instagram', desc: 'Import your product images directly from your feed with a single click.' },
                    { n: '2', title: 'Set Your Prices', desc: 'Add variations, shipping rules, and payment methods. We support all major wallets.' },
                    { n: '3', title: 'Share Your Link', desc: 'Put your InstaShop URL in your bio and watch the orders roll in.' },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-6">
                      <span className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl"
                        style={{ background: VC.brandDark, color: VC.brandYellow }}>
                        {step.n}
                      </span>
                      <div>
                        <h4 className="text-xl font-black mb-2">{step.title}</h4>
                        <p style={{ color: VC.onSurfaceVariant }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative p-8 rounded-[2rem]" style={{ background: VC.surfaceContainerLow }}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop"
                  alt="Analytics Dashboard"
                  className="rounded-[1rem]"
                  style={{ boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}
                />
              </div>
            </div>
          </div>
        </section>


      </main>

      {/* Mobile Bottom Nav */}
      <nav
        className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-2 w-[90%] mx-auto rounded-[3rem]"
        style={{
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(255,209,102,0.2)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        {[
          { icon: 'storefront', label: 'Shop', active: true },
          { icon: 'search', label: 'Search' },
          { icon: 'shopping_bag', label: 'Bag' },
          { icon: 'person', label: 'Profile' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center transition-transform hover:scale-110 active:scale-90"
            style={{
              background: item.active ? VC.brandYellow : 'transparent',
              color: item.active ? VC.brandDark : `${VC.brandDark}80`,
              borderRadius: item.active ? '9999px' : undefined,
              width: item.active ? '56px' : undefined,
              height: item.active ? '56px' : undefined,
            }}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 text-white" style={{ background: VC.brandDark }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b pb-12 mb-12" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="col-span-1 md:col-span-2">
            <span className="font-black text-3xl mb-6 block" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandYellow }}>InstaShop</span>
            <p className="text-slate-400 max-w-sm mb-8">Empowering the next generation of social entrepreneurs to build real, lasting businesses from their social feeds.</p>
          </div>
          <div>
            <h5 className="font-black text-lg mb-6">Product</h5>
            <ul className="space-y-4 text-slate-400">
              {['Mini Store', 'WhatsApp CRM', 'Logistics', 'Pricing'].map((l) => (
                <li key={l}><Link href="#" className="hover:text-yellow-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-black text-lg mb-6">Company</h5>
            <ul className="space-y-4 text-slate-400">
              {['About Us', 'Careers', 'Support', 'Legal'].map((l) => (
                <li key={l}><Link href="#" className="hover:text-yellow-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <p>© 2024 InstaShop. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
