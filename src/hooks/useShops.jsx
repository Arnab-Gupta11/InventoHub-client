import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useShops = () => {
  const axiosSecure = useAxiosSecure();

  const { data: result = {}, isLoading } = useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      const res = await axiosSecure.get("/shops");
      return res.data;
    },
  });

  return [result, isLoading];
};

export default useShops;
