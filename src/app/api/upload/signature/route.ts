import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { cloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { folder, publicId, resourceType = "image" } = await req.json();

    if (!folder) {
      return NextResponse.json({ success: false, error: "folder is required" }, { status: 400 });
    }

    const timestamp = Math.round(new Date().getTime() / 1000);

    const paramsToSign: Record<string, string | number> = {
      folder,
      timestamp,
    };

    if (publicId) {
      paramsToSign.public_id = publicId;
    }

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET!
    );

    return NextResponse.json({
      success: true,
      data: {
        signature,
        timestamp,
        apiKey: process.env.CLOUDINARY_API_KEY,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        folder,
        publicId: publicId || undefined,
        resourceType,
      },
    });
  } catch (error) {
    console.error("[UPLOAD_SIGNATURE]", error);
    return NextResponse.json({ success: false, error: "Failed to generate signature" }, { status: 500 });
  }
}
