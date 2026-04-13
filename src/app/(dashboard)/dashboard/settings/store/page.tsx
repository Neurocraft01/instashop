export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  Sidebar Navigation  */}
<aside className="hidden md:flex flex-col py-8 h-screen w-64 rounded-r-xl sticky top-0 left-0 bg-[#f3f0ed] dark:bg-slate-900 z-50">
<div className="px-8 mb-8">
<h1 className="text-xl font-black text-slate-900 dark:text-white font-headline">InstaShop Seller</h1>
<div className="flex items-center gap-3 mt-4 bg-surface-container-lowest p-3 rounded-xl">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined">storefront</span>
</div>
<div>
<p className="text-sm font-bold">Premium Tier</p>
<p className="text-xs text-outline">Active Account</p>
</div>
</div>
</div>
<nav className="flex flex-col gap-2 overflow-y-auto">
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3" href="#">
<span className="material-symbols-outlined">inventory_2</span> Products
            </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3" href="#">
<span className="material-symbols-outlined">shopping_bag</span> Orders
            </a>
<a className="bg-white dark:bg-slate-800 text-amber-500 rounded-full shadow-sm ml-2 mr-4 py-3 px-6 transition-all scale-98 flex items-center gap-3" href="#">
<span className="material-symbols-outlined">settings</span> Settings
            </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3" href="#">
<span className="material-symbols-outlined">payments</span> Billing
            </a>
<a className="text-slate-600 dark:text-slate-400 ml-2 mr-4 py-3 px-6 hover:translate-x-2 transition-transform duration-200 flex items-center gap-3 mt-auto" href="#">
<span className="material-symbols-outlined">logout</span> Logout
            </a>
