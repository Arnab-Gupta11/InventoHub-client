/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button2 from "../../../../components/shared/Button2/Button2";

const ManageShopCard = ({ shop }) => {
  const { shop_name, shop_logo, shop_info, productLimit } = shop;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded-sm w-12 h-12">
              <img src={shop_logo} />
            </div>
          </div>
          <div>
            <div className="font-semibold">{shop_name}</div>
          </div>
        </div>
      </td>
      <td className="text-[#637381] font-medium">{productLimit}</td>
      <td className="text-[#637381] font-medium">{shop_info}%</td>
      <td className="flex items-center gap-4">
        <Link>
          <Button2>Send Notice</Button2>
        </Link>
      </td>
    </tr>
  );
};

export default ManageShopCard;
