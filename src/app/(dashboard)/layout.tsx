import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar";

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

  // If no user in DB yet (webhook delay), let them through
  if (store && !store.onboardingDone) {
    redirect("/onboarding");
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
