import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar";
import { headers } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) redirect("/sign-in");

  // Get user + store
  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      stores: {
        select: {
          id: true,
          name: true,
          slug: true,
          plan: true,
          planExpiresAt: true,
          onboardingDone: true,
          logoUrl: true,
          _count: {
            select: {
              orders: { where: { status: "PENDING" } },
            },
          },
        },
      },
    },
  });

  const store = user?.stores && user.stores.length > 0 ? user.stores[0] : null;

  // Redirect to onboarding if not done
  if (store && !store.onboardingDone) {
    redirect("/onboarding");
  }

  // Plan expiry enforcement (skip for admin, billing page, and settings/billing)
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const isBillingPage = pathname.includes("/billing");
  const isAdmin = user?.role === "SUPER_ADMIN";

  if (store && !isAdmin && !isBillingPage) {
    const now = new Date();
    const isExpired = store.planExpiresAt && store.planExpiresAt < now;
    if (isExpired) {
      redirect("/plan-expired");
    }
  }

  const pendingOrders = store?._count?.orders ?? 0;

  return (
    <div className="bg-[#f9f6f3] text-[#2f2f2d] font-body selection:bg-[#f9cc61] selection:text-[#5b4400] min-h-screen">
      <DashboardSidebar
        storeName={store?.name || "My Store"}
        storeSlug={store?.slug}
        pendingOrders={pendingOrders}
        plan={store?.plan || "FREE"}
      />
      <div className="lg:ml-72 min-h-screen flex flex-col">
        <DashboardTopbar
          storeName={store?.name || "My Store"}
          storeSlug={store?.slug}
          logoUrl={store?.logoUrl}
        />
        <main className="flex-1 p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
