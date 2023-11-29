import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    refetch,
    data: result = [],
    isLoading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [result, refetch, isLoading];
};

export default useCarts;
