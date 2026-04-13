export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  SideNavBar Component (Shared Anchor)  */}
<aside className="hidden md:flex flex-col py-8 h-screen w-64 rounded-r-[3rem] sticky top-0 left-0 bg-[#f3f0ed] dark:bg-slate-900 font-['Epilogue'] font-medium gap-2 z-40">
<div className="px-8 mb-8">
<h1 className="text-xl font-black text-slate-900 dark:text-white">InstaShop Seller</h1>
<div className="flex items-center gap-3 mt-4">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of a professional male administrator with a friendly expression in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuOxJL3FQgDTsbt1p1i-sFUW1KbfZkjs5dwXCrubIuNvL_QalewaDOenGVdvNenb7P9Z0hnztaxpUz34xJjH1M47M2dCJ-2PNi89kYJJtzqeYWbW2tt0K3AT7vqpup-wiTzu5EUBSSRzLm7JY6fTxVQ3vCQPYRAYpAZGm8E7soHHBfJZMxIcdr6EjU_reRQiA2DMOKlE-hXcaIkRG7TeRXUaSJ8wM9wcH6oCyiLITdFQnwoKWAHMOWSxkKiA9q-tRpmGx4jUp7cPlR"/>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Super Admin</p>
<p className="text-[10px] uppercase tracking-widest text-secondary">Premium Tier</p>
</div>
</div>
</div>
<nav className="flex-1 overflow-y-auto no-scrollbar px-2 space-y-1">
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 bg-white dark:bg-slate-800 text-amber-500 rounded-full shadow-sm ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span>Products</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
<span>Orders</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">group</span>
<span>Customers</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">leaderboard</span>
<span>Leads</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">analytics</span>
<span>Analytics</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">sell</span>
<span>Coupons</span>
</a>
<div className="pt-4 mt-4 border-t border-surface-container-high mx-6"></div>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Billing</span>
</a>
<a className="flex items-center gap-3 text-error ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</a>
</nav>
</aside>
<main className="flex-1 flex flex-col min-w-0 bg-background">
{/*  TopNavBar Component (Shared Anchor)  */}
<header className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl sticky top-0 z-50 shadow-[0_8px_32px_rgba(255,209,102,0.15)] w-full px-8 py-4 flex justify-between items-center font-['Epilogue'] tracking-tight">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-slate-900 dark:text-white md:hidden">InstaShop</span>
<nav className="hidden lg:flex gap-6">
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300" href="#">Storefront</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300" href="#">Inbox</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300" href="#">Help</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full focus:ring-2 focus:ring-primary text-sm w-64 transition-all" placeholder="Search stores..." type="text"/>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/*  Main Content Area  */}
<section className="p-8 space-y-8">
{/*  Hero Stats / Editorial Header  */}
<div className="flex flex-col md:flex-row justify-between items-end gap-6">
<div className="space-y-2">
<label className="text-xs font-bold tracking-[0.2em] text-tertiary uppercase">Network Overview</label>
<h2 className="text-4xl font-black text-on-background tracking-tighter">Global Store Directory</h2>
</div>
<div className="flex gap-4 bg-surface-container-low p-2 rounded-xl">
<div className="px-6 py-2">
<p className="text-xs font-medium text-outline">Total Stores</p>
<p className="text-2xl font-bold">1,284</p>
</div>
<div className="px-6 py-2 bg-surface-container-lowest rounded-lg shadow-sm">
<p className="text-xs font-medium text-outline">Active Today</p>
<p className="text-2xl font-bold text-primary">942</p>
</div>
</div>
</div>
{/*  Advanced Filters Bar  */}
<div className="flex flex-wrap items-center gap-4 p-4 bg-surface-container-low rounded-xl">
<button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium hover:scale-95 transition-transform">
<span className="material-symbols-outlined text-sm">filter_list</span>
                    All Plans
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm font-medium hover:bg-white transition-all">
<span className="material-symbols-outlined text-sm">verified</span>
                    Active Only
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm font-medium hover:bg-white transition-all">
<span className="material-symbols-outlined text-sm">warning</span>
                    Suspended
                </button>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-outline font-medium">Export:</span>
