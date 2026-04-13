export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  SideNavBar (Authority: JSON)  */}
<aside className="hidden md:flex h-screen w-64 rounded-r-[3rem] sticky top-0 left-0 flex-col py-8 gap-2 bg-[#f3f0ed] dark:bg-slate-900 font-['Epilogue'] font-medium tonal-nesting no-border z-40">
<div className="px-8">
<h1 className="text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">InstaShop Seller</h1>
</div>
<nav className="flex-grow space-y-1">
{/*  Active Tab: Orders  */}
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span>Products</span>
</a>
{/*  Active State Logic Applied to Orders  */}
<a className="flex items-center gap-3 bg-white dark:bg-slate-800 text-amber-500 rounded-full shadow-sm ml-2 mr-4 py-3 px-6 scale-98 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span>Orders</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>Customers</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
<span>Leads</span>
</a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span>Analytics</span>
</a>
</nav>
<div className="px-6 mt-auto">
<div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img alt="Seller Profile" className="w-full h-full object-cover" data-alt="close-up portrait of a professional smiling merchant in a minimalist bright studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrgaIPMC1IJpVaGX1WAYAPc6a4HY2ve0Uoz6pl2i9QvFgmd3EtNvUdx-AjxMnzqgvxGKQUmce8MBqdPTaTqDjsxHoDKjN2bIvSwhhIa_X1kSy9SEoTxcnLLJNNyiGHNL44t2p8E1t6NiJNtBAUkm9bKT-1sQ1NjeMB_5Ed8P3tzs65l4iVgRXRPvrQTvsJ5hFm0vG3EMdKMdvAjvo4vsX8syyhFD4flGemP17BjFx1NhXPZ-q8oKOIUGZHV3maDnhnkoDBKb6tOTob"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Premium Tier</p>
<p className="text-xs text-slate-500">InstaShop Seller</p>
</div>
</div>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 py-4 px-2 hover:translate-x-2 transition-transform duration-200 mt-2" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Logout</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 min-w-0 flex flex-col overflow-y-auto">
{/*  TopNavBar (Authority: JSON)  */}
<header className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl font-['Epilogue'] tracking-tight docked full-width top-0 sticky z-30 shadow-[0_8px_32px_rgba(255,209,102,0.15)] flex justify-between items-center w-full px-8 py-4">
<div className="flex items-center gap-8">
<h2 className="text-2xl font-black text-slate-900 dark:text-white">InstaShop</h2>
<nav className="hidden md:flex gap-6">
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300" href="#">Storefront</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300" href="#">Inbox</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300" href="#">Help</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group hidden sm:block">
<input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 w-64 focus:ring-2 focus:ring-primary transition-all" placeholder="Search orders..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="search">search</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-full hover:bg-amber-50 transition-all active:scale-95 duration-150">
<span className="material-symbols-outlined text-slate-700 dark:text-white" data-icon="notifications">notifications</span>
</button>
<button className="p-2 rounded-full hover:bg-amber-50 transition-all active:scale-95 duration-150">
<span className="material-symbols-outlined text-slate-700 dark:text-white" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
<section className="p-8 space-y-8 max-w-7xl mx-auto w-full">
{/*  Page Header & Stats  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-1">
<span className="label-md uppercase tracking-[0.1em] text-tertiary font-bold text-xs">Merchant Dashboard</span>
<h2 className="text-4xl font-black text-on-background leading-none">Order Management</h2>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-lowest p-6 rounded-lg border-l-4 border-primary shadow-sm flex items-center gap-4">
<div className="bg-primary-container w-12 h-12 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="trending_up">trending_up</span>
</div>
<div>
<p className="text-xs font-bold text-tertiary uppercase tracking-wider">Total Sales</p>
<p className="text-xl font-black text-on-surface">₹1,42,850</p>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg border-l-4 border-secondary shadow-sm flex items-center gap-4">
<div className="bg-secondary-container w-12 h-12 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="pending_actions">pending_actions</span>
</div>
<div>
<p className="text-xs font-bold text-tertiary uppercase tracking-wider">New Orders</p>
<p className="text-xl font-black text-on-surface">24</p>
</div>
</div>
</div>
</div>
{/*  Filters & Tabs (Radiant Editor Style)  */}
<div className="flex flex-col gap-6">
<div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2">
<button className="px-6 py-2 rounded-full bg-primary text-on-primary-fixed-variant font-bold shadow-md shadow-primary/20">All Orders</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-tertiary font-medium hover:bg-surface-container-high transition-colors">Pending</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-tertiary font-medium hover:bg-surface-container-high transition-colors">Confirmed</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-tertiary font-medium hover:bg-surface-container-high transition-colors">Shipped</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-tertiary font-medium hover:bg-surface-container-high transition-colors">Delivered</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-tertiary font-medium hover:bg-surface-container-high transition-colors">Cancelled</button>
</div>
{/*  Table Content (The No-Line Rule: boundaries via background shifts)  */}
<div className="bg-surface-container-low rounded-xl overflow-hidden p-1 shadow-sm">
<div className="bg-surface-container-lowest rounded-[2.5rem] overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high text-on-surface-variant">
<th className="px-8 py-5 font-headline font-bold text-sm tracking-wide">Order #</th>
<th className="px-8 py-5 font-headline font-bold text-sm tracking-wide">Customer</th>
<th className="px-8 py-5 font-headline font-bold text-sm tracking-wide">Date</th>
<th className="px-8 py-5 font-headline font-bold text-sm tracking-wide">Payment</th>
<th className="px-8 py-5 font-headline font-bold text-sm tracking-wide">Total</th>
<th className="px-8 py-5 font-headline font-bold text-sm tracking-wide">Status</th>
<th className="px-8 py-5 font-headline font-bold text-sm tracking-wide"></th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
{/*  Row 1  */}
<tr className="hover:bg-primary-container/5 transition-colors group">
<td className="px-8 py-6 font-bold text-on-surface">#ORD-9421</td>
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
<img alt="Customer" className="w-full h-full object-cover" data-alt="close-up portrait of a stylish young customer in a vibrant cafe with warm natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArmzogkNhFa70GD6ufvcQEh5k_y5-M7yQh_u7XM84SYbGEvScPtdH56-SB-hGoqFvTI9HPClaclxYWciny-tkP5aSCtGBB9gh8zfpdZSkXaDu4Tj2TTsN6heNxEbkA9zSpNu3ASMEREu0QQD_Pluj71qb7VsBbdStu7KmpoqWG-6W3fLCvaSqEZhrjpK8-AnirwFcSYjje1d80UWg3gFKcPMGHLjWOv8BP8teqjSg0OpU2utNmx1X4_605WzDdv9AbMlg0QDj4tQP3"/>
</div>
<div>
<p className="font-bold text-on-surface leading-tight">Arjun Mehta</p>
<p className="text-xs text-tertiary">@arjun_creates</p>
</div>
</div>
</td>
<td className="px-8 py-6 text-sm text-on-surface-variant font-medium">Oct 24, 2023</td>
<td className="px-8 py-6">
<span className="text-xs font-bold px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container">UPI</span>
</td>
<td className="px-8 py-6 font-black text-on-surface">₹4,599.00</td>
<td className="px-8 py-6">
<span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                                            Delivered
                                        </span>
