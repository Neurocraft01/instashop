import Link from 'next/link';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#fff1da',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', secondaryContainer: '#ffc2c9', onSecondary: '#ffeff0', onSecondaryContainer: '#920035',
  tertiary: '#66547a',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainerHigh: '#e4e2df', background: '#f9f6f3',
  onBackground: '#2f2f2d', onSurfaceVariant: '#5c5b59',
  outline: '#787774', brandDark: '#2B1B3D', brandYellow: '#FFD166',
};

export default function AboutPage() {
  return (
    <div style={{ background: VC.background, color: VC.onBackground, fontFamily: 'Plus Jakarta Sans, sans-serif', minHeight: '100vh' }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50"
        style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(255,209,102,0.15)' }}>
        <nav className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-black tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
            InstaShop
          </Link>
          <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'Epilogue, sans-serif' }}>
            <Link href="/pricing" className="transition-colors hover:opacity-70" style={{ color: VC.brandDark }}>Pricing</Link>
            <Link href="/about" className="font-bold border-b-4 pb-1" style={{ color: VC.brandYellow, borderColor: VC.brandYellow }}>About</Link>
            <Link href="/contact" className="transition-colors hover:opacity-70" style={{ color: VC.brandDark }}>Contact</Link>
          </div>
          <div className="flex items-center gap-6">
            <button className="hover:scale-105 transition-transform">
              <span className="material-symbols-outlined" style={{ color: VC.onBackground }}>shopping_bag</span>
            </button>
            <Link href="/sign-up" className="px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-sm"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        {/* Hero */}
        <section className="flex flex-col items-center text-center mb-24">
          <div className="relative mb-12">
            <div className="absolute inset-0 rounded-full scale-110 blur-2xl opacity-20" style={{ background: VC.primaryContainer }} />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #ffc2c9 0%, #f9cc61 100%)' }}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Store Owner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
            Hi, I&apos;m <span style={{ color: VC.primary }}>Sarah</span>.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
            A micro-bakery owner obsessed with wild yeast, golden crusts, and the slow art of sourdough.
          </p>
        </section>

        {/* Story: Asymmetric Layout */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=640&h=800&fit=crop"
                alt="Artisan bread"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-xl overflow-hidden border-8 border-white shadow-2xl hidden md:block"
              style={{ borderColor: VC.background }}>
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop"
                alt="Kneading dough"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <span className="text-sm uppercase tracking-widest font-bold" style={{ color: VC.secondary }}>The Heart of the Bakery</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
              Our Story began in a small kitchen with big dreams.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
              <p>It started with a single starter named &apos;Goldie&apos; and a quest for the perfect crumb. What began as a weekend hobby quickly turned into a neighborhood obsession.</p>
              <p>I believe that bread is more than just food; it&apos;s a connection to our roots and a testament to the beauty of patience. Every loaf is handcrafted over 36 hours using ancient grains and local ingredients.</p>
            </div>
            <div className="pt-4">
              <button className="px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                style={{ background: VC.secondary, color: VC.onSecondary, boxShadow: '0 8px 32px rgba(255,209,102,0.15)' }}>
                Explore the Shop
              </button>
            </div>
          </div>
        </section>

        {/* Process: 3-Step Bento */}
        <section className="rounded-xl p-8 md:p-16 mb-32" style={{ background: VC.surfaceContainerLow }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>The Process</h2>
            <p style={{ color: VC.onSurfaceVariant }}>Three simple steps, forty-eight hours of magic.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'water_drop', title: 'The Hydration', desc: 'We start with a high-hydration blend of stone-milled flours, allowing the gluten to develop naturally and slowly.' },
              { icon: 'timer', title: 'Cold Fermentation', desc: 'A long, cool rest in the fridge for 24 hours unlocks complex flavors and makes our bread incredibly easy to digest.' },
              { icon: 'local_fire_department', title: 'The Stone Bake', desc: 'Fired at high heat on heavy stone, resulting in a blistered, caramelized crust and an airy, open interior crumb.' },
            ].map((step) => (
              <div key={step.title}
                className="p-10 rounded-xl flex flex-col items-start gap-6"
                style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.15)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: VC.primaryContainer }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: VC.onPrimaryContainer }}>{step.icon}</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>{step.title}</h3>
                <p style={{ color: VC.onSurfaceVariant }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Gallery */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Follow the Journey</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1542189880-e4bfaebbb3d7?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden group">
                <img src={src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="#" className="inline-flex items-center gap-3 font-bold text-lg hover:underline underline-offset-8" style={{ color: VC.secondary }}>
              <span>@INSTASHOP_STORE ON INSTAGRAM</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 mt-auto" style={{ background: VC.surfaceContainerLow }}>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          <div className="text-lg font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>InstaShop</div>
          <div className="flex gap-8 text-sm uppercase tracking-widest" style={{ color: VC.tertiary }}>
            {['Privacy', 'Terms', 'API'].map((l) => (
              <Link key={l} href="#" className="hover:opacity-70 transition-opacity">{l}</Link>
            ))}
          </div>
          <div className="text-xs uppercase tracking-widest" style={{ color: VC.tertiary }}>
            © 2025 InstaShop. Built for Creators.
          </div>
        </div>
      </footer>
    </div>
  );
}
