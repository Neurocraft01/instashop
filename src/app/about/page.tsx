import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About InstaShop — The Business OS for Instagram Sellers',
  description: 'InstaShop helps Instagram sellers launch a branded store, manage orders & automate WhatsApp — all without any technical knowledge.',
};

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#fff1da',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', secondaryContainer: '#ffc2c9', onSecondary: '#ffeff0',
  tertiary: '#66547a',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainerHigh: '#e4e2df', background: '#f9f6f3',
  onBackground: '#2f2f2d', onSurfaceVariant: '#5c5b59',
  outline: '#787774', brandDark: '#2B1B3D', brandYellow: '#FFD166',
};

const stats = [
  { value: '10K+', label: 'Active Sellers' },
  { value: '₹2Cr+', label: 'GMV Processed' },
  { value: '500K+', label: 'Orders Fulfilled' },
  { value: '4.9★', label: 'Seller Rating' },
];

const values = [
  {
    icon: 'bolt',
    title: 'Built for Speed',
    desc: 'Launch your online store in under 2 minutes — no coding, no designers, no headaches. Just you, your products, and your customers.',
  },
  {
    icon: 'diversity_3',
    title: 'Made for India',
    desc: 'COD, UPI, WhatsApp — every payment method and workflow that Indian sellers rely on is built in from day one.',
  },
  {
    icon: 'trending_up',
    title: 'Grow Without Limits',
    desc: 'From your first sale to thousands of orders a month, InstaShop scales with you. Upgrade your plan as your business grows.',
  },
];

const team = [
  { name: 'Arjun Sharma', role: 'Co-Founder & CEO', initials: 'AS', color: '#f9cc61' },
  { name: 'Priya Nair', role: 'Co-Founder & CTO', initials: 'PN', color: '#ffc2c9' },
  { name: 'Rohan Mehta', role: 'Head of Product', initials: 'RM', color: '#e8d1fe' },
];

