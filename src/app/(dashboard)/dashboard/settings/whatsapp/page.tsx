'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SellerSidebar } from '@/components/vibrant/VibrantLayout';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#fff1da',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', onSecondary: '#ffeff0',
  tertiary: '#66547a', tertiaryContainer: '#e8d1fe', onTertiaryContainer: '#57456a', tertiaryDim: '#5a486d',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainer: '#eae8e4', surfaceContainerHigh: '#e4e2df',
  background: '#f9f6f3', surface: '#f9f6f3', onBackground: '#2f2f2d',
  onSurface: '#2f2f2d', onSurfaceVariant: '#5c5b59',
  outline: '#787774', outlineVariant: '#afadaa',
};

const TEMPLATES = [
  {
    id: 'order-confirmation',
    title: 'Order Confirmation',
    subtitle: 'Sent immediately after a successful checkout.',
    message: 'Hey {customer_name}! 🌸 Your order {order_id} is officially in our hands. We\'re getting it ready with love. Expect another ping when it\'s on the move!',
    vars: ['{customer_name}', '{order_id}', '{product_summary}'],
  },
  {
    id: 'shipping-update',
    title: 'Shipping Update',
    subtitle: 'Sent when the tracking number is generated.',
    message: 'Good news, {customer_name}! Your goodies are on the way. 🚀 Follow the journey here: {tracking_url}. Stay radiant!',
    vars: ['{customer_name}', '{tracking_url}', '{carrier_name}'],
  },
  {
    id: 'delivery-complete',
    title: 'Delivery Complete',
    subtitle: 'Sent after successful delivery confirmation.',
    message: 'Your order is here, {customer_name}! 🎉 We hope you love it. Leave us a review and get 10% off your next order!',
    vars: ['{customer_name}', '{review_link}', '{discount_code}'],
  },
  {
    id: 'abandoned-cart',
    title: 'Abandoned Cart Nudge',
    subtitle: 'Sent 2 hours after cart abandonment.',
    message: 'Hey {customer_name}, you left something behind! ✨ Your cart is waiting. Complete your order today: {cart_url}',
    vars: ['{customer_name}', '{cart_url}', '{cart_total}'],
  },
];

const VARIABLES = ['{customer_name}', '{order_id}', '{shipping_date}', '{store_link}', '{product_name}', '{tracking_url}'];

