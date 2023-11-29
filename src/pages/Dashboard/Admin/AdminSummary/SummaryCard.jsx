import { MdAttachMoney, MdOutlineShoppingCart } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const SummaryCard = () => {
  const axiosSecure = useAxiosSecure();
  const [totalIncomes, setTotalIncomes] = useState({});
  console.log("🚀 ~ file: SummaryCard.jsx:8 ~ SummaryCard ~ totalIncomes:", totalIncomes);
  const [totalSales, setTotalSales] = useState([]);
  console.log("🚀 ~ file: SummaryCard.jsx:10 ~ SummaryCard ~ totalSales:", totalSales);
  const [totalProducts, setTotalProducts] = useState([]);
  console.log("🚀 ~ file: SummaryCard.jsx:12 ~ SummaryCard ~ totalProducts:", totalProducts);

  // using Promises
  useEffect(() => {
    axiosSecure.get("/users/admin").then((response) => setTotalIncomes(response.data));
  }, [axiosSecure]);

  // using Promises
  useEffect(() => {
    axiosSecure.get("/products").then((response) => setTotalProducts(response.data));
  }, [axiosSecure]);

  // using Promises
  useEffect(() => {
    axiosSecure.get("/sales").then((response) => setTotalSales(response.data));
  }, [axiosSecure]);
  return (
    <div>
      <div className="flex items-center justify-between gap-5 text-white">
        <div className=" bg-[#FF9F43] py-6 px-5 rounded-md ">
          <div className=" flex items-center justify-between gap-20">
            <div>
              <h2 className="text-5xl font-semibold">${totalIncomes.income}</h2>
              <h4 className="text-xl font-semibold">Total Income</h4>
            </div>

            <div className="text-7xl">
              <MdAttachMoney />
            </div>
          </div>
        </div>
        <div className=" bg-[#00CFE8] py-6 px-5  rounded-md">
          <div className=" flex items-center justify-between gap-20">
            <div>
              <h2 className="text-5xl font-semibold">{totalProducts.length}</h2>
              <h4 className="text-xl font-semibold">Total Product</h4>
            </div>

            <div className="text-7xl">
              <FaBox />
            </div>
          </div>
        </div>
        <div className="card  bg-[#1B2850] py-6 px-5  rounded-md">
          <div className=" flex items-center justify-between gap-20 ">
            <div>
              <h2 className="text-5xl font-semibold">{totalSales.length}</h2>
              <h4 className="text-xl font-semibold">Total Sales</h4>
            </div>

            <div className="text-7xl">
              <MdOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
