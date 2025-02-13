import cloudinaryApiService from "../services/cloudinaryApiService";
export default async function handleFileInputChange(event) {
  const file = event.target.files[0];
  const fileType = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "image/webp",
    "image/svg+xml",
    "image/heif",
  ];
  if (!!file && fileType.includes(file.type)) {
    try {
      const imageLink = await cloudinaryApiService(file);
      return imageLink;
    } catch (error) {
      return !error;
    }
  } else {
    return false;
  }
}
