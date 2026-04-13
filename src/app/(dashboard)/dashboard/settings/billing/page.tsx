export default function Page() {
  return (
    <div className="vibrant-wrapper">

<div className="flex min-h-screen">
{/*  SideNavBar  */}
<aside className="hidden md:flex flex-col h-screen w-64 left-0 sticky bg-[#e4e2df] dark:bg-[#2B1B3D] py-8 px-4 gap-8 font-['Epilogue'] text-sm font-semibold uppercase tracking-widest">
<div className="flex items-center gap-3 px-4">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-[#2B1B3D]">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</div>
<div>
<h1 className="text-xl font-bold text-[#2B1B3D] dark:text-[#FFFFFF] normal-case tracking-normal">Studio</h1>
<p className="text-[10px] opacity-60 tracking-widest">Creator Pro</p>
</div>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                    Analytics
                </a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
                    Assets
                </a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="auto_awesome_motion">auto_awesome_motion</span>
                    Collections
                </a>
<a className="flex items-center gap-3 text-[#2B1B3D] dark:text-[#FFD166] bg-[#FFFFFF] dark:bg-[#66547a]/20 rounded-full px-4 py-3 active:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="credit_card">credit_card</span>
                    Billing
                </a>
</nav>
<div className="mt-auto flex flex-col gap-2">
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
                    Help
                </a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                    Sign Out
                </a>
</div>
</aside>
<main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
{/*  Top Header Area  */}
<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<span className="text-tertiary font-label uppercase tracking-[0.2em] text-xs font-bold">Billing &amp; Usage</span>
<h2 className="font-headline text-5xl font-black text-on-background mt-4 tracking-tight leading-none">Manage Your Plan.</h2>
<p className="text-on-surface-variant max-w-md mt-6 body-lg">
                        Scale your InstaShop seamlessly as your business grows. Review your current usage and upgrade to unlock premium features.
                    </p>
</div>
<div className="flex items-center gap-4">
<div className="bg-surface-container-low px-6 py-4 rounded-xl flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" data-icon="stars" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-tertiary">Current Plan</p>
<p className="text-lg font-bold text-on-background">Starter Plan</p>
</div>
</div>
</div>
</header>
{/*  Usage Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
{/*  Usage Meter 1  */}
<div className="md:col-span-1 bg-surface-container-lowest rounded-xl p-8 ghost-border">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="shopping_bag">shopping_bag</span>
<span className="text-xs font-bold bg-primary-container text-on-primary-container px-3 py-1 rounded-full uppercase">80% Used</span>
</div>
<h3 className="font-headline text-2xl font-bold text-on-background mb-2">Products</h3>
<p className="text-on-surface-variant text-sm mb-6">40 / 50 products added</p>
<div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{ width: "80%" }}></div>
</div>
</div>
{/*  Usage Meter 2  */}
<div className="md:col-span-1 bg-surface-container-lowest rounded-xl p-8 ghost-border">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="receipt_long">receipt_long</span>
<span className="text-xs font-bold bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full uppercase">45% Used</span>
</div>
<h3 className="font-headline text-2xl font-bold text-on-background mb-2">Monthly Orders</h3>
<p className="text-on-surface-variant text-sm mb-6">225 / 500 orders processed</p>
<div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ width: "45%" }}></div>
</div>
</div>
{/*  Next Billing Card  */}
<div className="md:col-span-1 bg-tertiary text-on-tertiary rounded-xl p-8 luminous-shadow flex flex-col justify-between">
<div>
<h3 className="font-headline text-xl font-bold mb-2">Next Billing Date</h3>
<p className="text-3xl font-black tracking-tight">October 24, 2024</p>
</div>
<div className="mt-8">
<p className="text-sm opacity-80 mb-4">You'll be charged ₹1,499.00</p>
<button className="w-full py-3 bg-surface-container-lowest text-tertiary font-bold rounded-full hover:scale-[1.02] transition-transform">
                            View Invoices
                        </button>
</div>
</div>
</section>
{/*  Pricing Comparison Table  */}
<section className="mb-24">
<div className="text-center mb-12">
<h2 className="font-headline text-4xl font-black text-on-background">Find the perfect fit.</h2>
<p className="text-on-surface-variant mt-2">Transparent pricing for creators at every stage.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Free Plan  */}
<div className="bg-surface rounded-lg p-10 flex flex-col items-center text-center ghost-border hover:bg-surface-container-lowest transition-colors">
<span className="text-xs font-bold uppercase tracking-widest text-tertiary mb-4">The Hobbyist</span>
<h4 className="font-headline text-3xl font-black mb-2">Free</h4>
<div className="flex items-baseline mb-8">
<span className="text-4xl font-black">₹0</span>
<span className="text-on-surface-variant ml-1">/mo</span>
</div>
<ul className="space-y-4 mb-10 w-full text-left">
<li className="flex items-center gap-3 text-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                                10 Products
                            </li>
<li className="flex items-center gap-3 text-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                                50 Monthly Orders
                            </li>
