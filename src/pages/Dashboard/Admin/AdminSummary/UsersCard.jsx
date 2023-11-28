/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button2 from "../../../../components/shared/Button2/Button2";
import { IoMailSharp } from "react-icons/io5";
const UsersCard = ({ user }) => {
  const { shop_name, shop_logo, name, email, role } = user;
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
            <div className="font-semibold">{name}</div>
          </div>
        </div>
      </td>
      <td className="text-[#637381] font-medium">{email}</td>
      <td className="text-[#637381] font-medium">{shop_name || "____________"}</td>
      <td className="text-[#637381] font-medium">{role}</td>
      <td className="flex items-center gap-4">
        <Link>
          <Button2>
            <IoMailSharp></IoMailSharp>
          </Button2>
        </Link>
      </td>
    </tr>
  );
};

export default UsersCard;
