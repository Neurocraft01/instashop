import { db } from "@/lib/db";
import { format } from "date-fns";

const VC = {
  surfaceLowest: "#ffffff", surfaceLow: "#f3f0ed",
  onBackground: "#2f2f2d", onSurfaceVariant: "#5c5b59",
  brandDark: "#2B1B3D", primary: "#745700",
};

export default async function AdminUsersPage() {
  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { stores: true } },
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black mb-1" style={{ color: VC.brandDark }}>Users & Sellers</h1>
          <p style={{ color: VC.onSurfaceVariant }}>Manage all registered users on the platform.</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: VC.surfaceLowest, boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: VC.surfaceLow, color: VC.onSurfaceVariant }}>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">User</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Role</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Joined Date</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Stores</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: VC.surfaceLow }}>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-black/5 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold mb-0.5" style={{ color: VC.brandDark }}>{user.name}</p>
                    <p className="text-xs" style={{ color: VC.onSurfaceVariant }}>{user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: user.role === "SUPER_ADMIN" ? "#f9cc61" : VC.surfaceLow,
                        color: user.role === "SUPER_ADMIN" ? "#443100" : VC.onBackground
                      }}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4" style={{ color: VC.onSurfaceVariant }}>
                    {format(user.createdAt, "MMM d, yyyy")}
                  </td>
                  <td className="px-6 py-4 font-bold" style={{ color: VC.brandDark }}>
                    {user._count.stores}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs font-bold hover:underline" style={{ color: VC.primary }}>
                      Edit User
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
