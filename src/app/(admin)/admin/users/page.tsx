export default function Page() {
  return (
    <div className="vibrant-wrapper">

<div className="relative flex h-auto min-h-screen w-full flex-col bg-surface group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Shared Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-container-high px-10 py-3 bg-surface">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-on-surface">
<div className="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
</svg>
</div>
<h2 className="text-on-surface text-xl font-black leading-tight tracking-tight">Super Admin</h2>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-bold">
<a className="text-on-surface border-b-2 border-primary pb-1" href="#">Users</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Stores</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Transactions</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Reports</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center justify-center size-10 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="size-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-fixed font-bold border-2 border-surface-container-highest" data-alt="profile picture of a professional male administrator in a clean modern setting" style={{ backgroundImage: "url('https", backgroundSize: "cover" }}></div>
</div>
</header>
<main className="flex-1 flex flex-col px-4 md:px-10 py-8 gap-8">
{/*  Breadcrumbs & Header  */}
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
<span>Admin Panel</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-primary">User Management</span>
</div>
<div className="flex flex-wrap justify-between items-end gap-4">
<div className="flex flex-col gap-1">
<h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter">All Users</h1>
<p className="text-on-surface-variant max-w-xl">Centralized directory of all registered platform participants. Monitor roles, store ownership, and account status.</p>
</div>
<button className="bg-primary hover:bg-primary-dim text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">person_add</span>
                        Create New User
                    </button>
</div>
</div>
{/*  Stats Overview (Editorial Cards)  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-2 border-l-4 border-primary">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Total Users</span>
<div className="text-3xl font-black text-on-surface">12,482</div>
<div className="text-xs text-primary font-bold">+12% from last month</div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-2">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Active Sellers</span>
<div className="text-3xl font-black text-on-surface">3,105</div>
<div className="text-xs text-on-surface-variant">Across 42 categories</div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-2">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Suspended Accounts</span>
<div className="text-3xl font-black text-secondary">142</div>
<div className="text-xs text-on-surface-variant">Pending review</div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-2">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">New Today</span>
<div className="text-3xl font-black text-on-surface">54</div>
<div className="text-xs text-primary font-bold">Verification auto-queued</div>
</div>
</div>
{/*  Table Section  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container">
{/*  Filters & Search  */}
<div className="p-6 border-b border-surface-container flex flex-wrap gap-4 items-center justify-between bg-surface-container-low/30">
<div className="flex items-center gap-3">
<div className="relative w-72">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary rounded-lg pl-10 pr-4 py-2 text-sm" placeholder="Search by name, email, or store..." type="text"/>
</div>
<div className="flex bg-surface-container-low rounded-lg p-1">
<button className="px-4 py-1.5 rounded-md bg-surface-container-lowest text-xs font-bold text-on-surface shadow-sm transition-all">All</button>
<button className="px-4 py-1.5 rounded-md text-xs font-bold text-on-surface-variant hover:text-on-surface transition-all">Sellers</button>
<button className="px-4 py-1.5 rounded-md text-xs font-bold text-on-surface-variant hover:text-on-surface transition-all">Admins</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/30 rounded-lg text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span>
                            More Filters
                        </button>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/30 rounded-lg text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">download</span>
                            Export
                        </button>
</div>
</div>
{/*  Actual Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
<th className="px-6 py-4">Name</th>
<th className="px-6 py-4">Email</th>
<th className="px-6 py-4">Role</th>
<th className="px-6 py-4">Stores Owned</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Joined Date</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr className="hover:bg-surface-container-low/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs border border-primary/20">JS</div>
<span className="font-bold text-on-surface">Julianne Smith</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">julianne.s@example.com</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[10px] font-black uppercase">Seller</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 font-bold text-sm">
<span className="material-symbols-outlined text-sm text-primary">storefront</span>
                                        3 Stores
                                    </div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-xs font-bold text-green-600">
<div className="size-2 rounded-full bg-green-600"></div>
                                        Active
                                    </div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Oct 12, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-secondary/10 flex items-center justify-center font-bold text-secondary text-xs border border-secondary/20">MK</div>
<span className="font-bold text-on-surface">Marcus Knight</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">m.knight@admin.corp</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-[10px] font-black uppercase">Admin</span>
</td>
<td className="px-6 py-4">
<span className="text-on-surface-variant text-xs italic">—</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-xs font-bold text-green-600">
<div className="size-2 rounded-full bg-green-600"></div>
                                        Active
                                    </div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Jan 04, 2024</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-on-surface-variant/10 flex items-center justify-center font-bold text-on-surface-variant text-xs border border-on-surface-variant/20">DB</div>
<span className="font-bold text-on-surface">David Brewster</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">david.b@gmail.com</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[10px] font-black uppercase">Seller</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 font-bold text-sm">
<span className="material-symbols-outlined text-sm text-primary">storefront</span>
                                        1 Store
                                    </div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-xs font-bold text-secondary">
<div className="size-2 rounded-full bg-secondary"></div>
                                        Suspended
                                    </div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Nov 28, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs border border-primary/20">EL</div>
<span className="font-bold text-on-surface">Elena Lavoris</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">elena@creative-hub.io</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[10px] font-black uppercase">Seller</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 font-bold text-sm">
<span className="material-symbols-outlined text-sm text-primary">storefront</span>
                                        12 Stores
                                    </div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-xs font-bold text-green-600">
<div className="size-2 rounded-full bg-green-600"></div>
                                        Active
                                    </div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Feb 15, 2024</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="p-6 border-t border-surface-container flex items-center justify-between bg-surface-container-low/30">
<span className="text-sm text-on-surface-variant">Showing <span className="font-bold text-on-surface">1-10</span> of <span className="font-bold text-on-surface">12,482</span> users</span>
<div className="flex gap-2">
<button className="size-9 flex items-center justify-center border border-outline-variant/30 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="size-9 flex items-center justify-center bg-primary text-on-primary rounded-lg text-sm font-bold shadow-sm">1</button>
<button className="size-9 flex items-center justify-center border border-outline-variant/30 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors text-sm font-bold">2</button>
<button className="size-9 flex items-center justify-center border border-outline-variant/30 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors text-sm font-bold">3</button>
<button className="size-9 flex items-center justify-center border border-outline-variant/30 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>
</div>

    </div>
  );
}
