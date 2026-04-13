import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

export function getTransformedUrl(
  url: string,
  type: "product" | "thumbnail" | "logo" | "banner"
): string {
  if (!url || !url.includes("cloudinary.com")) return url;

  const transformations: Record<string, string> = {
    product: "w_800,h_800,c_fill,f_auto,q_auto:good",
    thumbnail: "w_400,h_400,c_fill,f_auto,q_auto",
    logo: "w_200,h_200,c_thumb,g_face,f_auto",
    banner: "w_1200,h_400,c_fill,f_auto,q_auto:good",
  };

  const t = transformations[type];
  return url.replace("/upload/", `/upload/${t}/`);
}

export function getCloudinaryFolder(
  storeSlug: string,
  type: "logo" | "banner" | "products" | "upi-qr",
  productId?: string
): string {
  const base = `instashop/stores/${storeSlug}`;
  if (type === "products" && productId) {
    return `${base}/products/${productId}`;
  }
  return `${base}/${type}`;
}

