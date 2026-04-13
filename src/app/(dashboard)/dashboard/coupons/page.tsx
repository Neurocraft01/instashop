export default function Page() {
  return (
    <div className="vibrant-wrapper">

<div className="flex min-h-screen">
{/*  SideNavBar  */}
<aside className="hidden md:flex flex-col h-screen w-64 left-0 sticky bg-[#e4e2df] dark:bg-[#2B1B3D] py-8 px-4 gap-8">
<div className="px-4">
<div className="text-xl font-bold text-[#2B1B3D] dark:text-[#FFFFFF] font-headline">Studio</div>
<div className="text-[10px] font-['Epilogue'] font-semibold uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df]">Creator Pro</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 font-['Epilogue'] text-sm font-semibold uppercase tracking-widest hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 font-['Epilogue'] text-sm font-semibold uppercase tracking-widest hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                    Analytics
                </a>
<a className="flex items-center gap-3 text-[#2B1B3D] dark:text-[#FFD166] bg-[#FFFFFF] dark:bg-[#66547a]/20 rounded-full px-4 py-3 font-['Epilogue'] text-sm font-semibold uppercase tracking-widest translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="auto_awesome_motion">auto_awesome_motion</span>
                    Collections
                </a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 font-['Epilogue'] text-sm font-semibold uppercase tracking-widest hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
                    Assets
                </a>
<a className="flex items-center gap-3 text-[#66547a] dark:text-[#e4e2df] px-4 py-3 font-['Epilogue'] text-sm font-semibold uppercase tracking-widest hover:bg-[#f3f0ed] dark:hover:bg-[#66547a]/10 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                    Team
                </a>
</nav>
<div className="mt-auto flex flex-col gap-4 px-4">
<button className="bg-primary-container text-on-primary-container font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform">
                    Upgrade Plan
                </button>
<div className="flex flex-col gap-2 pt-4">
<a className="flex items-center gap-3 text-[#66547a] text-xs font-bold uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span> Help
                    </a>
<a className="flex items-center gap-3 text-[#66547a] text-xs font-bold uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span> Sign Out
                    </a>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col min-w-0">
{/*  TopNavBar  */}
<header className="w-full top-0 sticky z-50 bg-[#FFFFFF] dark:bg-[#2B1B3D] flex justify-between items-center px-8 h-20 w-full">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-[#2B1B3D] dark:text-[#FFD166] font-headline tracking-tight">RadiantEditor</span>
<nav className="hidden md:flex gap-6">
<a className="text-[#66547a] dark:text-[#e4e2df] hover:text-[#FFD166] transition-colors duration-300 font-headline tracking-tight" href="#">Drafts</a>
<a className="text-[#FFD166] font-bold border-b-2 border-[#FFD166] pb-1 font-headline tracking-tight" href="#">Templates</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container-low rounded-full px-4 py-2 gap-2">
<span className="material-symbols-outlined text-outline" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search templates..." type="text"/>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-tertiary cursor-pointer" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-tertiary cursor-pointer" data-icon="settings">settings</span>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="close-up portrait of a stylish young creator in a bright studio with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnSUL5NUiNBIiDkNQEX0PvLwYfSRH8x5KSXZmU4utMYzYJogyhhWln7_4LHmBQq3JZPYGZRp6fmX0D6VQVAzTV9dYeRwBKw_sNOJ2uksmgnC0JLHzNWLpZFNENxp0x1jCvx8rlRLn0yTiq8mojT84b2PUdPIU97HQqoXYfszID9UtsZiP_OC3w6SU_zt0lu1zqAlsHNFbRQG7d68RziqL1X28ZcYltgl3Wj1EcRSBEYPikPq9Oov3WA9JLujkrxDfdYION1d_USA0u"/>
</div>
</div>
</div>
</header>
{/*  Content Area  */}
<div className="p-8 lg:p-12 max-w-7xl mx-auto w-full space-y-12">
{/*  Hero Header Section  */}
<section className="flex flex-col md:flex-row justify-between items-end gap-6">
<div className="space-y-2">
<span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase block">Promotion Center</span>
<h1 className="font-headline text-5xl md:text-6xl font-black text-on-background leading-none">Coupons.</h1>
<p className="text-tertiary text-lg max-w-md">Manage your seasonal discounts and flash sales with editorial precision.</p>
</div>
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold py-4 px-8 rounded-xl luminous-shadow flex items-center gap-3 active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="add_circle" data-weight="fill">add_circle</span>
                        Create Coupon
                    </button>
</section>
{/*  Stats Overview (Asymmetric Bento)  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
<div className="relative z-10">
<span className="label-md text-tertiary font-bold tracking-widest uppercase text-xs">Total Active Coupons</span>
<div className="text-6xl font-headline font-black mt-4 text-on-background">12</div>
</div>
<div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-[12rem]" data-icon="confirmation_number">confirmation_number</span>
</div>
<div className="mt-8 flex items-center gap-2 text-secondary font-bold">
<span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
<span>+14% from last month</span>
</div>
</div>
<div className="bg-primary-container rounded-xl p-8 flex flex-col justify-between">
<div>
<span className="label-md text-on-primary-container font-bold tracking-widest uppercase text-xs">Redemption Rate</span>
<div className="text-4xl font-headline font-black mt-2 text-on-primary-container">64.2%</div>
</div>
<div className="h-12 flex items-end gap-1">
<div className="bg-on-primary-container/20 w-full h-1/2 rounded-t-sm"></div>
<div className="bg-on-primary-container/20 w-full h-2/3 rounded-t-sm"></div>
<div className="bg-on-primary-container/20 w-full h-1/3 rounded-t-sm"></div>
<div className="bg-on-primary-container/20 w-full h-full rounded-t-sm"></div>
<div className="bg-on-primary-container/20 w-full h-3/4 rounded-t-sm"></div>
</div>
</div>
<div className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border-none">
<div>
<span className="label-md text-tertiary font-bold tracking-widest uppercase text-xs">Revenue Lift</span>
<div className="text-4xl font-headline font-black mt-2 text-on-background">$4.2k</div>
</div>
<div className="text-xs text-tertiary font-medium">Attributed to promo codes</div>
</div>
</section>
{/*  Coupon Table List  */}
<section className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="font-headline text-3xl font-bold text-on-background">Active Campaigns</h2>
<div className="flex gap-4">
<button className="bg-surface-container-lowest text-on-surface font-semibold px-4 py-2 rounded-full text-sm border border-outline-variant/10 hover:bg-surface-container transition-colors">
                                Filter by Status
                            </button>
</div>
</div>
<div className="space-y-4">
{/*  Coupon Item 1  */}
<div className="glass-card rounded-xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:shadow-xl transition-shadow duration-300">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="percent">percent</span>
</div>
<div>
<h3 className="font-headline font-bold text-xl text-on-background tracking-tight">SUMMER_VIBES_24</h3>
<div className="flex gap-3 mt-1">
<span className="text-xs font-bold px-2 py-1 bg-surface-container-highest rounded text-tertiary">Percentage Discount</span>
<span className="text-xs font-bold px-2 py-1 bg-secondary/10 rounded text-secondary">Active</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Value</span>
<div className="font-headline font-bold text-xl">25% OFF</div>
</div>
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Usages</span>
<div className="font-headline font-bold text-xl">842 <span className="text-xs text-tertiary font-normal">/ 1000</span></div>
</div>
<div className="space-y-1 hidden lg:block">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Expiry</span>
<div className="font-headline font-bold text-xl text-error-dim">Aug 31</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-tertiary" data-icon="edit">edit</span>
</button>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-tertiary" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
{/*  Coupon Item 2  */}
<div className="glass-card rounded-xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:shadow-xl transition-shadow duration-300">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-3xl" data-icon="payments">payments</span>
</div>
<div>
<h3 className="font-headline font-bold text-xl text-on-background tracking-tight">WELCOME_STUDIO</h3>
<div className="flex gap-3 mt-1">
<span className="text-xs font-bold px-2 py-1 bg-surface-container-highest rounded text-tertiary">Flat Discount</span>
<span className="text-xs font-bold px-2 py-1 bg-secondary/10 rounded text-secondary">Active</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Value</span>
<div className="font-headline font-bold text-xl">$50.00</div>
</div>
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Usages</span>
<div className="font-headline font-bold text-xl">2,105 <span className="text-xs text-tertiary font-normal">/ ∞</span></div>
</div>
<div className="space-y-1 hidden lg:block">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Expiry</span>
<div className="font-headline font-bold text-xl">Never</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-tertiary" data-icon="edit">edit</span>
</button>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-tertiary" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
{/*  Coupon Item 3 (Inactive)  */}
<div className="bg-surface-container-low/50 rounded-xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 opacity-70">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-3xl" data-icon="event_busy">event_busy</span>
</div>
<div>
<h3 className="font-headline font-bold text-xl text-on-background tracking-tight">WINTER_SALE_23</h3>
<div className="flex gap-3 mt-1">
<span className="text-xs font-bold px-2 py-1 bg-surface-container-highest rounded text-tertiary">Percentage Discount</span>
<span className="text-xs font-bold px-2 py-1 bg-surface-container rounded text-outline">Expired</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Value</span>
<div className="font-headline font-bold text-xl">50% OFF</div>
</div>
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Usages</span>
<div className="font-headline font-bold text-xl">1,000 <span className="text-xs text-tertiary font-normal">/ 1000</span></div>
</div>
<div className="space-y-1 hidden lg:block">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Expiry</span>
<div className="font-headline font-bold text-xl">Dec 31, 23</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-tertiary" data-icon="restore">restore</span>
</button>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-tertiary" data-icon="delete">delete</span>
</button>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
{/*  Mobile Navigation Shell  */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 glass-card border-t border-outline-variant/10 flex justify-around items-center px-6 z-50">
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" data-icon="dashboard" data-weight="fill">dashboard</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Dash</span>
</button>
<button className="flex flex-col items-center gap-1 text-tertiary">
<span className="material-symbols-outlined" data-icon="auto_awesome_motion">auto_awesome_motion</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Promos</span>
</button>
<div className="relative -top-8">
<button className="w-16 h-16 bg-primary rounded-full luminous-shadow flex items-center justify-center text-on-primary border-4 border-background">
<span className="material-symbols-outlined text-3xl" data-icon="add">add</span>
</button>
</div>
<button className="flex flex-col items-center gap-1 text-tertiary">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Stats</span>
</button>
<button className="flex flex-col items-center gap-1 text-tertiary">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Config</span>
</button>
</nav>

    </div>
  );
}
