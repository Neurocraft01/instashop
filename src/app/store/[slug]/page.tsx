import Link from "next/link";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { StoreShell } from "@/components/store/StoreShell";
import type { Metadata } from "next";

const VC = {
  primary: "#745700", primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100", onPrimaryContainer: "#5b4400",
  secondary: "#b31446", onSecondary: "#ffeff0",
  secondaryContainer: "#ffc2c9",
  surfaceLowest: "#ffffff", surfaceLow: "#f3f0ed",
  surfaceHigh: "#e4e2df", onBackground: "#2f2f2d",
  onSurfaceVariant: "#5c5b59", brandDark: "#2B1B3D",
  brandYellow: "#FFD166",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const store = await db.store.findUnique({
    where: { slug },
    select: { name: true, seoTitle: true, seoDescription: true },
  });
  return {
    title: store?.seoTitle ?? `${store?.name ?? slug} — Shop on InstaShop`,
    description: store?.seoDescription ?? `Shop from ${store?.name ?? slug} on InstaShop.`,
  };
}

export default async function StorefrontPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const store = await db.store.findUnique({
    where: { slug },
    include: {
      products: {
        where: { status: "ACTIVE" },
        orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
        include: {
          images: { orderBy: { order: "asc" }, take: 1 },
          category: { select: { name: true } },
        },
      },
      categories: { orderBy: { order: "asc" } },
    },
  });

  if (!store || !store.isOpen) {
    if (!store) notFound();
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: VC.surfaceLow }}>
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl mb-4 block" style={{ color: VC.secondary }}>store_mall_directory</span>
          <h1 className="text-2xl font-black mb-2" style={{ color: VC.brandDark }}>{store.name}</h1>
          <p style={{ color: VC.onSurfaceVariant }}>{store.closedMessage ?? "This store is temporarily closed. Check back soon!"}</p>
        </div>
      </div>
    );
  }

  const featuredProducts = store.products.filter((p) => p.isFeatured);
  const allProducts = store.products;
  const whatsappBase = store.whatsappNumber ? store.whatsappNumber.replace(/\D/g, "") : null;

  const makeWhatsAppOrderLink = (productName: string, price: number) => {
    if (!whatsappBase) return null;
    const msg = encodeURIComponent(
      `Hi! I'd like to order: *${productName}* (₹${price})\nFrom your store: ${store.name}\nMy Name:\nDelivery Address:\nPayment: COD / UPI`
    );
    return `https://wa.me/${whatsappBase}?text=${msg}`;
  };

  return (
    <StoreShell slug={slug} storeName={store.name} whatsappNumber={store.whatsappNumber} activeTab="home">
      {/* Store Header */}
      <section className="py-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="relative mb-5">
          <div className="absolute inset-0 rounded-full scale-110 blur-lg opacity-40" style={{ background: VC.primaryContainer }} />
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 relative z-10 flex items-center justify-center"
            style={{ borderColor: VC.primaryContainer, background: VC.primaryContainer }}>
            {store.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={store.logoUrl} alt={store.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl font-black" style={{ color: VC.onPrimaryFixed }}>
                {store.name[0]}
              </span>
            )}
          </div>
        </div>

        <h1 className="text-2xl font-black mb-1" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
          {store.name}
        </h1>
        {store.tagline && (
          <p className="text-sm mb-3 max-w-xs" style={{ color: VC.onSurfaceVariant }}>{store.tagline}</p>
        )}
        {store.instagramHandle && (
          <a href={`https://instagram.com/${store.instagramHandle.replace("@", "")}`}
            target="_blank" rel="noopener noreferrer"
            className="text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-80 transition"
            style={{ background: VC.surfaceHigh, color: VC.onSurfaceVariant }}>
            @{store.instagramHandle.replace("@", "")}
          </a>
        )}
      </section>

      {/* Products Section */}
      {allProducts.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl mb-4 block" style={{ color: VC.onSurfaceVariant }}>inventory_2</span>
          <p className="font-semibold" style={{ color: VC.onSurfaceVariant }}>No products yet. Check back soon!</p>
        </div>
      ) : (
        <div className="space-y-5">
          {/* Featured product — big card */}
          {featuredProducts[0] && (() => {
            const p = featuredProducts[0];
            const img = p.images[0]?.url;
            const waLink = makeWhatsAppOrderLink(p.name, Number(p.discountPrice ?? p.price));
            return (
              <div className="rounded-2xl overflow-hidden" style={{ background: VC.surfaceLowest, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                {img && (
                  <div className="relative" style={{ aspectRatio: "16/9" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={p.name} className="w-full h-full object-cover" />
                    {p.isFeatured && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase"
                        style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
                        ✨ Featured
                      </span>
                    )}
                    {p.discountPrice && (
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-black"
                        style={{ background: VC.secondary, color: "#fff" }}>
                        Sale
                      </span>
                    )}
                  </div>
                )}
                <div className="p-5">
                  {p.category && <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: VC.primary }}>{p.category.name}</p>}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-black text-xl" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>{p.name}</h2>
                    <div className="text-right shrink-0">
                      {p.discountPrice ? (
                        <>
                          <p className="font-black text-xl" style={{ color: VC.brandDark }}>₹{Number(p.discountPrice).toLocaleString("en-IN")}</p>
                          <p className="text-xs line-through" style={{ color: VC.onSurfaceVariant }}>₹{Number(p.price).toLocaleString("en-IN")}</p>
                        </>
                      ) : (
                        <p className="font-black text-xl" style={{ color: VC.brandDark }}>₹{Number(p.price).toLocaleString("en-IN")}</p>
                      )}
                    </div>
                  </div>
                  {p.description && <p className="text-sm mb-4 leading-relaxed" style={{ color: VC.onSurfaceVariant }}>{p.description}</p>}
                  {p.stock === 0 ? (
                    <div className="w-full py-4 rounded-xl text-center font-black text-sm" style={{ background: VC.surfaceHigh, color: VC.onSurfaceVariant }}>
                      Out of Stock
                    </div>
                  ) : waLink ? (
                    <a href={waLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-black text-base hover:scale-[1.02] transition-transform active:scale-95"
                      style={{ background: "#25D366", color: "#fff" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Order on WhatsApp
                    </a>
                  ) : (
                    <Link href={`/store/${slug}/contact`}
                      className="flex items-center justify-center w-full py-4 rounded-xl font-black text-base hover:opacity-90 transition"
                      style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
                      Order Now
                    </Link>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Remaining products grid */}
          {allProducts.filter((p) => !p.isFeatured || allProducts.indexOf(p) > 0).length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {allProducts.filter((_, i) => !(featuredProducts[0] && i === 0)).map((p) => {
                const img = p.images[0]?.url;
                const waLink = makeWhatsAppOrderLink(p.name, Number(p.discountPrice ?? p.price));
                return (
                  <div key={p.id} className="rounded-2xl overflow-hidden"
                    style={{ background: VC.surfaceLowest, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    {img ? (
                      <div className="relative aspect-square overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        {p.stock === 0 && (
                          <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }}>
                            <span className="text-white font-black text-xs uppercase tracking-widest">Sold Out</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="aspect-square flex items-center justify-center" style={{ background: VC.surfaceLow }}>
                        <span className="material-symbols-outlined text-4xl" style={{ color: VC.onSurfaceVariant }}>image</span>
                      </div>
                    )}
                    <div className="p-3">
                      <p className="font-black text-sm mb-0.5 truncate" style={{ color: VC.brandDark }}>{p.name}</p>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        {p.discountPrice ? (
                          <div>
                            <span className="font-black text-sm" style={{ color: VC.brandDark }}>₹{Number(p.discountPrice).toLocaleString("en-IN")}</span>
                            <span className="text-xs ml-1 line-through" style={{ color: VC.onSurfaceVariant }}>₹{Number(p.price).toLocaleString("en-IN")}</span>
                          </div>
                        ) : (
                          <span className="font-black text-sm" style={{ color: VC.brandDark }}>₹{Number(p.price).toLocaleString("en-IN")}</span>
                        )}
                      </div>
                      {p.stock === 0 ? (
                        <div className="w-full py-2 rounded-xl text-center text-xs font-bold" style={{ background: VC.surfaceHigh, color: VC.onSurfaceVariant }}>
                          Sold Out
                        </div>
                      ) : waLink ? (
                        <a href={waLink} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 w-full py-2 rounded-xl text-xs font-black hover:opacity-90 transition active:scale-95"
                          style={{ background: "#25D366", color: "#fff" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Order
                        </a>
                      ) : (
                        <Link href={`/store/${slug}/contact`}
                          className="flex items-center justify-center w-full py-2 rounded-xl text-xs font-black hover:opacity-90 transition"
                          style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
                          Order
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </StoreShell>
  );
}
