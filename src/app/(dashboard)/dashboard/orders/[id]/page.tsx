export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  SideNavBar (Authority: JSON)  */}
<aside className="hidden md:flex h-screen w-64 rounded-r-[3rem] sticky top-0 left-0 flex-col py-8 gap-2 bg-[#f3f0ed] dark:bg-slate-900 z-40">
<div className="px-8">
<h1 className="text-xl font-black text-slate-900 dark:text-white mb-8 font-headline">InstaShop Seller</h1>
</div>
<nav className="flex-1 overflow-y-auto space-y-1">
{/*  Active: Orders (Closest Match)  */}
<a className="flex items-center text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined mr-3" data-icon="dashboard">dashboard</span>
<span className="font-headline font-medium">Dashboard</span>
</a>
<a className="flex items-center text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined mr-3" data-icon="inventory_2">inventory_2</span>
<span className="font-headline font-medium">Products</span>
</a>
<a className="flex items-center bg-white dark:bg-slate-800 text-amber-500 rounded-full shadow-sm ml-2 mr-4 py-3 px-6 transition-all scale-98" href="#">
<span className="material-symbols-outlined mr-3 active-tab" data-icon="shopping_bag" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
<span className="font-headline font-medium">Orders</span>
</a>
<a className="flex items-center text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined mr-3" data-icon="group">group</span>
<span className="font-headline font-medium">Customers</span>
</a>
<a className="flex items-center text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined mr-3" data-icon="leaderboard">leaderboard</span>
<span className="font-headline font-medium">Leads</span>
</a>
<a className="flex items-center text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined mr-3" data-icon="analytics">analytics</span>
<span className="font-headline font-medium">Analytics</span>
</a>
<a className="flex items-center text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined mr-3" data-icon="sell">sell</span>
<span className="font-headline font-medium">Coupons</span>
</a>
<a className="flex items-center text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined mr-3" data-icon="settings">settings</span>
<span className="font-headline font-medium">Settings</span>
</a>
</nav>
<div className="px-8 mt-auto pt-8 border-t border-surface-container">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" data-alt="portrait of a professional creative seller profile with warm studio lighting and soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiMWmAz7b9uelNvFUTWDlYxk8GmLpq1Vv1wmbirBTDesy37HWvuNyaQ_tultDwLRo8KSm4GZHt3VPkqaHmk7I9glMwy5FA9dy1v9NLhyXCLwsryGQI6bTvIhLlrQQEYZgMLiEFoocNaYUiCOhr893Z5u7e6pe3JLaeXikrFeD0aGo4XVxRaVjD9hhRs5yPTf_4eJtPZc7mpOM2UOnk9eNqglbpwUFcV83E6LiLCTBr0Elgc9eSoGPn1FlzaBRxbBz-e1vR3jlvr1UW"/>
<div>
<p className="text-sm font-bold text-on-background">Premium Tier</p>
<p className="text-xs text-outline">Seller Profile</p>
</div>
</div>
</div>
</aside>
<main className="flex-1 min-w-0 flex flex-col">
{/*  TopNavBar (Authority: JSON)  */}
<header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,209,102,0.15)] flex justify-between items-center w-full px-8 py-4">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-900"><span className="material-symbols-outlined" data-icon="menu">menu</span></button>
<span className="text-2xl font-black text-slate-900 dark:text-white font-headline tracking-tight">Order #ORD-8829</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center gap-8">
<a className="text-slate-500 hover:text-amber-500 font-headline" href="#">Storefront</a>
<a className="text-slate-500 hover:text-amber-500 font-headline" href="#">Inbox</a>
<a className="text-slate-500 hover:text-amber-500 font-headline" href="#">Help</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-amber-50 text-slate-600 transition-all active:scale-95 duration-150"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
<button className="p-2 rounded-full hover:bg-amber-50 text-slate-600 transition-all active:scale-95 duration-150"><span className="material-symbols-outlined" data-icon="account_circle">account_circle</span></button>
</div>
</div>
</header>
{/*  Content Canvas  */}
<div className="p-8 lg:p-12 max-w-7xl mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
{/*  Left Column: Order Items & Timeline  */}
<div className="lg:col-span-8 space-y-12">
{/*  Items Section  */}
<section className="bg-surface-container-low rounded-xl p-8 space-y-8">
<div className="flex justify-between items-end">
<h2 className="text-3xl font-headline font-extrabold text-on-background">Order Items</h2>
<span className="text-tertiary font-bold tracking-widest text-xs uppercase">3 Items Included</span>
</div>
<div className="space-y-4">
{/*  Item 1  */}
<div className="bg-surface-container-lowest p-6 rounded-lg flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
<img className="w-24 h-24 rounded-lg object-cover" data-alt="minimalist white wristwatch on a beige aesthetic background with soft directional light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLdknLCH_qZ9LzQ5Kr16tS_VTBaiuf5PgwiYQPHaUx2yZYe1UFQIfoaiR0fpfMM07PQ7XYOoxZJqb9S9KTW2c5JH3wKFFHaAMEtJT9_6QbEiOOkOdE2ahil25IzO17ZYv2EURR0TIbORtGY7m4fMdx8wsruOeg7Y7Q4DM433Bwss5rg-PiHXd4Od85jSP36EcUp1CHmUdtz-JscHwYpNtwoQIHe_TsU9KY41ICI3VZ-O7FsfFmTIreZOeCfRBqoZ89wRs75GLWTMoc"/>
<div className="flex-1">
<h4 className="font-headline font-bold text-lg text-on-background">Aura Minimalist Watch</h4>
<p className="text-outline text-sm">Color: Matte Silver | Size: 40mm</p>
</div>
<div className="text-right">
<p className="font-headline font-bold text-xl text-primary">$120.00</p>
<p className="text-sm text-outline">Qty: 1</p>
</div>
</div>
{/*  Item 2  */}
<div className="bg-surface-container-lowest p-6 rounded-lg flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
<img className="w-24 h-24 rounded-lg object-cover" data-alt="neatly folded organic cotton t-shirt in earthy sand color on a textured wooden surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbjHqqCuJCsLIm2le4bcgLz86AEqXWf8lqnu9jLGgCkMrUnXlDl1hs-SQGaf0eDlLN-OY5hNKpmKKt_OHtqIxRJEeS8tsACh-I1IIkn5os6AVLJPdGdFBYalJkuFP8uy-i1KaxPRA_T-Vx8frRwJyiPieL0X9-KOW8_hRHeW5gUzezZuJZN670JnCpQiKFM8elGT2r5UM9YNsuD6u_Quv1aOY2a29yoFJjRPa07gbmYDvMKlan738mPSGUq2J_6fF2Alc10HI6ckts"/>
<div className="flex-1">
<h4 className="font-headline font-bold text-lg text-on-background">Essential Cotton Tee</h4>
<p className="text-outline text-sm">Color: Sand | Size: Medium</p>
</div>
<div className="text-right">
<p className="font-headline font-bold text-xl text-primary">$45.00</p>
<p className="text-sm text-outline">Qty: 2</p>
</div>
</div>
</div>
{/*  Calculations  */}
<div className="border-t border-outline-variant/20 pt-8 mt-8 space-y-4">
<div className="flex justify-between text-outline">
<span>Subtotal</span>
<span>$210.00</span>
</div>
<div className="flex justify-between text-outline">
<span>Shipping (Express)</span>
<span>$15.00</span>
</div>
<div className="flex justify-between items-center pt-4">
<span className="text-2xl font-headline font-black text-on-background uppercase tracking-tighter">Total</span>
<span className="text-4xl font-headline font-black text-primary">$225.00</span>
</div>
</div>
</section>
{/*  Order Timeline (Stepper)  */}
<section className="bg-surface-container-low rounded-xl p-8">
<h3 className="text-2xl font-headline font-bold mb-8 text-on-background">Delivery Progress</h3>
<div className="relative space-y-12 pl-10">
{/*  Line  */}
<div className="absolute left-[1.15rem] top-2 bottom-2 w-0.5 bg-primary-container"></div>
{/*  Steps  */}
<div className="relative flex items-center gap-6">
<div className="absolute -left-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary-container">
<span className="material-symbols-outlined text-xs text-on-primary font-bold" data-icon="check" style={{ fontSize: 14 }}>check</span>
</div>
<div>
<p className="font-bold text-on-background">Order Confirmed</p>
<p className="text-sm text-outline">Oct 24, 2023 - 09:12 AM</p>
</div>
</div>
<div className="relative flex items-center gap-6">
<div className="absolute -left-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary-container">
<span className="material-symbols-outlined text-xs text-on-primary font-bold" data-icon="check" style={{ fontSize: 14 }}>check</span>
</div>
<div>
<p className="font-bold text-on-background">Payment Verified</p>
<p className="text-sm text-outline">Oct 24, 2023 - 10:45 AM</p>
</div>
</div>
<div className="relative flex items-center gap-6">
<div className="absolute -left-10 w-6 h-6 rounded-full bg-primary-container flex items-center justify-center border-2 border-primary">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
</div>
<div>
<p className="font-bold text-on-background">Packaging</p>
<p className="text-sm text-outline">In progress at Warehouse A</p>
</div>
</div>
<div className="relative flex items-center gap-6 opacity-40">
<div className="absolute -left-10 w-6 h-6 rounded-full bg-surface-container-high border-2 border-outline-variant"></div>
<div>
<p className="font-bold text-on-background">Shipped</p>
<p className="text-sm text-outline">Expected by Oct 26</p>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Status & Customer Info  */}
<div className="lg:col-span-4 space-y-12">
{/*  Action Panel  */}
<section className="bg-surface-container-high rounded-xl p-8 space-y-8 shadow-[0_8px_32px_rgba(255,209,102,0.1)]">
<div className="space-y-4">
<label className="block text-xs font-bold text-tertiary tracking-widest uppercase mb-2">Update Order Status</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 text-on-background font-headline font-bold appearance-none ring-2 ring-primary/10 focus:ring-secondary transition-all">
<option>Processing</option>
<option>Packaging</option>
<option>Shipped</option>
<option>Delivered</option>
<option>Cancelled</option>
</select>
<span className="material-symbols-outlined absolute right-6 top-4 pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-4">
<button className="w-full bg-primary text-on-primary-fixed py-4 rounded-xl font-headline font-black text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
<span className="material-symbols-outlined" data-icon="save">save</span>
                                Update Status
                            </button>
