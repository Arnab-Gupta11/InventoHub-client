import PropTypes from "prop-types";
// import { jsPDF } from "jspdf";
const CheckOutCard = ({ product }) => {
  //   const doc = new jsPDF({
  //     // orientation: "landscape",
  //     unit: "in",
  //     format: [14, 12],
  //   });
  const { product_name, product_image, discount, sellingPrice } = product;

  return (
    <tr>
      <td>
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
      <td className="text-[#637381] font-medium">{discount}%</td>
      <td className="text-[#637381] font-medium">${sellingPrice}</td>
    </tr>
  );
};

CheckOutCard.propTypes = {
  product: PropTypes.object,
};
export default CheckOutCard;
