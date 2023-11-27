import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSingleShop = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [shop, setShop] = useState([]);
  // using Promises
  useEffect(() => {
    axiosSecure.get(`/shops/${user?.email}`).then((response) => setShop(response.data));
  }, [axiosSecure, user?.email]);
  return { shop };
};

export default useSingleShop;
