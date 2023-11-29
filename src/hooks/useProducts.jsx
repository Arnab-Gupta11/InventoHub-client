import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    refetch,
    data: result = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["products", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${user.email}`);
      return res.data;
    },
  });

  return [result, refetch, isLoading, isPending];
};

export default useProducts;
