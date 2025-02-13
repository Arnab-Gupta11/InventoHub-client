import PropTypes from "prop-types";
import { CiSquareRemove } from "react-icons/ci";
// import { jsPDF } from "jspdf";
const CheckOutCard = ({ product }) => {
  //   const doc = new jsPDF({
  //     // orientation: "landscape",
  //     unit: "in",
  //     format: [14, 12],
  //   });
  const { product_name, product_image, discount, sellingPrice } = product;

  return (
    <tr className="odd:bg-white odd:dark:bg-[#0d1127] even:bg-gray-50 even:dark:bg-dark-bg-300 text-sm text-light-text-200 dark:text-dark-text-200 whitespace-nowrap font-medium hover:bg-[#cbe1ff] dark:hover:bg-[#172c48]">
      <td className="p-2">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded-sm w-12 h-12">
              <img src={product_image} />
            </div>
          </div>
          <div>
            <div className="font-semibold">{product_name}</div>
          </div>
        </div>
      </td>
      <td className="p-2 text-center">{discount}%</td>
      <td className="p-2 text-center">${sellingPrice}</td>
      <td className="text-center">
        <span className="inline-flex items-center justify-center cursor-pointer">
          <CiSquareRemove size={30} className="hover:scale-110 duration-500 text-red-500" />
        </span>
      </td>
    </tr>
  );
};

CheckOutCard.propTypes = {
  product: PropTypes.object,
};
export default CheckOutCard;
