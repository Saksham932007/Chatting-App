import { uploadFile } from "./cloudinary";

const upload = async (file) => {
  try {
    const url = await uploadFile(file);
    return url;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};

export default upload;
