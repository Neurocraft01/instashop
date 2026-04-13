export async function uploadToCloudinary(file: File, type: string): Promise<{ url: string; publicId: string } | null> {
  try {
    const sigRes = await fetch(`/api/upload/signature?folder=instashop/store/${type}`);
    const { signature, timestamp, apiKey, cloudName } = await sigRes.json();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("signature", signature);
    formData.append("timestamp", timestamp);
    formData.append("api_key", apiKey);
    formData.append("folder", `instashop/store/${type}`);

    const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await uploadRes.json();
    return { url: data.secure_url, publicId: data.public_id };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
}
