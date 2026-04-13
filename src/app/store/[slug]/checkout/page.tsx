import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { CheckoutPageClient } from "@/components/store/CheckoutPageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export const metadata: Metadata = { title: "Checkout" };

export default async function CheckoutPage({ params }: Props) {
  const { slug } = await params;

  const store = await db.store.findUnique({
    where: { slug, isActive: true },
    select: {
      id: true, name: true, slug: true,
      whatsappNumber: true, logoUrl: true,
      upiId: true, upiQrUrl: true, accentColor: true,
      isOpen: true, closedMessage: true,
    },
  });

  if (!store) notFound();

  return (
    <CheckoutPageClient
      store={{
        ...store,
        whatsappNumber: store.whatsappNumber ?? null,
        logoUrl: store.logoUrl ?? null,
        upiId: store.upiId ?? null,
        upiQrUrl: store.upiQrUrl ?? null,
      }}
    />
  );
}
