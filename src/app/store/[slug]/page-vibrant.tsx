export default function Page() {
  return (
    <div className="vibrant-wrapper">

{/*  Top Navigation Bar  */}
<header className="flex items-center justify-between px-6 h-20 w-full border-b border-[#e4e2df] bg-[#FFFCF9] sticky top-0 z-50">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface hover:bg-surface-container-low rounded-full p-2 transition-all cursor-pointer">arrow_back</span>
<h1 className="font-headline font-black text-on-surface text-lg">@bakesbysarah</h1>
</div>
<div className="flex items-center gap-2">
<button className="hover:bg-surface-container-low rounded-full p-2 transition-all relative">
<span className="material-symbols-outlined text-on-surface">shopping_bag</span>
<span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-on-secondary text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
</button>
<button className="hover:bg-surface-container-low rounded-full p-2 transition-all">
<span className="material-symbols-outlined text-on-surface">more_vert</span>
</button>
</div>
</header>
<main className="max-w-2xl mx-auto px-4 pb-32">
{/*  Creator Header Section  */}
<section className="py-10 flex flex-col items-center text-center">
<div className="relative mb-6">
<div className="absolute inset-0 bg-primary-container rounded-full scale-110 blur-sm opacity-50"></div>
<img className="w-32 h-32 rounded-full object-cover border-4 border-primary-container relative z-10" data-alt="Close-up portrait of a smiling young baker with flour on her apron in a sun-drenched warm kitchen setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolp4quL-U58zyo4MZ7IbsuTUC0J5ZAIoMCD3hnidh-SclHz0jXdYrR-IqgwzQRGWbwUOutctRlEpvaM0CP1sh3Bq_8VLdR-PDX5vqV6JW1fkzz8U_E5i7i6W6HgK28S53tVVpI9Uzq3VoYsdOYiza_b2eYfyalr7oPhl0yW4Gje4KRBMjPIjJtXC__hVBe7c1OVQPj3sKbp0mdnyl2Z9YZmBG9QJnLj2hYliTqnqwdJYtgpBKGHnfjL-SIpRpy2CKnY_veAlyQVHJ"/>
<div className="absolute bottom-1 right-1 bg-secondary w-8 h-8 rounded-full flex items-center justify-center border-4 border-surface z-20">
<span className="material-symbols-outlined text-[16px] text-on-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</div>
</div>
<h2 className="font-headline text-3xl font-black text-on-background mb-2">Sarah's Micro-Bakery</h2>
<p className="text-on-surface-variant max-w-sm font-medium leading-relaxed mb-6">
                Small batch sourdough and botanical pastries delivered fresh every Saturday. Baked with love in East London. 🥐✨
            </p>
<div className="flex gap-2">
<span className="bg-surface-container-high px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-on-surface">5.0 ★ (120 reviews)</span>
<span className="bg-surface-container-high px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-on-surface">London, UK</span>
</div>
</section>
{/*  Product Feed  */}
<div className="space-y-6">
<h3 className="font-headline text-xl font-bold px-2">Fresh Out the Oven</h3>
{/*  Bento Item 1: Large Featured  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(255,209,102,0.1)] group">
<div className="relative aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Golden brown sourdough loaf with an artistic leaf score on a rustic wooden board with scattered flour" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkUd-2Kqe0gApzbwbjgK7PqJ-OX0DjMnzRXj7O5d3K9jbLJo21vfhsKNqaDBxROdriVKfU48RN3F5V8KU9PI5Ll9eOfqmwHXjkYlyuJrZqyGHLA5YYGJ_Ek5jucqy3j8OBxxCvjBEA7nQzTMzEsbB2-IO28OJHyVR3R4wVSNl5WLKy_6LKkVtyN9gnJa2-in6PnrNh-yPtGZ-mVYtlGkdDwpF7PQXV3xlR26Ra0JOVzJZxWW3jQCFbxCrio9C5NNqtHUVcdoI6GE1n"/>
<span className="absolute top-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Bestseller</span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-headline text-2xl font-bold text-on-background">Signature Sourdough</h4>
<p className="text-on-surface-variant font-medium">48-hour fermented, wild yeast loaf.</p>
</div>
<span className="text-2xl font-black text-on-background">£6.50</span>
</div>
<button className="w-full bg-primary-container hover:bg-primary text-on-primary-fixed py-4 rounded-xl font-headline font-black text-lg transition-all active:scale-95 shadow-[0_8px_32px_rgba(255,209,102,0.2)]">
                        Grab It
                    </button>
</div>
</div>
{/*  Bento Items Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Item 2  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(255,209,102,0.1)] group">
<div className="relative aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of flaky pastries filled with bright red jam and topped with edible flowers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFT9h-qgphekFU_W_b-sQkY9NI9g5pCdRnw5EnDjVfo9gswvgBBnkuaSFwBwHoqzaPdt6JqG0igDFCg6JkGkyJTGANbjbPO55jxf4A1H_DxgZ2qk5-_Y8-5vzV24g8k5LrpA9NwgZAulyzA4Eg5izqjhzS0i6-3awpw8y11zC5Tv22StUmVcopyW0_OIRfF5BTbaz8AdQ_SxRMXx4qpHHJe63CyoQnGmL6vT5LXdq6svthusNlCnFBDZeEKCQghtJAlAMQIvLwI0k3"/>
</div>
<div className="p-5">
<h4 className="font-headline text-xl font-bold text-on-background mb-1">Botanical Danishes</h4>
<p className="text-on-surface-variant text-sm mb-4">Seasonal fruit &amp; floral cream.</p>
<div className="flex items-center justify-between gap-4">
<span className="text-xl font-black text-on-background">£4.00</span>
<button className="flex-1 bg-primary-container hover:bg-primary text-on-primary-fixed py-3 rounded-xl font-headline font-black text-sm transition-all active:scale-95">
                                Grab It
                            </button>
</div>
</div>
</div>
{/*  Item 3  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(255,209,102,0.1)] group">
<div className="relative aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Box of six dark chocolate sea salt cookies with visible salt flakes on top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzsLiO3PKp9FmxWkLmrL2Dbn_5rJumHskHgFsORwxb3TS_oS8zygTin-1D8Nbn6ZBr2e-cgoGoQltD39kjQyMD5x6plWtwHBa5NJsqruP1tnFTrbcBZHfcpUdIq8LtE_b6oxOyro34Z3y26bp3uFgJBFUAG07dK8HYG75t8gCjPrqVko3u6edEcJLBBSz6RSwErGMU2gLJHVJXqo7ZFtZ2mAuh79kbwH6ekv22r-tLxJdzrlR8KE9ojhzdYWnrntgnqg6tvqn1Ugb"/>
</div>
<div className="p-5">
<h4 className="font-headline text-xl font-bold text-on-background mb-1">Sea Salt Cookie Box</h4>
<p className="text-on-surface-variant text-sm mb-4">Box of 6 melty dark chocolate.</p>
<div className="flex items-center justify-between gap-4">
<span className="text-xl font-black text-on-background">£12.00</span>
<button className="flex-1 bg-primary-container hover:bg-primary text-on-primary-fixed py-3 rounded-xl font-headline font-black text-sm transition-all active:scale-95">
                                Grab It
                            </button>
</div>
</div>
</div>
</div>
{/*  Item 4: Asymmetric Card  */}
<div className="bg-tertiary-container/30 rounded-xl p-8 flex items-center justify-between gap-6">
<div className="flex-1">
<h4 className="font-headline text-2xl font-black text-on-tertiary-container mb-2">Baker's Mystery Bag</h4>
<p className="text-on-tertiary-fixed-variant font-medium mb-6">3-4 items from today's surprise surplus bake.</p>
<div className="flex items-center gap-4">
<span className="text-2xl font-black text-on-background">£10.00</span>
<button className="bg-primary-container hover:bg-primary text-on-primary-fixed px-8 py-3 rounded-xl font-headline font-black text-sm transition-all active:scale-95 shadow-md">
                            Grab It
                        </button>
</div>
</div>
<div className="hidden sm:block w-32 h-32 rotate-6 bg-surface-container-lowest rounded-lg p-2 shadow-xl">
<img className="w-full h-full object-cover rounded" data-alt="Artistic stack of various baked goods in a brown paper bag with a logo sticker" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsJwC2inl9aLj_2TS2MoA4NXjwrXGMh8fLIg89bvIabWjj2o-cvglOqNJWdFjuPeXES8_7_boLDfu6IM9gOUOntgq_2nkNfldgqt-56MBOMioI1El7LeXYvHN12DAoEqm1IR7OqA7vI3_d_qQm3B4NMODwX8683WGZWGIRxLESYHtc0s6Y1VF5-oI2xqi1T0j-6xCKK0l9Kl4bC7L2FVOuPZyM2wsijcTH4JwqZAPDzU-cKyH4WYEJQhma-htNgMds-y-x4QnB_-kC"/>
</div>
</div>
</div>
{/*  Checkout Section / Footer  */}
<footer className="mt-20 pt-10 border-t border-surface-container-high text-center">
<div className="flex flex-col items-center gap-4 mb-10">
<div className="flex items-center gap-2 text-on-surface-variant font-bold text-xs uppercase tracking-widest">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
                    Secure checkout via Stripe
                </div>
<div className="flex gap-6 opacity-40">
<img alt="Stripe" className="h-6 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC3z45DUCMm5X7UOppwpyVcdFW8gwejuVRRUPZuibBhuVWoDm-wa6tKH3CG2oxBOPGbFHI9L69cia_W4DSEEj1gQm8fNazgiFEL1GAzlRkxuABYtp2_DN6Z6XInnv4fb3BFI-ycXQuPo-tL77fcuFBj3BsXouG2VJNwyayDR3yIJI7Q6bJLmbH2MTwrq5TJ5zTPLkEeDDY4ilskzyMBErGpGL_0B7YPCiLBBrZdWX8Ykfk7AS9XFZ67pHbcwv5e0TwySQ48D08cSRj"/>
<span className="material-symbols-outlined">payments</span>
<span className="material-symbols-outlined">lock</span>
</div>
</div>
<div className="space-y-4 mb-8">
<p className="text-xs text-on-surface-variant font-medium">© 2024 @bakesbysarah • Powered by InstaShop</p>
<div className="flex justify-center gap-6 text-xs font-bold text-on-background uppercase tracking-tighter">
<a href="#">Privacy</a>
<a href="#">Shipping</a>
<a href="#">Contact</a>
</div>
</div>
</footer>
</main>
{/*  Bottom Navigation Bar (Contextual for Shop)  */}
<nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-2">
<div className="glass-nav flex justify-around items-center w-[90%] mx-auto h-16 rounded-full shadow-[0_8px_32px_rgba(255,209,102,0.2)] border border-white/20 px-4">
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full w-12 h-12 transition-transform hover:scale-110 active:scale-90" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
</a>
<a className="flex flex-col items-center justify-center text-on-background/50 transition-transform hover:scale-110 active:scale-90" href="#">
<span className="material-symbols-outlined">search</span>
</a>
<a className="flex flex-col items-center justify-center text-on-background/50 transition-transform hover:scale-110 active:scale-90" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
</a>
<a className="flex flex-col items-center justify-center text-on-background/50 transition-transform hover:scale-110 active:scale-90" href="#">
<span className="material-symbols-outlined">person</span>
</a>
</div>
</nav>

    </div>
  );
}