</nav>
</aside>
<main className="flex-1 flex flex-col min-w-0">
{/*  Top Nav Bar  */}
<header className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl sticky top-0 z-40 flex justify-between items-center w-full px-8 py-4 shadow-[0_8px_32px_rgba(255,209,102,0.15)]">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-slate-900 dark:text-white font-headline tracking-tight">InstaShop</span>
<nav className="hidden lg:flex gap-6">
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300 font-headline" href="#">Storefront</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300 font-headline" href="#">Inbox</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all duration-300 font-headline" href="#">Help</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<input className="pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary text-sm w-64" placeholder="Search settings..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
</div>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-50 transition-all"><span className="material-symbols-outlined">notifications</span></button>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-50 transition-all"><span className="material-symbols-outlined">account_circle</span></button>
</div>
</header>
{/*  Content Area  */}
<div className="p-4 md:p-10 max-w-7xl mx-auto w-full">
<div className="mb-12">
<h2 className="text-4xl font-black font-headline text-on-background tracking-tight">Store Settings</h2>
<p className="text-outline mt-2 text-lg">Configure your digital storefront's appearance and communication channels.</p>
</div>
{/*  Bento Tab Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Navigation Tabs (Editorial Column)  */}
<nav className="lg:col-span-3 flex flex-col gap-4">
<button className="flex items-center gap-4 p-6 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all text-left">
<span className="material-symbols-outlined">tune</span>
<span className="font-bold">General</span>
</button>
<button className="flex items-center gap-4 p-6 rounded-lg bg-primary-container text-on-primary-container shadow-lg transition-all text-left">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
<span className="font-bold">Appearance</span>
</button>
<button className="flex items-center gap-4 p-6 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all text-left">
<span className="material-symbols-outlined">chat</span>
<span className="font-bold">WhatsApp</span>
</button>
</nav>
{/*  Settings Canvas  */}
<div className="lg:col-span-9 space-y-8">
{/*  Appearance Section (Active Tab)  */}
<section className="bg-surface-container-lowest rounded-xl p-8 editorial-shadow space-y-10">
<div className="flex items-center justify-between border-b border-surface-container pb-6">
<h3 className="text-2xl font-bold font-headline">Brand Visuals</h3>
<span className="px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest">Live Preview</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
{/*  Logo Uploader  */}
<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary">Store Logo</label>
<div className="relative group">
<div className="w-40 h-40 rounded-xl bg-surface-container-low flex items-center justify-center border-2 border-dashed border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="minimalist modern geometric circle logo design in gold and dark purple on clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTx1YUSJCvTnXI4d-VhOAi0h1he0q3cC2m7iT4YhrEP6zg8ZkBBDikiXKbI6NNKzeiDOx05fccEr8MSuV-t4cQKHT0n-7rMW38SkMI7AWL6O4eMB6OucxWPQb2RPUcsugbNIsrpj0OY_W6ta5prUTuH3wC4rtvPuOaTGM_wwC_IyVj2NnY29kSrxqr09Nxuiwf5LsvKvAtG5exwYIe3hbVpX-OzfUIGgidve5c72lOnFrlHjcgpJzwQExJ1t2iNs5eFIlmCy0bsNpm"/>
<div className="absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
<span className="material-symbols-outlined text-white text-3xl">upload</span>
</div>
</div>
<p className="text-xs text-outline mt-2 italic">Recommended: 500x500px SVG or PNG</p>
</div>
</div>
{/*  Banner Uploader  */}
<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary">Hero Banner</label>
<div className="relative group">
<div className="w-full h-40 rounded-xl bg-surface-container-low flex items-center justify-center border-2 border-dashed border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="vibrant abstract gradient background with flowing orange and gold light trails and soft bokeh effects" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcUBBrgrrZxiVY2i_qMmfX4pPNImt05PYr45imkml49d76Lpk23e_Mj7WwEJ2HjtK53tM63fVtjJEXoltuKoH-3sPVvew3-O6R7lbB2OJfT9q2eRnRTf2hjxclCNCYBQEk5NALPPz4wWLNhu6t1lewdSg49iiQE_zPNqTxNqd5vfNXpUOcFm40OJlJ0jlLO8NnnQYNQVQlvcOF2G0LYOgj70_ZFFsdAqchD2he0nGAu32mIxDqStsULDMszJsV85vqfMny4SqiIpIr"/>
<div className="absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
<span className="material-symbols-outlined text-white text-3xl">add_photo_alternate</span>
</div>
</div>
<p className="text-xs text-outline mt-2 italic">Recommended: 1600x400px</p>
</div>
</div>
</div>
{/*  Theme Selector  */}
<div className="space-y-6">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary">Storefront Theme</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="p-1 rounded-xl border-4 border-primary ring-4 ring-primary-container/20">
<div className="bg-surface-container-low h-24 rounded-lg flex items-end p-3 relative overflow-hidden">
<div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary"></div>
<div className="w-full h-2 bg-primary rounded-full"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-bold font-headline">Vibrant</span>
</div>
</div>
</div>
<div className="p-1 rounded-xl border-4 border-transparent hover:border-surface-container transition-all">
<div className="bg-white h-24 rounded-lg flex items-end p-3 relative overflow-hidden border border-surface-container">
<div className="w-full h-2 bg-on-background rounded-full"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-bold font-headline">Minimal</span>
</div>
</div>
</div>
<div className="p-1 rounded-xl border-4 border-transparent hover:border-surface-container transition-all">
<div className="bg-on-background h-24 rounded-lg flex items-end p-3 relative overflow-hidden">
<div className="w-full h-2 bg-primary-fixed rounded-full opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-bold font-headline text-white">Dark</span>
</div>
</div>
</div>
</div>
</div>
{/*  Primary Color Picker  */}
<div className="space-y-6">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary">Brand Primary Color</label>
<div className="flex flex-wrap gap-4">
<button className="w-12 h-12 rounded-full bg-primary ring-4 ring-offset-2 ring-primary transition-transform scale-110"></button>
<button className="w-12 h-12 rounded-full bg-[#EF476F] hover:scale-105 transition-transform"></button>
<button className="w-12 h-12 rounded-full bg-[#06D6A0] hover:scale-105 transition-transform"></button>
<button className="w-12 h-12 rounded-full bg-[#118AB2] hover:scale-105 transition-transform"></button>
<button className="w-12 h-12 rounded-full bg-[#073B4C] hover:scale-105 transition-transform"></button>
<div className="w-12 h-12 rounded-full bg-surface-container border-2 border-outline-variant flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-sm">colorize</span>
</div>
<div className="flex items-center gap-3 ml-auto">
<span className="font-mono text-sm bg-surface-container-low px-4 py-2 rounded-lg">#745700</span>
</div>
</div>
</div>
</section>
{/*  WhatsApp Section  */}
<section className="bg-surface-container-lowest rounded-xl p-8 editorial-shadow space-y-10">
<div className="flex items-center gap-4 border-b border-surface-container pb-6">
<div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-[#25D366]">chat</span>
</div>
<div>
<h3 className="text-2xl font-bold font-headline">WhatsApp Integration</h3>
<p className="text-sm text-outline">Manage how customers message you directly.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary">Business Number</label>
<div className="flex gap-2">
<select className="bg-surface-container-low border-none rounded-lg focus:ring-secondary w-24">
<option>+1</option>
<option>+44</option>
<option>+91</option>
</select>
<input className="flex-1 bg-surface-container-low border-none rounded-lg focus:ring-secondary p-3" placeholder="123 456 7890" type="text"/>
</div>
</div>
<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary">Button Visibility</label>
<div className="flex items-center gap-4 bg-surface-container-low p-3 rounded-lg">
<div className="w-10 h-6 bg-primary rounded-full relative">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium">Show on Product Pages</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-bold uppercase tracking-widest text-tertiary">Auto-Reply Template</label>
<button className="text-secondary text-xs font-bold">Preview Message</button>
</div>
<textarea className="w-full bg-surface-container-low border-none rounded-xl focus:ring-secondary p-4 resize-none" placeholder="Hi! I'm interested in {product_name}. Can you help me with more details?" rows={4}></textarea>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium cursor-pointer hover:bg-tertiary-container transition-colors">{"{product_name}"}</span>
<span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium cursor-pointer hover:bg-tertiary-container transition-colors">{"{order_id}"}</span>
<span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium cursor-pointer hover:bg-tertiary-container transition-colors">{"{customer_name}"}</span>
</div>
</div>
</section>
{/*  Form Actions  */}
<div className="flex justify-end gap-4 pb-20">
<button className="px-8 py-4 rounded-full text-outline font-bold hover:bg-surface-container-high transition-all">Discard Changes</button>
<button className="px-10 py-4 rounded-full bg-primary text-on-primary font-bold editorial-shadow hover:scale-105 active:scale-95 transition-all">Save Store Settings</button>
</div>
</div>
</div>
</div>
</main>
{/*  Contextual Mobile Nav  */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t-0 flex justify-around items-center py-4 px-6 z-50">
<button className="flex flex-col items-center gap-1 text-outline">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-outline">
<span className="material-symbols-outlined">inventory_2</span>
<span className="text-[10px] font-bold">Products</span>
</button>
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
<span className="text-[10px] font-bold">Settings</span>
</button>
<button className="flex flex-col items-center gap-1 text-outline">
<span className="material-symbols-outlined">account_circle</span>
<span className="text-[10px] font-bold">Profile</span>
</button>
</nav>

    </div>
  );
}
