import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — InstaShop | Start Selling for Free',
  description: 'Simple, transparent pricing for every Indian Instagram seller. Start free, scale as you grow. Plans from ₹199/month.',
};

const VC = {
  brandDark: '#2B1B3D',
  brandYellow: '#FFD166',
  primary: '#745700',
  primaryContainer: '#f9cc61',
  onPrimaryFixed: '#443100',
  onPrimaryContainer: '#5b4400',
  secondary: '#b31446',
  secondaryContainer: '#ffc2c9',
  onSecondaryContainer: '#920035',
  surfaceContainerLow: '#f3f0ed',
  surfaceContainerHigh: '#e4e2df',
  surfaceContainerLowest: '#ffffff',
  onBackground: '#2f2f2d',
  onSurfaceVariant: '#5c5b59',
  tertiary: '#66547a',
};

const plans = [
  {
    name: 'Free Trial',
    tagline: 'Try before you commit',
    price: '₹0',
    period: '14 days',
    cta: 'Start Free Trial',
    ctaHref: '/sign-up',
    highlight: false,
    badge: null,
    cardStyle: { background: VC.surfaceContainerLowest, border: `2px solid ${VC.surfaceContainerHigh}` },
    features: [
      { icon: 'inventory_2', text: 'Up to 10 Products' },
      { icon: 'shopping_bag', text: '50 Orders / month' },
      { icon: 'storefront', text: 'Branded Mini-Store' },
      { icon: 'chat', text: 'Basic WhatsApp Alerts' },
      { icon: 'palette', text: 'Standard Themes' },
      { icon: 'analytics', text: 'Basic Analytics' },
    ],
    notIncluded: ['Custom Domain', 'Coupon Codes', 'Priority Support'],
  },
  {
    name: 'Starter',
    tagline: 'For growing creators',
    price: '₹199',
    period: 'per month',
    cta: 'Get Starter',
    ctaHref: '/sign-up?plan=starter',
    highlight: false,
    badge: null,
    cardStyle: { background: VC.surfaceContainerLowest, border: `2px solid ${VC.surfaceContainerHigh}` },
    features: [
      { icon: 'inventory_2', text: '100 Products' },
      { icon: 'shopping_bag', text: '500 Orders / month' },
      { icon: 'storefront', text: 'Branded Mini-Store' },
      { icon: 'chat', text: 'WhatsApp Order Automation' },
      { icon: 'language', text: 'Custom Domain' },
      { icon: 'local_offer', text: 'Coupon & Discount Codes' },
      { icon: 'analytics', text: 'Advanced Analytics' },
      { icon: 'people', text: 'CRM — Customer Tags' },
    ],
    notIncluded: ['Multiple Staff Accounts', 'Priority Support', 'Remove Branding'],
  },
  {
    name: 'Growth',
    tagline: 'Most popular for serious sellers',
    price: '₹499',
    period: 'per month',
    cta: 'Get Growth',
    ctaHref: '/sign-up?plan=growth',
    highlight: true,
    badge: 'Most Popular',
    cardStyle: {
      background: VC.surfaceContainerLowest,
      border: `2px solid ${VC.primaryContainer}`,
      boxShadow: '0 16px 48px rgba(249,204,97,0.3)',
    },
    features: [
      { icon: 'all_inclusive', text: '500 Products' },
      { icon: 'shopping_bag', text: '2,000 Orders / month' },
      { icon: 'storefront', text: 'Branded Mini-Store' },
      { icon: 'chat', text: 'Full WhatsApp CRM Automation' },
      { icon: 'language', text: 'Custom Domain' },
      { icon: 'local_offer', text: 'Coupons & Flash Sales' },
      { icon: 'analytics', text: 'Revenue & Trend Analytics' },
      { icon: 'people', text: 'Full CRM with Lead Tracking' },
      { icon: 'group', text: '2 Staff Accounts' },
      { icon: 'support_agent', text: 'Priority Email Support' },
    ],
    notIncluded: ['Remove Branding'],
  },
  {
    name: 'Pro',
    tagline: 'For high-volume power sellers',
    price: '₹999',
    period: 'per month',
    cta: 'Go Pro',
    ctaHref: '/sign-up?plan=pro',
    highlight: false,
    badge: 'Best Value',
    cardStyle: { background: VC.brandDark, border: '2px solid transparent' },
    features: [
      { icon: 'all_inclusive', text: 'Unlimited Products' },
      { icon: 'shopping_bag', text: 'Unlimited Orders' },
      { icon: 'storefront', text: 'Branded Mini-Store' },
      { icon: 'chat', text: 'Full WhatsApp CRM Automation' },
      { icon: 'language', text: 'Custom Domain' },
      { icon: 'local_offer', text: 'Coupons, Flash Sales & More' },
      { icon: 'analytics', text: 'Full Business Analytics' },
      { icon: 'people', text: 'Unlimited CRM Contacts' },
      { icon: 'group', text: 'Unlimited Staff Accounts' },
      { icon: 'support_agent', text: 'Priority WhatsApp Support' },
      { icon: 'hide_source', text: 'Remove InstaShop Branding' },
      { icon: 'api', text: 'API Access' },
    ],
    notIncluded: [],
  },
];

