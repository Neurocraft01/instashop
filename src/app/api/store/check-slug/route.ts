import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ success: false, error: "slug required" }, { status: 400 });
    }

    // Validate slug format
    const slugRegex = /^[a-zA-Z0-9-]+$/;
    if (!slugRegex.test(slug) || slug.length < 3 || slug.length > 50) {
      return NextResponse.json({
        success: true,
        data: { available: false, reason: "Invalid slug format" },
      });
    }

    const existing = await db.store.findUnique({ where: { slug: slug.toLowerCase() } });

    return NextResponse.json({
      success: true,
      data: { available: !existing },
    });
  } catch (error) {
    console.error("[SLUG_CHECK]", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
