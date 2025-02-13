/* eslint-disable react/prop-types */
const SalesCard = ({ saleProduct }) => {
  const { product_image, product_name, production_cost, sellingPrice, currentDate } = saleProduct;
  return (
    <tr className="odd:bg-white odd:dark:bg-[#0d1127] even:bg-gray-50 even:dark:bg-dark-bg-300 text-sm text-light-text-200 dark:text-dark-text-200 whitespace-nowrap font-medium hover:bg-[#cbe1ff] dark:hover:bg-[#172c48]">
      <td className="p-2">
        <div className="flex items-center gap-2">
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
      <td className="p-2 text-center">{currentDate}</td>
      <td className="p-2 text-center">{sellingPrice - production_cost}$</td>
    </tr>
  );
};

export default SalesCard;
