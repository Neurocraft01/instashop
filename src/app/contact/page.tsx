'use client';

import { useState } from 'react';
import Link from 'next/link';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#fff1da',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400', inversePrimary: '#f9cc61',
  secondary: '#b31446', secondaryContainer: '#ffc2c9', onSecondaryContainer: '#920035',
  tertiary: '#66547a',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainerHigh: '#e4e2df', background: '#f9f6f3',
  onBackground: '#2f2f2d', onSurface: '#2f2f2d', onSurfaceVariant: '#5c5b59',
  outline: '#787774', brandDark: '#2B1B3D', brandYellow: '#FFD166',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', instagram: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setTimeout(() => setSent(true), 500);
  };

  return (
    <div style={{ background: VC.background, color: VC.onBackground, fontFamily: 'Plus Jakarta Sans, sans-serif', minHeight: '100vh' }}>
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4"
        style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(255,209,102,0.15)', fontFamily: 'Epilogue, sans-serif' }}>
        <Link href="/" className="text-2xl font-black tracking-tighter" style={{ color: VC.brandDark }}>InstaShop</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/pricing" className="hover:opacity-70 transition-opacity" style={{ color: VC.brandDark }}>Pricing</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity" style={{ color: VC.brandDark }}>About</Link>
          <Link href="/contact" className="font-bold border-b-4 pb-1" style={{ color: VC.brandYellow, borderColor: VC.brandYellow }}>Contact</Link>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform" style={{ color: VC.onSurface }}>shopping_bag</span>
          <button className="px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform"
            style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>Get Started</button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center md:text-left">
          <span className="font-bold tracking-widest uppercase text-sm mb-4 block" style={{ color: VC.secondary }}>Get in touch</span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
            Let&apos;s create something <br />
            <span style={{ color: VC.primaryContainer, textShadow: '0 2px 8px rgba(249,204,97,0.3)' }}>vibrant</span> together.
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: VC.onSurfaceVariant }}>
            Whether you&apos;re looking for a bespoke brand strategy or just want to say hello, our creator studio is always open for bold ideas.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-xl shadow-sm" style={{ background: VC.surfaceContainerLowest }}>
            {sent ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6"
                  style={{ background: VC.primaryContainer }}>
                  <span className="material-symbols-outlined text-4xl" style={{ color: VC.onPrimaryFixed, fontVariationSettings: "'FILL' 1" }}>task_alt</span>
                </div>
                <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'Epilogue, sans-serif' }}>Message sent!</h2>
                <p style={{ color: VC.onSurfaceVariant }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider ml-1" style={{ color: VC.tertiary }}>Name</label>
                    <input
                      className="w-full rounded-xl p-4 border-none outline-none transition-all"
                      style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}
                      placeholder="Your full name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                      onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider ml-1" style={{ color: VC.tertiary }}>Instagram Handle</label>
                    <div className="relative">
                      <span className="absolute left-4 top-4" style={{ color: VC.outline }}>@</span>
                      <input
                        className="w-full rounded-xl p-4 pl-8 border-none outline-none transition-all"
                        style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}
                        placeholder="username"
                        type="text"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                        onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1" style={{ color: VC.tertiary }}>Email</label>
                  <input
                    className="w-full rounded-xl p-4 border-none outline-none transition-all"
                    style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}
                    placeholder="hello@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                    onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1" style={{ color: VC.tertiary }}>Message</label>
                  <textarea
                    className="w-full rounded-xl p-4 border-none outline-none transition-all resize-none"
                    style={{ background: VC.surfaceContainerLow, color: VC.onBackground }}
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                    onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto py-5 px-12 rounded-xl text-xl font-black tracking-tight transition-all active:scale-95"
                  style={{
                    background: VC.primaryContainer,
                    color: VC.onPrimaryFixed,
                    boxShadow: '0 8px 32px rgba(255,209,102,0.3)',
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Side: Map & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-[350px] relative group" style={{ background: VC.surfaceContainerLow }}>
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=640&h=400&fit=crop"
                alt="Location map"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(249,246,243,0.8), transparent)' }} />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl flex items-center gap-4"
                style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)' }}>
                <div className="p-3 rounded-full flex items-center justify-center" style={{ background: VC.primaryContainer }}>
                  <span className="material-symbols-outlined" style={{ color: VC.onPrimaryFixed, fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div>
                  <p className="font-bold" style={{ color: VC.onSurface }}>Creative Hub HQ</p>
                  <p className="text-sm" style={{ color: VC.onSurfaceVariant }}>Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-8 rounded-xl space-y-6" style={{ background: VC.surfaceContainerHigh }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full shadow-sm" style={{ background: '#ffffff' }}>
                  <span className="material-symbols-outlined" style={{ color: VC.secondary }}>chat</span>
                </div>
                <div>
                  <h3 className="text-xl font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>Instant Reach</h3>
                  <p style={{ color: VC.onSurfaceVariant }}>Prefer a quick chat? Our team is active on WhatsApp for direct inquiries.</p>
                </div>
              </div>
              <a
                href="https://wa.me/"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold hover:opacity-80 transition-opacity group"
                style={{ background: VC.onBackground, color: '#ffffff' }}
              >
                <span>Chat on WhatsApp</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 mt-auto" style={{ background: VC.surfaceContainerLow }}>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          <div className="text-lg font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>InstaShop</div>
          <p className="text-sm uppercase tracking-widest" style={{ color: VC.tertiary }}>© 2025 InstaShop. Built for Creators.</p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'API'].map((l) => (
              <Link key={l} href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: VC.tertiary }}>{l}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
