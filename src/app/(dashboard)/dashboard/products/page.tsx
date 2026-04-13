export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  SideNavBar  */}
<aside className="hidden md:flex flex-col h-screen w-64 left-0 sticky bg-[#e4e2df] dark:bg-[#2B1B3D] py-8 px-4 gap-8">
<div className="flex items-center gap-3 px-4">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="auto_awesome">auto_awesome</span>
</div>
<div>
<h1 className="text-xl font-bold text-[#2B1B3D] dark:text-[#FFFFFF]">Studio</h1>
<p className="text-[10px] font-['Epilogue'] font-semibold uppercase tracking-widest text-[#66547a]">Creator Pro</p>
</div>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-['Epilogue'] text-sm font-semibold uppercase tracking-widest">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-[#2B1B3D] dark:text-[#FFD166] bg-[#FFFFFF] dark:bg-[#66547a]/20 rounded-full px-4 py-3 Active: translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-['Epilogue'] text-sm font-semibold uppercase tracking-widest">Analytics</span>
</a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span className="font-['Epilogue'] text-sm font-semibold uppercase tracking-widest">Assets</span>
</a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="auto_awesome_motion">auto_awesome_motion</span>
<span className="font-['Epilogue'] text-sm font-semibold uppercase tracking-widest">Collections</span>
</a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-['Epilogue'] text-sm font-semibold uppercase tracking-widest">Team</span>
</a>
</nav>
<div className="mt-auto flex flex-col gap-2">
<button className="bg-primary text-on-primary-fixed py-3 px-6 rounded-xl font-bold luminous-shadow hover:scale-105 transition-transform mb-4">
                Upgrade Plan
            </button>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-2 hover:bg-[#f3f0ed] rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="text-xs font-bold uppercase tracking-widest">Help</span>
</a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-2 hover:bg-[#f3f0ed] rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="text-xs font-bold uppercase tracking-widest">Sign Out</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col min-w-0 bg-background overflow-y-auto">
{/*  TopNavBar  */}
<header className="w-full top-0 sticky z-30 flex justify-between items-center px-8 h-20 bg-[#FFFFFF] dark:bg-[#2B1B3D]">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-[#2B1B3D] dark:text-[#FFD166] font-['Epilogue'] tracking-tight">RadiantEditor</span>
<div className="hidden lg:flex items-center gap-6">
<a className="text-[#66547a] dark:text-[#e4e2df] hover:text-[#FFD166] transition-colors duration-300 font-['Epilogue'] tracking-tight" href="#">Drafts</a>
<a className="text-[#66547a] dark:text-[#e4e2df] hover:text-[#FFD166] transition-colors duration-300 font-['Epilogue'] tracking-tight" href="#">Templates</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full w-64 focus:ring-2 focus:ring-secondary text-sm" placeholder="Search products..." type="text"/>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#66547a] cursor-pointer" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-[#66547a] cursor-pointer" data-icon="settings">settings</span>
<div className="h-10 w-10 rounded-full bg-tertiary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close-up portrait of a professional woman with a confident expression in a bright modern studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9W8UvRp80dmCEdf0SkUyMFzQ9X-O8myHtlNPr2XgRuQAM1ahYYl_NpFKwoesGM_MLmjOC3pJJwQ_N3yaq8SO7vDBfiLjRQq2fyC-B4aDqY30fEtnqDdHYegoZQWOlwN5Bc-8DQr5i-34qciVcehN8sjimOg7NvcHdbdt7EB3Yn5Z-_svHwKaAxPNBNhq2QLmyER2uBC3ImY5yeDL4VkErjDloXsVKbcvt46dCCuYQ0d9ffGKndE3cObGH0bOUuqPavTiD_s6FSTeg"/>
</div>
</div>
</div>
</header>
{/*  Page Header Section  */}
<section className="px-8 pt-10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Inventory Management</span>
<h2 className="text-5xl font-black text-on-background tracking-tighter leading-none font-headline">Product Library</h2>
</div>
<button className="flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg luminous-shadow hover:translate-y-[-2px] active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="add" data-weight="fill">add</span>
                Create New
            </button>
</section>
{/*  Stats Grid (Bento Style)  */}
<section className="px-8 mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col gap-1">
<p className="text-tertiary text-xs font-bold uppercase tracking-wider">Total Products</p>
<h3 className="text-3xl font-black font-headline">1,284</h3>
<div className="mt-2 text-[10px] text-primary font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                    +12% this month
                </div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-1">
<p className="text-tertiary text-xs font-bold uppercase tracking-wider">Active Items</p>
<h3 className="text-3xl font-black font-headline text-secondary-dim">942</h3>
<div className="mt-2 text-[10px] text-secondary font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="check_circle">check_circle</span>
                    Healthy status
                </div>
</div>
<div className="bg-surface-container-high p-6 rounded-lg flex flex-col gap-1 md:col-span-2 relative overflow-hidden">
<div className="relative z-10">
<p className="text-tertiary text-xs font-bold uppercase tracking-wider">Low Stock Alerts</p>
<h3 className="text-3xl font-black font-headline">18 Items</h3>
<p className="text-sm text-on-surface-variant mt-2 max-w-[200px]">Stock levels for your 'Autumn Collection' are reaching critical levels.</p>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] text-on-surface/5 rotate-12" data-icon="warning">warning</span>
</div>
</section>
{/*  Main Product Table Container  */}
<div className="px-8 mb-20">
<div className="bg-surface-container-lowest rounded-xl overflow-hidden luminous-shadow">
{/*  Table Filters  */}
<div className="p-6 flex flex-wrap items-center justify-between gap-4 border-b border-surface-container-low">
<div className="flex items-center gap-4">
<button className="px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-xs font-bold">All Products</button>
<button className="px-4 py-2 rounded-full bg-surface-container-low text-tertiary text-xs font-bold hover:bg-surface-container-high">Published</button>
<button className="px-4 py-2 rounded-full bg-surface-container-low text-tertiary text-xs font-bold hover:bg-surface-container-high">Draft</button>
<button className="px-4 py-2 rounded-full bg-surface-container-low text-tertiary text-xs font-bold hover:bg-surface-container-high">Archived</button>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
<button className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="sort">sort</span>
</button>
</div>
</div>
{/*  Table Content  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-tertiary">Product</th>
<th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-tertiary">Category</th>
<th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-tertiary">Price</th>
<th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-tertiary">Stock</th>
<th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-tertiary">Status</th>
<th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-tertiary">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
{/*  Product Row 1  */}
<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="minimalist studio photography of a sleek white smartwatch on a warm cream-colored textured background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdMVxphIbQh9hII8zUfA6-OXQrGPgTUVs8Y49296Azo9spMPo59McFpUZmc5PsXt_kX1A6t_QLhQ3uXWjE8RHk_skYNmTAVFnFxMPWMSaaGPsKrO2GInvberLXSyuO6XMvH2sIA7NXStdfS7Fo_hnfcRTQ7aQhSGZg1NzXbYqAuSxwoRe2OH4ldzZfJqXQDPdXaBzTtnx5iM1KnG0557BAMP_RXg8MHlKg8Zl12f-gt2NGKCCbdM3L2znvJJF15B3UM59_rvEARvQQ"/>
</div>
<div>
<p className="font-bold text-on-surface">Radiant Smartwatch Series 5</p>
<p className="text-xs text-on-surface-variant">ID: PROD-9821</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm text-tertiary bg-tertiary-container/30 px-3 py-1 rounded-full">Electronics</span>
</td>
<td className="px-6 py-5 font-headline font-bold text-on-surface">$249.00</td>
<td className="px-6 py-5">
<div className="flex flex-col gap-1">
<p className="text-sm font-semibold">142 units</p>
<div className="w-24 h-1 bg-surface-container rounded-full overflow-hidden">
<div className="bg-primary h-full w-[80%]"></div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-black uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Active
                                    </div>
</td>
<td className="px-6 py-5">
<button className="text-outline hover:text-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/*  Product Row 2  */}
<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="professional product shot of a vibrant red athletic sneaker against a minimalist grey background with dynamic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMMJ9alejwoij2LmRqAzJBnItKGeievnjrYFsdhb2p9kORam0bcWD9CXs0HFT-kzPKXy8cSug0UFDWtdZjLPEkQQIh33weTY_JIfJArvzvrlpSbtwUdRCphsdAMIaorjhA4vPB1FhhrxcxQVX-4AFs8rv7xxB7njnam8XOHHX56r9QrYRimZ4M5yzzXQtGoSSJhsStceCAGWdBWKuxPLWq-B2lWiMEQZKaa774KLj-iLbIMrny55H02oRPJRtoGxROwJEJIjOYPHRc"/>
</div>
<div>
<p className="font-bold text-on-surface">Pulse Running Sneakers</p>
<p className="text-xs text-on-surface-variant">ID: PROD-7734</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm text-tertiary bg-tertiary-container/30 px-3 py-1 rounded-full">Footwear</span>
</td>
<td className="px-6 py-5 font-headline font-bold text-on-surface">$120.00</td>
<td className="px-6 py-5">
<div className="flex flex-col gap-1">
<p className="text-sm font-semibold text-error">4 units</p>
<div className="w-24 h-1 bg-surface-container rounded-full overflow-hidden">
<div className="bg-error h-full w-[10%]"></div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-black uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                        Low Stock
                                    </div>
</td>
<td className="px-6 py-5">
<button className="text-outline hover:text-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/*  Product Row 3  */}
<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="vintage style instant camera in pastel blue placed on a clean wooden surface with soft diffused sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuMHX71VafCZG7a3Gs4osaEeRGHJAj6vxI2Qn520WCjB-BH-8obT9gk7oDbtvFWlBYOuRiVUChXwWEUrmIzPqt7bGEVoFMU1bVuTO3uATbxiLF5D9ZktJsZvj4Fyav-K02PZ9fXjNZHL1DHXS_LGL6QyPWFbgbBY5l_CnErSwPDzK_aYRfwUj_WQbnJSYZQvyqYLD9-ya23VnVD4Ja9BDLfV0MMKQhz58KZwnJD8k12Sh8J-4lO_EyeJHWjARJ6BF4IFwJDZoVJf8l"/>
</div>
<div>
<p className="font-bold text-on-surface">Aura Retro Camera</p>
<p className="text-xs text-on-surface-variant">ID: PROD-1102</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm text-tertiary bg-tertiary-container/30 px-3 py-1 rounded-full">Photography</span>
</td>
<td className="px-6 py-5 font-headline font-bold text-on-surface">$89.50</td>
<td className="px-6 py-5">
<div className="flex flex-col gap-1">
<p className="text-sm font-semibold">0 units</p>
<div className="w-24 h-1 bg-surface-container rounded-full overflow-hidden">
<div className="bg-outline h-full w-[0%]"></div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-outline text-[10px] font-black uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                        Out of Stock
                                    </div>
</td>
<td className="px-6 py-5">
<button className="text-outline hover:text-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/*  Product Row 4  */}
<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="artisan organic skincare bottle with a minimal label on a stone slab with natural shadows and green leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO6Z3INNoDc2-AJebHmmltu9vN69cIOGfs_gDp4seYI1WMo1e4jN7SHQgH4-mOrUuavnzyeSla2mtA2nzMDG7Inijd45QbZq4o5zOH3lI1ycXGBO5bL-qZUJI0KYBp5SAQfK9VYq8K8a9GkQdetBrRf_P5I0Mz6cUBFXLHZXYQ9i89J5JVlF5SoRx4iRW6y-2NQMh3umWhWa-ZRaa8Eps76uf_gQryJjuhDq-539Dans5Ui-GgiN-7Lv-n1iLZ7XoYBGRTcTIcbbcg"/>
</div>
<div>
<p className="font-bold text-on-surface">Essence Glow Serum</p>
<p className="text-xs text-on-surface-variant">ID: PROD-2391</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm text-tertiary bg-tertiary-container/30 px-3 py-1 rounded-full">Beauty</span>
</td>
<td className="px-6 py-5 font-headline font-bold text-on-surface">$45.00</td>
<td className="px-6 py-5">
<div className="flex flex-col gap-1">
<p className="text-sm font-semibold">50 units</p>
<div className="w-24 h-1 bg-surface-container rounded-full overflow-hidden">
<div className="bg-primary h-full w-[40%]"></div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        Draft
                                    </div>
</td>
<td className="px-6 py-5">
<button className="text-outline hover:text-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination  */}
<div className="p-6 flex items-center justify-between bg-surface-container-low/20">
<p className="text-xs text-on-surface-variant font-medium">Showing 1 to 4 of 1,284 products</p>
<div className="flex items-center gap-2">
<button className="h-10 w-10 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-container text-on-primary-container font-bold text-sm">1</button>
<button className="h-10 w-10 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-surface-container-low transition-colors font-bold text-sm">2</button>
<button className="h-10 w-10 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-surface-container-low transition-colors font-bold text-sm">3</button>
<button className="h-10 w-10 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
{/*  Floating Action Button (Mobile Only)  */}
<button className="md:hidden fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center luminous-shadow z-50">
<span className="material-symbols-outlined text-3xl" data-icon="add">add</span>
</button>

    </div>
  );
}
