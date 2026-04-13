export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  SideNavBar (Authority Source: JSON)  */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-[#e4e2df] dark:bg-[#1a1225] flex flex-col py-8 pr-4 z-40">
<div className="px-8 mb-10">
<h1 className="text-xl font-bold text-[#2B1B3D] dark:text-[#FFD166] tracking-tight">Admin Panel</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-[#66547a] mt-1">Super Admin Access</p>
</div>
<nav className="flex-1 space-y-2">
{/*  Dashboard Tab (Inactive)  */}
<a className="flex items-center gap-4 px-8 py-4 text-[#66547a] dark:text-[#e4e2df] hover:bg-white/50 dark:hover:bg-[#2B1B3D]/50 rounded-r-full hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-['Epilogue'] font-medium">Dashboard</span>
</a>
{/*  Announcements Tab (Active)  */}
<a className="flex items-center gap-4 px-8 py-4 bg-white dark:bg-[#2B1B3D] text-[#FFD166] rounded-r-full shadow-sm" href="#">
<span className="material-symbols-outlined" data-icon="campaign" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
<span className="font-['Epilogue'] font-medium">Announcements</span>
</a>
{/*  Plan Config Tab (Inactive)  */}
<a className="flex items-center gap-4 px-8 py-4 text-[#66547a] dark:text-[#e4e2df] hover:bg-white/50 dark:hover:bg-[#2B1B3D]/50 rounded-r-full hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-['Epilogue'] font-medium">Plan Config</span>
</a>
{/*  Settings Tab (Inactive)  */}
<a className="flex items-center gap-4 px-8 py-4 text-[#66547a] dark:text-[#e4e2df] hover:bg-white/50 dark:hover:bg-[#2B1B3D]/50 rounded-r-full hover:translate-x-2 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-['Epilogue'] font-medium">Settings</span>
</a>
</nav>
<div className="px-8 mt-6">
<button className="w-full bg-radiant-gradient text-on-primary-fixed py-4 rounded-xl font-bold shadow-lg shadow-[#FFD166]/20 active:scale-95 transition-all">
                New Announcement
            </button>
</div>
<div className="mt-auto space-y-1">
<a className="flex items-center gap-4 px-8 py-3 text-[#66547a] dark:text-[#e4e2df] hover:bg-white/50 dark:hover:bg-[#2B1B3D]/50 rounded-r-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-['Epilogue'] text-sm">Help</span>
</a>
<a className="flex items-center gap-4 px-8 py-3 text-secondary hover:bg-secondary/10 rounded-r-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-['Epilogue'] text-sm">Logout</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-64 p-12 bg-surface">
{/*  Header Section  */}
<header className="flex justify-between items-end mb-16">
<div className="max-w-2xl">
<h2 className="text-5xl font-black text-on-background tracking-tighter leading-none mb-4">
                    Broadcasts &amp; <br/><span className="text-primary">Announcements</span>
</h2>
<p className="text-on-surface-variant text-lg">Communicate updates, maintenance schedules, and creator features across the entire Radiant ecosystem.</p>
</div>
<div className="flex items-center gap-4">
<div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-4">
<img alt="Admin" className="w-12 h-12 rounded-full border-2 border-primary" data-alt="Portrait of a modern professional creative admin user with a bright background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzV-OC2BSrd_xenKk66uxJLmJv5Y_CThMFCpcEHVS8w2Ny-GuYM5JvM-ia_PHJQvFJMg2pJEfcnjTemc5j42wZ78D746TwQhxMRSpMfxLU9dcl9IABFwQZMRoLqCiec0s1MzkTGyxJorN31lVR39AnHBLs5TKCywRfiheEjXq-G6hJ_TKVUP9SxqYzvGtgrke3Phkr3j9ufVbJQiNCkiJd75XU292p00b3ua_wejT0BB_lXVyEFO-j1ThPiUS1_YoG2KVVlloTv-yv"/>
<div>
<p className="font-bold text-on-surface leading-none">Super Admin</p>
<p className="text-xs text-on-surface-variant">Active Now</p>
</div>
</div>
</div>
</header>
<div className="grid grid-cols-12 gap-8">
{/*  Creation Form Section (Asymmetric Left)  */}
<div className="col-span-12 lg:col-span-5 space-y-8">
<div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/15">
<h3 className="text-2xl font-bold mb-6">Compose Broadcast</h3>
<form className="space-y-6">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-tertiary mb-2">Subject Title</label>
<input className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all" placeholder="e.g. Major Platform Upgrade 2.0" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-tertiary mb-2">Priority Level</label>
<select className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all appearance-none">
<option>Info</option>
<option>Warning</option>
<option>Critical</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-tertiary mb-2">Icon Tag</label>
<select className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all appearance-none">
<option>campaign</option>
<option>warning</option>
<option>info</option>
<option>rocket_launch</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-tertiary mb-2">Message Content</label>
<textarea className="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all" placeholder="Describe the announcement in detail..." rows={4}></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-on-background text-white py-5 rounded-full font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">
                                Publish Broadcast
                            </button>
</div>
</form>
</div>
{/*  Preview Area (Glassmorphism)  */}
<div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-xl p-8 shadow-sm">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-bold uppercase tracking-tighter text-on-surface-variant">Live Preview</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-error"></div>
<div className="w-2 h-2 rounded-full bg-primary"></div>
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
</div>
</div>
<div className="bg-surface rounded-lg p-6 border border-outline-variant/10 shadow-lg shadow-primary/5">
<div className="flex items-start gap-4">
<div className="p-3 bg-primary-container rounded-xl">
<span className="material-symbols-outlined text-on-primary-container" data-icon="rocket_launch">rocket_launch</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-bold text-on-background">New Creator Engine</h4>
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase">Info</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">We're rolling out a completely reimagined editor interface for all professional creators starting next Monday. Prepare for speed.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Announcements Feed (Bento Style Right)  */}
<div className="col-span-12 lg:col-span-7 space-y-6">
{/*  Critical Badge Card  */}
<div className="bg-surface-container-low rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-8xl text-error/5 absolute -top-4 -right-4 rotate-12" data-icon="emergency_home">emergency_home</span>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="px-4 py-1.5 bg-error text-white text-xs font-black rounded-full uppercase tracking-widest shadow-lg shadow-error/20">Critical</span>
<span className="text-xs text-on-surface-variant font-medium">Dec 20, 2023 • 09:42 AM</span>
</div>
<h3 className="text-2xl font-bold text-on-background mb-3 group-hover:text-error transition-colors">Emergency Database Migration</h3>
<p className="text-on-surface-variant max-w-lg mb-6 leading-relaxed">System will be down for exactly 12 minutes tonight at 02:00 UTC. This is required for hardware scaling. All data will be safely cached.</p>
<div className="flex gap-4">
<button className="bg-on-background text-white px-6 py-2 rounded-full text-sm font-bold">Edit</button>
<button className="text-on-surface-variant px-6 py-2 rounded-full text-sm font-bold hover:bg-surface-container-highest transition-colors">Archive</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Warning Card  */}
<div className="bg-surface-container-highest rounded-xl p-6 border-l-8 border-secondary">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-secondary/10 rounded-lg">
<span className="material-symbols-outlined text-secondary" data-icon="warning">warning</span>
</div>
<span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-black rounded-full uppercase">Warning</span>
</div>
<h4 className="font-bold text-on-background mb-2">API Deprecation Notice</h4>
<p className="text-sm text-on-surface-variant mb-4">Version 1.4 of our API will be sunset on March 1st. Please migrate to v2.0.</p>
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Seen by 1.2k creators</p>
</div>
{/*  Info Card  */}
<div className="bg-primary-container rounded-xl p-6 shadow-sm shadow-primary/20">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-on-primary-container/10 rounded-lg">
<span className="material-symbols-outlined text-on-primary-container" data-icon="info">info</span>
</div>
<span className="px-3 py-1 bg-on-primary-container/10 text-on-primary-container text-[10px] font-black rounded-full uppercase">Info</span>
</div>
<h4 className="font-bold text-on-primary-container mb-2">New Style Tokens</h4>
<p className="text-sm text-on-primary-container/80 mb-4">Twelve new Vibrant Creator color themes are now live in the design system.</p>
<p className="text-[10px] text-on-primary-container uppercase font-bold tracking-widest">Scheduled: Jan 05</p>
</div>
{/*  Info Card 2  */}
<div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-tertiary/10 rounded-lg">
<span className="material-symbols-outlined text-tertiary" data-icon="stars">stars</span>
</div>
<span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-black rounded-full uppercase">Info</span>
</div>
<h4 className="font-bold text-on-background mb-2">Featured Creator Week</h4>
<p className="text-sm text-on-surface-variant mb-4">Nominations are open for the next Creator spotlight. Submit your portfolio.</p>
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white" data-alt="Small round user avatar of a smiling young person" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXh6e_cffty44kXwkZYcR1fWE7p57Yzjniov3_Ugfv4rB-_ObVO6SE5PQudcuptDipqBS6kUfyJHBhGcmKYnQ11c5XySDX01ZDw89Ha1QZfaKgzgtqBTcXV9eC8QQenktnPl5VDRDUXHcDix0TvJ5usyJWC69VUmbfuUuzn16_lMMe1IjEF3K8qRBNyUgBblqDAMt9nsg0MvMXxMMJblCsxy07YRu6nzdWakVUFvaUfE7EOe5TyCYOGc6cu8HHQQnwNlvybMnDvouC"/>
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white" data-alt="Small round user avatar of a diverse creative professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByMuCz_eY5U6M-f7FFINdRlmzP8HHRng4jUD3AsfIsk5PA2_fOxsykM8uhYOJDGqXap_p44Y8zAtqaOjq-GQEokKRyy3yR1DIgdaKsRDjA3TYsOsjtdHe4tfB-8M0wxrpyNgWV2avzAgihi-rOn2R-8TXVFp-DOdxXRmPRxZ78s1aPc5dIHrYDG7HUWlizc-Al87femVPdrZGUCQ3c5e1aeys8W3W6TjoIZyI0pG-6eaiM9qpLojseHgodQme2YeS_lYfunkRTlxqL"/>
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white" data-alt="Small round user avatar of a young female designer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPzNRxe8uKTsuAeJvyOYYyAdKoHaLoRBzVr0X5Z9RdX4jBRWR-7VcbHU6fFuq0hn68QjFmLnItN9qhHiKWOq9mjvTA86PCI4KXcXks0LoihucfbCGEBugFJ4Xx4M3YiXSLvI4jL6G-VIvVCsYnqTc7Jc0veydaNhv5WXh-TJ9vcE4oj3Ti6CZzClVyWp81e0AN-rGhiTzj9NtlQTJyMn_xeOxgWVUCgbm8W_dCt0sFqzY8ZvMUKVwslj9VdrDSRXyqVPxTpeXlK1f3"/>
<div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center text-[8px] font-bold">+8</div>
</div>
</div>
{/*  Add More Placeholder  */}
<div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-6 flex flex-col items-center justify-center group hover:border-primary transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="add">add</span>
</div>
<span className="text-xs font-bold text-outline uppercase tracking-widest group-hover:text-primary transition-colors">Quick Post</span>
</div>
</div>
</div>
</div>
</main>
{/*  Global Footer (Authority Source: JSON)  */}
<footer className="w-full py-12 px-8 mt-auto bg-[#f3f0ed] dark:bg-[#2B1B3D] fixed bottom-0 left-64 right-0 z-10 border-t border-outline-variant/5">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div className="mb-4 md:mb-0">
<span className="text-lg font-black text-[#2B1B3D] dark:text-white">Radiant Editor</span>
<p className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df] mt-2">© 2024 Radiant Editor. Built for creators.</p>
</div>
<div className="flex gap-8">
<a className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors transition-all duration-300" href="#">Privacy</a>
<a className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors transition-all duration-300" href="#">Terms</a>
<a className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df] hover:text-[#EF476F] transition-colors transition-all duration-300" href="#">API</a>
</div>
</div>
</footer>

    </div>
  );
}
