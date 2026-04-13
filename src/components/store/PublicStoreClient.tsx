"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ExternalLink, Link as LinkIcon } from "lucide-react";
import { generateEnquiryWhatsAppLink } from "@/lib/whatsapp";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/hooks/use-cart";

type Category = { id: string; name: string; slug: string };
type ProductImage = { id: string; url: string; order: number };
type Variant = { id: string; name: string; value: string; price: number | null; stock: number | null };
type Product = {
  id: string; name: string; description: string | null; price: number; discountPrice: number | null;
  images: ProductImage[]; status: string; isFeatured: boolean; tags: string | null;
  stock: number | null; trackStock: boolean; variants: Variant[];
  category: { id: string; name: string } | null;
};
type Store = {
  id: string; name: string; slug: string; tagline: string | null; description: string | null;
  logoUrl: string | null; bannerUrl: string | null; bannerType: string; whatsappNumber: string | null;
  instagramHandle: string | null; facebookUrl: string | null; youtubeUrl: string | null; theme: string;
  accentColor: string; isOpen: boolean; closedMessage: string | null; upiId: string | null; upiQrUrl: string | null;
  categories: Category[]; products: Product[];
};

function ProductCard({ product, store, onAddToCart }: { product: Product; store: Store; onAddToCart: (p: Product) => void }) {
  const primaryImage = product.images[0]?.url;
  const isOutOfStock = product.trackStock && product.stock !== null && product.stock <= 0;
  const displayPrice = product.discountPrice ?? product.price;

  return (
    <motion.div layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className="bg-[#ffffff] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(255,209,102,0.1)] group flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e4e2df]">
        {primaryImage ? (
          <Image src={primaryImage} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-[#9e9d9a]">
             <span className="material-symbols-outlined text-4xl mb-2">image</span>
          </div>
        )}
        {product.isFeatured && (
          <span className="absolute top-4 left-4 bg-[#f9cc61] text-[#5b4400] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            Featured
          </span>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-[#2f2f2d]/50 flex items-center justify-center">
            <span className="bg-[#fff1da] text-[#443100] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-headline text-xl font-bold text-[#2f2f2d] mb-1 line-clamp-1">{product.name}</h4>
        {product.description && (
          <p className="text-[#5c5b59] text-sm mb-4 line-clamp-2">{product.description}</p>
        )}
        <div className="flex items-center justify-between gap-4 mt-auto pt-4">
          <span className="text-xl font-black text-[#2f2f2d]">₹{displayPrice.toLocaleString("en-IN")}</span>
          <button
            disabled={isOutOfStock}
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-[#f9cc61] hover:bg-[#745700] hover:text-[#fff1da] text-[#443100] py-3 rounded-xl font-headline font-black text-sm transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            style={{ backgroundColor: store.accentColor && !isOutOfStock ? store.accentColor : undefined, color: store.accentColor ? "#ffffff" : undefined }}
          >
            {isOutOfStock ? "Sold Out" : "Order"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function PublicStoreClient({ store }: { store: Store }) {
  const router = useRouter();
  const { addItem, items: cartItems } = useCartStore();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return store.products;
    return store.products.filter((p) => p.category?.id === activeCategory);
  }, [store.products, activeCategory]);

  const handleAddToCart = (product: Product) => {
    addItem({
      productId: product.id, name: product.name, price: Number(product.discountPrice ?? product.price),
      imageUrl: product.images[0]?.url, quantity: 1,
    });
    router.push(`/store/${store.slug}/checkout`);
  };

  return (
    <div className="bg-[#f9f6f3] text-[#2f2f2d] font-body selection:bg-[#f9cc61] selection:text-[#5b4400] min-h-screen">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between px-6 h-20 w-full border-b border-[#e4e2df] bg-[#FFFCF9]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          {store.logoUrl ? (
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#dfdcd9]">
              <Image src={store.logoUrl} alt={store.name} width={40} height={40} className="w-full h-full object-cover" />
            </div>
          ) : (
             <span className="material-symbols-outlined text-[#2f2f2d] rounded-full p-2">storefront</span>
          )}
          <h1 className="font-headline font-black text-[#2f2f2d] text-lg truncate max-w-[150px]">{store.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          {store.whatsappNumber && (
            <a href={`https://wa.me/${store.whatsappNumber}`} target="_blank" className="hover:bg-[#f3f0ed] rounded-full p-2 transition-all">
               <span className="material-symbols-outlined text-green-600">forum</span>
            </a>
          )}
          <Link href={`/store/${store.slug}/checkout`}>
            <button className="hover:bg-[#f3f0ed] rounded-full p-2 transition-all relative">
              <span className="material-symbols-outlined text-[#2f2f2d]">shopping_bag</span>
              {cartItems.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#b31446] text-[#ffeff0] text-[10px] flex items-center justify-center rounded-full font-bold">
                  {cartItems.length}
                </span>
              )}
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-32">
        {/* Creator Header Section */}
        <section className="py-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#f9cc61] rounded-full scale-110 blur-sm opacity-50" style={{ backgroundColor: store.accentColor }}></div>
            {store.logoUrl ? (
              <img className="w-32 h-32 rounded-full object-cover border-4 border-[#f9cc61] relative z-10" style={{ borderColor: store.accentColor }} src={store.logoUrl} />
            ) : (
              <div className="w-32 h-32 rounded-full border-4 border-[#f9cc61] relative z-10 bg-white flex items-center justify-center text-4xl font-headline font-black text-[#5b4400]" style={{ borderColor: store.accentColor }}>
                {store.name[0]}
              </div>
            )}
            <div className="absolute bottom-1 right-1 bg-[#b31446] w-8 h-8 rounded-full flex items-center justify-center border-4 border-[#f9f6f3] z-20">
              <span className="material-symbols-outlined text-[16px] text-[#ffeff0]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
          </div>
          
          <h2 className="font-headline text-3xl font-black text-[#2f2f2d] mb-2">{store.name}</h2>
          {store.tagline && <p className="text-[#5c5b59] max-w-sm font-medium leading-relaxed mb-4">{store.tagline}</p>}
          {store.description && <p className="text-[#9e9d9a] text-sm max-w-md mx-auto mb-6">{store.description}</p>}
          
          {!store.isOpen && (
             <div className="mb-6 bg-red-50 text-red-600 px-6 py-2 rounded-full text-sm font-bold shadow-sm">
                {store.closedMessage || "Currently closed for orders."}
             </div>
          )}
          
          <div className="flex flex-wrap gap-2 justify-center">
            {store.facebookUrl && <a href={store.facebookUrl} target="_blank" className="bg-[#e4e2df] p-2 rounded-full"><LinkIcon className="w-4 h-4 text-[#5c5b59]"/></a>}
            {store.instagramHandle && <a href={`https://instagram.com/${store.instagramHandle}`} target="_blank" className="bg-[#e4e2df] p-2 rounded-full"><ExternalLink className="w-4 h-4 text-[#5c5b59]"/></a>}
          </div>
        </section>

        {/* Categories */}
        {store.categories.length > 0 && (
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4 border-y border-[#e4e2df] mb-8 sticky top-20 bg-[#f9f6f3]/90 backdrop-blur-md z-40">
             <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                activeCategory === "all" ? "bg-[#2f2f2d] text-[#fff1da]" : "bg-[#ffffff] text-[#5c5b59] hover:bg-[#e4e2df]"
              }`}
            >
              All Items
            </button>
            {store.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                  activeCategory === cat.id ? "bg-[#2f2f2d] text-[#fff1da]" : "bg-[#ffffff] text-[#5c5b59] hover:bg-[#e4e2df]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Product Feed */}
        <div className="space-y-6">
          <h3 className="font-headline text-xl font-bold px-2">{activeCategory === "all" ? "Fresh Collection" : "Products"}</h3>
          
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-[#ffffff] rounded-xl">
              <span className="material-symbols-outlined text-6xl text-[#dfdcd9] mb-4">inventory_2</span>
              <p className="text-[#5c5b59] font-medium">Nothing here yet!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <AnimatePresence>
                {filtered.map(product => (
                    <ProductCard key={product.id} product={product} store={store} onAddToCart={handleAddToCart} />
                ))}
                </AnimatePresence>
            </div>
          )}
        </div>

        {/* Checkout Section / Footer */}
        <footer className="mt-20 pt-10 border-t border-[#e4e2df] text-center">
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-[#5c5b59] font-bold text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              Secure checkout guarantee
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <p className="text-xs text-[#5c5b59] font-medium">© 2026 {store.name} • Powered by InstaShop</p>
          </div>
        </footer>
      </main>

      {/* Bottom Navigation Bar (Contextual) */}
      <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-2">
        <div className="flex justify-around items-center w-[90%] max-w-sm mx-auto h-16 rounded-full shadow-[0_8px_32px_rgba(255,209,102,0.2)] border border-[#dfdcd9] px-4" style={{ background: "rgba(255, 252, 249, 0.7)", backdropFilter: "blur(20px)" }}>
          <Link href={`/store/${store.slug}`} className="flex flex-col items-center justify-center bg-[#f9cc61] text-[#5b4400] rounded-full w-12 h-12 transition-transform hover:scale-110 active:scale-90" style={{ backgroundColor: store.accentColor }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: store.accentColor ? "#fff" : undefined }}>storefront</span>
          </Link>
          <a href={`https://wa.me/${store.whatsappNumber}`} target="_blank" className="flex flex-col items-center justify-center text-[#2f2f2d]/50 transition-transform hover:scale-110 active:scale-90 relative">
             <span className="material-symbols-outlined">forum</span>
          </a>
          <Link href={`/store/${store.slug}/checkout`} className="flex flex-col items-center justify-center text-[#2f2f2d]/50 transition-transform hover:scale-110 active:scale-90 relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#b31446] text-[#ffeff0] text-[10px] flex items-center justify-center rounded-full font-bold">
                  {cartItems.length}
                </span>
             )}
          </Link>
          <Link href={`/store/${store.slug}/track`} className="flex flex-col items-center justify-center text-[#2f2f2d]/50 transition-transform hover:scale-110 active:scale-90 relative">
            <span className="material-symbols-outlined">local_shipping</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