export default function AboutPage() {
  return (
    <div style={{ background: VC.background, color: VC.onBackground, fontFamily: 'Plus Jakarta Sans, sans-serif', minHeight: '100vh' }}>

      {/* Header */}
      <header className="fixed top-0 w-full z-50"
        style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
        <nav className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-black tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
            InstaShop
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="transition-colors hover:opacity-70" style={{ color: VC.brandDark }}>Pricing</Link>
            <Link href="/about" className="font-bold border-b-4 pb-1" style={{ color: VC.primary, borderColor: VC.primaryContainer }}>About</Link>
            <Link href="/contact" className="transition-colors hover:opacity-70" style={{ color: VC.brandDark }}>Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/sign-in" className="px-4 py-2 rounded-xl font-semibold text-sm hover:opacity-80 transition-opacity"
              style={{ color: VC.onBackground }}>
              Sign In
            </Link>
            <Link href="/sign-up" className="px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-sm"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
              Get Started Free
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-28 pb-20">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
            <span className="material-symbols-outlined text-base">store</span>
            Built for Indian Instagram Sellers
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
            style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
            We believe every seller{' '}
            <span style={{ color: VC.primary }}>deserves a real business.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
            InstaShop was born from a simple frustration: Instagram sellers were losing orders in DMs, managing
            inventory in notebooks, and missing out on growth — just because they lacked the right tools.
            We built the solution.
          </p>
        </section>

        {/* Stats */}
        <section className="py-16 mb-24" style={{ background: VC.brandDark }}>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: VC.brandYellow }}>{s.value}</div>
                <div className="text-sm uppercase tracking-widest font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-sm uppercase tracking-widest font-bold mb-4 block" style={{ color: VC.secondary }}>Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
              Turn Instagram into your storefront — not your DM inbox.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
              <p>
                Millions of small sellers across India run their entire business through Instagram — but they're stuck managing orders manually, losing track of customers, and spending hours in DMs instead of building their brand.
              </p>
              <p>
                InstaShop gives every seller a <strong style={{ color: VC.onBackground }}>branded mini-store, an order dashboard, WhatsApp automation, and real-time analytics</strong> — without needing to hire a developer or spend lakhs on custom software.
              </p>
              <p>
                Our goal: make running a real business as easy as posting a Reel.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-8 flex flex-col gap-3" style={{ background: VC.primaryContainer }}>
              <span className="material-symbols-outlined text-4xl" style={{ color: VC.onPrimaryFixed }}>storefront</span>
              <div className="font-bold text-lg" style={{ color: VC.onPrimaryFixed }}>Branded Store</div>
              <div className="text-sm" style={{ color: VC.onPrimaryContainer }}>Your own link, your own look — orders that don't get lost.</div>
            </div>
            <div className="rounded-2xl p-8 flex flex-col gap-3 mt-8" style={{ background: VC.secondaryContainer }}>
              <span className="material-symbols-outlined text-4xl" style={{ color: '#920035' }}>chat</span>
              <div className="font-bold text-lg" style={{ color: '#920035' }}>WhatsApp CRM</div>
              <div className="text-sm" style={{ color: '#920035' }}>Auto-send order confirmations & follow-ups via WhatsApp.</div>
            </div>
            <div className="rounded-2xl p-8 flex flex-col gap-3" style={{ background: '#e8d1fe' }}>
              <span className="material-symbols-outlined text-4xl" style={{ color: '#433356' }}>inventory_2</span>
              <div className="font-bold text-lg" style={{ color: '#433356' }}>Live Inventory</div>
              <div className="text-sm" style={{ color: '#433356' }}>Track stock in real time. Never oversell again.</div>
            </div>
            <div className="rounded-2xl p-8 flex flex-col gap-3 mt-8" style={{ background: VC.brandDark }}>
              <span className="material-symbols-outlined text-4xl" style={{ color: VC.brandYellow }}>analytics</span>
              <div className="font-bold text-lg" style={{ color: VC.brandYellow }}>Smart Analytics</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Know your best products, top customers & revenue trends.</div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 mb-24" style={{ background: VC.surfaceContainerLow }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>What We Stand For</h2>
              <p style={{ color: VC.onSurfaceVariant }}>The principles that guide everything we build.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.title} className="p-10 rounded-2xl flex flex-col gap-5 hover:scale-105 transition-transform duration-300"
                  style={{ background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: VC.primaryContainer }}>
                    <span className="material-symbols-outlined text-3xl" style={{ color: VC.onPrimaryFixed }}>{v.icon}</span>
                  </div>
                  <h3 className="text-xl font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>{v.title}</h3>
                  <p style={{ color: VC.onSurfaceVariant }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>Meet the Team</h2>
            <p style={{ color: VC.onSurfaceVariant }}>A small team with a big mission for Indian creators.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl text-center"
                style={{ background: VC.surfaceContainerLow }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4"
                  style={{ background: t.color, color: VC.onPrimaryFixed }}>
                  {t.initials}
                </div>
                <div className="font-black text-lg mb-1" style={{ color: VC.onBackground }}>{t.name}</div>
                <div className="text-sm font-semibold" style={{ color: VC.onSurfaceVariant }}>{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-3xl p-12 md:p-16" style={{ background: VC.brandDark }}>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'Epilogue, sans-serif', color: '#fff' }}>
              Ready to stop losing orders in DMs?
            </h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Join 10,000+ Indian sellers who launched their store on InstaShop — free to start, always.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up"
                className="px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform"
                style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
                Start for Free
              </Link>
              <Link href="/pricing"
                className="px-10 py-4 rounded-2xl font-bold text-lg border-2 hover:bg-white/10 transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 mt-20" style={{ background: VC.surfaceContainerLow }}>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          <div className="text-lg font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>InstaShop</div>
          <div className="flex gap-8 text-sm" style={{ color: VC.tertiary }}>
            {['Privacy', 'Terms', 'Pricing', 'Contact'].map((l) => (
              <Link key={l} href={l === 'Pricing' ? '/pricing' : l === 'Contact' ? '/contact' : '#'} className="hover:opacity-70 transition-opacity">{l}</Link>
            ))}
          </div>
          <div className="text-xs uppercase tracking-widest" style={{ color: VC.tertiary }}>
            © 2025 InstaShop. Built for Indian Creators.
          </div>
        </div>
      </footer>
    </div>
  );
}
