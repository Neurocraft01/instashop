import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  slug: z.string().min(3),
  tagline: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  whatsappNumber: z.string().optional().nullable(),
  instagramHandle: z.string().optional().nullable(),
  facebookUrl: z.string().optional().nullable(),
  youtubeUrl: z.string().optional().nullable(),
  upiId: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  upiQrUrl: z.string().optional().nullable(),
  isOpen: z.boolean().optional(),
  closedMessage: z.string().optional().nullable(),
});

export async function PATCH(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const user = await db.user.findUnique({
      where: { id: userId },
      include: { stores: true },
    });
    const store = user?.stores?.[0];
    if (!store) return NextResponse.json({ success: false, error: "Store not found" }, { status: 404 });

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    }

    // Checking slug uniqueness if changed
    if (parsed.data.slug !== store.slug) {
      const existing = await db.store.findUnique({ where: { slug: parsed.data.slug } });
      if (existing) return NextResponse.json({ success: false, error: "Slug already taken" }, { status: 400 });
    }

    const updated = await db.store.update({
      where: { id: store.id },
      data: parsed.data,
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
