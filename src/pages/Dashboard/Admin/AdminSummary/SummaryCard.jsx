import { MdAttachMoney, MdOutlineShoppingCart } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
const SummaryCard = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 text-white">
        <div className=" bg-[#FF9F43] py-6 px-5 rounded-md ">
          <div className=" flex items-center justify-between gap-20">
            <div>
              <h2 className="text-5xl font-semibold">$100</h2>
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
              <h2 className="text-5xl font-semibold">$100</h2>
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
              <h2 className="text-5xl font-semibold">$100</h2>
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
