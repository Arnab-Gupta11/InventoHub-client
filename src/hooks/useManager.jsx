import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
const useManager = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: isManager, isPending: isManagerLoading } = useQuery({
    queryKey: [user?.email, "isManager"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/manager/${user.email}`);
      return res.data?.manager;
    },
  });
  return [isManager, isManagerLoading];
};

export default useManager;