<li className="flex items-center gap-3 text-sm text-on-surface-variant opacity-50">
<span className="material-symbols-outlined text-xl" data-icon="cancel">cancel</span>
                                Custom Domain
                            </li>
</ul>
<button className="mt-auto w-full py-4 border-2 border-outline-variant text-on-surface font-bold rounded-xl hover:bg-surface-container transition-colors uppercase text-xs tracking-widest">
                            Your Current Plan
                        </button>
</div>
{/*  Starter Plan (Active/Featured)  */}
<div className="relative bg-surface-container-lowest rounded-lg p-10 flex flex-col items-center text-center luminous-shadow scale-105 z-10 border-2 border-primary-container">
<div className="absolute -top-4 bg-primary-container text-on-primary-container px-6 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em]">Recommended</div>
<span className="text-xs font-bold uppercase tracking-widest text-tertiary mb-4">Growing Creator</span>
<h4 className="font-headline text-3xl font-black mb-2">Starter</h4>
<div className="flex items-baseline mb-8">
<span className="text-4xl font-black">₹1,499</span>
<span className="text-on-surface-variant ml-1">/mo</span>
</div>
<ul className="space-y-4 mb-10 w-full text-left">
<li className="flex items-center gap-3 text-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                50 Products
                            </li>
<li className="flex items-center gap-3 text-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                500 Monthly Orders
                            </li>
<li className="flex items-center gap-3 text-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                Basic Analytics
                            </li>
</ul>
<button className="mt-auto w-full py-4 bg-primary-container text-on-primary-container font-black rounded-xl hover:shadow-lg transition-all uppercase text-xs tracking-widest active:scale-95">
                            Manage Billing
                        </button>
</div>
{/*  Pro Plan  */}
<div className="bg-surface rounded-lg p-10 flex flex-col items-center text-center ghost-border hover:bg-surface-container-lowest transition-colors">
<span className="text-xs font-bold uppercase tracking-widest text-tertiary mb-4">Power Seller</span>
<h4 className="font-headline text-3xl font-black mb-2">Pro</h4>
<div className="flex items-baseline mb-8">
<span className="text-4xl font-black">₹4,999</span>
<span className="text-on-surface-variant ml-1">/mo</span>
</div>
<ul className="space-y-4 mb-10 w-full text-left">
<li className="flex items-center gap-3 text-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-xl" data-icon="check_circle">check_circle</span>
                                Unlimited Products
                            </li>
<li className="flex items-center gap-3 text-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-xl" data-icon="check_circle">check_circle</span>
                                Unlimited Orders
                            </li>
<li className="flex items-center gap-3 text-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-xl" data-icon="check_circle">check_circle</span>
                                Advanced SEO Tools
                            </li>
</ul>
<button className="mt-auto w-full py-4 bg-secondary text-on-secondary font-black rounded-xl hover:shadow-xl transition-all uppercase text-xs tracking-widest hover:bg-secondary-dim active:scale-95">
                            Upgrade Now
                        </button>
</div>
</div>
</section>
{/*  FAQ Section / Social Proof  */}
<section className="bg-surface-container-low rounded-xl p-12 overflow-hidden relative">
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="font-headline text-3xl font-black mb-6">Need more power?</h3>
<p className="text-on-surface-variant mb-8">InstaShop Enterprise offers custom solutions for businesses processing over 10,000 orders monthly. Get dedicated support and custom integrations.</p>
<a className="inline-flex items-center gap-2 font-bold text-tertiary hover:gap-4 transition-all" href="#">
                            Contact Sales for Enterprise
                            <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="flex justify-center">
<img alt="Enterprise team collaborating" className="w-full h-64 object-cover rounded-lg rotate-3 shadow-2xl" data-alt="Professional diverse creative team working together in a bright modern office with glass walls and warm natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyCKk8g3EXQjKiBJSfADedg9CXLBqbRJ2ALiUOelfr4xiMNsYtWYIV5zuIzBVQFc2utTOJbjEJT0JO8e-Z2caZjvcYsDVUNc0DQ1vqT-jelOlx78nmJ15Pl9hUogjP0PF2y806ytOkl-UqWtXyOqwlyEyJ0pFMoEWsFww6VrBmexNNItJLJRA1XPuDS5sKbmSiUQ050kazFqUvoCwH71_YqiWTn8Y6mQnuVsRkn5dP0shzcIzeGXxwo8WtbsAgVHFCc-U7-XS4IyQb"/>
</div>
</div>
{/*  Abstract Decorative Shapes  */}
<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
<div className="absolute -top-20 -left-20 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl"></div>
</section>
</main>
</div>
{/*  Mobile Navigation Shell (BottomNavBar)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest h-20 flex items-center justify-around px-4 luminous-shadow z-50">
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Stats</span>
</button>
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" data-icon="credit_card" style={{ fontVariationSettings: "'FILL' 1" }}>credit_card</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Billing</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Settings</span>
</button>
</nav>

    </div>
  );
}
