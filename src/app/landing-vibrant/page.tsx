export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  TopAppBar  */}
<header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFCF9]/80 backdrop-blur-xl flex items-center justify-between px-8 w-full border-b border-[#e4e2df] h-20">
<div className="flex items-center gap-8">
<span className="font-headline font-black text-2xl text-[#2B1B3D]">InstaShop</span>
<nav className="hidden md:flex gap-6">
<a className="text-[#2B1B3D] font-bold underline decoration-4 font-label" href="#">Dashboard</a>
<a className="text-[#2B1B3D]/70 font-label hover:bg-[#f3f0ed] rounded-full px-3 py-1 transition-all" href="#">Orders</a>
<a className="text-[#2B1B3D]/70 font-label hover:bg-[#f3f0ed] rounded-full px-3 py-1 transition-all" href="#">Inventory</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 px-6 py-2 bg-primary-container text-on-primary-fixed font-bold rounded-full transition-transform active:scale-95">
                View My Store
            </button>
<div className="flex gap-2">
<button className="material-symbols-outlined p-2 hover:bg-[#f3f0ed] rounded-full text-[#2B1B3D]">notifications</button>
<button className="material-symbols-outlined p-2 hover:bg-[#f3f0ed] rounded-full text-[#2B1B3D]">mail</button>
</div>
<img alt="Seller Profile" className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="Close-up portrait of a professional female entrepreneur with a confident smile in a bright minimalist office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBWv7ijyuNyri1Rzp5f448bUt8HaKYPaFvY48jrmtymvgytcJCvWd_BRE9-ziQVhp0Kqo-8Ab3i5dEkCBJHtDr86bO410O6Y6EY3aS9OVXuPHqrARKhkm9OAFmfj9qcvfPOGjfZmxyE6oyKl9JMbHOKmspuB_t5M5Vh2rddYa5BUCzoysIIF81jZF08Kbe8mgfV-A4DKlZlUXmGwk9efCtK9M7bY8AXJiE9GyxUeXoWc6S7f92p3MRFE45lxdVInjWNwiOPJZnkoNa"/>
</div>
</header>
<main className="pt-20">
{/*  Hero Section  */}
<section className="relative overflow-hidden bg-surface py-24 lg:py-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="z-10 text-center lg:text-left">
<span className="inline-block px-4 py-2 bg-secondary-container text-on-secondary-container font-bold rounded-full text-sm mb-6 tracking-widest uppercase">E-Commerce for Creators</span>
<h1 className="font-headline text-5xl lg:text-7xl font-black text-[#2B1B3D] leading-[1.1] mb-8 tracking-tight">
                        Turn Your Instagram Into a <span className="text-primary">Real Business</span>
</h1>
<p className="text-xl text-on-surface-variant mb-10 max-w-xl mx-auto lg:mx-0">
                        Stop managing orders through DMs. Scale your brand with automated checkouts, inventory tracking, and direct WhatsApp CRM.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-10 py-5 bg-primary-container text-on-primary-fixed font-black text-lg rounded-xl transition-all luminous-shadow chunky-border active:scale-95">
                            Start Selling Free
                        </button>
<button className="px-10 py-5 bg-surface-container-low text-on-background font-bold text-lg rounded-xl hover:bg-surface-container-high transition-colors">
                            Watch Demo
                        </button>
</div>
</div>
<div className="relative">
<div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
<div className="relative rounded-xl overflow-hidden luminous-shadow rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="InstaShop Dashboard Preview" className="w-full h-auto" data-alt="Professional UI dashboard mockup on a sleek smartphone floating over a warm cream background with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDF88eKCl2gcfBvg8Qax04-5tT9S1S6ngLiNSXTgJ8B5scN5nEo6b9ozx9dorWOC9GESHwL85YqE2QUGlLB5N48zlPJs3RiqNQBTaHKgQbbtGWI3bZrVpDBRfG0FZo74UyZJJx8XM3InZcU-sj7qXMg3gc2h5cXapDHxc1nSUe8G0nCjP2Z2FMWSXfCAVV6VjsVHgRnqlDd3iSq54JX579dnLLDwUTZ4iMWWLj3GbIVF--cfWw6Pa1lNgZOer3ySGdELIxK-d6IV0H"/>
</div>
{/*  Floating Badge  */}
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg luminous-shadow flex items-center gap-4 animate-bounce">
<div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface-variant">New Sale!</p>
<p className="text-lg font-black text-[#2B1B3D]">$124.00</p>
</div>
</div>
</div>
</div>
</section>
{/*  Features Bento Grid  */}
<section className="py-24 px-6 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center">
<h2 className="font-headline text-4xl lg:text-5xl font-black text-[#2B1B3D] mb-4">Everything You Need to Scale</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Skip the complicated setups. InstaShop is built specifically for creators who sell on social media.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Feature 1: Mini Store  */}
<div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl luminous-shadow flex flex-col md:flex-row gap-8 items-center overflow-hidden border-none group">
<div className="flex-1">
<div className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-on-primary-container">storefront</span>
</div>
<h3 className="font-headline text-3xl font-bold mb-4">Mini Storefront</h3>
<p className="text-on-surface-variant mb-6">A gorgeous, lightning-fast mobile shop that lives in your bio. No coding required.</p>
<ul className="space-y-3 font-bold text-on-surface">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500">check_circle</span> One-click Checkout</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500">check_circle</span> Instant Inventory Sync</li>
</ul>
</div>
<div className="flex-1 relative translate-y-12 group-hover:translate-y-6 transition-transform">
<img alt="Mobile Storefront" className="rounded-lg shadow-2xl" data-alt="A stylized smartphone screen showing a vibrant mobile e-commerce interface with clothing products and a yellow buy button" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe_OMNtt_uull2AEyrbt2OcPCXxplTDGXPe04ceoPArNjoIKM19lJOrvtkqIPKNjfpAbr1gIOgS_Ik3357OdvNgsTtpIaKm8r2gZJppL7qP7bTd_-4XKklYZYC7eQBk8i5lN0x7sSN8WLzW-etkl2j45uxmJrscfds6O_d5mcCFh2Fa-kdDcfuh8_O68lS8KlwW8fxu_vtFK9EdhT1bEWUpuGUX3xAhBIj0S0hfToJW34QqTVJrEJuqy5JV2rYiVlvqx34arqtEi0u"/>
</div>
</div>
{/*  Feature 2: WhatsApp CRM  */}
<div className="bg-[#2B1B3D] p-10 rounded-xl luminous-shadow text-white flex flex-col">
<div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary-fixed">forum</span>
</div>
<h3 className="font-headline text-3xl font-bold mb-4 text-primary-fixed">WhatsApp CRM</h3>
<p className="text-slate-300 mb-8">Automatically send order updates and tracking numbers directly to your customers' WhatsApp.</p>
<div className="mt-auto bg-white/5 p-4 rounded-lg border border-white/10">
<p className="text-xs text-primary-fixed mb-2 font-bold uppercase tracking-widest">Live Auto-Reply</p>
<p className="italic">"Hey Sarah! Your order #4201 is packed and ready to ship 📦"</p>
</div>
</div>
{/*  Feature 3: Order Dashboard  */}
<div className="bg-surface-container-lowest p-10 rounded-xl luminous-shadow flex flex-col items-center text-center">
<div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-6 text-on-secondary-container">
<span className="material-symbols-outlined">dashboard</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Unified Dashboard</h3>
<p className="text-on-surface-variant">See your sales, customers, and top products in one editorial-style view.</p>
</div>
{/*  Feature 4: Logistics  */}
<div className="md:col-span-2 bg-primary-container p-1 p-[1px] rounded-xl">
<div className="bg-white p-10 rounded-[2.9rem] h-full flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h3 className="font-headline text-3xl font-bold mb-4 text-[#2B1B3D]">Smart Shipping</h3>
<p className="text-on-surface-variant">Print labels and schedule pickups with our integrated logistics partners in one click.</p>
</div>
<div className="flex-1 flex gap-4">
<div className="bg-surface-container-low p-4 rounded-lg flex-1 text-center font-bold">FastTrack</div>
<div className="bg-surface-container-low p-4 rounded-lg flex-1 text-center font-bold">GlobalLog</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  How It Works Section  */}
<section className="py-24 px-6 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline text-5xl font-black text-[#2B1B3D] mb-8 leading-tight">3 Steps to Professional Commerce</h2>
<div className="space-y-12">
<div className="flex gap-6">
<span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2B1B3D] text-primary-fixed flex items-center justify-center font-black text-xl">1</span>
<div>
<h4 className="text-xl font-black mb-2">Connect Instagram</h4>
<p className="text-on-surface-variant">Import your product images directly from your feed with a single click.</p>
</div>
</div>
<div className="flex gap-6">
<span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2B1B3D] text-primary-fixed flex items-center justify-center font-black text-xl">2</span>
<div>
<h4 className="text-xl font-black mb-2">Set Your Prices</h4>
<p className="text-on-surface-variant">Add variations, shipping rules, and payment methods. We support all major wallets.</p>
</div>
</div>
<div className="flex gap-6">
<span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2B1B3D] text-primary-fixed flex items-center justify-center font-black text-xl">3</span>
<div>
<h4 className="text-xl font-black mb-2">Share Your Link</h4>
<p className="text-on-surface-variant">Put your InstaShop URL in your bio and watch the orders roll in.</p>
</div>
</div>
</div>
</div>
<div className="relative p-8 bg-surface-container-low rounded-xl">
<img alt="Success Chart" className="rounded-lg luminous-shadow" data-alt="Modern high-contrast analytics dashboard showing a rising growth curve and sales metrics with a warm sunlit aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdCXBw-fq-oMWN8ryTIK7IPgQTp3qPDFk5wmWe3m0-OVOX22SIWy3K5KYoVqIHJXMbAzMcSCwgakcOZriaNDRHXxrhrTlxpxoWtC9P6DL5uWbNDu2EoU6OnKb_ZXEFwp0Sc1cRZC-s1MJ0uTnZVeu1pddzG_I31rOJfmjuG2lhH8FqXLGCGolQA9Ptqu3JrlOYhd4ZkzeW2ZPvh0VA-83WCAJ4N8r26ObZMXXPMTYG3Ae3Sr3g6A-mXAyqAfvRXFIHps8wKua7GDrl"/>
</div>
</div>
</div>
</section>
{/*  Pricing Section  */}
<section className="py-24 px-6 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl lg:text-5xl font-black text-[#2B1B3D] mb-4">Simple, Fair Pricing</h2>
<p className="text-on-surface-variant">No hidden fees. Scale your business at your own pace.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
{/*  Plan: Free  */}
<div className="bg-surface p-10 rounded-xl border border-transparent hover:border-primary-container transition-all flex flex-col">
<h3 className="text-xl font-black mb-2">Free</h3>
<p className="text-on-surface-variant text-sm mb-6">Perfect for beginners</p>
<div className="text-4xl font-black mb-8">$0<span className="text-sm font-normal text-on-surface-variant">/mo</span></div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> 10 Products</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> Manual Orders</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> Standard Themes</li>
</ul>
<button className="w-full py-4 rounded-xl border-2 border-primary-container font-bold text-on-primary-fixed hover:bg-primary-container transition-colors">Start Free</button>
</div>
{/*  Plan: Starter  */}
<div className="bg-surface p-10 rounded-xl border-2 border-primary-container luminous-shadow flex flex-col relative scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Most Popular</div>
<h3 className="text-xl font-black mb-2">Starter</h3>
<p className="text-on-surface-variant text-sm mb-6">For growing creators</p>
<div className="text-4xl font-black mb-8">$19<span className="text-sm font-normal text-on-surface-variant">/mo</span></div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> Unlimited Products</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> Auto WhatsApp CRM</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> Custom Domain</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> Basic Analytics</li>
</ul>
<button className="w-full py-4 rounded-xl bg-primary-container text-on-primary-fixed font-black luminous-shadow chunky-border transition-all">Get Started</button>
</div>
{/*  Plan: Pro  */}
<div className="bg-[#2B1B3D] p-10 rounded-xl text-white flex flex-col">
<h3 className="text-xl font-black mb-2 text-primary-fixed">Pro</h3>
<p className="text-slate-400 text-sm mb-6">For high-volume stores</p>
<div className="text-4xl font-black mb-8">$49<span className="text-sm font-normal text-slate-400">/mo</span></div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-fixed">check</span> Everything in Starter</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-fixed">check</span> Priority Logistics</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-fixed">check</span> Multiple Staff Accounts</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-fixed">check</span> Advanced API Access</li>
</ul>
<button className="w-full py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors">Go Pro</button>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar (Mobile only)  */}
<nav className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-2 bg-white/70 backdrop-blur-xl rounded-[3rem] w-[90%] mx-auto shadow-[0_8px_32px_rgba(255,209,102,0.2)] border border-white/20">
<div className="flex flex-col items-center justify-center bg-[#FFD166] text-[#2B1B3D] rounded-full w-14 h-14 transition-transform active:scale-90">
<span className="material-symbols-outlined">storefront</span>
<span className="text-[10px] font-bold uppercase tracking-widest font-['Satoshi']">Shop</span>
</div>
<div className="flex flex-col items-center justify-center text-[#2B1B3D]/50 hover:scale-110 transition-transform">
<span className="material-symbols-outlined">search</span>
<span className="text-[10px] font-bold uppercase tracking-widest font-['Satoshi']">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-[#2B1B3D]/50 hover:scale-110 transition-transform">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="text-[10px] font-bold uppercase tracking-widest font-['Satoshi']">Bag</span>
</div>
<div className="flex flex-col items-center justify-center text-[#2B1B3D]/50 hover:scale-110 transition-transform">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold uppercase tracking-widest font-['Satoshi']">Profile</span>
</div>
</nav>
{/*  Footer  */}
<footer className="bg-[#2B1B3D] text-white pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="font-headline font-black text-3xl text-primary-fixed mb-6 block">InstaShop</span>
<p className="text-slate-400 max-w-sm mb-8">Empowering the next generation of social entrepreneurs to build real, lasting businesses from their social feeds.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-container hover:text-on-primary-fixed transition-colors" href="#">
<span className="material-symbols-outlined">share</span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-container hover:text-on-primary-fixed transition-colors" href="#">
<span className="material-symbols-outlined">camera</span>
</a>
</div>
</div>
<div>
<h5 className="font-black text-lg mb-6">Product</h5>
<ul className="space-y-4 text-slate-400">
<li><a className="hover:text-primary-fixed transition-colors" href="#">Mini Store</a></li>
<li><a className="hover:text-primary-fixed transition-colors" href="#">WhatsApp CRM</a></li>
<li><a className="hover:text-primary-fixed transition-colors" href="#">Logistics</a></li>
<li><a className="hover:text-primary-fixed transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="font-black text-lg mb-6">Company</h5>
<ul className="space-y-4 text-slate-400">
<li><a className="hover:text-primary-fixed transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-primary-fixed transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-primary-fixed transition-colors" href="#">Support</a></li>
<li><a className="hover:text-primary-fixed transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6 text-sm text-slate-500">
<p>© 2024 InstaShop. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </div>
  );
}
