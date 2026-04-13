'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) { setError('Please agree to the Terms of Service.'); return; }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Registration failed.'); setLoading(false); return; }

      const signInResult = await signIn('credentials', { redirect: false, email, password });
      if (signInResult?.error) { setError('Account created but sign-in failed. Please sign in.'); setLoading(false); return; }
      router.push('/onboarding');
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col md:flex-row p-4 md:p-8 gap-6"
      style={{ background: '#f9f6f3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
    >
      {/* Branding & Benefits Sidebar */}
      <section
        className="md:w-1/3 lg:w-1/4 flex flex-col justify-between rounded-[2rem] p-10 relative overflow-hidden"
        style={{ background: '#e4e2df' }}
      >
        <div className="z-10 relative">
          <div className="flex items-center gap-3 mb-16">
            <div
              className="w-12 h-12 rounded-[2rem] flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #FFD166 0%, #f9cc61 100%)',
                boxShadow: '0 8px 32px rgba(255,209,102,0.3)',
              }}
            >
              <span className="material-symbols-outlined text-3xl" style={{ color: '#443100', fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <span className="font-black text-2xl tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: '#2f2f2d' }}>InstaShop</span>
          </div>
          <div className="space-y-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: '#2f2f2d' }}>
              Start your <span className="italic" style={{ color: '#b31446' }}>creative</span> empire.
            </h1>
            <div className="space-y-8">
              {[
                { icon: 'check_circle', bg: '#f9cc61', fg: '#5b4400', title: 'Launch in 2 mins', desc: 'Automated store setup with AI assistance.' },
                { icon: 'credit_card_off', bg: '#e8d1fe', fg: '#57456a', title: 'No credit card', desc: 'Free tier available for all new creators.' },
                { icon: 'groups', bg: '#ffc2c9', fg: '#920035', title: 'Join 500+ sellers', desc: 'Global community of digital entrepreneurs.' },
              ].map((feat) => (
                <div key={feat.title} className="flex items-start gap-4">
                  <div className="rounded-full p-2 mt-1 flex-shrink-0" style={{ background: feat.bg }}>
                    <span className="material-symbols-outlined text-xl" style={{ color: feat.fg, fontVariationSettings: "'FILL' 1" }}>{feat.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#2f2f2d' }}>{feat.title}</h3>
                    <p className="text-sm" style={{ color: '#5c5b59' }}>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Decorative blob */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: '#eabe55' }} />
        {/* Testimonial */}
        <div className="mt-20 z-10 relative">
          <div className="p-6 rounded-[2rem] shadow-sm" style={{ background: '#ffffff' }}>
            <p className="text-sm font-medium mb-4 italic" style={{ color: '#2f2f2d' }}>
              &quot;The fastest way I&apos;ve ever moved from idea to revenue.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                style={{ background: '#e4e2df' }}>
                <span className="w-full h-full flex items-center justify-center text-xs font-bold" style={{ color: '#66547a' }}>EV</span>
              </div>
              <div>
                <p className="text-xs font-bold" style={{ color: '#2f2f2d' }}>Elena Vance</p>
                <p className="text-[10px] uppercase tracking-widest" style={{ color: '#66547a' }}>Digital Artist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sign Up Form */}
      <section
        className="flex-1 rounded-[2rem] flex items-center justify-center p-6 md:p-12"
        style={{ background: '#f3f0ed' }}
      >
        <div className="w-full max-w-xl">
          <div className="mb-12">
            {/* Step progress dots */}
            <div className="flex gap-2 mb-6">
              <div className="h-1.5 w-12 rounded-full" style={{ background: 'linear-gradient(135deg, #FFD166, #f9cc61)' }} />
              <div className="h-1.5 w-12 rounded-full" style={{ background: '#dfdcd9' }} />
              <div className="h-1.5 w-12 rounded-full" style={{ background: '#dfdcd9' }} />
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Epilogue, sans-serif', color: '#2f2f2d' }}>Create your account</h2>
            <p style={{ color: '#5c5b59' }}>Step 1 of 3: Basic Information</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-[1rem] text-sm font-bold" style={{ background: '#ffc2c9', color: '#920035' }}>
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-2">
              <label className="font-bold text-xs uppercase tracking-widest ml-1" style={{ color: '#66547a' }}>Full Name</label>
              <div className="relative group">
                <input
                  id="sign-up-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-16 px-6 rounded-[1rem] transition-all outline-none shadow-sm"
                  style={{ background: '#ffffff', color: '#2f2f2d', border: '2px solid transparent' }}
                  placeholder="Janice Miller"
                  required
                  onFocus={(e) => { e.target.style.borderColor = '#EF476F'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                />
                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2" style={{ color: '#afadaa' }}>person</span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="font-bold text-xs uppercase tracking-widest ml-1" style={{ color: '#66547a' }}>Email Address</label>
              <div className="relative group">
                <input
                  id="sign-up-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-16 px-6 rounded-[1rem] transition-all outline-none shadow-sm"
                  style={{ background: '#ffffff', color: '#2f2f2d', border: '2px solid transparent' }}
                  placeholder="janice@creator.com"
                  required
                  onFocus={(e) => { e.target.style.borderColor = '#EF476F'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                />
                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2" style={{ color: '#afadaa' }}>alternate_email</span>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="font-bold text-xs uppercase tracking-widest ml-1" style={{ color: '#66547a' }}>Secure Password</label>
              <div className="relative group">
                <input
                  id="sign-up-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-16 px-6 rounded-[1rem] transition-all outline-none shadow-sm"
                  style={{ background: '#ffffff', color: '#2f2f2d', border: '2px solid transparent' }}
                  placeholder="••••••••"
                  required
                  onFocus={(e) => { e.target.style.borderColor = '#EF476F'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                />
                <button
                  type="button"
                  className="absolute right-6 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: '#afadaa' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-3 p-4 rounded-[1rem]" style={{ background: '#ffffff' }}>
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 rounded"
                style={{ accentColor: '#b31446' }}
              />
              <label className="text-xs leading-relaxed" style={{ color: '#5c5b59' }} htmlFor="terms">
                I agree to the{' '}
                <Link href="#" className="font-bold hover:underline" style={{ color: '#b31446' }}>Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" className="font-bold hover:underline" style={{ color: '#b31446' }}>Privacy Policy</Link>.
              </label>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                id="sign-up-submit"
                type="submit"
                disabled={loading}
                className="w-full h-16 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-60"
                style={{
                  background: 'linear-gradient(135deg, #FFD166 0%, #f9cc61 100%)',
                  color: '#443100',
                  fontFamily: 'Epilogue, sans-serif',
                  boxShadow: '0 8px 32px rgba(255,209,102,0.4)',
                }}
              >
                <span>{loading ? 'Creating Account...' : 'Get Started Now'}</span>
                {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
            </div>

            <p className="text-center text-sm mt-8" style={{ color: '#5c5b59' }}>
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="font-bold transition-colors underline underline-offset-4 decoration-4"
                style={{ color: '#2f2f2d', textDecorationColor: '#f9cc61' }}
              >
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </section>

      {/* Social Proof Floating (Desktop) */}
      <div className="hidden lg:block fixed top-20 right-20 space-y-4 z-40">
        <div className="p-4 rounded-[1rem] flex items-center gap-4 shadow-xl border"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.2)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#b31446' }}>
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
          </div>
          <div>
            <p className="text-xs font-bold" style={{ color: '#2f2f2d' }}>Just Sold!</p>
            <p className="text-[10px]" style={{ color: '#5c5b59' }}>Custom Brush Pack for $49</p>
          </div>
        </div>
        <div className="p-4 rounded-[1rem] flex items-center gap-4 shadow-xl border ml-12"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.2)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#745700' }}>
            <span className="material-symbols-outlined" style={{ color: '#fff1da', fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
          </div>
          <div>
            <p className="text-xs font-bold" style={{ color: '#2f2f2d' }}>New Store</p>
            <p className="text-[10px]" style={{ color: '#5c5b59' }}>Nomad Studio is now live</p>
          </div>
        </div>
      </div>

      {/* Creator Floating Bar */}
      <nav
        className="fixed bottom-8 left-1/2 -translate-x-1/2 px-8 py-4 rounded-full flex items-center gap-12 z-50 border"
        style={{
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          borderColor: 'rgba(255,255,255,0.3)',
        }}
      >
        {[
          { icon: 'home', label: 'Home', href: '/', active: false },
          { icon: 'explore', label: 'Explore', href: '#', active: false },
          { icon: 'person_add', label: 'Join', href: '/sign-up', active: true },
          { icon: 'help_center', label: 'Help', href: '#', active: false },
        ].map((nav) => (
          <Link key={nav.label} href={nav.href} className="flex flex-col items-center gap-1 group">
            <span className="material-symbols-outlined transition-colors" style={{
              color: nav.active ? '#b31446' : '#5c5b59',
              fontVariationSettings: nav.active ? "'FILL' 1" : "'FILL' 0",
            }}>{nav.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter" style={{ color: nav.active ? '#b31446' : '#5c5b59' }}>{nav.label}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
