/**
 * Shared auth utility for API routes.
 * Replaces the old Clerk-based auth pattern.
 */
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

/** Gets the current session userId from NextAuth */
export async function getAuthUserId(): Promise<{ userId: string } | NextResponse> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }
  return { userId };
}

/** Gets the first store owned by the authenticated user */
export async function getAuthStore(): Promise<
  { store: { id: string; plan: string } } | NextResponse
> {
  const result = await getAuthUserId();
  if (result instanceof NextResponse) return result;

  const { userId } = result;
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { stores: { select: { id: true, plan: true } } },
  });

  const store = user?.stores?.[0] ?? null;
  if (!store) {
    return NextResponse.json(
      { success: false, error: "Store not found" },
      { status: 404 }
    );
  }
  return { store };
}