export default function WhatsAppSettingsPage() {
  const [phone, setPhone] = useState('+91 98765 43210');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (v: string) => {
    navigator.clipboard.writeText(v).catch(() => {});
    setCopied(v);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen flex overflow-hidden"
      style={{ background: VC.background, fontFamily: 'Plus Jakarta Sans, sans-serif', color: VC.onBackground }}>
      <SellerSidebar activeItem="Settings" />

      <main className="flex-1 h-screen overflow-y-auto relative" style={{ background: VC.surface }}>
        {/* TopBar */}
        <header className="flex justify-between items-center px-8 h-20 sticky top-0 z-50"
          style={{ background: VC.surface }}>
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-black tracking-tight" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
              InstaShop
            </h1>
            <nav className="hidden lg:flex gap-6 items-center">
              {['Drafts', 'Templates'].map((l) => (
                <Link key={l} href="#" className="hover:opacity-70 transition-opacity" style={{ color: VC.tertiary }}>{l}</Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full font-bold text-sm hover:scale-95 transition-all"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryContainer }}>
              Create New
            </button>
            <button className="hover:opacity-70 transition-opacity" style={{ color: VC.tertiary }}>
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="hover:opacity-70 transition-opacity" style={{ color: VC.tertiary }}>
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
              style={{ background: VC.surfaceContainerHigh }}>
              <span className="material-symbols-outlined" style={{ color: VC.onSurfaceVariant }}>person</span>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Hero Header */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <span className="font-bold uppercase tracking-widest text-xs" style={{ color: VC.secondary }}>
                InstaShop Connect
              </span>
              <h2 className="text-5xl md:text-7xl font-black mt-4 mb-6 leading-tight"
                style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                WhatsApp <br />Settings.
              </h2>
              <p className="text-lg max-w-md leading-relaxed" style={{ color: VC.tertiaryDim }}>
                Elevate your customer journey with automated touchpoints that feel personal, sun-drenched, and direct.
              </p>
            </div>

            {/* Connected Number Card */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-xl blur-2xl transition-all" style={{ background: `${VC.primary}1A` }} />
              <div className="relative p-8 rounded-xl"
                style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.2)', border: '1px solid rgba(175,173,170,0.15)' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: '#25D366' }}>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.888 11.888 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: VC.tertiary }}>Connected Number</p>
                    <h4 className="text-lg font-bold" style={{ color: VC.onBackground }}>{phone}</h4>
                  </div>
                  <span className="ml-auto flex h-2 w-2 rounded-full animate-pulse" style={{ background: VC.secondary }} />
                </div>
                <button className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
                  style={{ background: VC.surfaceContainerLow, color: VC.tertiary }}>
                  Change Connection
                </button>
              </div>
            </div>
          </section>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Templates Column */}
            <div className="md:col-span-8 flex flex-col gap-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                  Messaging Templates
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                  style={{ background: VC.tertiaryContainer, color: VC.onTertiaryContainer }}>
                  {TEMPLATES.length} Active
                </span>
              </div>

              {TEMPLATES.map((t) => (
                <div key={t.id}
                  className="rounded-xl p-8 transition-all duration-500 hover:opacity-95"
                  style={{
                    background: editingId === t.id ? VC.surfaceContainerLowest : VC.surfaceContainerLow,
                    border: '1px solid rgba(175,173,170,0.15)',
                  }}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-bold" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>{t.title}</h4>
                      <p className="text-sm mt-1" style={{ color: VC.tertiary }}>{t.subtitle}</p>
                    </div>
                    <button onClick={() => setEditingId(editingId === t.id ? null : t.id)}
                      style={{ color: VC.secondary }}>
                      <span className="material-symbols-outlined">{editingId === t.id ? 'check' : 'edit'}</span>
                    </button>
                  </div>

                  {editingId === t.id ? (
                    <textarea
                      className="w-full rounded-xl p-6 text-sm leading-relaxed resize-none outline-none border-dashed border-2"
                      style={{
                        background: 'rgba(255,255,255,0.5)',
                        color: VC.onBackground,
                        borderColor: `${VC.outlineVariant}4D`,
                      }}
                      rows={4}
                      defaultValue={t.message}
                      onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                      onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                    />
                  ) : (
                    <div className="rounded-xl p-6 text-sm italic leading-relaxed border-dashed border-2"
                      style={{ background: 'rgba(255,255,255,0.5)', borderColor: `${VC.outlineVariant}4D` }}>
                      {t.message.split(/(\{[^}]+\})/g).map((part, i) =>
                        part.match(/^\{.*\}$/) ? (
                          <span key={i} className="font-bold not-italic" style={{ color: VC.secondary }}>{part}</span>
                        ) : part
                      )}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.vars.map((v) => (
                      <span key={v} className="px-2 py-1 rounded-md text-xs font-bold"
                        style={{ background: VC.surfaceContainerHigh, color: VC.tertiary }}>
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Column */}
            <div className="md:col-span-4 flex flex-col gap-8">
              {/* Variable Library */}
              <div className="rounded-xl p-8 border"
                style={{ background: `${VC.primaryContainer}1A`, borderColor: `${VC.primary}33` }}>
                <h4 className="text-lg font-bold mb-6" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                  Variable Library
                </h4>
                <ul className="flex flex-col gap-4">
                  {VARIABLES.map((v) => (
                    <li key={v}
                      className="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ background: VC.surfaceContainerLowest, border: '1px solid rgba(175,173,170,0.15)' }}
                      onClick={() => handleCopy(v)}
                    >
                      <code className="font-bold text-sm" style={{ color: VC.secondary }}>{v}</code>
                      <span className="material-symbols-outlined text-sm" style={{ color: copied === v ? VC.primary : VC.outlineVariant }}>
                        {copied === v ? 'check' : 'content_copy'}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs mt-6 leading-relaxed" style={{ color: VC.tertiary }}>
                  Click a variable to copy it to clipboard. Use these in templates to personalize every message.
                </p>
              </div>

              {/* Support Hours */}
              <div className="rounded-xl p-8 overflow-hidden relative group" style={{ background: VC.surfaceContainerHigh }}>
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-all group-hover:opacity-60"
                  style={{ background: `${VC.secondary}1A` }} />
                <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Support Hours</h4>
                <p className="text-sm mb-6" style={{ color: VC.tertiary }}>Automate 'Away' messages outside these windows.</p>
                <div className="space-y-3">
                  {[
                    { day: 'Mon – Fri', hours: '09:00 – 18:00', closed: false },
                    { day: 'Saturday', hours: '10:00 – 14:00', closed: false },
                    { day: 'Sunday', hours: 'Closed', closed: true },
                  ].map((s) => (
                    <div key={s.day} className="flex justify-between items-center text-xs">
                      <span className="font-bold" style={{ color: VC.onBackground }}>{s.day}</span>
                      <span className="font-bold" style={{ color: s.closed ? VC.secondary : VC.tertiary }}>{s.hours}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full py-2 rounded-full text-xs font-bold uppercase tracking-widest border hover:opacity-80 transition-opacity"
                  style={{ borderColor: VC.outlineVariant, color: VC.onBackground }}>
                  Configure Hours
                </button>
              </div>

              {/* Upgrade CTA */}
              <div className="relative h-48 rounded-xl overflow-hidden group" style={{ background: VC.surfaceContainerHigh }}>
                <div className="w-full h-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #f9cc61 0%, #ffc2c9 100%)' }} />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(249,246,243,0.9) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs font-black uppercase tracking-widest" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                    Need More Power?
                  </span>
                  <p className="mt-1" style={{ fontSize: '10px', color: VC.tertiary }}>Unlock WhatsApp Broadcasts with Studio Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background typo */}
        <div className="fixed -bottom-20 -right-20 pointer-events-none select-none" style={{ opacity: 0.03 }}>
          <span className="font-black leading-none" style={{ fontSize: '20rem', fontFamily: 'Epilogue, sans-serif' }}>WA</span>
        </div>
      </main>

      {/* Floating Action Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 rounded-xl z-50 border"
        style={{
          background: 'rgba(249,246,243,0.7)', backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(255,209,102,0.2)', borderColor: 'rgba(255,255,255,0.2)',
        }}>
        <div className="flex items-center gap-2 pr-6 border-r" style={{ borderColor: `${VC.outlineVariant}33` }}>
          <span className="w-2 h-2 rounded-full" style={{ background: VC.secondary }} />
          <span className="text-xs font-bold" style={{ color: VC.onBackground }}>WhatsApp API: Active</span>
        </div>
        <div className="flex gap-4">
          <button className="p-2 hover:opacity-70 transition-opacity" style={{ color: VC.tertiary }}>
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 hover:opacity-70 transition-opacity" style={{ color: VC.tertiary }}>
            <span className="material-symbols-outlined">history</span>
          </button>
          <button className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
            style={{ background: VC.onBackground, color: VC.surface }}>
            Save Changes
          </button>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full px-6 py-4 flex justify-around items-center z-50"
        style={{ background: VC.surfaceContainerHigh }}>
        {[
          { icon: 'dashboard', label: 'Home', href: '/dashboard', active: false },
          { icon: 'analytics', label: 'Stats', href: '/dashboard/analytics', active: false },
          { icon: 'add', label: 'New', fab: true, href: '#' },
          { icon: 'settings', label: 'Config', href: '/dashboard/settings', active: true },
          { icon: 'group', label: 'Profile', href: '#', active: false },
        ].map((item, i) => (
          <Link key={i} href={item.href}
            className={`flex flex-col items-center gap-1 ${item.fab ? 'relative -top-8' : ''}`}>
            {item.fab ? (
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: VC.primaryContainer, color: VC.onPrimaryContainer }}>
                <span className="material-symbols-outlined">add</span>
              </div>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{
                  color: item.active ? VC.onBackground : VC.tertiary,
                  fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0",
                }}>{item.icon}</span>
                <span style={{ fontSize: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: item.active ? VC.onBackground : VC.tertiary }}>{item.label}</span>
              </>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
