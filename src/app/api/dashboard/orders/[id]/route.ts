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
  status: z.enum(["PENDING","CONFIRMED","PACKED","SHIPPED","DELIVERED","CANCELLED","REFUNDED"]).optional(),
  note: z.string().optional(),
  trackingId: z.string().optional(),
  courierName: z.string().optional(),
  notes: z.string().optional(),
  paymentStatus: z.enum(["PENDING","PAID","FAILED","REFUNDED"]).optional(),
});

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const storeId = await getStoreId(userId);
    if (!storeId) return NextResponse.json({ success: false, error: "Store not found" }, { status: 404 });

    const { id } = await params;
    const order = await db.order.findFirst({
      where: { id, storeId },
      include: {
        items: {
          include: {
            product: { include: { images: { take: 1 } } },
            variant: true,
          },
        },
        timeline: { orderBy: { createdAt: "asc" } },
        customer: true,
        coupon: { select: { code: true, discountType: true, discountValue: true } },
      },
    });

    if (!order) return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });

    return NextResponse.json({
      success: true,
      data: {
        ...order,
        subtotal: Number(order.subtotal),
        discountAmount: Number(order.discountAmount),
        shippingCharge: Number(order.shippingCharge),
        total: Number(order.total),
        createdAt: order.createdAt.toISOString(),
        updatedAt: order.updatedAt.toISOString(),
        items: order.items.map((i) => ({
          ...i,
          unitPrice: Number(i.unitPrice),
          totalPrice: Number(i.totalPrice),
        })),
        customer: order.customer ? {
          ...order.customer,
          totalSpent: Number(order.customer.totalSpent),
          createdAt: order.customer.createdAt.toISOString(),
          updatedAt: order.customer.updatedAt.toISOString(),
        } : null,
        timeline: order.timeline.map((t) => ({ ...t, createdAt: t.createdAt.toISOString() })),
      },
    });
  } catch (error) {
    console.error("[ORDER_GET]", error);
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
    if (!storeId) return NextResponse.json({ success: false, error: "Store not found" }, { status: 404 });

    const { id } = await params;
    const body = await req.json();
    const parsed = updateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    }

    const data = parsed.data;

    // Verify order belongs to store
    const existing = await db.order.findFirst({ where: { id, storeId } });
    if (!existing) return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });

    const updateData: Record<string, unknown> = {};
    if (data.notes !== undefined) updateData.notes = data.notes;
    if (data.trackingId !== undefined) updateData.trackingId = data.trackingId;
    if (data.courierName !== undefined) updateData.courierName = data.courierName;
    if (data.paymentStatus !== undefined) updateData.paymentStatus = data.paymentStatus;
    if (data.status !== undefined) updateData.status = data.status;

    const [order] = await db.$transaction([
      db.order.update({
        where: { id },
        data: updateData,
      }),
      ...(data.status && data.status !== existing.status
        ? [db.orderTimeline.create({
            data: { orderId: id, status: data.status, note: data.note },
          })]
        : []),
    ]);

    return NextResponse.json({ success: true, data: { id: order.id, status: order.status } });
  } catch (error) {
    console.error("[ORDER_PATCH]", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
