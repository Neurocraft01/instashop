import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/lib/db";

const onboardingSchema = z.object({
  storeName: z.string().min(2).max(60),
  slug: z.string().min(3).max(50).regex(/^[a-zA-Z0-9-]+$/),
  tagline: z.string().max(80).optional(),
  logoUrl: z.string().optional(),
  logoPublicId: z.string().optional(),
  bannerUrl: z.string().optional(),
  bannerPublicId: z.string().optional(),
  whatsappNumber: z.string().min(8).max(15),
  upiId: z.string().optional(),
  firstProduct: z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    description: z.string().optional(),
  }).optional(),
});

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = onboardingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Get user from DB
    const user = await db.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found. Please wait and retry." }, { status: 404 });
    }

    // Check slug unique
    const existing = await db.store.findUnique({ where: { slug: data.slug.toLowerCase() } });
    if (existing) {
      return NextResponse.json({ success: false, error: "This store handle is already taken." }, { status: 409 });
    }

    // Create store (transaction)
    const store = await db.$transaction(async (tx) => {
      const newStore = await tx.store.create({
        data: {
          userId: user!.id,
          name: data.storeName,
          slug: data.slug.toLowerCase(),
          tagline: data.tagline,
          logoUrl: data.logoUrl,
          bannerUrl: data.bannerUrl,
          whatsappNumber: data.whatsappNumber
            ? `91${data.whatsappNumber.replace(/^(\+91|91|0)/, "")}`
            : undefined,
          upiId: data.upiId,
          onboardingDone: true,
          onboardingStep: 5,
        },
      });

      // Add first product if provided
      if (data.firstProduct && data.firstProduct.name && data.firstProduct.price > 0) {
        await tx.product.create({
          data: {
            storeId: newStore.id,
            name: data.firstProduct.name,
            price: data.firstProduct.price,
            description: data.firstProduct.description,
            status: "ACTIVE",
          },
        });
      }

      return newStore;
    });

    return NextResponse.json({ success: true, data: { storeId: store.id, slug: store.slug } });
  } catch (error) {
    console.error("[ONBOARDING]", error);
    return NextResponse.json({ success: false, error: "Failed to create store" }, { status: 500 });
  }
}
