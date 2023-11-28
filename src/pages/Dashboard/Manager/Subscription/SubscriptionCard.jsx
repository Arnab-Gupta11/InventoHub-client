/* eslint-disable react/prop-types */
import { FaBox } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SubscriptionCard = ({ data }) => {
  const { _id, price, limit, tag, color } = data;
  return (
    <div className={`card  bg-[${color}] py-6 px-5  rounded-md`}>
      <div className=" flex items-center justify-between gap-20">
        <div>
          <h4 className="text-xl font-semibold">{tag}</h4>
          <h2 className="text-5xl font-semibold">${price}</h2>
        </div>

        <div className="text-7xl">
          <FaBox />
        </div>
      </div>
      <div className="flex gap-3 items-center mt-5">
        <FaCircleCheck></FaCircleCheck>
        <h2>Increase product limit to {limit}</h2>
      </div>
      <div className="flex justify-center">
        <Link to={`/dashboard/subscription/${_id}`}>
          <button className="px-8 py-3 border rounded-md mt-8  hover:border-2">Get</button>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
