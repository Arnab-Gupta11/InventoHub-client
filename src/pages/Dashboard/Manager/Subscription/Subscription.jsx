import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SubscriptionCard from "./SubscriptionCard";
import { Helmet } from "react-helmet-async";

const Subscription = () => {
  const [myData, setMyData] = useState([]);
  const axiosSecure = useAxiosSecure();

  // using Promises
  useEffect(() => {
    axiosSecure.get("/subscription").then((response) => setMyData(response.data));
  }, [axiosSecure]);
  return (
    <div className=" max-w-screen-lg mx-auto min-h-screen flex justify-center">
      <Helmet>
        <title> Inventohub | Subscription </title>
      </Helmet>
      <div className="flex items-center justify-between flex-col lg:flex-row gap-5 text-white">
        {myData?.map((data) => (
          <SubscriptionCard key={data._id} data={data}></SubscriptionCard>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
