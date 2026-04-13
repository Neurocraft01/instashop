'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (result?.error) {
      setError('Invalid email or password. Please try again.');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <body className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: '#f9f6f3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: '#f9cc61' }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: '#ffc2c9' }} />

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col items-center z-10">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-black tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: '#2f2f2d' }}>
            InstaShop<span style={{ color: '#f9cc61' }}>.</span>
          </h1>
        </div>

        {/* Login Card */}
        <section className="w-full max-w-xl rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
          style={{
            background: '#ffffff',
            boxShadow: '0 8px 32px rgba(255,209,102,0.15)',
          }}>
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black tracking-tight leading-tight mb-3"
              style={{ fontFamily: 'Epilogue, sans-serif', color: '#2f2f2d' }}>
              Welcome back, Creator.
            </h2>
            <p className="font-medium" style={{ color: '#5c5b59' }}>Log in to manage your radiant storefront.</p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center gap-3 py-4 px-6 rounded-[2rem] font-bold tracking-tight transition-all active:scale-95"
              style={{ background: '#f3f0ed', color: '#5c5b59' }}>
              <span className="material-symbols-outlined" style={{ color: '#EA4335' }}>ads_click</span>
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 px-6 rounded-[2rem] font-bold tracking-tight transition-all active:scale-95"
              style={{ background: '#f3f0ed', color: '#5c5b59' }}>
              <span className="material-symbols-outlined" style={{ color: '#E1306C' }}>photo_camera</span>
              Instagram
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center mb-10">
            <div className="flex-grow h-px" style={{ background: '#e4e2df' }} />
            <span className="mx-4 text-xs font-bold uppercase tracking-widest" style={{ color: '#afadaa' }}>OR EMAIL</span>
            <div className="flex-grow h-px" style={{ background: '#e4e2df' }} />
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-4 rounded-xl text-sm font-bold" style={{ background: '#ffc2c9', color: '#920035' }}>
              {error}
            </div>
          )}

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 ml-4" style={{ color: '#66547a' }}>
                Email Address
              </label>
              <input
                id="sign-in-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[2rem] px-6 py-4 text-sm transition-all outline-none"
                style={{
                  background: '#f3f0ed',
                  color: '#2f2f2d',
                  border: 'none',
                }}
                placeholder="creator@instashop.com"
                required
                onFocus={(e) => { e.target.style.boxShadow = '0 0 0 2px #EF476F'; }}
                onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-widest ml-4" style={{ color: '#66547a' }}>Password</label>
                <Link href="#" className="text-xs font-bold mr-4" style={{ color: '#b31446' }}>Forgot?</Link>
              </div>
              <input
                id="sign-in-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-[2rem] px-6 py-4 text-sm transition-all outline-none"
                style={{ background: '#f3f0ed', color: '#2f2f2d', border: 'none' }}
                placeholder="••••••••"
                required
                onFocus={(e) => { e.target.style.boxShadow = '0 0 0 2px #EF476F'; }}
                onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Submit */}
            <button
              id="sign-in-submit"
              type="submit"
              disabled={loading}
              className="w-full font-black text-lg py-5 rounded-[2rem] transition-all mt-4 active:scale-95 disabled:opacity-60"
              style={{
                background: 'linear-gradient(135deg, #FFD166 0%, #f9cc61 100%)',
                color: '#443100',
                fontFamily: 'Epilogue, sans-serif',
                boxShadow: '0 8px 20px rgba(255,209,102,0.4)',
              }}
            >
              {loading ? 'Signing In...' : 'Enter Studio'}
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center mt-10 font-medium" style={{ color: '#5c5b59' }}>
            New here?{' '}
            <Link href="/sign-up" className="font-bold border-b-2 pb-0.5" style={{ color: '#2f2f2d', borderColor: '#f9cc61' }}>
              Start your creation
            </Link>
          </p>
        </section>

        {/* Asymmetric floating images (desktop only) */}
        <div className="hidden lg:block absolute right-24 bottom-12 w-64 h-80 rounded-[2rem] overflow-hidden shadow-xl transition-transform duration-500 rotate-6 hover:rotate-3">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=500&fit=crop"
            alt="Modern bright creator studio"
          />
          <div className="absolute inset-0 mix-blend-multiply" style={{ background: 'rgba(249,204,97,0.2)' }} />
        </div>
        <div className="hidden lg:block absolute left-20 top-24 w-48 h-48 rounded-[2rem] overflow-hidden shadow-xl transition-transform duration-500 -rotate-12 hover:-rotate-6">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1503602642458-232111445657?w=300&h=300&fit=crop"
            alt="Digital creator workspace"
          />
          <div className="absolute inset-0 mix-blend-multiply" style={{ background: 'rgba(255,194,201,0.2)' }} />
        </div>
      </main>

      {/* Creator Floating Bar */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 rounded-[2rem] z-50"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(255,209,102,0.2)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full animate-pulse" style={{ background: '#b31446' }} />
          <span className="text-xs font-bold uppercase tracking-tighter" style={{ color: '#2f2f2d' }}>Live Creators: 1,402</span>
        </div>
        <div className="w-px h-6" style={{ background: '#e4e2df' }} />
        <Link href="#" className="text-xs font-bold uppercase tracking-tighter" style={{ color: '#5c5b59' }}>Support</Link>
        <Link href="#" className="text-xs font-bold uppercase tracking-tighter" style={{ color: '#5c5b59' }}>Privacy</Link>
      </div>
    </body>
  );
}
