import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import AdminSidebar from "@/components/admin/AdminSidebar";

const VC = {
  surfaceLow: "#f3f0ed", surfaceLowest: "#ffffff",
  onBackground: "#2f2f2d", onSurfaceVariant: "#5c5b59",
  brandDark: "#2B1B3D",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) redirect("/sign-in");

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { role: true, name: true, email: true }
  });

  if (user?.role !== "SUPER_ADMIN") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex" style={{ background: VC.surfaceLow, color: VC.onBackground }}>
      <AdminSidebar />
      <div className="flex-1 ml-64 transition-all duration-300">
        <header className="h-16 flex items-center justify-between px-8 border-b sticky top-0 z-30"
          style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(20px)", borderColor: VC.surfaceLow }}>
          <h2 className="font-bold tracking-tight" style={{ color: VC.brandDark }}>Super Admin Control</h2>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <span style={{ color: VC.onSurfaceVariant }}>{user.email}</span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: VC.brandDark }}>
              {user.name?.[0]?.toUpperCase() || "A"}
            </div>
          </div>
        </header>
        <main className="p-8 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
