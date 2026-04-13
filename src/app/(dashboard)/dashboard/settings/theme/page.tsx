'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SellerSidebar } from '@/components/vibrant/VibrantLayout';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#fff1da',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', onSecondaryContainer: '#920035',
  tertiary: '#66547a', onTertiary: '#faefff',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainer: '#eae8e4', surfaceContainerHigh: '#e4e2df', surfaceContainerHighest: '#dfdcd9',
  background: '#f9f6f3', surface: '#f9f6f3', onBackground: '#2f2f2d', onSurface: '#2f2f2d',
  onSurfaceVariant: '#5c5b59', inverseSurface: '#0e0e0d',
  outline: '#787774', outlineVariant: '#afadaa',
  brandDark: '#2B1B3D', brandYellow: '#FFD166',
};

const THEMES = [
  { id: 'vibrant', label: 'Vibrant', desc: 'Sun-drenched colors and high energy.', icon: 'flare', fill: true },
  { id: 'minimal', label: 'Minimal', desc: 'Clean typography and intentional space.', icon: 'blur_on', fill: false, muted: true },
  { id: 'dark', label: 'Dark', desc: 'Deep violet warmth and luminous depth.', icon: 'dark_mode', fill: false, dark: true },
];

const PALETTE = ['#FFD166', '#EF476F', '#06D6A0', '#118AB2', '#2B1B3D'];

const FONTS = ['Clash Display / Satoshi', 'Cabinet Grotesk / Inter', 'General Sans / Public Sans'];

