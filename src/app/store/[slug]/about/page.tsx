import Link from "next/link";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { StoreShell } from "@/components/store/StoreShell";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const store = await db.store.findUnique({ where: { slug }, select: { name: true } });
  return { title: `About ${store?.name ?? slug} — InstaShop` };
}

const VC = {
  primary: "#745700", primaryContainer: "#f9cc61",
  onPrimaryFixed: "#443100", onPrimaryContainer: "#5b4400",
  secondary: "#b31446", secondaryContainer: "#ffc2c9",
  onSecondaryContainer: "#920035",
  surfaceLowest: "#ffffff", surfaceLow: "#f3f0ed",
  onBackground: "#2f2f2d", onSurfaceVariant: "#5c5b59",
  brandDark: "#2B1B3D", brandYellow: "#FFD166",
};

export default async function StoreAboutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const store = await db.store.findUnique({
    where: { slug },
    select: {
      name: true, tagline: true, description: true,
      logoUrl: true, whatsappNumber: true,
      instagramHandle: true, facebookUrl: true, youtubeUrl: true,
      _count: { select: { products: { where: { status: "ACTIVE" } }, orders: true } },
    },
  });

  if (!store) notFound();

  const whatsappBase = store.whatsappNumber?.replace(/\D/g, "");

  return (
    <StoreShell slug={slug} storeName={store.name} whatsappNumber={store.whatsappNumber} activeTab="about">
      {/* Store Identity */}
      <section className="py-10 flex flex-col items-center text-center">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 mb-5 flex items-center justify-center"
          style={{ borderColor: VC.primaryContainer, background: VC.primaryContainer }}>
          {store.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={store.logoUrl} alt={store.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-5xl font-black" style={{ color: VC.onPrimaryFixed }}>{store.name[0]}</span>
          )}
        </div>
        <h1 className="text-3xl font-black mb-2" style={{ fontFamily: "Epilogue, sans-serif", color: VC.brandDark }}>
          {store.name}
        </h1>
        {store.tagline && (
          <p className="text-sm max-w-xs" style={{ color: VC.onSurfaceVariant }}>{store.tagline}</p>
        )}
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-5 rounded-2xl text-center" style={{ background: VC.primaryContainer }}>
          <p className="text-3xl font-black" style={{ color: VC.onPrimaryFixed }}>{store._count.products}</p>
          <p className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: VC.onPrimaryContainer }}>Products</p>
        </div>
        <div className="p-5 rounded-2xl text-center" style={{ background: VC.surfaceLow }}>
          <p className="text-3xl font-black" style={{ color: VC.brandDark }}>{store._count.orders}</p>
          <p className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: VC.onSurfaceVariant }}>Happy Customers</p>
        </div>
      </div>

      {/* Description */}
      {store.description && (
        <div className="rounded-2xl p-6 mb-6" style={{ background: VC.surfaceLowest, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 className="font-black text-base mb-3" style={{ color: VC.brandDark }}>Our Story</h2>
          <p className="text-sm leading-relaxed" style={{ color: VC.onSurfaceVariant }}>{store.description}</p>
        </div>
      )}

      {/* Social Links */}
      {(store.instagramHandle || store.facebookUrl || store.youtubeUrl) && (
        <div className="rounded-2xl p-6 mb-6 space-y-3" style={{ background: VC.surfaceLowest, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 className="font-black text-base mb-4" style={{ color: VC.brandDark }}>Follow Us</h2>
          {store.instagramHandle && (
            <a href={`https://instagram.com/${store.instagramHandle.replace("@", "")}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl hover:opacity-80 transition"
              style={{ background: "#f3f0ed" }}>
              <span className="material-symbols-outlined" style={{ color: "#E1306C" }}>photo_camera</span>
              <span className="font-semibold text-sm" style={{ color: VC.onBackground }}>@{store.instagramHandle.replace("@", "")}</span>
            </a>
          )}
          {store.facebookUrl && (
            <a href={store.facebookUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl hover:opacity-80 transition"
              style={{ background: "#f3f0ed" }}>
              <span className="material-symbols-outlined" style={{ color: "#1877F2" }}>public</span>
              <span className="font-semibold text-sm" style={{ color: VC.onBackground }}>Facebook Page</span>
            </a>
          )}
          {store.youtubeUrl && (
            <a href={store.youtubeUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl hover:opacity-80 transition"
              style={{ background: "#f3f0ed" }}>
              <span className="material-symbols-outlined" style={{ color: "#FF0000" }}>play_circle</span>
              <span className="font-semibold text-sm" style={{ color: VC.onBackground }}>YouTube Channel</span>
            </a>
          )}
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        <Link href={`/store/${slug}`}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-base hover:scale-[1.02] transition-transform"
          style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
          <span className="material-symbols-outlined">storefront</span>
          Shop Now
        </Link>
        {whatsappBase && (
          <a href={`https://wa.me/${whatsappBase}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-base hover:opacity-90 transition"
            style={{ background: "#25D366", color: "#fff" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        )}
        <Link href={`/store/${slug}/contact`}
          className="flex items-center justify-center w-full py-4 rounded-2xl font-bold text-base border-2 hover:bg-black/5 transition"
          style={{ borderColor: VC.brandDark, color: VC.brandDark }}>
          Contact Us →
        </Link>
      </div>
    </StoreShell>
  );
}
