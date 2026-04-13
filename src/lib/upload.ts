export async function uploadToCloudinary(file: File, type: string): Promise<{ url: string; publicId: string } | null> {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      console.error("Cloudinary configuration missing (cloud name or preset).");
      return null;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", `instashop/store/${type}`);

    const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await uploadRes.json();
    if (!uploadRes.ok) {
      console.error("Cloudinary upload failed:", data);
      return null;
    }

    return { url: data.secure_url, publicId: data.public_id };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
}
