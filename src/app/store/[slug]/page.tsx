import Link from 'next/link';
import { db } from '@/lib/db';


const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', onSecondary: '#ffeff0', secondaryContainer: '#ffc2c9',
  tertiary: '#66547a', tertiaryContainer: '#e8d1fe', onTertiaryContainer: '#57456a', onTertiaryFixed: '#433356',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainerHigh: '#e4e2df', surface: '#f9f6f3',
  background: '#f9f6f3', onBackground: '#2f2f2d', onSurface: '#2f2f2d',
  onSurfaceVariant: '#5c5b59', outline: '#787774', outlineVariant: '#afadaa',
};

const DEMO_PRODUCTS = [
  {
    id: '1', name: 'Signature Sourdough', desc: '48-hour fermented, wild yeast loaf.',
    price: '₹650', badge: 'Bestseller', featured: true,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&h=500&fit=crop',
  },
  {
    id: '2', name: 'Botanical Danishes', desc: 'Seasonal fruit & floral cream.',
    price: '₹400', badge: null, featured: false,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=400&h=400&fit=crop',
  },
  {
    id: '3', name: 'Sea Salt Cookie Box', desc: 'Box of 6 melty dark chocolate.',
    price: '₹1,200', badge: null, featured: false,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
  },
];

export default async function StorefrontPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let store: { name: string; description: string | null } | null = null;
  try {
    store = await db.store.findUnique({
      where: { slug },
      select: { name: true, description: true },
    });
  } catch {
    // fallback to demo if DB unavailable
  }

  const storeName = store?.name ?? slug.replace(/-/g, ' ');
  const storeDesc = store?.description ?? 'Small batch artisan goods crafted with love. ✨';

  return (
    <div style={{ background: VC.background, color: VC.onBackground, fontFamily: 'Plus Jakarta Sans, sans-serif', minHeight: '100vh' }}>
      {/* Top Nav */}
      <header
        className="flex items-center justify-between px-6 h-20 w-full sticky top-0 z-50"
        style={{ background: '#FFFCF9', borderBottom: `1px solid ${VC.surfaceContainerHigh}` }}
      >
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="material-symbols-outlined p-2 rounded-full cursor-pointer hover:opacity-70 transition"
              style={{ color: VC.onSurface }}>arrow_back</span>
          </Link>
          <h1 className="font-black text-lg" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onSurface }}>
            @{slug}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:opacity-70 transition rounded-full p-2 relative">
            <span className="material-symbols-outlined" style={{ color: VC.onSurface }}>shopping_bag</span>
            <span className="absolute top-1 right-1 w-4 h-4 text-xs flex items-center justify-center rounded-full font-bold"
              style={{ background: VC.secondary, color: VC.onSecondary, fontSize: '10px' }}>2</span>
          </button>
          <button className="hover:opacity-70 transition rounded-full p-2">
            <span className="material-symbols-outlined" style={{ color: VC.onSurface }}>more_vert</span>
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-32">
        {/* Creator Header */}
        <section className="py-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full scale-110 blur-sm opacity-50"
              style={{ background: VC.primaryContainer }} />
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 relative z-10"
              style={{ borderColor: VC.primaryContainer }}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
                alt={storeName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full flex items-center justify-center border-4 z-20"
              style={{ background: VC.secondary, borderColor: VC.surface }}>
              <span className="material-symbols-outlined text-white" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
          </div>
          <h2 className="text-3xl font-black mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
            {storeName}
          </h2>
          <p className="max-w-sm font-medium leading-relaxed mb-6" style={{ color: VC.onSurfaceVariant }}>{storeDesc}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: VC.surfaceContainerHigh, color: VC.onSurface }}>5.0 ★ (120 reviews)</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: VC.surfaceContainerHigh, color: VC.onSurface }}>Mumbai, IN</span>
          </div>
        </section>

        {/* Products */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold px-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
            Fresh Out the Oven
          </h3>

          {/* Featured Product */}
          <div className="rounded-xl overflow-hidden group" style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.1)' }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <img src={DEMO_PRODUCTS[0].image} alt={DEMO_PRODUCTS[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm"
                style={{ background: VC.primaryContainer, color: VC.onPrimaryContainer }}>Bestseller</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                    {DEMO_PRODUCTS[0].name}
                  </h4>
                  <p className="font-medium" style={{ color: VC.onSurfaceVariant }}>{DEMO_PRODUCTS[0].desc}</p>
                </div>
                <span className="text-2xl font-black" style={{ color: VC.onBackground }}>{DEMO_PRODUCTS[0].price}</span>
              </div>
              <button
                className="w-full py-4 rounded-xl font-black text-lg transition-all active:scale-95 hover:opacity-90"
                style={{
                  background: VC.primaryContainer, color: VC.onPrimaryFixed,
                  boxShadow: '0 8px 32px rgba(255,209,102,0.2)',
                  fontFamily: 'Epilogue, sans-serif',
                }}
              >
                Grab It
              </button>
            </div>
          </div>

          {/* Grid Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEMO_PRODUCTS.slice(1).map((p) => (
              <div key={p.id} className="rounded-xl overflow-hidden group"
                style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.1)' }}>
                <div className="relative overflow-hidden aspect-square">
                  <img src={p.image} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold mb-1" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>{p.name}</h4>
                  <p className="text-sm mb-4" style={{ color: VC.onSurfaceVariant }}>{p.desc}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xl font-black" style={{ color: VC.onBackground }}>{p.price}</span>
                    <button
                      className="flex-1 py-3 rounded-xl font-black text-sm transition-all active:scale-95 hover:opacity-90"
                      style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed, fontFamily: 'Epilogue, sans-serif' }}
                    >
                      Grab It
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mystery Bag — Asymmetric Card */}
          <div className="rounded-xl p-8 flex items-center justify-between gap-6"
            style={{ background: `${VC.tertiaryContainer}4D` }}>
            <div className="flex-1">
              <h4 className="text-2xl font-black mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onTertiaryContainer }}>
                Baker&apos;s Mystery Bag
              </h4>
              <p className="font-medium mb-6" style={{ color: '#614e74' }}>3-4 items from today&apos;s surprise surplus bake.</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-black" style={{ color: VC.onBackground }}>₹1,000</span>
                <button className="px-8 py-3 rounded-xl font-black text-sm transition-all active:scale-95 shadow-md hover:opacity-90"
                  style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed, fontFamily: 'Epilogue, sans-serif' }}>
                  Grab It
                </button>
              </div>
            </div>
            <div className="hidden sm:block w-32 h-32 rotate-6 rounded-xl p-2 shadow-xl"
              style={{ background: VC.surfaceContainerLowest }}>
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop"
                alt="Mystery bag"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 text-center" style={{ borderTop: `1px solid ${VC.surfaceContainerHigh}` }}>
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: VC.onSurfaceVariant }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>verified_user</span>
              Secure checkout via Razorpay
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <p className="text-xs font-medium" style={{ color: VC.onSurfaceVariant }}>
              © 2025 @{slug} • Powered by InstaShop
            </p>
            <div className="flex justify-center gap-6 text-xs font-bold uppercase tracking-tighter" style={{ color: VC.onBackground }}>
              <Link href={`/store/${slug}/about`}>About</Link>
              <Link href="/track-order">Track Order</Link>
              <Link href={`/store/${slug}/contact`}>Contact</Link>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Bottom Nav */}
      <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-2">
        <div
          className="flex justify-around items-center w-[90%] mx-auto h-16 rounded-full px-4"
          style={{
            background: 'rgba(255,252,249,0.7)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(255,209,102,0.2)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          {[
            { icon: 'storefront', active: true, href: `/store/${slug}` },
            { icon: 'search', active: false, href: '#' },
            { icon: 'shopping_bag', active: false, href: `#` },
            { icon: 'person', active: false, href: '#' },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110 active:scale-90"
              style={item.active
                ? { background: VC.primaryContainer, color: VC.onPrimaryContainer }
                : { color: `${VC.onBackground}80` }
              }
            >
              <span className="material-symbols-outlined"
                style={{ fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
