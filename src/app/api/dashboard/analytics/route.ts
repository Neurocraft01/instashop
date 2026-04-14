import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await db.user.findUnique({
      where: { id: userId },
      include: { stores: { select: { id: true } } },
    });
    const store = user?.stores?.[0];
    if (!store) return NextResponse.json({ error: "Store not found" }, { status: 404 });

    // Last 30 days analytics
    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 29);

    const [analytics, topProducts, recentOrders, customerStats] = await Promise.all([
      db.storeAnalytics.findMany({
        where: {
          storeId: store.id,
          date: { gte: thirtyDaysAgo },
        },
        orderBy: { date: "asc" },
      }),
      db.orderItem.groupBy({
        by: ["productName"],
        where: {
          order: {
            storeId: store.id,
            createdAt: { gte: thirtyDaysAgo },
            status: { not: "CANCELLED" },
          },
        },
        _sum: { quantity: true, totalPrice: true },
        orderBy: { _sum: { totalPrice: "desc" } },
        take: 5,
      }),
      db.order.findMany({
        where: {
          storeId: store.id,
          createdAt: { gte: thirtyDaysAgo },
          status: { not: "CANCELLED" },
        },
        select: {
          paymentMethod: true,
          status: true,
          total: true,
          createdAt: true,
        },
      }),
      db.customer.aggregate({
        where: { storeId: store.id },
        _count: { id: true },
        _sum: { totalSpent: true },
      }),
    ]);

    // Aggregate totals
    const totalRevenue = recentOrders.reduce((s, o) => s + Number(o.total), 0);
    const totalOrders = recentOrders.length;
    const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // Payment method breakdown
    const paymentBreakdown = recentOrders.reduce((acc, o) => {
      acc[o.paymentMethod] = (acc[o.paymentMethod] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Status breakdown
    const statusBreakdown = recentOrders.reduce((acc, o) => {
      acc[o.status] = (acc[o.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Fill in missing days for chart
    const analyticsMap = new Map(analytics.map((a) => [a.date.toISOString().split("T")[0], a]));
    const dailyChart = Array.from({ length: 30 }, (_, i) => {
      const d = new Date(thirtyDaysAgo);
      d.setDate(d.getDate() + i);
      const key = d.toISOString().split("T")[0];
      const entry = analyticsMap.get(key);
      return {
        date: key,
        label: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
        revenue: entry ? Number(entry.revenue) : 0,
        orders: entry?.orderCount ?? 0,
        pageViews: entry?.pageViews ?? 0,
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        summary: {
          totalRevenue,
          totalOrders,
          avgOrderValue,
          totalCustomers: customerStats._count.id,
          totalCustomerSpend: Number(customerStats._sum.totalSpent ?? 0),
        },
        dailyChart,
        topProducts: topProducts.map((p) => ({
          name: p.productName,
          quantity: p._sum.quantity ?? 0,
          revenue: Number(p._sum.totalPrice ?? 0),
        })),
        paymentBreakdown,
        statusBreakdown,
      },
    });
  } catch (error) {
    console.error("[ANALYTICS_GET]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
