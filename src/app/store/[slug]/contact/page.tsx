import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import StoreContactClient from "@/components/store/StoreContactClient";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const store = await db.store.findUnique({ where: { slug }, select: { name: true } });
  return { title: `Contact ${store?.name ?? slug} — InstaShop` };
}

export default async function StoreContactPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const store = await db.store.findUnique({
    where: { slug },
    select: { name: true, whatsappNumber: true },
  });
  if (!store) notFound();

  return (
    <StoreContactClient
      slug={slug}
      storeName={store.name}
      whatsappNumber={store.whatsappNumber}
    />
  );
}
