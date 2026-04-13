'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';

const VC = {
  primary: '#745700', primaryContainer: '#f9cc61', onPrimary: '#fff1da',
  onPrimaryFixed: '#443100', onPrimaryContainer: '#5b4400',
  secondary: '#b31446', secondaryContainer: '#ffc2c9', onSecondary: '#ffeff0', onSecondaryContainer: '#920035',
  tertiary: '#66547a', tertiaryContainer: '#e8d1fe', onTertiaryContainer: '#57456a',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f3f0ed',
  surfaceContainerHigh: '#e4e2df', background: '#f9f6f3',
  onBackground: '#2f2f2d', onSurface: '#2f2f2d', onSurfaceVariant: '#5c5b59',
  outline: '#787774', outlineVariant: '#afadaa',
};

const STEPS = ['Store Basics', 'WhatsApp', 'First Product', 'Launch'];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); 
  
  // Form State
  const [storeName, setStoreName] = useState('');
  const [slug, setSlug] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progressPct = ((step + 1) / STEPS.length) * 100;

  const handleContinue = async () => {
    // Basic validation before next step
    if (step === 0 && (!storeName || !slug || slug.length < 3)) {
      toast.error('Please enter a valid store name and a handle (min 3 chars).');
      return;
    }
    if (step === 1 && (!whatsappNumber || whatsappNumber.length < 10)) {
      toast.error('Please enter a valid 10-digit WhatsApp number.');
      return;
    }

    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      // Final Submit
      setIsSubmitting(true);
      try {
        const payload: any = {
          storeName,
          slug: slug.toLowerCase() || storeName.toLowerCase().replace(/\s+/g, '-'),
          whatsappNumber,
        };

        if (productName && price) {
          payload.firstProduct = {
             name: productName,
             price: parseFloat(price),
             description
          };
        }

        const res = await fetch('/api/dashboard/onboarding', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (!data.success) {
          toast.error(data.error || 'Failed to create store.');
          setIsSubmitting(false);
          return;
        }

        toast.success("Store created successfully! 🎉");
        router.push('/dashboard');
      } catch (err) {
        toast.error('Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    }
  };

  const generateSlug = (name: string) => {
    setStoreName(name);
    setSlug(name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
  };

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center"
      style={{ background: VC.background, fontFamily: 'Plus Jakarta Sans, sans-serif', color: VC.onBackground }}>

      {/* Header & Progress */}
      <header className="w-full max-w-4xl mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: VC.primaryContainer, boxShadow: '0 8px 32px rgba(255,209,102,0.2)' }}>
            <span className="material-symbols-outlined" style={{ color: VC.onPrimaryContainer, fontVariationSettings: "'FILL' 1" }}>storefront</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>InstaShop</h1>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex justify-between mb-4 px-2">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.primary }}>Step {step + 1} of {STEPS.length}</span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: VC.onSurfaceVariant }}>{Math.round(progressPct)}% Complete</span>
          </div>
          <div className="h-3 w-full rounded-full overflow-hidden" style={{ background: VC.surfaceContainerHigh }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${progressPct}%`, background: VC.primaryContainer, boxShadow: '0 0 12px rgba(255,209,102,0.5)' }}
            />
          </div>
          <div className="flex justify-between mt-4" style={{ fontSize: '10px' }}>
            {STEPS.map((s, i) => (
              <span key={s} className="hidden sm:inline font-bold uppercase tracking-tighter"
                style={{ color: i <= step ? VC.primary : `${VC.onSurfaceVariant}60` }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Card */}
      <section className="w-full max-w-5xl rounded-xl overflow-hidden flex flex-col md:flex-row border"
        style={{ background: VC.surfaceContainerLowest, boxShadow: '0 8px 32px rgba(255,209,102,0.05)', borderColor: `${VC.outlineVariant}1A` }}>

        {/* Left: Form */}
        <div className="flex-1 p-8 md:p-16">
          {step === 0 && (
            <>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                Name your <br /><span style={{ color: VC.primary }}>empire</span>
              </h2>
              <p className="text-lg mb-10 max-w-md" style={{ color: VC.onSurfaceVariant }}>
                What do you call your business? We'll create a unique link just for you.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Store Name</label>
                  <input
                    className="w-full px-6 py-4 rounded-xl border-none outline-none transition-all"
                    style={{ background: VC.surfaceContainerLow, color: VC.onSurface }}
                    placeholder="e.g. Zara's Boutique"
                    type="text"
                    value={storeName}
                    onChange={(e) => generateSlug(e.target.value)}
                    onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                    onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Store Link (Handle)</label>
                  <div className="flex items-center">
                    <span className="px-4 py-4 rounded-l-xl border-r font-medium" style={{ background: VC.surfaceContainerHigh, color: VC.onSurfaceVariant, borderColor: VC.surfaceContainerLow }}>instashop.in/</span>
                    <input
                      className="w-full px-4 py-4 rounded-r-xl border-none outline-none transition-all"
                      style={{ background: VC.surfaceContainerLow, color: VC.onSurface }}
                      placeholder="zaras-boutique"
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                      onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                      onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                Connect on <br /><span style={{ color: '#25D366' }}>WhatsApp</span>
              </h2>
              <p className="text-lg mb-10 max-w-md" style={{ color: VC.onSurfaceVariant }}>
                Customers love chatting directly. Add the number where you want to receive order alerts and messages.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>WhatsApp Number</label>
                  <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold" style={{ color: VC.onSurfaceVariant }}>+91</span>
                     <input
                        className="w-full pl-14 pr-6 py-4 rounded-xl border-none outline-none transition-all"
                        style={{ background: VC.surfaceContainerLow, color: VC.onSurface }}
                        placeholder="98765 43210"
                        type="tel"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${VC.secondary}`; }}
                        onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                     />
                  </div>
                  <p className="text-xs font-medium mt-2" style={{ color: VC.outline }}>We use this to send you real-time order alerts.</p>
                </div>
              </div>
            </>
          )}

          {step >= 2 && (
            <>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.onBackground }}>
                {step === 2 ? 'Add your' : 'Ready to'} <br /><span style={{ color: VC.primary }}>{step === 2 ? 'First Product' : 'Launch!'}</span>
              </h2>
              <p className="text-lg mb-10 max-w-md" style={{ color: VC.onSurfaceVariant }}>
                {step === 2 ? "Let's capture the core details. You can add images and polish it later in your dashboard." : "Review your details and hit launch."}
              </p>

              <div className="space-y-6">
                {step === 2 ? (
                  <>
                     <div className="space-y-2">
                        <label className="block text-sm font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Product Name</label>
                        <input
                           className="w-full px-6 py-4 rounded-xl border-none outline-none transition-all"
                           style={{ background: VC.surfaceContainerLow, color: VC.onSurface }}
                           placeholder="e.g. Classic Ceramic Vase"
                           type="text"
                           value={productName}
                           onChange={(e) => setProductName(e.target.value)}
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="block text-sm font-bold uppercase tracking-widest" style={{ color: VC.tertiary }}>Price (₹)</label>
                        <div className="relative">
                           <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold" style={{ color: VC.onSurfaceVariant }}>₹</span>
                           <input
                              className="w-full pl-12 pr-6 py-4 rounded-xl border-none outline-none transition-all"
                              style={{ background: VC.surfaceContainerLow, color: VC.onSurface }}
                              placeholder="499.00"
                              type="number"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                           />
                        </div>
                     </div>
                  </>
                ) : (
                   <div className="p-6 rounded-xl space-y-4" style={{ background: VC.surfaceContainerLow }}>
                       <div>
                           <span className="block text-xs font-bold uppercase mb-1" style={{ color: VC.outline }}>Store Name</span>
                           <div className="font-bold">{storeName || 'Not Set'}</div>
                       </div>
                       <div>
                           <span className="block text-xs font-bold uppercase mb-1" style={{ color: VC.outline }}>Store Link</span>
                           <div className="font-bold">instashop.in/{slug}</div>
                       </div>
                       <div>
                           <span className="block text-xs font-bold uppercase mb-1" style={{ color: VC.outline }}>WhatsApp</span>
                           <div className="font-bold">+91 {whatsappNumber}</div>
                       </div>
                       {productName && (
                          <div>
                              <span className="block text-xs font-bold uppercase mb-1" style={{ color: VC.outline }}>First Product</span>
                              <div className="font-bold">{productName} - ₹{price}</div>
                          </div>
                       )}
                   </div>
                )}
              </div>
            </>
          )}

          {/* Actions */}
          <div className="pt-10 flex flex-col sm:flex-row gap-4">
            {step > 0 && (
               <button
                  onClick={() => setStep(step - 1)}
                  disabled={isSubmitting}
                  className="sm:px-8 py-4 font-bold rounded-xl transition-all border"
                  style={{ borderColor: VC.surfaceContainerHigh, color: VC.onSurfaceVariant }}
               >
                  Back
               </button>
            )}
            <button
               onClick={handleContinue}
               disabled={isSubmitting}
               className="flex-1 font-black text-lg py-4 px-10 rounded-xl hover:scale-105 active:scale-95 transition-all w-full flex items-center justify-center disabled:opacity-70 disabled:hover:scale-100"
               style={{
                  background: step === 1 ? '#25D366' : VC.primary,
                  color: step === 1 ? 'white' : VC.onPrimaryFixed,
                  boxShadow: '0 8px 32px rgba(116,87,0,0.15)',
               }}
            >
               {isSubmitting ? 'Launching...' : step === STEPS.length - 1 ? 'Launch My Store! 🚀' : 'Continue'}
            </button>
            {step === 2 && (
               <button
                 onClick={() => setStep(step + 1)}
                 className="mt-2 text-sm font-bold hover:underline mx-auto block sm:hidden"
                 style={{ color: VC.outline }}
               >
                 Skip this step
               </button>
            )}
          </div>
        </div>

        {/* Right: Visual Context depending on step */}
        <div className="hidden md:flex w-full md:w-[40%] p-8 md:p-12 flex-col justify-center items-center text-center gap-6" style={{ background: VC.surfaceContainerLow }}>
            {step === 0 && (
                <div className="w-full max-w-[240px] aspect-[9/16] rounded-2xl bg-white shadow-xl overflow-hidden border-8 relative" style={{ borderColor: VC.surfaceContainerHigh }}>
                    <div className="h-1/3 w-full animate-pulse" style={{ background: VC.primaryContainer }}></div>
                    <div className="absolute top-1/3 -mt-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md p-1">
                        <div className="w-full h-full rounded-full" style={{ background: VC.surfaceContainerHigh }}></div>
                    </div>
                    <div className="pt-12 px-4 space-y-3">
                        <div className="h-4 w-3/4 mx-auto rounded-full" style={{ background: VC.surfaceContainerHigh }}></div>
                        <div className="h-3 w-1/2 mx-auto rounded-full" style={{ background: VC.surfaceContainerHigh }}></div>
                    </div>
                </div>
            )}
            {step === 1 && (
                <div className="w-32 h-32 rounded-full flex justify-center items-center shadow-2xl relative" style={{ background: '#25D366' }}>
                    <span className="material-symbols-outlined text-[64px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full border-4 border-white flex justify-center items-center text-white font-black text-sm">1</div>
                </div>
            )}
            {step >= 2 && (
               <div className="relative group w-full max-w-[200px]">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg border-4 border-white flex flex-col items-center justify-center text-center p-6"
                     style={{ background: VC.surfaceContainerLowest }}>
                     <div className="absolute inset-0 flex items-center justify-center opacity-20" style={{ background: `linear-gradient(135deg, ${VC.primaryContainer}60, ${VC.secondaryContainer}60)` }} />
                     <span className="material-symbols-outlined text-4xl mb-3 relative z-10" style={{ color: step===3&&productName ? '#25D366': VC.primary }}>{step===3&&productName ? 'check_circle' : 'add_a_photo'}</span>
                     <p className="font-bold relative z-10" style={{ color: VC.onBackground }}>{step===3&&productName ? productName : 'Product Image'}</p>
                  </div>
               </div>
            )}
            <p className="max-w-[250px] text-sm font-bold" style={{ color: VC.onSurfaceVariant }}>
                {step === 0 && `Your storefront will be completely mobile optimized and highly converting.`}
                {step === 1 && `90% of buyers on Instagram prefer purchasing through a WhatsApp conversation.`}
                {step === 2 && `Stores that launch with at least one product get 4x more profile clicks.`}
                {step === 3 && `Your store is almost ready to receive real orders and traffic!`}
            </p>
        </div>
      </section>

    </main>
  );
}
