import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/lib/db";

async function getStoreFromAuth(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { stores: { select: { id: true, plan: true } } },
  });
  return user?.stores?.[0] ?? null;
}

const productSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().optional(),
  price: z.number().positive(),
  discountPrice: z.number().positive().optional().nullable(),
  categoryId: z.string().optional().nullable(),
  tags: z.string().optional(),
  status: z.enum(["ACTIVE", "DRAFT", "OUT_OF_STOCK"]).default("ACTIVE"),
  isFeatured: z.boolean().default(false),
  trackStock: z.boolean().default(false),
  stock: z.number().int().min(0).optional().nullable(),
  lowStockAlert: z.number().int().min(0).optional().nullable(),
  videoUrl: z.string().optional().nullable(),
  images: z.array(z.object({ url: z.string(), publicId: z.string(), order: z.number() })).optional(),
  variants: z.array(z.object({
    name: z.string(), value: z.string(),
    price: z.number().optional().nullable(),
    stock: z.number().int().optional().nullable(),
    sku: z.string().optional(),
  })).optional(),
});

export async function GET(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const store = await getStoreFromAuth(userId);
    if (!store) return NextResponse.json({ success: false, error: "Store not found" }, { status: 404 });

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const categoryId = searchParams.get("categoryId");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;

    const where = {
      storeId: store.id,
      ...(status && { status: status as "ACTIVE" | "DRAFT" | "OUT_OF_STOCK" }),
      ...(categoryId && { categoryId }),
      ...(search && { name: { contains: search } }),
    };

    const [products, total] = await Promise.all([
      db.product.findMany({
        where,
        include: {
          images: { orderBy: { order: "asc" }, take: 1 },
          category: { select: { id: true, name: true } },
          _count: { select: { orderItems: true } },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        products: products.map((p) => ({
          ...p,
          price: Number(p.price),
          discountPrice: p.discountPrice ? Number(p.discountPrice) : null,
          createdAt: p.createdAt.toISOString(),
          updatedAt: p.updatedAt.toISOString(),
        })),
        total,
        pages: Math.ceil(total / limit),
        page,
      },
    });
  } catch (error) {
    console.error("[PRODUCTS_GET]", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const store = await getStoreFromAuth(userId);
    if (!store) return NextResponse.json({ success: false, error: "Store not found" }, { status: 404 });

    // Check product limits by plan
    const productCount = await db.product.count({ where: { storeId: store.id } });
    const limits: Record<string, number> = { FREE: 10, STARTER: 100, GROWTH: 500, PRO: Infinity };
    if (productCount >= (limits[store.plan] ?? Infinity)) {
      return NextResponse.json(
        { success: false, error: `You've reached the product limit for your ${store.plan} plan. Please upgrade.` },
        { status: 403 }
      );
    }

    const body = await req.json();
    const parsed = productSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    }

    const { images, variants, ...data } = parsed.data;

    const product = await db.product.create({
      data: {
        storeId: store.id,
        ...data,
        images: images ? { create: images } : undefined,
        variants: variants ? { create: variants } : undefined,
      },
      include: { images: true, variants: true },
    });

    return NextResponse.json({
      success: true,
      data: { ...product, price: Number(product.price), discountPrice: product.discountPrice ? Number(product.discountPrice) : null },
    }, { status: 201 });
  } catch (error) {
    console.error("[PRODUCTS_POST]", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
