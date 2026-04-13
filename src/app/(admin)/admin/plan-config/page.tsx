export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  SideNavBar (Authority: JSON)  */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-[#1a1225] flex flex-col py-8 pr-4 z-40 font-headline font-medium">
<div className="px-8 mb-12">
<h1 className="text-xl font-bold text-[#FFD166]">Admin Panel</h1>
<p className="text-[#66547a] text-xs uppercase tracking-widest mt-1">Super Admin Access</p>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-8 py-3 text-[#e4e2df] hover:bg-[#2B1B3D]/50 rounded-r-full transition-transform hover:translate-x-2" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-8 py-3 text-[#e4e2df] hover:bg-[#2B1B3D]/50 rounded-r-full transition-transform hover:translate-x-2" href="#">
<span className="material-symbols-outlined">campaign</span>
<span>Announcements</span>
</a>
{/*  Active State: Plan Config  */}
<a className="flex items-center gap-3 px-8 py-3 bg-[#2B1B3D] text-[#FFD166] rounded-r-full shadow-sm transition-transform hover:translate-x-2" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Plan Config</span>
</a>
<a className="flex items-center gap-3 px-8 py-3 text-[#e4e2df] hover:bg-[#2B1B3D]/50 rounded-r-full transition-transform hover:translate-x-2" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
<div className="mt-auto px-4 space-y-2 border-t border-[#2B1B3D] pt-6">
<button className="w-full flex items-center gap-3 px-4 py-3 text-[#e4e2df] hover:bg-[#2B1B3D]/50 rounded-lg">
<span className="material-symbols-outlined">help</span>
<span>Help</span>
</button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-[#EF476F] hover:bg-secondary/10 rounded-lg">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</button></div>
</aside>
{/*  Main Canvas  */}
<main className="pl-64 min-h-screen">
<div className="p-12 max-w-7xl mx-auto space-y-12">
{/*  Header Section  */}
<header className="flex justify-between items-end">
<div>
<h2 className="text-5xl font-black font-headline text-on-background tracking-tighter">Subscription Plans</h2>
<p className="text-tertiary mt-2 text-lg">Manage tiers, pricing, and infrastructure limits.</p>
</div>
<div className="flex gap-4">
<button className="bg-surface-container-highest px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                        Discard Changes
                    </button>
<button className="bg-primary-container text-on-primary-fixed px-8 py-3 rounded-xl font-bold shadow-[0_8px_32px_rgba(255,209,102,0.3)] hover:scale-105 transition-transform">
                        Push Config Live
                    </button>
</div>
</header>
{/*  Plan Analytics Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
<div>
<span className="bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Plan Analytics</span>
<h3 className="text-3xl font-bold font-headline mt-4">Revenue Distribution</h3>
</div>
<div className="mt-8 flex items-end gap-2 h-32">
<div className="w-full bg-[#FFD166]/20 rounded-t-lg h-[40%] transition-all hover:bg-[#FFD166]"></div>
<div className="w-full bg-[#FFD166]/40 rounded-t-lg h-[65%] transition-all hover:bg-[#FFD166]"></div>
<div className="w-full bg-primary-container rounded-t-lg h-[95%] transition-all hover:bg-[#FFD166]"></div>
<div className="w-full bg-[#FFD166]/60 rounded-t-lg h-[50%] transition-all hover:bg-[#FFD166]"></div>
</div>
<div className="flex justify-between mt-4 text-sm font-bold text-tertiary">
<span>Free</span>
<span>Starter</span>
<span>Pro</span>
<span>Enterprise</span>
</div>
</div>
<div className="bg-secondary-container text-on-secondary-container rounded-xl p-8 flex flex-col justify-between">
<span className="material-symbols-outlined text-4xl">trending_up</span>
<div>
<p className="text-sm font-bold uppercase tracking-widest opacity-70">Churn Rate</p>
<p className="text-4xl font-black font-headline">1.2%</p>
</div>
</div>
<div className="bg-tertiary-container text-on-tertiary-container rounded-xl p-8 flex flex-col justify-between">
<span className="material-symbols-outlined text-4xl">group</span>
<div>
<p className="text-sm font-bold uppercase tracking-widest opacity-70">Active Subs</p>
<p className="text-4xl font-black font-headline">12.4k</p>
</div>
</div>
</section>
{/*  Plan Table Section  */}
<section className="bg-surface-container-lowest rounded-xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
<div className="p-8 pb-0">
<h3 className="text-2xl font-bold font-headline">Current Plans Matrix</h3>
</div>
<table className="w-full text-left border-separate border-spacing-0">
<thead>
<tr className="text-tertiary uppercase text-xs tracking-widest font-bold">
<th className="px-8 py-6">Plan Name</th>
<th className="px-8 py-6">Monthly Price</th>
<th className="px-8 py-6">Product Limit</th>
<th className="px-8 py-6">Order Limit</th>
<th className="px-8 py-6">Status</th>
<th className="px-8 py-6 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-on-surface">
<tr className="group transition-colors hover:bg-surface-container-low">
<td className="px-8 py-6 font-bold border-t border-surface-container">Free</td>
<td className="px-8 py-6 border-t border-surface-container">$0.00</td>
<td className="px-8 py-6 border-t border-surface-container">5 Products</td>
<td className="px-8 py-6 border-t border-surface-container">50 / mo</td>
<td className="px-8 py-6 border-t border-surface-container">
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold">Active</span>
</td>
<td className="px-8 py-6 border-t border-surface-container text-right">
<button className="material-symbols-outlined text-tertiary hover:text-primary transition-colors">edit_note</button>
</td>
</tr>
<tr className="group transition-colors hover:bg-surface-container-low">
<td className="px-8 py-6 font-bold border-t border-surface-container">Starter</td>
<td className="px-8 py-6 border-t border-surface-container">$29.00</td>
<td className="px-8 py-6 border-t border-surface-container">50 Products</td>
<td className="px-8 py-6 border-t border-surface-container">500 / mo</td>
<td className="px-8 py-6 border-t border-surface-container">
<span className="bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold">Active</span>
</td>
<td className="px-8 py-6 border-t border-surface-container text-right">
<button className="material-symbols-outlined text-tertiary hover:text-primary transition-colors">edit_note</button>
</td>
</tr>
<tr className="group transition-colors hover:bg-surface-container-low">
<td className="px-8 py-6 font-bold border-t border-surface-container">Pro</td>
<td className="px-8 py-6 border-t border-surface-container">$99.00</td>
<td className="px-8 py-6 border-t border-surface-container">Unlimited</td>
<td className="px-8 py-6 border-t border-surface-container">5,000 / mo</td>
<td className="px-8 py-6 border-t border-surface-container">
<span className="bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold">Active</span>
</td>
<td className="px-8 py-6 border-t border-surface-container text-right">
<button className="material-symbols-outlined text-tertiary hover:text-primary transition-colors">edit_note</button>
</td>
</tr>
</tbody>
</table>
</section>
{/*  Edit Forms (Asymmetric Layout)  */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-2 bg-surface-container-low rounded-xl p-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-[#FFD166] rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-fixed">tune</span>
</div>
<h3 className="text-2xl font-bold font-headline">Edit Plan: Starter</h3>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary ml-2">Monthly Price (USD)</label>
<input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all outline-none" type="text" value="29.00"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary ml-2">Plan Display Name</label>
<input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all outline-none" type="text" value="Starter"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary ml-2">Product Limit</label>
<input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all outline-none" type="number" value="50"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary ml-2">Order Limit / Month</label>
<input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all outline-none" type="number" value="500"/>
</div>
</div>
<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary ml-2">Feature Toggles</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl cursor-pointer">
<span className="font-medium">Custom Domain</span>
<input defaultChecked className="rounded text-primary focus:ring-primary w-6 h-6" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl cursor-pointer">
<span className="font-medium">Priority Support</span>
<input defaultChecked className="rounded text-primary focus:ring-primary w-6 h-6" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl cursor-pointer opacity-50">
<span className="font-medium">API Access</span>
<input className="rounded text-primary focus:ring-primary w-6 h-6" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl cursor-pointer opacity-50">
<span className="font-medium">White-labeling</span>
<input className="rounded text-primary focus:ring-primary w-6 h-6" type="checkbox"/>
</label>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-on-background text-white py-4 rounded-xl font-bold hover:bg-on-background/90 transition-all" type="submit">
                                Save Plan Configuration
                            </button>
</div>
</form>
</div>
<div className="flex flex-col gap-8">
<div className="bg-secondary text-white rounded-xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<h4 className="text-xl font-bold font-headline mb-4">Infrastructure Health</h4>
<div className="space-y-4">
<div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
<div className="bg-white h-full w-[88%]"></div>
</div>
<p className="text-xs font-bold uppercase opacity-80">Compute Usage: 88%</p>
</div>
<button className="mt-8 text-sm font-bold border-b-2 border-white pb-1 hover:opacity-70 transition-opacity">
                                View Cluster Scaling
                            </button>
</div>
<span className="material-symbols-outlined absolute -bottom-8 -right-8 text-9xl opacity-10 group-hover:scale-110 transition-transform">database</span>
</div>
<div className="bg-[#2B1B3D] text-[#e4e2df] rounded-xl p-8">
<h4 className="text-xl font-bold font-headline mb-6 text-[#FFD166]">Global Pricing Settings</h4>
<div className="space-y-6">
<div className="flex items-center justify-between">
<span className="text-sm">Currency Display</span>
<span className="font-bold">USD ($)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Tax Inclusion</span>
<span className="font-bold">Exclusive</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Free Trial Period</span>
<span className="font-bold">14 Days</span>
</div>
<button className="w-full border border-outline-variant py-3 rounded-lg text-sm font-bold hover:bg-white/10 transition-colors">
                                Edit Global Settings
                            </button>
</div>
</div>
</div>
</section>
</div>
{/*  Footer (Authority: JSON)  */}
<footer className="w-full py-12 px-8 mt-auto bg-[#f3f0ed] dark:bg-[#2B1B3D] tonal-shift">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto font-headline text-sm uppercase tracking-widest">
<div className="text-lg font-black text-[#2B1B3D] dark:text-white mb-4 md:mb-0">RadiantCreator</div>
<div className="text-[#66547a] dark:text-[#e4e2df]">© 2024 Radiant Editor. Built for creators.</div>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors" href="#">Privacy</a>
<a className="text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors" href="#">Terms</a>
<a className="text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors" href="#">API</a>
</div>
</div>
</footer>
</main>

    </div>
  );
}
