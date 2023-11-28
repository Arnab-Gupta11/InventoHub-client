import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSubscription = (id) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: result = {},
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["subscription", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/subscription/${id}`);
      //   console.log("🚀 ~ file: useSubscription.jsx:12 ~ queryFn: ~ res.data:", res.data);
      return res.data;
    },
  });

  return [result, isLoading, isPending];
};

export default useSubscription;
