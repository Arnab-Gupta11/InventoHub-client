import axios from "axios";
//https://inventohub.vercel.app
//https://inventohub.vercel.app
const axiosPublic = axios.create({
  baseURL: "https://inventohub.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
