import { MdAttachMoney, MdOutlineShoppingCart } from "react-icons/md";
import useProducts from "../../../../hooks/useProducts";
import useSales from "../../../../hooks/useSales";
import { FaBox } from "react-icons/fa6";

const SalesState = () => {
  const [sales] = useSales();
  const [result] = useProducts();
  console.log("🚀 ~ file: SalesState.jsx:9 ~ SalesState ~ products:", result);
  const totalInvest = result?.reduce((total, item) => total + item.product_quantity * item.production_cost, 0);
  console.log("🚀 ~ file: SalesState.jsx:10 ~ SalesState ~ totalInvest:", totalInvest);
  const totalProfit = sales.reduce((total, item) => total + (item.sellingPrice - item.production_cost), 0);

  return (
    <div className="flex items-center justify-between gap-5 text-white">
      <div className=" bg-[#FF9F43] py-6 px-5 rounded-md ">
        <div className=" flex items-center justify-between gap-20">
          <div>
            <h2 className="text-5xl font-semibold">${totalProfit}</h2>
            <h4 className="text-xl font-semibold">Total Profit</h4>
          </div>

          <div className="text-7xl">
            <MdAttachMoney />
          </div>
        </div>
      </div>
      <div className=" bg-[#00CFE8] py-6 px-5  rounded-md">
        <div className=" flex items-center justify-between gap-20">
          <div>
            <h2 className="text-5xl font-semibold">${totalInvest}</h2>
            <h4 className="text-xl font-semibold">Total Invest</h4>
          </div>

          <div className="text-7xl">
            <FaBox />
          </div>
        </div>
      </div>
      <div className="card  bg-[#1B2850] py-6 px-5  rounded-md z-0">
        <div className=" flex items-center justify-between gap-20 ">
          <div>
            <h2 className="text-5xl font-semibold">{sales.length}</h2>
            <h4 className="text-xl font-semibold">Total Sales</h4>
          </div>

          <div className="text-7xl">
            <MdOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesState;