const faqs = [
  { q: 'Can I cancel anytime?', a: 'Yes. You can cancel your subscription at any time. Your store stays active until the end of your billing period.' },
  { q: 'Is there a setup fee?', a: 'Absolutely not. No hidden fees, no setup charges. Pay only your monthly plan price.' },
  { q: 'What happens after my Free Trial?', a: 'After 14 days, you can choose any paid plan. Your store data is always preserved — nothing is deleted.' },
  { q: 'Do you support COD and UPI?', a: 'Yes! Both Cash on Delivery and UPI payments are supported out of the box for all Indian sellers.' },
  { q: 'Can I switch plans later?', a: 'Yes. You can upgrade or downgrade your plan at any time from your dashboard settings.' },
];

export default function PricingPage() {
  return (
    <div style={{ background: '#f9f6f3', color: VC.onBackground, fontFamily: 'Plus Jakarta Sans, sans-serif', minHeight: '100vh' }}>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50"
        style={{ background: 'rgba(255,252,249,0.85)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${VC.surfaceContainerHigh}` }}>
        <div className="flex items-center justify-between px-8 h-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-10">
            <Link href="/" className="font-black text-2xl tracking-tighter" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>InstaShop</Link>
            <nav className="hidden md:flex gap-2">
              <Link href="/pricing" className="px-4 py-2 rounded-full font-bold text-sm" style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>Pricing</Link>
              <Link href="/about" className="px-4 py-2 rounded-full text-sm hover:bg-[#f3f0ed] transition-all" style={{ color: VC.brandDark }}>About</Link>
              <Link href="/contact" className="px-4 py-2 rounded-full text-sm hover:bg-[#f3f0ed] transition-all" style={{ color: VC.brandDark }}>Contact</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/sign-in" className="px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: VC.onBackground }}>Sign In</Link>
            <Link href="/sign-up" className="px-6 py-2.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
              Start Free
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-28">

        {/* Hero */}
        <section className="text-center py-20 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
            <span className="material-symbols-outlined text-base">verified</span>
            No Hidden Fees · No Setup Costs · Cancel Anytime
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>
            Simple, Honest Pricing
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: VC.onSurfaceVariant }}>
            Start free. Upgrade when you're ready. Every plan includes a complete storefront, order dashboard, and WhatsApp automation.
          </p>
        </section>

        {/* Plans */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
            {plans.map((plan) => {
              const isDark = plan.name === 'Pro';
              const textColor = isDark ? '#fff' : VC.onBackground;
              const subColor = isDark ? 'rgba(255,255,255,0.6)' : VC.onSurfaceVariant;
              const checkColor = isDark ? VC.brandYellow : VC.primary;
              const crossColor = isDark ? 'rgba(255,255,255,0.3)' : VC.surfaceContainerHigh;

              return (
                <div key={plan.name}
                  className="rounded-3xl p-8 flex flex-col relative transition-transform duration-300 hover:-translate-y-1"
                  style={{ ...plan.cardStyle }}>

                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
                      style={{
                        background: plan.highlight ? VC.primaryContainer : (isDark ? VC.brandYellow : VC.secondaryContainer),
                        color: plan.highlight ? VC.onPrimaryFixed : (isDark ? VC.onPrimaryFixed : VC.onSecondaryContainer),
                      }}>
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="text-xl font-black mb-1" style={{ color: plan.highlight ? VC.primary : (isDark ? VC.brandYellow : textColor) }}>{plan.name}</h2>
                    <p className="text-sm" style={{ color: subColor }}>{plan.tagline}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-5xl font-black" style={{ color: textColor }}>{plan.price}</span>
                    <span className="text-sm ml-2" style={{ color: subColor }}>/{plan.period}</span>
                  </div>

                  <Link href={plan.ctaHref}
                    className="w-full py-3.5 rounded-2xl font-bold text-center text-sm mb-8 transition-all hover:scale-105 block"
                    style={plan.highlight
                      ? { background: VC.primaryContainer, color: VC.onPrimaryFixed, boxShadow: '0 8px 24px rgba(249,204,97,0.4)' }
                      : isDark
                        ? { background: VC.brandYellow, color: VC.onPrimaryFixed }
                        : { background: VC.surfaceContainerHigh, color: VC.onBackground }
                    }>
                    {plan.cta}
                  </Link>

                  <div className="space-y-3 flex-grow">
                    {plan.features.map((f) => (
                      <div key={f.text} className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-[18px] shrink-0" style={{ color: checkColor, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span style={{ color: textColor }}>{f.text}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-center gap-3 text-sm opacity-40">
                        <span className="material-symbols-outlined text-[18px] shrink-0" style={{ color: crossColor }}>cancel</span>
                        <span style={{ color: textColor }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 px-6 mb-12" style={{ background: VC.surfaceContainerLow }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>Everything Compared</h2>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: VC.brandDark, color: '#fff' }}>
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="px-4 py-4 font-semibold text-center">Free</th>
                    <th className="px-4 py-4 font-semibold text-center" style={{ color: VC.brandYellow }}>Starter</th>
                    <th className="px-4 py-4 font-semibold text-center" style={{ color: VC.brandYellow }}>Growth</th>
                    <th className="px-4 py-4 font-semibold text-center" style={{ color: VC.brandYellow }}>Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Products', '10', '100', '500', 'Unlimited'],
                    ['Orders / month', '50', '500', '2,000', 'Unlimited'],
                    ['Branded Storefront', '✓', '✓', '✓', '✓'],
                    ['WhatsApp Automation', 'Basic', 'Full', 'Full', 'Full'],
                    ['Custom Domain', '—', '✓', '✓', '✓'],
                    ['Coupon Codes', '—', '✓', '✓', '✓'],
                    ['CRM & Leads', '—', 'Basic', 'Full', 'Full'],
                    ['Analytics', 'Basic', 'Advanced', 'Full', 'Full'],
                    ['Staff Accounts', '—', '—', '2', 'Unlimited'],
                    ['Remove Branding', '—', '—', '—', '✓'],
                    ['Priority Support', '—', '—', 'Email', 'WhatsApp'],
                    ['API Access', '—', '—', '—', '✓'],
                  ].map(([feature, ...vals], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? 'transparent' : VC.surfaceContainerLow }}>
                      <td className="px-6 py-3.5 font-medium" style={{ color: VC.onBackground }}>{feature}</td>
                      {vals.map((v, j) => (
                        <td key={j} className="px-4 py-3.5 text-center font-semibold"
                          style={{ color: v === '—' ? VC.surfaceContainerHigh : v === '✓' ? VC.primary : VC.onBackground }}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl p-6 cursor-pointer" style={{ background: VC.surfaceContainerLow }}>
                <summary className="font-bold list-none flex justify-between items-center gap-4" style={{ color: VC.onBackground }}>
                  {faq.q}
                  <span className="material-symbols-outlined shrink-0 group-open:rotate-180 transition-transform" style={{ color: VC.primary }}>expand_more</span>
                </summary>
                <p className="mt-4 leading-relaxed" style={{ color: VC.onSurfaceVariant }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-16" style={{ background: VC.brandDark }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white" style={{ fontFamily: 'Epilogue, sans-serif' }}>
              Ready to launch your store?
            </h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>Start your 14-day free trial. No credit card needed.</p>
            <Link href="/sign-up"
              className="inline-block px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform"
              style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
              Create My Free Store
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8" style={{ background: VC.surfaceContainerLow }}>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          <div className="text-lg font-black" style={{ fontFamily: 'Epilogue, sans-serif', color: VC.brandDark }}>InstaShop</div>
          <div className="flex gap-8 text-sm" style={{ color: VC.tertiary }}>
            {['Privacy', 'Terms', 'About', 'Contact'].map((l) => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="hover:opacity-70 transition-opacity">{l}</Link>
            ))}
          </div>
          <div className="text-xs uppercase tracking-widest" style={{ color: VC.tertiary }}>
            © 2025 InstaShop. Built for Indian Creators.
          </div>
        </div>
      </footer>
    </div>
  );
}
