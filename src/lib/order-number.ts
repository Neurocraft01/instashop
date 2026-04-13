import { db } from "@/lib/db";

export async function generateOrderNumber(storeId: string): Promise<string> {
  const year = new Date().getFullYear();
  const count = await db.order.count({
    where: {
      storeId,
      createdAt: { gte: new Date(`${year}-01-01`) },
    },
  });
  const seq = String(count + 1).padStart(5, "0");
  return `IS-${year}-${seq}`;
}
