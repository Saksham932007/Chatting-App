import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
  secure: true,
});

export const uploadFile = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: "chat-app",
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};
