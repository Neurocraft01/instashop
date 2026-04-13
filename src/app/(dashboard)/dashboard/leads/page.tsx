export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  SideNavBar (Execution from JSON)  */}
<aside className="hidden md:flex flex-col py-8 h-screen w-64 rounded-r-[3rem] sticky top-0 left-0 bg-[#f3f0ed] dark:bg-slate-900 gap-2 z-40">
<div className="px-8">
<h1 className="text-xl font-black text-slate-900 dark:text-white mb-8 font-headline">InstaShop Seller</h1>
</div>
<nav className="flex flex-col gap-2 overflow-y-auto">
{/*  Active state mapping: "Leads" is active  */}
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 font-medium" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">dashboard</span> Dashboard
                </span>
</a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 font-medium" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">inventory_2</span> Products
                </span>
</a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 font-medium" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">shopping_bag</span> Orders
                </span>
</a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 font-medium" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">group</span> Customers
                </span>
</a>
<a className="bg-white dark:bg-slate-800 text-amber-500 rounded-full shadow-sm ml-2 mr-4 py-3 px-6 scale-98 transition-all font-medium" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">leaderboard</span> Leads
                </span>
</a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 font-medium" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">analytics</span> Analytics
                </span>
</a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 font-medium" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">sell</span> Coupons
                </span>
</a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 font-medium mt-auto" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">settings</span> Settings
                </span>
</a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 font-medium" href="#">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined">logout</span> Logout
                </span>
</a>
</nav>
</aside>
<main className="flex-1 flex flex-col min-w-0 bg-background">
{/*  TopNavBar (Execution from JSON)  */}
<header className="bg-white/70 backdrop-blur-xl sticky top-0 z-30 flex justify-between items-center w-full px-8 py-4 shadow-[0_8px_32px_rgba(255,209,102,0.15)] font-headline tracking-tight">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-slate-900">InstaShop</span>
<nav className="hidden md:flex gap-6">
<a className="text-slate-500 hover:text-amber-500 transition-all duration-300" href="#">Storefront</a>
<a className="text-slate-500 hover:text-amber-500 transition-all duration-300" href="#">Inbox</a>
<a className="text-slate-500 hover:text-amber-500 transition-all duration-300" href="#">Help</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:block relative">
<input className="bg-slate-100 border-none rounded-full px-6 py-2 w-64 focus:ring-2 focus:ring-primary-container text-sm" placeholder="Search leads..." type="text"/>
</div>
<button className="p-2 rounded-full hover:bg-amber-50 text-slate-600 transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
<img alt="Seller Profile" className="w-full h-full object-cover" data-alt="close-up portrait of a confident creative professional smiling with soft natural light in a bright studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEmGyyomp97IhUklSlHKSraiFyRJbTq2NhhyMHOmQDoMIjt2qG-jjvzFvCp3TrbKpIOEOaXwwEzxbMxLz-IpW9zGC3RC6lm8hAuEZpJULQ56NW3zmG7YWpn3wovo0rhbpYD6m6OEqEQ46wHWi0geJgJAG1v1GkrmOLCfhdo_89mfFxltvOdCssVMKj9T8ASMDwwHtiQNWMcU9GrT0IIKlzkeFEYAEEXdfCvuU0tT5kfrG9YiLx7wEKScGaEf46bK5Weh4HOFRMKjz_"/>
</div>
</div>
</header>
{/*  Kanban View Canvas  */}
<div className="p-8 flex-1 flex flex-col gap-8 overflow-hidden">
<div className="flex justify-between items-end">
<div>
<h2 className="text-4xl font-black font-headline text-on-background tracking-tight mb-2">Lead Pipeline</h2>
<p className="text-on-surface-variant max-w-xl">Nurture your storefront inquiries and turn prospects into premium customers.</p>
</div>
<button className="bg-primary hover:scale-105 active:scale-95 transition-all duration-300 text-on-primary font-bold px-8 py-4 rounded-xl flex items-center gap-2 shadow-[0_8px_32px_rgba(116,87,0,0.2)]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                    Add New Lead
                </button>
</div>
{/*  Kanban Board  */}
<div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 overflow-x-auto min-h-0 pb-4">
{/*  Column: New  */}
<div className="flex flex-col gap-4 min-w-[300px]">
<div className="flex items-center justify-between px-4">
<h3 className="font-headline font-bold text-lg uppercase tracking-wider flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                            New
                        </h3>
<span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant">03</span>
</div>
<div className="bg-surface-container-low rounded-xl p-3 flex-1 flex flex-col gap-4 overflow-y-auto">
{/*  Card  */}
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-transparent hover:border-primary-container transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="bg-tertiary-container text-on-tertiary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Storefront Form</span>
<button className="text-outline-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<h4 className="text-xl font-bold font-headline mb-1 group-hover:text-primary transition-colors">Julianne Moore</h4>
<p className="text-on-surface-variant text-sm mb-4">+1 (555) 012-3456</p>
<div className="bg-surface-container p-4 rounded-lg mb-6">
<p className="text-sm italic leading-relaxed text-on-surface">"Interested in the premium custom sneaker drop. Do you have size 10 in the 'Sunset' colorway?"</p>
</div>
<button className="w-full bg-secondary-container text-on-secondary-container font-bold py-3 rounded-full hover:scale-[1.02] active:scale-95 transition-all text-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart_checkout</span>
                                Convert to Order
                            </button>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-transparent hover:border-primary-container transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="bg-tertiary-container text-on-tertiary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Inquiry</span>
