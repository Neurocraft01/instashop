export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  SideNavBar (Shell)  */}
<aside className="fixed left-0 top-0 bottom-0 z-40 h-screen w-72 flex flex-col border-none bg-[#2B1B3D] font-['Satoshi'] tracking-tight shadow-[0_8px_32px_rgba(255,209,102,0.1)]">
<div className="px-8 py-10">
<h1 className="font-['Clash_Display'] text-2xl font-bold text-[#FFD166]">InstaShop</h1>
<p className="text-slate-400 text-sm mt-1">Seller Portal</p>
</div>
<nav className="flex-1 space-y-2 mt-4">
{/*  Active Navigation  */}
<a className="bg-[#3d2b52] text-[#FFD166] rounded-full mx-4 px-6 py-3 font-bold flex items-center gap-3 transition-transform scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center gap-3 hover:bg-[#3d2b52] hover:rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
                Orders
            </a>
<a className="text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center gap-3 hover:bg-[#3d2b52] hover:rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                Inventory
            </a>
<a className="text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center gap-3 hover:bg-[#3d2b52] hover:rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                Customers
            </a>
<a className="text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center gap-3 hover:bg-[#3d2b52] hover:rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
                Analytics
            </a>
</nav>
<div className="px-6 py-8">
<button className="w-full bg-[#FFD166] text-[#2B1B3D] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-[#FFD166]/20">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                Create New Listing
            </button>
</div>
<div className="border-t border-slate-700/50 py-6">
<a className="text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center gap-3 hover:bg-[#3d2b52] hover:rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
<a className="text-slate-300 hover:text-[#FFD166] mx-4 px-6 py-3 transition-colors flex items-center gap-3 hover:bg-[#3d2b52] hover:rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
                Help
            </a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="ml-72 min-h-screen">
{/*  TopAppBar (Shell)  */}
<header className="flex items-center justify-between px-10 w-full h-20 bg-surface dark:bg-[#2B1B3D] border-b border-[#e4e2df] sticky top-0 z-30">
<div className="flex items-center gap-6 flex-1">
<div className="relative w-96">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all" placeholder="Search orders, products, or customers..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-primary font-bold flex items-center gap-2 hover:bg-surface-container-low px-4 py-2 rounded-full transition-all">
                    View My Store
                    <span className="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