</td>
<td className="px-8 py-6 text-right">
<button className="p-2 rounded-full hover:bg-surface-container text-outline opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-primary-container/5 transition-colors group">
<td className="px-8 py-6 font-bold text-on-surface">#ORD-9420</td>
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
<img alt="Customer" className="w-full h-full object-cover" data-alt="headshot of a smiling young woman with glasses in a modern minimal workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP-eEP2gt3l7_QMg66Cdxe0mIa3olC6r6WCzppFmGvNpRyWy_yjZ5ZVO24kpbK_qCNDOTZdHIdeJvQTBfR4Ng6wQAXQ3oDq3sGkkMMQD90euvRxBVnM7qYBJPQf0DyaYhLODdZmTZmkUEHKhsYUGmsXhCXKKp3XN_Iy24rt-cn8JFqz7I0BwWF5VsPkROh78MTzrQZakPql-7_X_58DlE5e7ZMdVw9Y8GiydNGNlF4U_rB9wEiBd6OuIryXMCR2YC9y_JIhoeefuAW"/>
</div>
<div>
<p className="font-bold text-on-surface leading-tight">Priya Sharma</p>
<p className="text-xs text-tertiary">@priya_styles</p>
</div>
</div>
</td>
<td className="px-8 py-6 text-sm text-on-surface-variant font-medium">Oct 24, 2023</td>
<td className="px-8 py-6">
<span className="text-xs font-bold px-3 py-1 rounded-full bg-surface-container-high text-on-surface">COD</span>
</td>
<td className="px-8 py-6 font-black text-on-surface">₹12,240.00</td>
<td className="px-8 py-6">
<span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-[#FFF3E0] text-[#E65100] text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-[#E65100]"></span>
                                            Shipped
                                        </span>
</td>
<td className="px-8 py-6 text-right">
<button className="p-2 rounded-full hover:bg-surface-container text-outline opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-primary-container/5 transition-colors group">
<td className="px-8 py-6 font-bold text-on-surface">#ORD-9419</td>
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
<img alt="Customer" className="w-full h-full object-cover" data-alt="creative portrait of a young man with headphones in a studio with soft pastel lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUGiXpCqc-2quv2vTdv_zhZO1qI4kn-7L3gdedtym-Emas33cSV8i3UILx1VqFCdcBEwIHJfcPZEQjCcGuvEcHE-spD2Xb6_YMUSTHWjhsFziVdR2sy2AqmmXnDgckb6QSzCUjNl-i3rOkhdIqr7ooiyE3qfOzPZLGMRiYOlRMPYEtG4B8bHSBWXNVcB2gnIobtO5YPt4Ebhzdpf6gbKMF7-bjJyuyO5vlnkyZ6yg352neuwJuYYksIt-iV1D8R3ixNATnTcdzmPVl"/>
</div>
<div>
<p className="font-bold text-on-surface leading-tight">Kabir Singh</p>
<p className="text-xs text-tertiary">@kabir_vibes</p>
</div>
</div>
</td>
<td className="px-8 py-6 text-sm text-on-surface-variant font-medium">Oct 23, 2023</td>
<td className="px-8 py-6">
<span className="text-xs font-bold px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container">UPI</span>
</td>
<td className="px-8 py-6 font-black text-on-surface">₹850.00</td>
<td className="px-8 py-6">
<span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            Pending
                                        </span>
</td>
<td className="px-8 py-6 text-right">
<button className="p-2 rounded-full hover:bg-surface-container text-outline opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-primary-container/5 transition-colors group">
<td className="px-8 py-6 font-bold text-on-surface">#ORD-9418</td>
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
<img alt="Customer" className="w-full h-full object-cover" data-alt="close-up profile of a woman smiling with urban blurred city background at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsk75pu2-n20Zhp_AXxDvM8aRzCYfAO5P3BL13aWAv-OedKYi6CtVlwfAsndKu9a1QIUtSdQMsLfHWw9YUZlVR_A_wnnm76xhfEDW4Pnh4QZsKbTz0tBkpVjYg2PrrzCn4nH7zN9TwyrrINNMC1rGcc4zAR_VpREHD1q1LlIU0tk6chkeBCBHS7pj1LJiUvOb0VR6mInku_HARuhJZOX3RWCfHr2kJCLuT9nfy55UUwG9i2r2x_Fg96i00x-k-VJ42np1LakJw6FuP"/>
</div>
<div>
<p className="font-bold text-on-surface leading-tight">Ananya Roy</p>
<p className="text-xs text-tertiary">@ananya_royals</p>
</div>
</div>
</td>
<td className="px-8 py-6 text-sm text-on-surface-variant font-medium">Oct 23, 2023</td>
<td className="px-8 py-6">
<span className="text-xs font-bold px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container">UPI</span>
</td>
<td className="px-8 py-6 font-black text-on-surface">₹2,100.00</td>
<td className="px-8 py-6">
<span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-[#E3F2FD] text-[#1565C0] text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-[#1565C0]"></span>
                                            Confirmed
                                        </span>
</td>
<td className="px-8 py-6 text-right">
<button className="p-2 rounded-full hover:bg-surface-container text-outline opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
{/*  Pagination Container  */}
<div className="bg-surface-container-low px-8 py-4 flex items-center justify-between border-t border-surface-container-high">
<p className="text-sm text-on-surface-variant font-medium">Showing <span className="font-bold text-on-surface">1 - 4</span> of <span className="font-bold text-on-surface">1,240</span> orders</p>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container font-bold shadow-sm">1</button>
<button className="w-10 h-10 rounded-full hover:bg-surface-container text-on-surface transition-colors">2</button>
<button className="w-10 h-10 rounded-full hover:bg-surface-container text-on-surface transition-colors">3</button>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Contextual Bento Highlight  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-fixed-dim p-8 rounded-xl text-on-primary-fixed relative overflow-hidden">
<div className="relative z-10 space-y-4">
<h3 className="text-2xl font-black">Export Order Insights</h3>
<p className="max-w-md opacity-90">Generate detailed CSV reports of your orders categorized by payment status and delivery speed to optimize your logistics.</p>
<button className="bg-on-primary-fixed text-primary-container font-bold px-8 py-3 rounded-full hover:bg-on-primary-fixed-variant transition-colors active:scale-95">Download Report</button>
</div>
<span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] opacity-10 rotate-12" data-icon="receipt_long">receipt_long</span>
</div>
<div className="bg-tertiary-container p-8 rounded-xl flex flex-col justify-between">
<div className="space-y-2">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl" data-icon="auto_awesome">auto_awesome</span>
<h4 className="font-black text-on-tertiary-container text-xl">Quick Insights</h4>
<p className="text-sm text-on-tertiary-fixed-variant">UPI payments have increased by 24% this week. Consider offering cashback on UPI to boost sales further.</p>
</div>
<a className="text-on-tertiary-container font-bold text-sm flex items-center gap-2 group" href="#">
                        Explore Analytics
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</section>
</main>
{/*  Floating Action Button (As defined by Shell Logic: Suppressed on Details/Transactional, Shown on Home/Dashboard)  */}
<button className="fixed bottom-8 right-8 bg-primary text-on-primary-fixed p-4 rounded-full shadow-[0_8px_32px_rgba(255,209,102,0.4)] hover:scale-110 active:scale-95 transition-all z-50 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span className="font-bold pr-2">Create Order</span>
</button>

    </div>
  );
}
