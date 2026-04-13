import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { SellerSidebar } from '@/components/vibrant/VibrantLayout';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#ffffff', onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', onSecondary: '#ffeff0', secondaryContainer: '#ffc2c9', onSecondaryContainer: '#920035',
  tertiary: '#66547a', tertiaryContainer: '#e8d1fe', onTertiaryContainer: '#57456a',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainer: '#eae8e4', surfaceContainerHigh: '#e4e2df',
  background: '#f9f6f3', onBackground: '#2f2f2d', onSurfaceVariant: '#5c5b59',
  outline: '#787774', outlineVariant: '#afadaa',
};

export default async function StoreSettingsPage() {
  const session = await auth();
  if (!session?.user) redirect('/sign-in');

  return (
    <div className="min-h-screen flex" style={{ background: VC.background, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <SellerSidebar activeItem="Settings" />

      <main className="flex-1 flex flex-col">
        {/* Top Nav */}
        <header className="sticky top-0 z-40 flex justify-between items-center w-full px-8 py-4"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(255,209,102,0.15)' }}>
          <span className="text-2xl font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>InstaShop</span>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input className="pl-10 pr-4 py-2 rounded-full text-sm w-64 border-none outline-none"
                style={{ background: VC.surfaceContainer, color: VC.onBackground }}
                placeholder="Search settings..." type="text" />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2" style={{ color: VC.outline }}>search</span>
            </div>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition">
              <span className="material-symbols-outlined" style={{ color: VC.onBackground }}>notifications</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 md:p-10 max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h1 className="text-4xl font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Store Settings</h1>
            <p className="mt-2 text-lg" style={{ color: VC.outline }}>Configure your digital storefront&apos;s appearance and communication channels.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tab Navigation */}
            <nav className="lg:col-span-3 flex flex-col gap-4">
              <button className="flex items-center gap-4 p-6 rounded-xl text-left transition-all"
                style={{ background: VC.surfaceContainerLow, color: VC.onSurfaceVariant }}>
                <span className="material-symbols-outlined">tune</span>
                <span className="font-bold">General</span>
              </button>
              <button className="flex items-center gap-4 p-6 rounded-xl text-left transition-all shadow-lg"
                style={{ background: VC.primaryContainer, color: VC.onPrimaryContainer }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                <span className="font-bold">Appearance</span>
              </button>
              <button className="flex items-center gap-4 p-6 rounded-xl text-left transition-all"
                style={{ background: VC.surfaceContainerLow, color: VC.onSurfaceVariant }}>
                <span className="material-symbols-outlined">chat</span>
                <span className="font-bold">WhatsApp</span>
              </button>
              <button className="flex items-center gap-4 p-6 rounded-xl text-left transition-all"
                style={{ background: VC.surfaceContainerLow, color: VC.onSurfaceVariant }}>
                <span className="material-symbols-outlined">local_shipping</span>
                <span className="font-bold">Shipping</span>
              </button>
            </nav>

            {/* Settings Canvas */}
            <div className="lg:col-span-9 space-y-8">
              {/* Appearance Section */}
              <section className="rounded-xl p-8 space-y-10" style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.15)' }}>
                <div className="flex items-center justify-between border-b pb-6" style={{ borderColor: VC.surfaceContainer }}>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Brand Visuals</h2>
                  <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    style={{ background: VC.secondaryContainer, color: VC.onSecondaryContainer }}>Live Preview</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Logo Uploader */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Store Logo</label>
                    <div className="relative group cursor-pointer">
                      <div className="w-40 h-40 rounded-xl flex items-center justify-center border-2 border-dashed overflow-hidden"
                        style={{ background: VC.surfaceContainerLow, borderColor: VC.outlineVariant }}>
                        <div className="w-full h-full flex items-center justify-center" style={{ background: VC.primaryContainer }}>
                          <span className="material-symbols-outlined text-4xl" style={{ color: VC.onPrimaryFixed }}>storefront</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                          style={{ background: 'rgba(0,0,0,0.4)' }}>
                          <span className="material-symbols-outlined text-white text-3xl">upload</span>
                        </div>
                      </div>
                      <p className="text-xs mt-2 italic" style={{ color: VC.outline }}>Recommended: 500×500px SVG or PNG</p>
                    </div>
                  </div>

                  {/* Banner Uploader */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Hero Banner</label>
                    <div className="relative group cursor-pointer">
                      <div className="w-full h-40 rounded-xl flex items-center justify-center border-2 border-dashed overflow-hidden"
                        style={{ background: VC.surfaceContainerLow, borderColor: VC.outlineVariant }}>
                        <div className="w-full h-full flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #FFD166 0%, #ffc2c9 100%)' }}>
                          <span className="material-symbols-outlined text-4xl" style={{ color: '#ffffff' }}>image</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                          style={{ background: 'rgba(0,0,0,0.4)' }}>
                          <span className="material-symbols-outlined text-white text-3xl">add_photo_alternate</span>
                        </div>
                      </div>
                      <p className="text-xs mt-2 italic" style={{ color: VC.outline }}>Recommended: 1600×400px</p>
                    </div>
                  </div>
                </div>

                {/* Theme Selector */}
                <div className="space-y-6">
                  <label className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Storefront Theme</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { name: 'Vibrant', active: true, bg: VC.surfaceContainerLow, accent: VC.primary },
                      { name: 'Minimal', active: false, bg: '#ffffff', accent: VC.onBackground },
                      { name: 'Dark', active: false, bg: '#2f2f2d', accent: VC.primaryContainer },
                    ].map((theme) => (
                      <div key={theme.name}
                        className="p-1 rounded-xl border-4 transition-all cursor-pointer"
                        style={{ borderColor: theme.active ? VC.primary : 'transparent' }}>
                        <div className="h-24 rounded-xl flex items-end p-3 relative overflow-hidden" style={{ background: theme.bg }}>
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full" style={{ background: theme.accent }} />
                          <div className="w-full h-2 rounded-full" style={{ background: theme.accent }} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: theme.active ? VC.onBackground : '#5c5b59' }}>
                              {theme.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Picker */}
                <div className="space-y-6">
                  <label className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Brand Primary Color</label>
                  <div className="flex flex-wrap gap-4">
                    {['#745700', '#EF476F', '#06D6A0', '#118AB2', '#073B4C'].map((color, i) => (
                      <button key={color}
                        className="w-12 h-12 rounded-full transition-transform hover:scale-105"
                        style={{
                          background: color,
                          boxShadow: i === 0 ? `0 0 0 4px ${VC.primaryContainer}` : undefined,
                          transform: i === 0 ? 'scale(1.1)' : undefined,
                        }} />
                    ))}
                    <button className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: VC.surfaceContainerHigh, border: `2px solid ${VC.outlineVariant}` }}>
                      <span className="material-symbols-outlined text-sm" style={{ color: VC.outline }}>colorize</span>
                    </button>
                    <div className="flex items-center gap-3 ml-auto">
                      <span className="font-mono text-sm px-4 py-2 rounded-lg" style={{ background: VC.surfaceContainerLow }}>#745700</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Store Info */}
              <section className="rounded-xl p-8 space-y-8" style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.15)' }}>
                <div className="border-b pb-6" style={{ borderColor: VC.surfaceContainer }}>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Store Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Store Name', placeholder: 'My Amazing Store', type: 'text' },
                    { label: 'Store Slug', placeholder: 'my-amazing-store', type: 'text' },
                    { label: 'Business Email', placeholder: 'hello@store.com', type: 'email' },
                    { label: 'Support Phone', placeholder: '+91 98765 43210', type: 'tel' },
                  ].map((field) => (
                    <div key={field.label} className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>{field.label}</label>
                      <input
                        type={field.type}
                        className="w-full rounded-xl p-4 outline-none transition-all"
                        style={{ background: VC.surfaceContainerLow, color: VC.onBackground, border: 'none' }}
                        placeholder={field.placeholder}
                        onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                        onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* WhatsApp Section */}
              <section className="rounded-xl p-8 space-y-10" style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.15)' }}>
                <div className="flex items-center gap-4 border-b pb-6" style={{ borderColor: VC.surfaceContainer }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,211,102,0.15)' }}>
                    <span className="material-symbols-outlined" style={{ color: '#25D366' }}>chat</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>WhatsApp Integration</h2>
                    <p className="text-sm" style={{ color: VC.outline }}>Manage how customers message you directly.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Business Number</label>
                    <div className="flex gap-2">
                      <select className="rounded-xl p-3 border-none outline-none w-24" style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}>
                        <option>+91</option><option>+1</option><option>+44</option>
                      </select>
                      <input className="flex-1 rounded-xl p-3 border-none outline-none" style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}
                        placeholder="98765 43210" type="text" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Button Visibility</label>
                    <div className="flex items-center gap-4 p-3 rounded-xl" style={{ background: VC.surfaceContainerLow }}>
                      <div className="w-10 h-6 rounded-full relative cursor-pointer" style={{ background: VC.primary }}>
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                      <span className="text-sm font-medium">Show on Product Pages</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Auto-Reply Template</label>
                    <button className="text-xs font-bold" style={{ color: VC.secondary }}>Preview Message</button>
                  </div>
                  <textarea
                    className="w-full rounded-xl p-4 resize-none border-none outline-none"
                    style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}
                    placeholder="Hi! I'm interested in {product_name}. Can you help me?"
                    rows={4}
                  />
                  <div className="flex flex-wrap gap-2">
                    {['{product_name}', '{order_id}', '{customer_name}'].map((tag) => (
                      <span key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors"
                        style={{ background: VC.surfaceContainerHigh, color: VC.onBackground }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Actions */}
              <div className="flex justify-end gap-4 pb-20">
                <button className="px-8 py-4 rounded-full font-bold transition-all"
                  style={{ color: VC.outline }}>
                  Discard Changes
                </button>
                <button className="px-10 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
                  style={{ background: VC.primary, color: VC.onPrimary, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                  Save Store Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center py-4 px-6 z-50"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)' }}>
          {[
            { icon: 'dashboard', label: 'Home', href: '/dashboard', active: false },
            { icon: 'inventory_2', label: 'Products', href: '/dashboard/products', active: false },
            { icon: 'settings', label: 'Settings', href: '/dashboard/settings', active: true },
            { icon: 'account_circle', label: 'Profile', href: '/dashboard/settings', active: false },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined" style={{
                color: item.active ? VC.primary : VC.onSurfaceVariant,
                fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0",
              }}>{item.icon}</span>
              <span className="text-xs font-bold" style={{ color: item.active ? VC.primary : VC.onSurfaceVariant }}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
