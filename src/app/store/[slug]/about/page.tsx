export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  Top Navigation  */}
<header className="fixed top-0 w-full z-50 bg-white/70 glass-nav shadow-[0_8px_32px_rgba(255,209,102,0.15)]">
<nav className="flex justify-between items-center px-8 py-4 w-full">
<div className="text-2xl font-black text-[#2B1B3D] dark:text-white font-['Epilogue'] tracking-tight">
                RadiantCreator
            </div>
<div className="hidden md:flex items-center space-x-8 font-['Epilogue']">
<a className="text-[#FFD166] font-bold border-b-4 border-[#FFD166] pb-1" href="#">About</a>
<a className="text-[#2B1B3D] hover:text-[#FFD166] transition-colors" href="#">Storefront</a>
<a className="text-[#2B1B3D] hover:text-[#FFD166] transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center space-x-6">
<button className="material-symbols-outlined text-on-surface hover:scale-105 transition-transform duration-300" data-icon="shopping_bag">shopping_bag</button>
<button className="bg-primary-container text-on-primary-fixed px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-sm">
                    Get Started
                </button>
</div>
</nav>
</header>
<main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
{/*  Hero Section: Centered Identity  */}
<section className="flex flex-col items-center text-center mb-24">
<div className="relative mb-12">
<div className="absolute inset-0 bg-primary-container rounded-full scale-110 blur-2xl opacity-20"></div>
<img className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl relative z-10" data-alt="Close-up portrait of Sarah, a warm smiling baker with flour on her apron in a sunlit rustic kitchen studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhmgw14saDMA8z_m5fcVCbJN6VtrLCg5zmddUCHVr3bf-FOnFaA_2CFIgNPYzKD-s74_DIRVlZajTsNznsTNRcfWsJdI5HHsNBdQcUH1IBpb2NySjM7T9pek8eTQeTl-mBSB8_81ZC_ECGpyLFW0N96OjBfGs3O3RH6gftdrTQ2UM-bgADJw6fD_RrlzaE1bCqgFbJV_jopOSagNChYGdw-HSxCMsPwt9Qhyi4DzmWgvKnmYQeUbqxRfxXlWAqLXV6-oydjgKLqIEU"/>
</div>
<h1 className="font-headline text-5xl md:text-7xl font-black text-on-background tracking-tight mb-4">
                Hi, I'm <span className="text-primary">Sarah</span>.
            </h1>
<p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
                A micro-bakery owner obsessed with wild yeast, golden crusts, and the slow art of sourdough.
            </p>
</section>
{/*  Our Story: Asymmetric Layout  */}
<section className="grid md:grid-cols-2 gap-16 items-center mb-32">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Detail of artisan bread cooling on a wire rack with steam rising in warm morning sunlight hitting a marble counter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNWu3bQaXMPme7qNM4aFchJh5xxEuoW2fqPjuGEZfigdSCHEpDx4pmyHfIUB6a7Jz52FFHWbBOr1J4cV2kewIRK4o1nNwxfTkvtL4dGIQw1OpJE5aQ5c4xK8jO6HUKWLtZ_u7wtDdx-FyIiNuSwuCZBENT--N5H3zbfUsIuWZj456mfNQxE-cynn_qduHzsD_ZrLoaXnGx3T6PG24xUwWk34zHzRjZDnycdafB56s0UcqWfd-oj97EsMQ9ru-umZwIAy2Da-fWR0LI"/>
</div>
<div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-lg overflow-hidden border-8 border-surface shadow-xl hidden md:block">
<img className="w-full h-full object-cover" data-alt="Top down view of hands kneading soft dough on a flour-dusted wooden surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOJ4dhIBlaBwPBXw8AcXXTVWyeEJpLv8LBtX-wua623BPhljCCzlLsWusNlCuxmyH-gkysWMYA8pt-aShjyi0WjFFJOxQAnAkGEVznXQYVWzdeo9CMR3q2ZRNO7XfEqlh5rpr4QoBYHoX1dIh3jfViv1TWrvQ2ZA0IaXP2eQNC5fxGSVINJeUNyPGcZg9SQOSZ0MdOaiDzMbGnMwz63ku6Vqft8SUpKwJNouKot2N117FqJSNuMu8zQUdJ6NXLIjZXrK3Z601baBrt"/>
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<span className="font-label text-sm uppercase tracking-widest text-secondary font-bold">The Heart of the Bakery</span>
<h2 className="font-headline text-4xl md:text-5xl font-bold text-on-background leading-tight">Our Story began in a small kitchen with big dreams.</h2>
<div className="space-y-6 text-lg text-on-surface-variant font-body leading-relaxed">
<p>It started with a single starter named 'Goldie' and a quest for the perfect crumb. What began as a weekend hobby quickly turned into a neighborhood obsession.</p>
<p>I believe that bread is more than just food; it's a connection to our roots and a testament to the beauty of patience. Every loaf at Radiant Editor Micro-Bakery is handcrafted over 36 hours using ancient grains and local ingredients.</p>
</div>
<div className="pt-4">
<button className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 editorial-shadow">
                        Explore the Shop
                    </button>
