import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { SellerSidebar } from '@/components/vibrant/VibrantLayout';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#fff1da',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', secondaryContainer: '#ffc2c9', onSecondaryContainer: '#920035',
  tertiary: '#66547a', surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f3f0ed', surfaceContainer: '#eae8e4',
  surfaceContainerHigh: '#e4e2df', background: '#f9f6f3',
  onBackground: '#2f2f2d', onSurfaceVariant: '#5c5b59', outline: '#787774',
};

export default async function BillingPage() {
  const session = await auth();
  if (!session?.user) redirect('/sign-in');

  return (
    <div className="min-h-screen flex" style={{ background: VC.background, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <SellerSidebar activeItem="Settings" />

      <main className="flex-1 p-6 md:p-12 max-w-6xl mx-auto w-full">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Billing & Usage</span>
            <h1 className="text-5xl font-black mt-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Manage Your Plan.</h1>
            <p className="mt-4 max-w-md" style={{ color: VC.onSurfaceVariant }}>
              Scale your InstaShop seamlessly. Review your current usage and upgrade to unlock premium features.
            </p>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: VC.surfaceContainerLow }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: VC.secondaryContainer, color: VC.onSecondaryContainer }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Current Plan</p>
              <p className="font-bold text-lg" style={{ color: VC.onBackground }}>Starter Plan</p>
            </div>
          </div>
        </header>

        {/* Usage Meters */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Products */}
          <div className="rounded-xl p-8" style={{ background: VC.surfaceContainerLowest, border: '1px solid rgba(175,173,170,0.15)' }}>
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-3xl" style={{ color: VC.primary }}>shopping_bag</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full uppercase" style={{ background: VC.primaryContainer, color: VC.onPrimaryContainer }}>80% Used</span>
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Products</h3>
            <p className="text-sm mb-6" style={{ color: VC.onSurfaceVariant }}>40 / 50 products added</p>
            <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: VC.surfaceContainer }}>
              <div className="h-full rounded-full" style={{ width: '80%', background: VC.primaryContainer }} />
            </div>
          </div>

          {/* Orders */}
          <div className="rounded-xl p-8" style={{ background: VC.surfaceContainerLowest, border: '1px solid rgba(175,173,170,0.15)' }}>
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-3xl" style={{ color: VC.secondary }}>receipt_long</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full uppercase" style={{ background: VC.secondaryContainer, color: VC.onSecondaryContainer }}>45% Used</span>
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Monthly Orders</h3>
            <p className="text-sm mb-6" style={{ color: VC.onSurfaceVariant }}>225 / 500 orders processed</p>
            <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: VC.surfaceContainer }}>
              <div className="h-full rounded-full" style={{ width: '45%', background: VC.secondary }} />
            </div>
          </div>

          {/* Next Billing */}
          <div className="rounded-xl p-8 flex flex-col justify-between" style={{ background: VC.tertiary, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#faefff' }}>Next Billing Date</h3>
              <p className="text-3xl font-black" style={{ color: '#faefff' }}>October 24, 2025</p>
            </div>
            <div className="mt-8">
              <p className="text-sm opacity-80 mb-4" style={{ color: '#faefff' }}>You&apos;ll be charged ₹1,499.00</p>
              <button className="w-full py-3 font-bold rounded-full transition-transform hover:scale-105"
                style={{ background: VC.surfaceContainerLowest, color: VC.tertiary }}>
                View Invoices
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Find the perfect fit.</h2>
            <p className="mt-2" style={{ color: VC.onSurfaceVariant }}>Transparent pricing for creators at every stage.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Free */}
            <div className="rounded-xl p-10 flex flex-col items-center text-center"
              style={{ background: VC.background, border: '1px solid rgba(175,173,170,0.15)' }}>
              <span className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: VC.tertiary }}>The Hobbyist</span>
              <h4 className="text-3xl font-black mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Free</h4>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black">₹0</span>
                <span className="ml-1" style={{ color: VC.onSurfaceVariant }}>/mo</span>
              </div>
              <ul className="space-y-4 mb-10 w-full text-left">
                {['10 Products', '50 Monthly Orders'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined" style={{ color: VC.primary }}>check_circle</span> {f}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-sm opacity-40">
                  <span className="material-symbols-outlined">cancel</span> Custom Domain
                </li>
              </ul>
              <button className="mt-auto w-full py-4 border-2 font-bold rounded-xl uppercase text-xs tracking-widest"
                style={{ borderColor: VC.outline, color: VC.onBackground }}>
                Your Current Plan
              </button>
            </div>

            {/* Starter (Featured) */}
            <div className="relative rounded-xl p-10 flex flex-col items-center text-center scale-105 z-10 border-2"
              style={{ background: VC.surfaceContainerLowest, borderColor: VC.primaryContainer, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
              <div className="absolute -top-4 px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                style={{ background: VC.primaryContainer, color: VC.onPrimaryContainer }}>Recommended</div>
              <span className="text-xs font-bold uppercase tracking-widest mb-4 mt-2" style={{ color: VC.tertiary }}>Growing Creator</span>
              <h4 className="text-3xl font-black mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Starter</h4>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black">₹1,499</span>
                <span className="ml-1" style={{ color: VC.onSurfaceVariant }}>/mo</span>
              </div>
              <ul className="space-y-4 mb-10 w-full text-left">
                {['50 Products', '500 Monthly Orders', 'Basic Analytics'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined" style={{ color: VC.primary, fontVariationSettings: "'FILL' 1" }}>check_circle</span> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full py-4 font-black rounded-xl uppercase text-xs tracking-widest"
                style={{ background: VC.primaryContainer, color: VC.onPrimaryContainer }}>
                Manage Billing
              </button>
            </div>

            {/* Pro */}
            <div className="rounded-xl p-10 flex flex-col items-center text-center"
              style={{ background: VC.background, border: '1px solid rgba(175,173,170,0.15)' }}>
              <span className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: VC.tertiary }}>Power Seller</span>
              <h4 className="text-3xl font-black mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Pro</h4>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black">₹4,999</span>
                <span className="ml-1" style={{ color: VC.onSurfaceVariant }}>/mo</span>
              </div>
              <ul className="space-y-4 mb-10 w-full text-left">
                {['Unlimited Products', 'Unlimited Orders', 'Advanced SEO Tools'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined" style={{ color: VC.secondary }}>check_circle</span> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full py-4 font-black rounded-xl uppercase text-xs tracking-widest text-white hover:opacity-90"
                style={{ background: VC.secondary }}>
                Upgrade Now
              </button>
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="rounded-xl p-12 overflow-hidden relative" style={{ background: VC.surfaceContainerLow }}>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Need more power?</h3>
              <p className="mb-8" style={{ color: VC.onSurfaceVariant }}>
                InstaShop Enterprise offers custom solutions for businesses processing over 10,000 orders monthly.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all" style={{ color: VC.tertiary }}>
                Contact Sales for Enterprise
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&h=300&fit=crop"
                alt="Enterprise team"
                className="w-full h-64 object-cover rounded-xl shadow-2xl rotate-3"
              />
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: VC.primaryContainer }} />
        </section>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 flex items-center justify-around px-4 z-50"
          style={{ background: VC.surfaceContainerLowest, boxShadow: '0 -8px 32px rgba(255,209,102,0.2)' }}>
          {[
            { icon: 'dashboard', label: 'Home', href: '/dashboard', active: false },
            { icon: 'analytics', label: 'Stats', href: '/dashboard/analytics', active: false },
            { icon: 'credit_card', label: 'Billing', href: '/dashboard/billing', active: true },
            { icon: 'settings', label: 'Settings', href: '/dashboard/settings', active: false },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined" style={{
                color: item.active ? VC.primary : VC.onSurfaceVariant,
                fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0",
              }}>{item.icon}</span>
              <span className="text-xs font-bold uppercase tracking-tighter" style={{ color: item.active ? VC.primary : VC.onSurfaceVariant }}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