<button className="p-2 hover:bg-white rounded-full transition-all"><span className="material-symbols-outlined text-sm">picture_as_pdf</span></button>
<button className="p-2 hover:bg-white rounded-full transition-all"><span className="material-symbols-outlined text-sm">table_view</span></button>
</div>
</div>
{/*  Stores Table (Editorial Bento Style)  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(255,209,102,0.1)]">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low">
<th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-tertiary">Store Name</th>
<th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-tertiary">Owner</th>
<th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-tertiary">Plan</th>
<th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-tertiary">Total Orders</th>
<th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-tertiary">GMV (USD)</th>
<th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-tertiary text-center">Status</th>
<th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-tertiary text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Minimalist luxury interior design aesthetic with neutral tones and elegant furniture pieces in a bright studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDetKdyiXdejhZxIhS5iif64GdO4As3ct9JalMiiVZrHniexyfHk3MKt4EGBt8vJf_30UaMZBjPKHAQ83JQdKvp0sCDZ_n_L7yVU5rvaMQ3sBSObC5uSNFhxwkD5pN6WNxSLyihqwulAlg5__DBUZ7EnBKm9yWdbwbU1B-avJVqKgDD7BeGTL4ZRgYnoNnJyXPNI7w1D1AD5aB2WYOXiIvXctYPmAyBdBU-72hdjJh93Ow2XRQO4ORSYukpOXJ0iODslHNHtSh8lI6"/>
</div>
<div>
<p className="font-bold text-on-background">Velvet &amp; Vine</p>
<p className="text-xs text-outline">vvine.instashop.com</p>
</div>
</div>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary-container"></div>
<span className="text-sm font-medium">Sarah Jenkins</span>
</div>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[10px] font-black uppercase tracking-tighter">Pro</span>
</td>
<td className="px-6 py-6 font-medium">1,402</td>
<td className="px-6 py-6 font-bold text-primary">$42,900.00</td>
<td className="px-6 py-6 text-center">
<div className="flex flex-col items-center gap-1">
{/*  Custom Toggle Switch  */}
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Active</span>
</div>
</td>
<td className="px-8 py-6 text-right">
<button className="p-2 hover:bg-white rounded-full transition-all group-hover:shadow-sm"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="High-end electronic gadgets and smart devices arranged on a sleek modern desk with vibrant neon accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArgKPAROxCQejIqgTH-if5WpvmvAesuhVHh_Q5htGGNf9TTM39GXUqPVlGfYcVCWnlRyX4gd47ZFkKQZdpEy9ZFZTxqVy311WNztEdSpMvGPqrXd9Fw-GhrFyDw0X6lPn4XxPq_oz1cKNiIMeM-40C2ILvMvw8Y4xcJVtmI61eA9WMzczo-sIFHum5CzgE9gH164AlPoomHLJXtj2Fl2iSJL2JgT0Fvx3YPoD-2NGIKGpAqLd7km4ui6fKCTphR9yUE9JUB9b7XuCk"/>
</div>
<div>
<p className="font-bold text-on-background">TechPulse Labs</p>
<p className="text-xs text-outline">tpulse.instashop.com</p>
</div>
</div>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container"></div>
<span className="text-sm font-medium">Marcus Chen</span>
</div>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 bg-surface-container-high text-outline rounded-full text-[10px] font-black uppercase tracking-tighter">Starter</span>
</td>
<td className="px-6 py-6 font-medium">842</td>
<td className="px-6 py-6 font-bold text-primary">$12,450.50</td>
<td className="px-6 py-6 text-center">
<div className="flex flex-col items-center gap-1">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Active</span>
</div>
</td>
<td className="px-8 py-6 text-right">
<button className="p-2 hover:bg-white rounded-full transition-all group-hover:shadow-sm"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
{/*  Row 3 (Suspended)  */}
<tr className="hover:bg-error-container/5 transition-colors group bg-error-container/5">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-error-container/20 flex items-center justify-center text-error font-bold overflow-hidden opacity-50">
<img className="w-full h-full object-cover" data-alt="Macro shot of vibrant red and pink flower petals with dramatic lighting and soft textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe1a9GrToBDLyHrWNSYBzLEFxkNnJGfLPUEwo5gpvGxAl_bUk2F2DA2evB8UW7Bg6Bl1TXIWBhUdpYTIpDD270Lcy3PR58pPAalbbz6v0j3XWpt9GByWy2q9facI3SE0nUk8hw6yuQvM3fjAOWGatwNe5cbr002rN-xA-PyTDoz7D1loga6zto9q32UQlcHx8xZ7MEDygHLgzjfjDV_TcL2v2Somh28m-slTYOUqibztMYGjvmKiQkcMhBk7qmHGDmXlDN5lvczwOI"/>
</div>
<div>
<p className="font-bold text-error">Neon Bloom</p>
<p className="text-xs text-outline">nbloom.instashop.com</p>
</div>
</div>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-error-container"></div>
<span className="text-sm font-medium">Aria Thorne</span>
</div>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 bg-surface-container text-outline rounded-full text-[10px] font-black uppercase tracking-tighter">Free</span>
</td>
<td className="px-6 py-6 font-medium">12</td>
<td className="px-6 py-6 font-bold text-outline">$120.00</td>
<td className="px-6 py-6 text-center">
<div className="flex flex-col items-center gap-1">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
<span className="text-[10px] font-bold text-error uppercase tracking-widest">Suspended</span>
</div>
</td>
<td className="px-8 py-6 text-right">
<button className="p-2 hover:bg-white rounded-full transition-all group-hover:shadow-sm"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Modern organic skincare products in frosted glass bottles against a backdrop of soft green leaves and natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8i8ceUzlKGCmwUQBUu2toKZqzR0LORs1Weyd_rCCENZRHzWUSE-zovTXQpD8j5RWYpWELTJ-vcGB_2uO09kdoz2RsA5Ts6WBkVbfOgJMz6IE1GuaEueD0aK1XRaECzHi1hhf7xZ2lWhddYluJlEm6Meq5eX6np_DPMFHY185MJMZT7O3sYtxXNiWiqHuEdORNSY-ZDsjwFy4UcKyJW5NTfT_4YunBm4mee2dNvWFJokYGq8LFIx6PBBj-MnxHGww-PkeyPqX3e6xg"/>
</div>
<div>
<p className="font-bold text-on-background">Terra Skincare</p>
<p className="text-xs text-outline">terra.instashop.com</p>
</div>
</div>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-tertiary-container"></div>
<span className="text-sm font-medium">David Miller</span>
</div>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[10px] font-black uppercase tracking-tighter">Pro</span>
</td>
<td className="px-6 py-6 font-medium">3,912</td>
<td className="px-6 py-6 font-bold text-primary">$112,050.00</td>
<td className="px-6 py-6 text-center">
<div className="flex flex-col items-center gap-1">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Active</span>
</div>
</td>
<td className="px-8 py-6 text-right">
<button className="p-2 hover:bg-white rounded-full transition-all group-hover:shadow-sm"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination / Table Footer  */}
<div className="px-8 py-6 bg-surface-container-low flex justify-between items-center">
<span className="text-sm text-outline font-medium">Showing 1 to 10 of 1,284 stores</span>
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-outline-variant/10 hover:bg-primary-container transition-all">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-bold text-sm shadow-md">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-primary-container transition-all font-bold text-sm">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-primary-container transition-all font-bold text-sm">3</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-outline-variant/10 hover:bg-primary-container transition-all">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Quick Actions Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-xl bg-primary-container relative overflow-hidden group cursor-pointer">
<div className="relative z-10">
<h3 className="headline text-2xl font-black text-on-primary-container tracking-tighter">Bulk Verification</h3>
<p className="text-sm text-on-primary-container/70 mt-2">Approve pending applications in batches.</p>
<button className="mt-6 px-6 py-2 bg-on-primary-container text-white rounded-full font-bold text-sm hover:scale-105 transition-transform">Run Protocol</button>
</div>
<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-on-primary-container/10 rotate-12 group-hover:rotate-0 transition-transform duration-500">verified</span>
</div>
<div className="p-8 rounded-xl bg-secondary-container relative overflow-hidden group cursor-pointer">
<div className="relative z-10">
<h3 className="headline text-2xl font-black text-on-secondary-container tracking-tighter">Plan Analytics</h3>
<p className="text-sm text-on-secondary-container/70 mt-2">Compare revenue performance by plan tiers.</p>
<button className="mt-6 px-6 py-2 bg-on-secondary-container text-white rounded-full font-bold text-sm hover:scale-105 transition-transform">View Insights</button>
</div>
<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-on-secondary-container/10 rotate-12 group-hover:rotate-0 transition-transform duration-500">monitoring</span>
</div>
<div className="p-8 rounded-xl bg-surface-container-high relative overflow-hidden group cursor-pointer">
<div className="relative z-10">
<h3 className="headline text-2xl font-black text-on-surface tracking-tighter">System Health</h3>
<p className="text-sm text-outline mt-2">Platform uptime and server load status.</p>
<button className="mt-6 px-6 py-2 bg-on-surface text-surface rounded-full font-bold text-sm hover:scale-105 transition-transform">Diagnostics</button>
</div>
<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-on-surface/5 rotate-12 group-hover:rotate-0 transition-transform duration-500">bolt</span>
</div>
</div>
</section>
</main>
{/*  Mobile Navigation Shell  */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg px-8 py-4 flex justify-between items-center z-50 rounded-t-3xl shadow-2xl">
<button className="flex flex-col items-center gap-1 text-amber-500 font-bold">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] uppercase">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400">
<span className="material-symbols-outlined">inventory_2</span>
<span className="text-[10px] uppercase">Stores</span>
</button>
<div className="w-14 h-14 -mt-10 bg-primary rounded-full flex items-center justify-center shadow-lg text-white">
<span className="material-symbols-outlined">add</span>
</div>
<button className="flex flex-col items-center gap-1 text-slate-400">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] uppercase">Stats</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400">
<span className="material-symbols-outlined">settings</span>
<span className="text-[10px] uppercase">Setup</span>
</button>
</nav>

    </div>
  );
}