<button className="text-outline-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<h4 className="text-xl font-bold font-headline mb-1 group-hover:text-primary transition-colors">Marcus Chen</h4>
<p className="text-on-surface-variant text-sm mb-4">+1 (555) 987-6543</p>
<div className="bg-surface-container p-4 rounded-lg mb-6">
<p className="text-sm italic leading-relaxed text-on-surface">"Looking for bulk pricing for corporate gifting. Need 50 units by next month."</p>
</div>
<button className="w-full bg-secondary-container text-on-secondary-container font-bold py-3 rounded-full hover:scale-[1.02] active:scale-95 transition-all text-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart_checkout</span>
                                Convert to Order
                            </button>
</div>
</div>
</div>
{/*  Column: Hot  */}
<div className="flex flex-col gap-4 min-w-[300px]">
<div className="flex items-center justify-between px-4">
<h3 className="font-headline font-bold text-lg uppercase tracking-wider flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Hot
                        </h3>
<span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant">01</span>
</div>
<div className="bg-surface-container-low rounded-xl p-3 flex-1 flex flex-col gap-4 overflow-y-auto">
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-2 border-secondary/20 transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 -mr-12 -mt-12 rounded-full"></div>
<div className="flex justify-between items-start mb-4">
<span className="bg-secondary text-on-secondary text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">High Intent</span>
<button className="text-outline-variant hover:text-secondary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<h4 className="text-xl font-bold font-headline mb-1">Sarah Jenkins</h4>
<p className="text-on-surface-variant text-sm mb-4">+1 (555) 246-8101</p>
<div className="bg-secondary/5 p-4 rounded-lg mb-6 border border-secondary/10">
<p className="text-sm italic leading-relaxed text-on-secondary-container">"Already have the item in cart but having trouble with the discount code 'FIRST10'. Please help!"</p>
</div>
<button className="w-full bg-secondary text-on-secondary font-bold py-3 rounded-full hover:scale-[1.02] active:scale-95 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-secondary/20">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart_checkout</span>
                                Convert to Order
                            </button>
</div>
</div>
</div>
{/*  Column: Warm  */}
<div className="flex flex-col gap-4 min-w-[300px]">
<div className="flex items-center justify-between px-4">
<h3 className="font-headline font-bold text-lg uppercase tracking-wider flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                            Warm
                        </h3>
<span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant">02</span>
</div>
<div className="bg-surface-container-low rounded-xl p-3 flex-1 flex flex-col gap-4 overflow-y-auto">
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-transparent hover:border-primary-container transition-all">
<div className="flex justify-between items-start mb-4">
<span className="bg-tertiary-container text-on-tertiary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Follow-up</span>
<button className="text-outline-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<h4 className="text-xl font-bold font-headline mb-1">David Wilson</h4>
<p className="text-on-surface-variant text-sm mb-4">+1 (555) 369-2580</p>
<div className="bg-surface-container p-4 rounded-lg mb-6">
<p className="text-sm italic leading-relaxed text-on-surface">"Saw your latest post. Are there any upcoming restocks for the vintage collection?"</p>
</div>
<button className="w-full bg-secondary-container text-on-secondary-container font-bold py-3 rounded-full hover:scale-[1.02] active:scale-95 transition-all text-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart_checkout</span>
                                Convert to Order
                            </button>
</div>
</div>
</div>
{/*  Column: Cold  */}
<div className="flex flex-col gap-4 min-w-[300px]">
<div className="flex items-center justify-between px-4">
<h3 className="font-headline font-bold text-lg uppercase tracking-wider flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                            Cold
                        </h3>
<span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant">00</span>
</div>
<div className="bg-surface-container-low rounded-xl p-3 flex-1 border-2 border-dashed border-outline-variant/30 flex items-center justify-center">
<div className="text-center p-8">
<span className="material-symbols-outlined text-4xl text-outline-variant mb-2">ac_unit</span>
<p className="text-outline-variant font-bold text-sm">No cold leads.<br/>Keep them engaged!</p>
</div>
</div>
</div>
</div>
</div>
{/*  Floating Creator Action Bar  */}
<div className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-panel px-6 py-4 rounded-xl shadow-[0_8px_32px_rgba(255,209,102,0.2)] flex items-center gap-8 z-50">
<button className="flex flex-col items-center gap-1 group">
<span className="material-symbols-outlined text-on-background group-hover:text-primary transition-colors">refresh</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Refresh</span>
</button>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<button className="flex flex-col items-center gap-1 group">
<span className="material-symbols-outlined text-on-background group-hover:text-primary transition-colors">filter_list</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Filter</span>
</button>
<button className="flex flex-col items-center gap-1 group">
<span className="material-symbols-outlined text-on-background group-hover:text-primary transition-colors">sort</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Sort</span>
</button>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<button className="flex flex-col items-center gap-1 group">
<span className="material-symbols-outlined text-on-background group-hover:text-primary transition-colors">archive</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Archive</span>
</button>
</div>
</main>

    </div>
  );
}
