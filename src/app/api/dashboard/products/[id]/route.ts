import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/lib/db";

async function getStoreId(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { stores: { select: { id: true } } },
  });
  return user?.stores?.[0]?.id ?? null;
}

const updateSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().optional().nullable(),
  price: z.number().positive().optional(),
  discountPrice: z.number().positive().optional().nullable(),
  categoryId: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  status: z.enum(["ACTIVE", "DRAFT", "OUT_OF_STOCK"]).optional(),
  isFeatured: z.boolean().optional(),
  trackStock: z.boolean().optional(),
  stock: z.number().int().min(0).optional().nullable(),
  lowStockAlert: z.number().int().min(0).optional().nullable(),
  videoUrl: z.string().optional().nullable(),
  images: z.array(z.object({ url: z.string(), publicId: z.string(), order: z.number() })).optional(),
  variants: z.array(z.object({
    id: z.string().optional(),
    name: z.string(), value: z.string(),
    price: z.number().optional().nullable(),
    stock: z.number().int().optional().nullable(),
    sku: z.string().optional(),
  })).optional(),
}).partial();

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    const storeId = await getStoreId(userId);
    if (!storeId) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

    const { id } = await params;
    const product = await db.product.findFirst({
      where: { id, storeId },
      include: { images: { orderBy: { order: "asc" } }, variants: true, category: true },
    });
    if (!product) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

    return NextResponse.json({
      success: true,
      data: {
        ...product,
        price: Number(product.price),
        discountPrice: product.discountPrice ? Number(product.discountPrice) : null,
        variants: product.variants.map((v) => ({ ...v, price: v.price ? Number(v.price) : null })),
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    const storeId = await getStoreId(userId);
    if (!storeId) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

    const { id } = await params;
    const existing = await db.product.findFirst({ where: { id, storeId } });
    if (!existing) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

    const body = await req.json();
    const parsed = updateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    }

    const { images, variants, ...updateData } = parsed.data;

    const product = await db.$transaction(async (tx) => {
      if (images !== undefined) {
        await tx.productImage.deleteMany({ where: { productId: id } });
        if (images.length > 0) {
          await tx.productImage.createMany({ data: images.map((img) => ({ ...img, productId: id })) });
        }
      }
      if (variants !== undefined) {
        // Delete variants not in new list
        const keepIds = variants.filter((v) => v.id).map((v) => v.id as string);
        await tx.productVariant.deleteMany({ where: { productId: id, id: { notIn: keepIds } } });
        // Upsert variants
        for (const v of variants) {
          if (v.id) {
            await tx.productVariant.update({
              where: { id: v.id },
              data: { name: v.name, value: v.value, price: v.price, stock: v.stock, sku: v.sku },
            });
          } else {
            await tx.productVariant.create({
              data: { productId: id, name: v.name, value: v.value, price: v.price, stock: v.stock, sku: v.sku },
            });
          }
        }
      }
      return tx.product.update({
        where: { id },
        data: updateData,
        include: { images: { orderBy: { order: "asc" } }, variants: true },
      });
    });

    return NextResponse.json({
      success: true,
      data: { ...product, price: Number(product.price), discountPrice: product.discountPrice ? Number(product.discountPrice) : null },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    const storeId = await getStoreId(userId);
    if (!storeId) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

    const { id } = await params;
    const product = await db.product.findFirst({ where: { id, storeId } });
    if (!product) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

    await db.product.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
