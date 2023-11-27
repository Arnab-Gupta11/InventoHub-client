/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import Button2 from "../../../../components/shared/Button2/Button2";

const SalesCollectionCart = ({ product }) => {
  const { _id, product_name, product_quantity, product_image, discount, sellingPrice } = product;
  return (
    <tr>
      <td className="text-[#637381] font-medium">{_id}</td>
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
      <td className="text-[#637381] font-medium">{product_quantity}</td>
      <td className="text-[#637381] font-medium">{discount}%</td>
      <td className="text-[#637381] font-medium">${sellingPrice}</td>
      <td className="flex items-center gap-4">
        <Link to={`/dashboard/manage-product/${_id}`}>
          <Button2>Sold</Button2>
        </Link>
      </td>
    </tr>
  );
};

export default SalesCollectionCart;
