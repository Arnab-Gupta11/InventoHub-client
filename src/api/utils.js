import axios from "axios";
const imageUpload = async (image) => {
  const fromData = new FormData();
  fromData.append("image", image);
  console.log("🚀 ~ imageUpload ~ fromData:", fromData);
  const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_SECRET}`, fromData);
  return data;
};

export default imageUpload;