</button>
<div className="flex items-center gap-2">
<button className="hover:bg-surface-container-low rounded-full p-2 text-on-surface-variant transition-all relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
</button>
<button className="hover:bg-surface-container-low rounded-full p-2 text-on-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</button>
</div>
<div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary transition-transform hover:scale-105 cursor-pointer">
<img alt="Seller Profile" data-alt="close-up portrait of a professional friendly shop owner in a clean modern setting with soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_NqjKNqvkPJzbnCTeCHj3f3wEC1NVRlD0XfjnokJPl21wC6Sqgpq4BloD5OrqtUnHeArtVN8tVgji3A6fxM-MPfDlkmvLuRJzXDVwnJzpWXcQe1lDdIVV7oi-2-A8PGLYSILbc7kPoxUUU72OiC9yK7tXiybLF6PX0llvyOQwrh_vdX_EdTloC8gWjyQhNArvoKLxHl32_N5QzVytpp24bfqali2z1oGLXxS6czfisGKF_mJ49tAjwn9V-TKIsGz18ZUMa84ALib"/>
</div>
</div>
</header>
{/*  Page Content  */}
<div className="p-10 space-y-10">
{/*  Welcome Banner  */}
<section className="relative overflow-hidden bg-[#2B1B3D] rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="z-10 max-w-xl">
<h2 className="font-['Clash_Display'] text-4xl font-black text-[#FFD166] leading-tight">Welcome back, Jack! ☀️</h2>
<p className="text-slate-300 text-lg mt-4 font-['Satoshi']">Your shop has grown <span className="text-[#FFD166] font-bold">12%</span> this week. Keep up the momentum with these curated tips for new sellers.</p>
<div className="mt-8 flex gap-4">
<button className="bg-[#FFD166] text-[#2B1B3D] px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95">Explore Tips</button>
<button className="border border-slate-500 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">Dismiss</button>
</div>
</div>
<div className="relative w-full md:w-1/3 aspect-square max-w-[240px]">
<div className="absolute inset-0 bg-[#FFD166] rounded-full opacity-10 animate-pulse"></div>
<img alt="Success Illustration" className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform group-hover:scale-105 duration-500" data-alt="minimalist 3d render of a successful golden shop icon surrounded by rising currency symbols and sparkles on a deep violet background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GTly6xBJUG8l93-Grb7BJv--p10vjyipFFTwOvBuusvKGI2IW8o_s_9g_aYQJg7QB9nsWjcDGu1r27OscT7F7Y-EBtDZSIC5WAINxR4nO7b3dLTP6jelVpttBxdiQKaiTmOlaWriY2ynl5Ahhm62DHn8sdl9yC16ISgyn79zvpKWqL2fw_poYXPXPC2izDQqNk87g5Z3YIGn8BJP0WLOfsPGbRHK6sm49PxHB3DBFRR3g3N6Ac_zAXDgCx_Ujjc1rKOwlcqRpyCx"/>
</div>
{/*  Decorative background elements  */}
<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FFD166] opacity-5 rounded-full blur-3xl"></div>
<div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#FFD166] opacity-5 rounded-full blur-3xl"></div>
</section>
{/*  Bento Stats Grid  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Revenue Card  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-primary group transition-all hover:-translate-y-1">
<div className="flex justify-between items-start">
<div className="p-3 bg-primary-container/20 rounded-xl text-primary">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
</div>
<span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded-md">+24.5%</span>
</div>
<p className="text-on-surface-variant font-medium mt-6 text-sm uppercase tracking-wider">Total Revenue</p>
<h3 className="text-3xl font-black text-on-background mt-2">$12,840.00</h3>
</div>
{/*  Total Orders  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-secondary group transition-all hover:-translate-y-1">
<div className="flex justify-between items-start">
<div className="p-3 bg-secondary-container/20 rounded-xl text-secondary">
<span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded-md">+12.2%</span>
</div>
<p className="text-on-surface-variant font-medium mt-6 text-sm uppercase tracking-wider">Total Orders</p>
<h3 className="text-3xl font-black text-on-background mt-2">482</h3>
</div>
{/*  Pending Orders  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-tertiary group transition-all hover:-translate-y-1">
<div className="flex justify-between items-start">
<div className="p-3 bg-tertiary-container/20 rounded-xl text-tertiary">
<span className="material-symbols-outlined" data-icon="pending_actions">pending_actions</span>
</div>
<span className="text-on-tertiary-container font-bold text-xs bg-tertiary-container/40 px-2 py-1 rounded-md">Critical</span>
</div>
<p className="text-on-surface-variant font-medium mt-6 text-sm uppercase tracking-wider">Pending Orders</p>
<h3 className="text-3xl font-black text-on-background mt-2">18</h3>
</div>
{/*  Total Products  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_8px_32px_rgba(255,209,102,0.05)] border-l-4 border-primary group transition-all hover:-translate-y-1">
<div className="flex justify-between items-start">
<div className="p-3 bg-primary-container/20 rounded-xl text-primary">
<span className="material-symbols-outlined" data-icon="category">category</span>
</div>
<button className="text-primary hover:underline text-sm font-bold">Manage</button>
</div>
<p className="text-on-surface-variant font-medium mt-6 text-sm uppercase tracking-wider">Total Products</p>
<h3 className="text-3xl font-black text-on-background mt-2">124</h3>
</div>
</section>
{/*  Charts & Visuals  */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
{/*  Revenue Trend  */}
<div className="lg:col-span-2 bg-surface-container-lowest rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-center mb-8">
<div>
<h4 className="font-['Clash_Display'] text-xl font-bold">Revenue Trend</h4>
<p className="text-sm text-on-surface-variant">Performance over the last 30 days</p>
</div>
<select className="bg-surface-container-low border-none rounded-full text-sm font-bold px-4 py-2 focus:ring-2 focus:ring-primary">
<option>Last 30 Days</option>
<option>Last 90 Days</option>
<option>This Year</option>
</select>
</div>
<div className="h-64 flex items-end justify-between gap-2 px-2 relative">
{/*  Simulated Line Chart with Bars for visual depth  */}
<div className="w-full bg-primary-container/10 h-32 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
<div className="w-full bg-primary-container/15 h-44 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
<div className="w-full bg-primary-container/10 h-36 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
<div className="w-full bg-primary-container/20 h-52 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
<div className="w-full bg-primary-container/30 h-40 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
<div className="w-full bg-primary-container/40 h-60 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
<div className="w-full bg-primary h-56 rounded-t-lg transition-all hover:bg-primary/80"></div>
<div className="w-full bg-primary-container/20 h-32 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
<div className="w-full bg-primary-container/10 h-28 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
<div className="w-full bg-primary-container/30 h-48 rounded-t-lg transition-all hover:bg-primary-container/30"></div>
{/*  Overlay Trend Line (Decorative SVG)  */}
<svg className="absolute inset-x-0 bottom-0 w-full h-full pointer-events-none px-2" preserveAspectRatio="none">
<path d="M0,200 Q50,150 100,180 T200,120 T300,140 T400,80 T500,100" fill="none" stroke="#745700" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
<div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
<span>1st Oct</span>
<span>10th Oct</span>
<span>20th Oct</span>
<span>30th Oct</span>
</div>
</div>
{/*  Order Status Donut  */}
<div className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex flex-col">
<h4 className="font-['Clash_Display'] text-xl font-bold mb-8">Order Status</h4>
<div className="relative flex-1 flex flex-col items-center justify-center">
{/*  Simulated Donut Chart  */}
<div className="relative w-48 h-48 rounded-full border-[18px] border-primary-container flex items-center justify-center">
<div className="absolute inset-0 border-[18px] border-primary rounded-full" style={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)" }}></div>
<div className="absolute inset-0 border-[18px] border-secondary rounded-full" style={{ clipPath: "polygon(50% 50%, 0% 0%, 50% 0%)" }}></div>
<div className="text-center">
<span className="text-3xl font-black block">482</span>
<span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Total Orders</span>
</div>
</div>
<div className="mt-10 w-full space-y-3">
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="font-medium">Delivered</span>
</div>
<span className="font-bold">75%</span>
</div>
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary-container"></div>
<span className="font-medium">Processing</span>
</div>
<span className="font-bold">20%</span>
</div>
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<span className="font-medium">Returned</span>
</div>
<span className="font-bold">5%</span>
</div>
</div>
</div>
</div>
</section>
{/*  Recent Orders Table  */}
<section className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
<div className="p-8 border-b border-surface-container-low flex justify-between items-center">
<div>
<h4 className="font-['Clash_Display'] text-xl font-bold">Recent Orders</h4>
<p className="text-sm text-on-surface-variant">Real-time update of your latest sales</p>
</div>
<button className="bg-surface-container-low hover:bg-surface-container px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2">
                        View All
                        <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-surface-container-low">
<th className="px-8 py-4">Customer</th>
<th className="px-8 py-4">Order ID</th>
<th className="px-8 py-4">Amount</th>
<th className="px-8 py-4">Status</th>
<th className="px-8 py-4">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="w-8 h-8 rounded-full" data-alt="close-up portrait of a satisfied young customer with a smiling face in a soft modern style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm1MOjMhqrAq2NauxxVF6r6FFK3RJ-pOP9P8nVv2i8R8vKAjzfmgrmGky-Vx9DnLfP1Zajc2_wkxbiXXnOPqnt-gCoMp9NNCWVljBz9XT0qgHNuPlPWevmT7_v_Subyn6JWcWXk4TCTfngXuUwAoQJ9UIetQnkK3Sl2LadkoyUBvr8YHlZYEfj3DnG8gJGix79ky5P28C0TEWJ_ZeRLmEIt83hP87NGTq7VGpdIepXgvFhkxmVuamShLixpPBvPon052NTsodj_i0X"/>
<div>
<p className="font-bold text-on-background">Emma Thompson</p>
<p className="text-xs text-on-surface-variant">emma.t@email.com</p>
</div>
</div>
</td>
<td className="px-8 py-5 font-mono text-sm">#ORD-9421</td>
<td className="px-8 py-5 font-bold text-on-background">$245.00</td>
<td className="px-8 py-5">
<span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Shipped</span>
</td>
<td className="px-8 py-5">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="w-8 h-8 rounded-full" data-alt="portrait of a young adult male with glasses and a friendly smile in flat graphic style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2lx6G0ZHkw3LIQu5-O7B2ZmGQO6mC9e2Ms6y1LUOhtDBqUPhy3FJ9VEkvc9iJr1RFs1Rith2PTXUfzDVAjdsZJUlow5GpsLU0PLJTc8HjU20rGCDU4L9xYkc5l0s0MPxnvpEM_it1mzJuEinj6UKcqpzaZuGaLprmcI_i8i9o8_cogkqlwMpjYC6Z_HiNgHm86nnqDD6SDLS20b9urnrO-eq_G7OMsRorQXbLfGfsoTo6yIv3M2bA2lHc3GFPD73a0prqFdYQIN5O"/>
<div>
<p className="font-bold text-on-background">Liam Chen</p>
<p className="text-xs text-on-surface-variant">l.chen@mail.com</p>
</div>
</div>
</td>
<td className="px-8 py-5 font-mono text-sm">#ORD-9420</td>
<td className="px-8 py-5 font-bold text-on-background">$120.50</td>
<td className="px-8 py-5">
<span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">Processing</span>
</td>
<td className="px-8 py-5">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="w-8 h-8 rounded-full" data-alt="vibrant artistic illustration of a stylish young woman with colorful hair and accessories" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86uyKy5NzVIXjPiDdFCwxxdZUbxnxXwvOjmNRD0VfgcBfdPrXGC8LagsgeH3GmmHZJD739MGLU1f6AvoEoYocYZO2dutpJPjab0UBFYvxs5JkVsKCiBrRMRKMRSNIvpXyNjUQWz3zbqX5ozdrNdOp6K_poKrb4nIlvPUnxKlCHuzse9s7Uq67eY1w6-ng5POzT9rM7Yt8p63eVJK0XJ2QxiK1mJPZztpORf-mMV6Oeu56ureeAgr9R9YpMLEJC5Ql8Gvp9L9OMKcM"/>
<div>
<p className="font-bold text-on-background">Sarah Miller</p>
<p className="text-xs text-on-surface-variant">smiller@web.com</p>
</div>
</div>
</td>
<td className="px-8 py-5 font-mono text-sm">#ORD-9419</td>
<td className="px-8 py-5 font-bold text-on-background">$890.00</td>
<td className="px-8 py-5">
<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Delivered</span>
</td>
<td className="px-8 py-5">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/*  Floating Action Button (Supressed based on shell visibility/transactional intent check, but included here as its a primary dashboard)  */}
<button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary-fixed rounded-full shadow-[0_8px_32px_rgba(255,209,102,0.4)] flex items-center justify-center group transition-all hover:scale-110 active:scale-90 z-50">
<span className="material-symbols-outlined text-3xl" data-icon="support_agent">support_agent</span>
<span className="absolute right-full mr-4 bg-on-background text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Get Support</span>
</button>
</main>

    </div>
  );
}
