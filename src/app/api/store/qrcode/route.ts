import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

    const store = await db.store.findUnique({
      where: { slug },
      select: { id: true, name: true, slug: true },
    });
    if (!store) return NextResponse.json({ error: "Store not found" }, { status: 404 });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://instashop.in";
    const storeUrl = `${appUrl}/store/${slug}`;

    const qrDataUrl = await QRCode.toDataURL(storeUrl, {
      width: 400,
      margin: 2,
      color: {
        dark: "#2B1B3D",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "H",
    });

    // Return as PNG buffer
    const base64 = qrDataUrl.replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64, "base64");

    return new Response(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `attachment; filename="${slug}_qrcode.png"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("[QR_CODE]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
