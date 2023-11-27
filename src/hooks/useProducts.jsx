import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    refetch,
    data: result = {},
    isLoading,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${user.email}`);
      return res.data;
    },
  });

  return [result, refetch, isLoading];
};

export default useProducts;