<button className="w-full bg-[#25D366] text-white py-4 rounded-xl font-headline font-black text-lg flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                                Send WhatsApp Update
                            </button>
</div>
</section>
{/*  Customer Profile  */}
<section className="bg-surface-container-low rounded-xl p-8 space-y-8">
<div>
<h3 className="text-xl font-headline font-black text-on-background mb-6">Customer Details</h3>
<div className="flex items-center gap-4 mb-8 p-4 bg-surface-container-lowest rounded-lg">
<img className="w-16 h-16 rounded-full object-cover" data-alt="modern close-up portrait of a male customer with soft cinematic lighting and neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCK4-UENPFYjrU1dLz7kViNtcuccK9jhpzv1t6QhTROs58YV2byjxZuSWwm8Rh29MxVuIGA5vKgxzTCLrnl_AL0vw7B1oJQ4E3_br4iknqHly3TAzLY0iZLp7Hj4AXjmducM-2aw7a887vvqSVwUsv7bNLANWvyy2MFOawLRGlKbWSmOJDGSUytukbJCQXpMKdlGSdjvDsbnQP54K0iSVL3cd0UTM730EQArTqjHY4g82BEBsZhAle82Fov5AzqwDJdAPMJszxU97a"/>
<div>
<h4 className="font-headline font-bold text-lg">Julian Roberts</h4>
<p className="text-outline text-sm">julian.rob@email.com</p>
</div>
</div>
</div>
<div className="space-y-6">
<div>
<label className="text-xs font-bold text-tertiary tracking-widest uppercase block mb-2">Shipping Address</label>
<p className="text-on-background font-medium">742 Creator Avenue, Studio 4B</p>
<p className="text-on-background font-medium">Los Angeles, CA 90210</p>
<p className="text-on-background font-medium">United States</p>
</div>
<div>
<label className="text-xs font-bold text-tertiary tracking-widest uppercase block mb-2">Payment Status</label>
<span className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full font-bold text-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    Paid via Stripe
                                </span>
</div>
<div className="pt-6 border-t border-outline-variant/10">
<label className="text-xs font-bold text-tertiary tracking-widest uppercase block mb-4">Internal Notes</label>
<div className="bg-white/50 p-4 rounded-lg italic text-sm text-outline border-l-4 border-primary">
                                    "Customer requested minimalist packaging. Fragile handle with care."
                                </div>
</div>
</div>
</section>
{/*  Receipt Actions  */}
<div className="flex gap-4 px-4">
<button className="flex-1 py-3 px-4 border-2 border-outline-variant rounded-full text-sm font-bold text-on-background hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="print">print</span>
                            Print Invoice
                        </button>
<button className="flex-1 py-3 px-4 border-2 border-outline-variant rounded-full text-sm font-bold text-on-background hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                            PDF Receipt
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  FAB Suppression (Per Mandate): Page is detailed transactional, FAB is suppressed.  */}

    </div>
  );
}
