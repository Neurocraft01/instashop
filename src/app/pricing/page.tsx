import Link from 'next/link';

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

export default function PricingPage() {
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
          <Link href="/" className="font-black text-2xl tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>InstaShop</Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/pricing" className="font-bold underline decoration-4" style={{ color: VC.brandDark, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Pricing</Link>
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
        {/* Pricing Section */}
        <section className="py-24 px-6" style={{ background: VC.surfaceContainerLow, minHeight: 'calc(100vh - 80px)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
                Simple, Fair Pricing
              </h1>
              <p className="text-lg" style={{ color: VC.onSurfaceVariant }}>No hidden fees. Scale your business at your own pace.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Free */}
              <div className="p-10 rounded-[2rem] flex flex-col border-2 border-transparent hover:border-[#f9cc61] transition-all"
                style={{ background: '#f9f6f3' }}>
                <h3 className="text-xl font-black mb-2">Free</h3>
                <p className="text-sm mb-6" style={{ color: VC.onSurfaceVariant }}>Perfect for beginners</p>
                <div className="text-4xl font-black mb-8">₹0<span className="text-sm font-normal" style={{ color: VC.onSurfaceVariant }}>/mo</span></div>
                <ul className="space-y-4 mb-10 flex-grow" style={{ color: VC.onBackground }}>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: '#745700' }}>check</span> 10 Products</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: '#745700' }}>check</span> Manual Orders</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: '#745700' }}>check</span> Standard Themes</li>
                </ul>
                <Link href="/sign-up" className="w-full py-4 rounded-[2rem] border-2 font-bold text-center transition-colors"
                  style={{ borderColor: VC.primaryContainer, color: VC.onPrimaryFixed }}>
                  Start Free
                </Link>
              </div>

              {/* Starter (Popular) */}
              <div className="p-10 rounded-[2rem] flex flex-col relative scale-105 z-10 border-2"
                style={{ background: '#f9f6f3', borderColor: VC.primaryContainer, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                  style={{ background: VC.primaryContainer }}>Most Popular</div>
                <h3 className="text-xl font-black mb-2">Starter</h3>
                <p className="text-sm mb-6" style={{ color: VC.onSurfaceVariant }}>For growing creators</p>
                <div className="text-4xl font-black mb-8">₹199<span className="text-sm font-normal" style={{ color: VC.onSurfaceVariant }}>/mo</span></div>
                <ul className="space-y-4 mb-10 flex-grow" style={{ color: VC.onBackground }}>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: '#745700' }}>check</span> Unlimited Products</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: '#745700' }}>check</span> Auto WhatsApp CRM</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: '#745700' }}>check</span> Custom Domain</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ color: '#745700' }}>check</span> Basic Analytics</li>
                </ul>
                <Link href="/sign-up" className="w-full py-4 rounded-[2rem] font-black text-center transition-all"
                  style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                  Get Started
                </Link>
              </div>

              {/* Pro */}
              <div className="p-10 rounded-[2rem] flex flex-col text-white" style={{ background: VC.brandDark }}>
                <h3 className="text-xl font-black mb-2" style={{ color: VC.brandYellow }}>Pro</h3>
                <p className="text-slate-400 text-sm mb-6">For high-volume stores</p>
                <div className="text-4xl font-black mb-8">₹499<span className="text-sm font-normal text-slate-400">/mo</span></div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {['Everything in Starter', 'Priority Logistics', 'Multiple Staff Accounts', 'Advanced API Access'].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ color: VC.brandYellow }}>check</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/sign-up" className="w-full py-4 rounded-[2rem] font-bold text-center transition-colors border"
                  style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>
                  Go Pro
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 mt-auto" style={{ background: VC.surfaceContainerLow }}>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          <div className="text-lg font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>InstaShop</div>
          <p className="text-sm uppercase tracking-widest" style={{ color: '#66547a' }}>© 2025 InstaShop. Built for Creators.</p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'API'].map((l) => (
              <Link key={l} href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: '#66547a' }}>{l}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
