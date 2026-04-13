import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

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
    select: { role: true }
  });

  if (user?.role !== "SUPER_ADMIN") {
    redirect("/dashboard");
  }

  return (
    <div className="bg-[#f9f6f3] min-h-screen">
      {/* Optional Topbar or Sidebar could be added here in the future */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
