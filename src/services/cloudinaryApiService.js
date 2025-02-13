import Axios from "axios";

export default async function cloudinaryApiService(file) {
  const url = `https://api.cloudinary.com/v1_1/ddep9f2pk/image/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "tommyHNotes");
  try {
    const response = await Axios.post(url, formData);
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