</div>
</div>
</section>
{/*  The Process: 3-Step Bento Grid  */}
<section className="bg-surface-container-low rounded-xl p-8 md:p-16 mb-32">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl font-bold mb-4">The Process</h2>
<p className="text-on-surface-variant">Three simple steps, forty-eight hours of magic.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
{/*  Step 1  */}
<div className="bg-surface-container-lowest p-10 rounded-lg editorial-shadow flex flex-col items-start space-y-6">
<div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-on-primary-container" data-icon="water_drop">water_drop</span>
</div>
<h3 className="font-headline text-2xl font-bold">The Hydration</h3>
<p className="text-on-surface-variant font-body">We start with a high-hydration blend of stone-milled flours, allowing the gluten to develop naturally and slowly.</p>
</div>
{/*  Step 2  */}
<div className="bg-surface-container-lowest p-10 rounded-lg editorial-shadow flex flex-col items-start space-y-6">
<div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-on-primary-container" data-icon="timer">timer</span>
</div>
<h3 className="font-headline text-2xl font-bold">Cold Fermentation</h3>
<p className="text-on-surface-variant font-body">A long, cool rest in the fridge for 24 hours unlocks complex flavors and makes our bread incredibly easy to digest.</p>
</div>
{/*  Step 3  */}
<div className="bg-surface-container-lowest p-10 rounded-lg editorial-shadow flex flex-col items-start space-y-6">
<div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-on-primary-container" data-icon="local_fire_department">local_fire_department</span>
</div>
<h3 className="font-headline text-2xl font-bold">The Stone Bake</h3>
<p className="text-on-surface-variant font-body">Fired at high heat on heavy stone, resulting in a blistered, caramelized crust and an airy, open interior crumb.</p>
</div>
</div>
</section>
{/*  Follow the Journey: Social Section  */}
<section className="text-center mb-12">
<h2 className="font-headline text-4xl font-bold mb-12">Follow the Journey</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close up of a perfect sourdough loaf with decorative wheat stalk scoring patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJvhDqVkGgm6GOsjcSLkKf2CTTuqAPL36LkHI6j6Z1dkiduV7R0svguoRF8x2ysEipQQZJJHxE-9b_C0kpUfAMuVk6iy0IxB2xN6wuAwGc5XZwpkt18UEBv9sfdJlAYRffbMIasFOkfrbKfk_5QuAnNUZxYfAC4fUQyjee-wp8LeZ-8mmBRKrrc94CLedLHEHn4-kOH0bOCbY23GWdi5FsJ0W_0Rujf3RA08hExRXwMg3AtJOHUbyGW72XTZDVFDQTGPF8w_jKKCvv"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A rustic wooden basket filled with assorted pastries and golden croissants in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6uDled1bjX3TGVou1BDdCAIEga9rgH5U8aSK3cIf7WKikKWTx8vUfrm3fZGgemIAOHGp8i1ROkOdys4UxRhWR5oqk7_LnI5-PwScx7lBiQ12IOrjibMx-naas8kipg_n56PauHs8uuOvyGY_BCY4SA2RZgSKzF5lA0cnx6RafL50PBj5BE6U_W9tZMSfq3AUB0tQgknff35BMEula1z63oJ1R7EAC8M_vBCJ5FRfZn7foorymfoQhHOqzeX1lHtxSfpKwQUI2ujU"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Baker Sarah smiling while carrying a tray of freshly baked sourdough boules" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpg3pkesDCCcC5_pgiBnLjleNzUU4XkyFMDI1kylUPCKwA2n0tFxPOZhzE5vnKV2pP59ysN2pER8jUfjZ0qAPsIMpr2do6Z1jqh3dCXz2tGsWrs7UqTtOK5yRbRuf1L5PC3GJLMfDr-U2jqYfiYgqYAZglM4kfOa5Ak_-Euv_Q6FKbucPfRi4KZVWgxr4vD4igG2Uovidw2yl7vxFoerjMzpg1OJi_TVXWo0jBM5XjjEAuVKtbJ8ayETgeoelQI18-92Q06x5HSJ7A"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Macro shot of bread crumb showing large open air pockets and glistening texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC58AoWjzkEWy06UwOS-LufrUNHUsYQLDL0znO-0m5WarvYiYKumhd8AMXxshHc4EkWwgvbVGig1sbv8XmrvNoJvATQlGn9yjTSF7VI56ov2fKX0UuEcYOd3OOFQKOS3DAQOWoR4bCm0WtR0FwWJpFnXjpnSc71AWCd8nUxfflrruUpuub0f6rN2bvrvjkzUc59wW87sGtybA5FViTzX7zNJDN8GSbTlg97x14HvxHCBrxJTljQaeoXRS0FVf4SupEiS8IdOq80NPQA"/>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center space-x-3 text-secondary font-bold text-lg hover:underline underline-offset-8" href="#">
<span>@RADIANT_BAKERY ON INSTAGRAM</span>
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-low w-full py-12 px-8 mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-8 md:space-y-0">
<div className="text-lg font-black text-[#2B1B3D] dark:text-white font-['Epilogue']">
                RadiantCreator
            </div>
<div className="font-['Epilogue'] text-sm uppercase tracking-widest text-[#66547a] dark:text-[#e4e2df] flex flex-wrap justify-center gap-8">
<a className="hover:text-[#EF476F] transition-colors duration-300" href="#">Privacy</a>
<a className="hover:text-[#EF476F] transition-colors duration-300" href="#">Terms</a>
<a className="hover:text-[#EF476F] transition-colors duration-300" href="#">API</a>
</div>
<div className="font-['Epilogue'] text-xs uppercase tracking-widest text-[#66547a]">
                © 2024 RADIANT EDITOR. BUILT FOR CREATORS.
            </div>
</div>
</footer>

    </div>
  );
}
