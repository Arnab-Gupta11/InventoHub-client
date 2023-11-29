import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSales = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: result = [], isLoading } = useQuery({
    queryKey: ["sales", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sales/${user?.email}`);
      return res.data;
    },
  });

  return [result, isLoading];
};

export default useSales;
