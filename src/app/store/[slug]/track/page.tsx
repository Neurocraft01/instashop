import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { TrackOrderClient } from "@/components/store/TrackOrderClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Track Order" };

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ order?: string }> };

export default async function TrackOrderPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { order: orderParam } = await searchParams;

  const store = await db.store.findUnique({
    where: { slug, isActive: true },
    select: { id: true, name: true, slug: true, whatsappNumber: true, logoUrl: true, accentColor: true },
  });

  if (!store) notFound();

  // Pre-load order if order number provided
  let preloadedOrder = null;
  if (orderParam) {
    const order = await db.order.findFirst({
      where: { orderNumber: orderParam, storeId: store.id },
      include: {
        items: true,
        timeline: { orderBy: { createdAt: "asc" } },
      },
    });
    if (order) {
      preloadedOrder = {
        ...order,
        total: Number(order.total),
        subtotal: Number(order.subtotal),
        discountAmount: Number(order.discountAmount),
        createdAt: order.createdAt.toISOString(),

        items: order.items.map((i) => ({
          ...i,
          unitPrice: Number(i.unitPrice),
          totalPrice: Number(i.totalPrice),
        })),
        timeline: order.timeline.map((t) => ({ ...t, createdAt: t.createdAt.toISOString() })),
      };
    }
  }

  return (
    <TrackOrderClient
      store={{ ...store, whatsappNumber: store.whatsappNumber ?? null, logoUrl: store.logoUrl ?? null }}
      preloadedOrder={preloadedOrder}
      preloadedOrderNumber={orderParam}
    />
  );
}
