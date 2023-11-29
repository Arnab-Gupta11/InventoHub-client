/* eslint-disable react/prop-types */
const SalesCard = ({ saleProduct }) => {
  const { product_name, production_cost, sellingPrice, currentDate } = saleProduct;
  return (
    <tr>
      <td>
        <div className="font-semibold">{product_name}</div>
      </td>
      <td className="text-[#637381] font-medium">{currentDate}</td>
      <td className="text-[#637381] font-medium">{sellingPrice - production_cost}$</td>
    </tr>
  );
};

export default SalesCard;
