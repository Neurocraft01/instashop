import { db } from "@/lib/db";
import { format } from "date-fns";
import Link from "next/link";

const VC = {
  surfaceLowest: "#ffffff", surfaceLow: "#f3f0ed",
  onBackground: "#2f2f2d", onSurfaceVariant: "#5c5b59",
  brandDark: "#2B1B3D", primary: "#745700",
};

export default async function AdminStoresPage() {
  const stores = await db.store.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true } },
      _count: { select: { orders: true, products: true } },
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black mb-1" style={{ color: VC.brandDark }}>Platform Stores</h1>
          <p style={{ color: VC.onSurfaceVariant }}>Monitor revenue, orders, and plans across all stores.</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: VC.surfaceLowest, boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: VC.surfaceLow, color: VC.onSurfaceVariant }}>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Store Name</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Owner</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Plan</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Metrics</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: VC.surfaceLow }}>
              {stores.map((store) => (
                <tr key={store.id} className="hover:bg-black/5 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold mb-0.5" style={{ color: VC.brandDark }}>{store.name}</p>
                    <Link href={`/store/${store.slug}`} target="_blank" className="text-xs hover:underline" style={{ color: VC.primary }}>/{store.slug}</Link>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold" style={{ color: VC.brandDark }}>{store.user.name}</p>
                    <p className="text-xs" style={{ color: VC.onSurfaceVariant }}>{store.user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#f9cc61] text-[#443100]">{store.plan}</span>
                    {store.planExpiresAt && (
                      <p className="text-[10px] mt-1" style={{ color: VC.onSurfaceVariant }}>Exp: {format(store.planExpiresAt, "MMM d, yy")}</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="font-bold mb-0.5" style={{ color: VC.brandDark }}>{store._count.orders} Orders</p>
                    <p className="text-xs" style={{ color: VC.onSurfaceVariant }}>{store._count.products} Products</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs font-bold hover:underline" style={{ color: VC.primary }}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
