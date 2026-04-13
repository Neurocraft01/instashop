export default function Page() {
  return (
    <div className="vibrant-wrapper">

<div className="flex min-h-screen">
{/*  SideNavBar (Shared Component)  */}
<aside className="h-screen w-64 rounded-r-[3rem] sticky top-0 left-0 bg-[#f3f0ed] dark:bg-slate-900 flex flex-col py-8 h-full gap-2 z-40">
<div className="px-8 mb-8">
<h1 className="text-xl font-black text-slate-900 dark:text-white mb-2 font-headline tracking-tight">InstaShop Seller</h1>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="premium seller avatar headshot with warm lighting and a professional friendly expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvagk5L9mG3jSsMPhxTS1hrMggakaCohngVk4TzO49C1AalI8M0QhFcWhCOAO7nWe5oRUf2EGwNUtFibZh9eRudPe97uqRdQ0JR-Qq_4UkD_iQwqsPxv6WsVs73taq64kHgtRxfBcKA5l-iDDsWgdYqferG6ZJlNYtcRB5GQszGKyzWW7_FlNI6Jm7Sfphgkvvj7VCQC7wcmQaNapTYVK50ywx5MYI7tfL5lrbY2q9yuEfjzs16EyxZIMS39NWdSciGH2fn0HjTuAW"/>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Premium Tier</p>
<p className="text-xs text-slate-500">Seller Profile</p>
</div>
</div>
</div>
<nav className="flex flex-col gap-1 px-2">
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span> Dashboard
                </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span> Products
                </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span> Orders
                </a>
{/*  Active Tab: Customers  */}
<a className="bg-white dark:bg-slate-800 text-amber-500 rounded-full shadow-sm ml-2 mr-4 py-3 px-6 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="group" style={{ fontVariationSettings: "'FILL' 1" }}>group</span> Customers
                </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span> Leads
                </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span> Analytics
                </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="sell">sell</span> Coupons
                </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span> Settings
                </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span> Billing
                </a>
<div className="mt-auto">
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 font-headline font-medium" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span> Logout
                    </a>
</div>
</nav>
</aside>
{/*  Main Canvas  */}
<main className="flex-1 px-12 py-8 overflow-y-auto">
{/*  Top Bar Section  */}
<header className="flex justify-between items-end mb-12">
<div>
<h2 className="text-5xl font-black font-headline text-on-background tracking-tighter mb-2">Customer Base</h2>
<p className="text-tertiary font-medium">Managing 1,284 creators and shoppers</p>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="pl-12 pr-6 py-4 w-80 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-secondary transition-all outline-none shadow-sm font-medium" placeholder="Search handles or names..." type="text"/>
</div>
<button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_8px_32px_rgba(116,87,0,0.2)]">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                        Add New
                    </button>
</div>
</header>
{/*  Stats Grid  */}
<section className="grid grid-cols-4 gap-6 mb-12">
<div className="bg-primary-container p-8 rounded-xl flex flex-col gap-2 relative overflow-hidden group">
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-on-primary-container/10 group-hover:scale-110 transition-transform" data-icon="trending_up">trending_up</span>
<span className="text-on-primary-container font-bold label-md tracking-widest uppercase text-xs">Active Buyers</span>
<span className="text-4xl font-black font-headline text-on-primary-container">842</span>
</div>
<div className="bg-surface-container-low p-8 rounded-xl flex flex-col gap-2 border-outline-variant/10 border">
<span className="text-tertiary font-bold label-md tracking-widest uppercase text-xs">Avg. Order Value</span>
<span className="text-4xl font-black font-headline text-on-background">$142.50</span>
</div>
<div className="bg-surface-container-low p-8 rounded-xl flex flex-col gap-2 border-outline-variant/10 border">
<span className="text-tertiary font-bold label-md tracking-widest uppercase text-xs">Total Revenue</span>
<span className="text-4xl font-black font-headline text-on-background">$124.8k</span>
</div>
<div className="bg-secondary-container p-8 rounded-xl flex flex-col gap-2 relative overflow-hidden group">
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-on-secondary-container/10 group-hover:scale-110 transition-transform" data-icon="star">star</span>
<span className="text-on-secondary-container font-bold label-md tracking-widest uppercase text-xs">VIP Members</span>
<span className="text-4xl font-black font-headline text-on-secondary-container">56</span>
</div>
</section>
{/*  Customer Grid: Editorial Style  */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
{/*  Customer Card 1  */}
<div className="bg-surface-container-lowest p-8 rounded-lg flex items-start gap-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group">
<div className="relative">
<img className="w-24 h-24 rounded-lg object-cover ring-4 ring-primary-container/30" data-alt="close-up portrait of a stylish young man with glasses smiling in a bright airy studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzgWmXRYmTYuMf9jKUb4j9f1IrQQVy_KY0i_Up65b_804THM7uXK0RWhn2XfxyCHZ2Z6GpDRkArpuZZSsw5eycnwPUUqAfSDRce6v2MGvhB9VZ0iv_XIvvaHZOyF45I0NV5o9uV93QVMjuYrbx6EwIC7Sezlx4F6usg80wKGKYtsJb5djFTklDvqxIXoVGMOCYAnCcI3qzGiBqbnfAq0qiNFDY7TJmTo0CHSJl49jgg7l_fdUcIRiBTnrEiBnjsWWHhWV1GHrK-uzd"/>
<div className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">VIP</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-2xl font-black font-headline text-on-background">Alex Rivera</h3>
<p className="text-secondary font-bold text-sm tracking-tight flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="alternate_email">alternate_email</span>
                                    arivera_studio
                                </p>
</div>
<div className="text-right">
<p className="text-xs text-outline uppercase font-bold tracking-widest">Spent</p>
<p className="text-xl font-black text-on-background">$4,250.00</p>
</div>
</div>
<div className="flex items-center gap-8 mt-4 pt-4 border-t border-surface-container">
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Orders</p>
<p className="font-bold text-on-surface">24 Total</p>
</div>
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Last Active</p>
<p className="font-bold text-on-surface">2 hours ago</p>
</div>
<div className="ml-auto flex gap-2">
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container hover:bg-tertiary-container transition-colors">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="visibility">visibility</span>
</button>
<button className="h-12 px-6 rounded-full flex items-center justify-center bg-[#25D366] text-white font-bold gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                                    WhatsApp
                                </button>
</div>
</div>
</div>
</div>
{/*  Customer Card 2  */}
<div className="bg-surface-container-lowest p-8 rounded-lg flex items-start gap-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group">
<div className="relative">
<img className="w-24 h-24 rounded-lg object-cover ring-4 ring-tertiary-container/30" data-alt="vibrant portrait of a woman with braided hair wearing colorful earrings in a bright sunlit outdoor setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD65VJh2v7wcf-CXJpBpEkBJuV2C0HuPcgqWZMHZ7cMcwEiAh8ARym07ySB-npZc7_Sf8-dkXz2k1SGMiVymhMadYPJqIUnMnDSvwWdkY2n3Xg1Z5MhOBDT1qwQCVtQ4zFuXpUZuMAKAfnHoJ3Fxn2EXKUFO6D5xpw8HR5DZSTmkE08E6YxQAGajxGpSNZZMFthey3dx1_wGOVZl-6YsQiHLPy6VccC8slQLp7kDrG2zMLbuZypgDmgsN3tBe0oDd4C637UgOtR8yKi"/>
<div className="absolute -top-2 -right-2 bg-tertiary text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">Repeat</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-2xl font-black font-headline text-on-background">Maya Chen</h3>
<p className="text-secondary font-bold text-sm tracking-tight flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="alternate_email">alternate_email</span>
                                    mayamakes_
                                </p>
</div>
<div className="text-right">
<p className="text-xs text-outline uppercase font-bold tracking-widest">Spent</p>
<p className="text-xl font-black text-on-background">$890.20</p>
</div>
</div>
<div className="flex items-center gap-8 mt-4 pt-4 border-t border-surface-container">
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Orders</p>
<p className="font-bold text-on-surface">8 Total</p>
</div>
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Last Active</p>
<p className="font-bold text-on-surface">Yesterday</p>
</div>
<div className="ml-auto flex gap-2">
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container hover:bg-tertiary-container transition-colors">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="visibility">visibility</span>
</button>
<button className="h-12 px-6 rounded-full flex items-center justify-center bg-[#25D366] text-white font-bold gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                                    WhatsApp
                                </button>
</div>
</div>
</div>
</div>
{/*  Customer Card 3  */}
<div className="bg-surface-container-lowest p-8 rounded-lg flex items-start gap-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group">
<div className="relative">
<img className="w-24 h-24 rounded-lg object-cover ring-4 ring-primary-container/30" data-alt="professional woman in a modern office with natural light and blurred background elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaxfflcNhRLjPy1-HoHE4AwNAPrg9piRKfYvOBRTqxwBN_mFOwPRKTQ9rGRuUMgSgaPzrkDF9-9C-X643SUk0Y0CXY_6ntxdjAyBmaWdSOfr4-rr_2mnrHjQLjV6c-QgwzHOf-GKRDviJ489y7oy0TMRnS-9bm4DasTRuXArbqCphmlT_0_wtMlMHtlFyEM0vzLnrvyp8S4--LmNmjEXM2c3xVvj4ftNP7DdOCMjCr2s_7Do-pmQCIH2UU1OYMjTYJyKiCMx1Wvt0S"/>
<div className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">New</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-2xl font-black font-headline text-on-background">Jordan Smyth</h3>
<p className="text-secondary font-bold text-sm tracking-tight flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="alternate_email">alternate_email</span>
                                    jordan_daily
                                </p>
</div>
<div className="text-right">
<p className="text-xs text-outline uppercase font-bold tracking-widest">Spent</p>
<p className="text-xl font-black text-on-background">$125.00</p>
</div>
</div>
<div className="flex items-center gap-8 mt-4 pt-4 border-t border-surface-container">
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Orders</p>
<p className="font-bold text-on-surface">1 Total</p>
</div>
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Last Active</p>
<p className="font-bold text-on-surface">Oct 12, 2023</p>
</div>
<div className="ml-auto flex gap-2">
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container hover:bg-tertiary-container transition-colors">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="visibility">visibility</span>
</button>
<button className="h-12 px-6 rounded-full flex items-center justify-center bg-[#25D366] text-white font-bold gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                                    WhatsApp
                                </button>
</div>
</div>
</div>
</div>
{/*  Customer Card 4  */}
<div className="bg-surface-container-lowest p-8 rounded-lg flex items-start gap-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group">
<div className="relative">
<img className="w-24 h-24 rounded-lg object-cover ring-4 ring-secondary-container/30" data-alt="creative entrepreneur in a workshop with artistic tools in the background soft warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChHCJPFtOYnoxUm4IAqoo6C21m-KpyQDOnh26py2fUM0hfhZxnQqZk81JIxAAKDVlDTzfem17QuOYTmAwKJNOBdMgSBO3DgDKWlI2ojaGww78YzJ742T2bb7VsmEYKVx9BTugyBIrawin8QcPHMFW-tkFLMXkMghxOd_D1GUAkgc1laCmEu8S5lu83dy20HWUcl-kQebnFp2PkC3NgBftpGrIUT-xIA5RGX5gRTHwkbFsc6rqpLldOzbmvfEHkM4qVj-mSA8sDUskE"/>
<div className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">VIP</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-2xl font-black font-headline text-on-background">Sienna Miller</h3>
<p className="text-secondary font-bold text-sm tracking-tight flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="alternate_email">alternate_email</span>
                                    sienna_creative
                                </p>
</div>
<div className="text-right">
<p className="text-xs text-outline uppercase font-bold tracking-widest">Spent</p>
<p className="text-xl font-black text-on-background">$2,100.00</p>
</div>
</div>
<div className="flex items-center gap-8 mt-4 pt-4 border-t border-surface-container">
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Orders</p>
<p className="font-bold text-on-surface">15 Total</p>
</div>
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Last Active</p>
<p className="font-bold text-on-surface">3 days ago</p>
</div>
<div className="ml-auto flex gap-2">
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container hover:bg-tertiary-container transition-colors">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="visibility">visibility</span>
</button>
<button className="h-12 px-6 rounded-full flex items-center justify-center bg-[#25D366] text-white font-bold gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                                    WhatsApp
                                </button>
</div>
</div>
</div>
</div>
</div>
{/*  Pagination  */}
<div className="mt-12 flex justify-center">
<nav className="flex gap-2 p-2 bg-surface-container-high rounded-full">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm font-bold text-on-surface">1</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors font-bold text-outline">2</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors font-bold text-outline">3</button>
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-outline">...</div>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors font-bold text-outline">12</button>
</nav>
</div>
</main>
</div>
{/*  Floating Action Button for Messaging  */}
<button className="fixed bottom-12 right-12 bg-primary text-on-primary w-20 h-20 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(116,87,0,0.4)] hover:scale-110 active:scale-90 transition-all z-50">
<span className="material-symbols-outlined text-4xl" data-icon="broadcast_on_home">broadcast_on_home</span>
</button>

    </div>
  );
}