export default function ThemeCustomizerPage() {
  const [activeTheme, setActiveTheme] = useState('vibrant');
  const [activePalette, setActivePalette] = useState('#FFD166');
  const [activeFont, setActiveFont] = useState(FONTS[0]);

  return (
    <div className="min-h-screen flex" style={{ background: VC.background, fontFamily: 'Plus Jakarta Sans, sans-serif', color: VC.onBackground }}>
      <SellerSidebar activeItem="Settings" />

      {/* Top Nav */}
      <div className="flex-1 flex flex-col">
        <header className="fixed top-0 right-0 z-50 flex justify-between items-center px-8 h-20 w-full"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(255,209,102,0.1)' }}>
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
              InstaShop
            </span>
            <nav className="hidden md:flex items-center gap-6">
              {['Dashboard', 'Analytics', 'Inventory'].map((item) => (
                <Link key={item} href="/dashboard" className="hover:opacity-70 transition-opacity" style={{ color: '#64748b' }}>{item}</Link>
              ))}
              <Link href="/dashboard/settings/theme" className="font-bold border-b-4 pb-1"
                style={{ color: VC.brandDark, borderColor: VC.brandYellow, fontFamily: 'Epilogue, sans-serif' }}>Storefront</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-xl font-bold active:scale-95 transition-transform"
              style={{ background: VC.brandYellow, color: VC.brandDark }}>Create New</button>
            <div className="flex gap-2">
              {['notifications', 'settings'].map((icon) => (
                <span key={icon} className="material-symbols-outlined p-2 rounded-full cursor-pointer hover:opacity-70 transition"
                  style={{ color: '#64748b' }}>{icon}</span>
              ))}
            </div>
            <div className="w-10 h-10 rounded-full border-2 overflow-hidden flex items-center justify-center"
              style={{ background: VC.primaryContainer, borderColor: VC.brandYellow }}>
              <span className="material-symbols-outlined" style={{ color: VC.onPrimaryFixed }}>person</span>
            </div>
          </div>
        </header>

        {/* Sidebar + Main */}
        <div className="flex pt-20 min-h-screen">
          {/* Custom sidebar for this page */}
          <aside className="hidden lg:flex flex-col py-8 h-[calc(100vh-5rem)] w-64 fixed left-64 top-20 z-40"
            style={{ background: VC.surfaceContainerHigh, fontFamily: 'Epilogue, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px' }}>
            <div className="px-8 mb-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full" style={{ background: VC.primaryContainer }} />
              <div>
                <p style={{ color: VC.onBackground, fontSize: '10px' }}>Solana Studio</p>
                <p style={{ color: VC.primary, fontSize: '8px', letterSpacing: 'normal', textTransform: 'none' }}>Verified Creator</p>
              </div>
            </div>
            <nav className="flex flex-col">
              {['Overview', 'Sales', 'Products'].map((item) => (
                <Link key={item} href="/dashboard" className="pl-10 py-4 hover:opacity-70 transition-opacity"
                  style={{ color: '#64748b' }}>{item}</Link>
              ))}
              <Link href="/dashboard/settings/theme"
                className="rounded-l-full ml-4 pl-6 py-4 transition-all"
                style={{ background: '#ffffff', color: VC.brandDark, boxShadow: '-4px 0 0 #FFD166' }}>Settings</Link>
              <Link href="/dashboard/customers" className="pl-10 py-4 hover:opacity-70 transition-opacity"
                style={{ color: '#64748b' }}>Customers</Link>
            </nav>
            <div className="mt-auto px-6">
              <button className="w-full py-4 rounded-xl text-xs tracking-widest uppercase hover:scale-105 transition-transform"
                style={{ background: VC.brandDark, color: VC.brandYellow }}>View Live Store</button>
            </div>
          </aside>

          <main className="flex-1 lg:ml-64 p-8" style={{ background: VC.surface }}>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12">
                {/* Controls */}
                <div className="w-full md:w-5/12 space-y-10">
                  <div>
                    <span className="font-bold uppercase tracking-widest text-xs" style={{ color: VC.tertiary }}>
                      InstaShop Dashboard
                    </span>
                    <h1 className="text-5xl font-black leading-none mt-2" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                      Theme<br />Customizer
                    </h1>
                    <p className="mt-4 max-w-sm" style={{ color: VC.onSurfaceVariant }}>
                      Curate your store&apos;s visual identity with editorial precision. Every pixel radiates your brand&apos;s unique energy.
                    </p>
                  </div>

                  {/* Theme Presets */}
                  <section className="space-y-6">
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Visual Atmosphere</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {THEMES.map((t) => (
                        <button key={t.id}
                          onClick={() => setActiveTheme(t.id)}
                          className="flex items-center gap-4 p-6 rounded-xl border-2 text-left transition-all hover:opacity-90"
                          style={{
                            background: t.dark ? VC.inverseSurface : activeTheme === t.id ? VC.surfaceContainerLowest : VC.surfaceContainerLow,
                            borderColor: activeTheme === t.id ? VC.primary : 'transparent',
                          }}>
                          <div className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{
                              background: t.dark ? '#1e293b' : t.muted ? VC.surfaceContainerHigh : VC.primaryContainer,
                            }}>
                            <span className="material-symbols-outlined"
                              style={{
                                color: t.dark ? '#94a3b8' : t.muted ? VC.outline : VC.onPrimaryContainer,
                                fontVariationSettings: t.fill ? "'FILL' 1" : "'FILL' 0",
                              }}>{t.icon}</span>
                          </div>
                          <div>
                            <p className="font-bold" style={{ color: t.dark ? '#ffffff' : VC.onBackground }}>{t.label}</p>
                            <p className="text-xs" style={{ color: t.dark ? '#94a3b8' : VC.onSurfaceVariant }}>{t.desc}</p>
                          </div>
                          {activeTheme === t.id && (
                            <span className="ml-auto material-symbols-outlined" style={{ color: VC.primary }}>check_circle</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </section>

                  {/* Color & Font */}
                  <section className="grid grid-cols-1 gap-8">
                    {/* Color */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Brand Signature</h3>
                      <div className="p-6 rounded-xl space-y-4" style={{ background: VC.surfaceContainerLow }}>
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-bold uppercase tracking-wider" style={{ color: VC.onSurfaceVariant }}>Primary Color</label>
                          <span className="text-xs font-mono px-2 py-1 rounded-md border"
                            style={{ background: VC.surfaceContainerLowest, borderColor: `${VC.outlineVariant}33` }}>
                            {activePalette}
                          </span>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                          {PALETTE.map((color) => (
                            <button key={color}
                              onClick={() => setActivePalette(color)}
                              className="w-10 h-10 rounded-full transition-transform hover:scale-110"
                              style={{
                                background: color,
                                boxShadow: activePalette === color ? `0 0 0 3px white, 0 0 0 5px ${VC.primary}` : undefined,
                                transform: activePalette === color ? 'scale(1.1)' : undefined,
                              }}
                            />
                          ))}
                          <button className="w-10 h-10 rounded-full flex items-center justify-center border hover:opacity-80 transition"
                            style={{ background: VC.surfaceContainerLowest, borderColor: VC.outlineVariant }}>
                            <span className="material-symbols-outlined text-xs" style={{ color: VC.outline }}>add</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Typography */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Typography</h3>
                      <div className="p-6 rounded-xl space-y-4" style={{ background: VC.surfaceContainerLow }}>
                        <select
                          value={activeFont}
                          onChange={(e) => setActiveFont(e.target.value)}
                          className="w-full rounded-xl px-4 py-3 outline-none border-none"
                          style={{ background: VC.surfaceContainerLowest, color: VC.onBackground, fontFamily: 'Epilogue, sans-serif' }}>
                          {FONTS.map((f) => <option key={f}>{f}</option>)}
                        </select>
                        <div className="flex items-center gap-2 px-2">
                          <span className="text-3xl font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Aa</span>
                          <span className="text-sm" style={{ color: VC.onSurfaceVariant }}>Display hierarchy preview</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <button className="flex-1 py-4 font-bold rounded-xl hover:scale-105 active:scale-95 transition-all"
                      style={{ background: VC.primary, color: VC.onPrimaryFixed, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
                      Save Changes
                    </button>
                    <button className="px-8 py-4 font-bold rounded-xl hover:opacity-80 transition-opacity"
                      style={{ background: VC.surfaceContainerHighest, color: VC.onBackground }}>
                      Reset
                    </button>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="w-full md:w-7/12 sticky top-24 h-fit">
                  <div className="relative mx-auto w-full max-w-[340px] rounded-[3.5rem] p-4 shadow-2xl overflow-hidden"
                    style={{
                      background: VC.inverseSurface,
                      aspectRatio: '9/19',
                      boxShadow: `0 0 0 8px ${VC.surfaceContainerHigh}`,
                    }}>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 rounded-b-3xl z-20"
                      style={{ background: VC.inverseSurface }} />
                    {/* Screen */}
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative flex flex-col bg-white">
                      {/* Preview Header */}
                      <header className="px-6 pt-10 pb-4 flex justify-between items-center sticky top-0 z-10"
                        style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)' }}>
                        <span className="font-black text-lg" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Solana.</span>
                        <div className="flex gap-2">
                          <span className="material-symbols-outlined text-sm">search</span>
                          <span className="material-symbols-outlined text-sm">shopping_bag</span>
                        </div>
                      </header>

                      <div className="flex-1 overflow-y-auto">
                        <div className="px-6 py-4">
                          {/* Hero */}
                          <div className="relative h-48 rounded-3xl overflow-hidden mb-6">
                            <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #ffc2c9 0%, #f9cc61 100%)' }} />
                            <div className="absolute inset-0 flex flex-col justify-end p-4"
                              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}>
                              <span className="text-xs font-bold uppercase px-2 py-1 rounded-full mb-1 w-fit"
                                style={{ background: activePalette, color: VC.brandDark, fontSize: '8px' }}>New Drop</span>
                              <h4 className="text-white font-bold text-xl leading-tight" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                                Solar Eclipse<br />Collection
                              </h4>
                            </div>
                          </div>

                          {/* Categories */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {[
                              { icon: 'checkroom', label: 'Apparel', active: true },
                              { icon: 'diamond', label: 'Accessories', active: false },
                            ].map((cat) => (
                              <div key={cat.label} className="p-4 rounded-2xl flex flex-col items-center text-center"
                                style={{ background: VC.surfaceContainerLow }}>
                                <div className="w-10 h-10 rounded-full mb-2 flex items-center justify-center"
                                  style={{ background: cat.active ? activePalette : VC.surfaceContainerHigh }}>
                                  <span className="material-symbols-outlined text-sm"
                                    style={{ color: cat.active ? VC.brandDark : VC.onSurfaceVariant }}>{cat.icon}</span>
                                </div>
                                <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cat.label}</span>
                              </div>
                            ))}
                          </div>

                          {/* Product Card */}
                          <div className="rounded-3xl p-3 border-2 mb-20 bg-white" style={{ borderColor: `${VC.primary}1A` }}>
                            <div className="w-full aspect-square rounded-2xl mb-3 overflow-hidden"
                              style={{ background: 'linear-gradient(135deg, #FFD166 0%, #ffc2c9 100%)' }}>
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-6xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                  inventory_2
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between items-start px-1">
                              <div>
                                <h5 className="font-bold text-xs">Vortex Runners</h5>
                                <p style={{ fontSize: '10px', color: '#64748b' }}>Sport Edition</p>
                              </div>
                              <p className="font-black text-xs" style={{ color: VC.primary }}>₹18,900</p>
                            </div>
                            <button className="w-full mt-3 py-2 rounded-xl font-bold text-xs"
                              style={{ background: VC.primary, color: VC.onPrimaryFixed, fontSize: '10px' }}>
                              Add to Bag
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Nav Preview */}
                      <nav className="absolute bottom-0 left-0 w-full flex justify-around items-center px-6 h-20 rounded-t-[2.5rem] z-10"
                        style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(24px)', boxShadow: '0 -8px 32px rgba(255,209,102,0.15)' }}>
                        {[
                          { icon: 'storefront', label: 'Shop', active: true },
                          { icon: 'search', label: 'Search', active: false },
                          { icon: 'shopping_bag', label: 'Bag', active: false },
                          { icon: 'person', label: 'Account', active: false },
                        ].map((item) => (
                          <div key={item.label} className="flex flex-col items-center justify-center"
                            style={{ color: item.active ? activePalette : '#94a3b8' }}>
                            <span className="material-symbols-outlined"
                              style={{ fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
                            <span style={{ fontFamily: 'Epilogue, sans-serif', fontSize: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Preview Badge */}
                  <div className="mt-8 flex justify-center">
                    <div className="px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl"
                      style={{ background: VC.onBackground, color: '#ffffff' }}>
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: VC.secondary }} />
                      Live Store Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-6 h-24 rounded-t-[3rem] z-50"
        style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(24px)', boxShadow: '0 -8px 32px rgba(255,209,102,0.15)' }}>
        {[
          { icon: 'storefront', label: 'Shop', active: false },
          { icon: 'search', label: 'Search', active: false },
          { icon: 'shopping_bag', label: 'Bag', active: false },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center justify-center hover:scale-110 transition-transform"
            style={{ color: '#94a3b8' }}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span style={{ fontFamily: 'Epilogue, sans-serif', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>{item.label}</span>
          </div>
        ))}
        {/* Active FAB */}
        <div className="flex flex-col items-center justify-center rounded-full w-16 h-16 -mt-8 scale-110"
          style={{ background: VC.brandYellow, color: VC.brandDark, boxShadow: '0 8px 20px rgba(255,209,102,0.4)' }}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span style={{ fontFamily: 'Epilogue, sans-serif', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>Account</span>
        </div>
      </nav>
    </div>
  );
}
