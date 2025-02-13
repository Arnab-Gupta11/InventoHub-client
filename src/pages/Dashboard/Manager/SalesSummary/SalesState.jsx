import { MdAttachMoney, MdOutlineShoppingCart } from "react-icons/md";
import useProducts from "../../../../hooks/useProducts";
import useSales from "../../../../hooks/useSales";
import { FaBox } from "react-icons/fa6";

const SalesState = () => {
  const [sales] = useSales();
  const [result] = useProducts();
  const totalInvest = result?.reduce((total, item) => total + item.product_quantity * item.production_cost, 0);
  const totalProfit = sales.reduce((total, item) => total + (item.sellingPrice - item.production_cost), 0);

  return (
    <div className="flex items-center justify-around gap-5 flex-col bs:flex-row text-white">
      <div className=" bg-[#FF9F43] py-6 px-5 rounded-md w-full sm:w-80  flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-semibold">${totalProfit}</h2>
          <h4 className="text-xl font-semibold">Total Profit</h4>
        </div>

        <div className="text-7xl">
          <MdAttachMoney />
        </div>
      </div>
      <div className=" bg-[#00CFE8] py-6 px-5  rounded-md w-full sm:w-80  flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-semibold">${totalInvest}</h2>
          <h4 className="text-xl font-semibold">Total Invest</h4>
        </div>

        <div className="text-7xl">
          <FaBox />
        </div>
      </div>
      <div className="bg-[#1B2850] py-6 px-5  rounded-md z-0 w-full sm:w-80  flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-semibold">{sales.length}</h2>
          <h4 className="text-xl font-semibold">Total Sales</h4>
        </div>

        <div className="text-7xl">
          <MdOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default SalesState;
