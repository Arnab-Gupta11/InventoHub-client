/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Button2 from "../../../../components/shared/Button2/Button2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SalesCollectionCart = ({ product }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { _id, product_name, product_quantity, product_image, discount, sellingPrice, production_cost, saleCount } = product;
  const handleSold = async () => {
    const soldProduct = {
      productId: _id,
      product_name,
      product_quantity,
      product_image,
      discount,
      sellingPrice,
      production_cost,
      saleCount,
      email: user?.email,
    };
    const result = axiosSecure.post("/carts", soldProduct); //here newbook is the data you want post

    //this is optional.Use for sweetalert
    if (result.data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Product added successfully to the cart",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };
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
        <Link to={`/dashboard/check-out`}>
          <div onClick={handleSold}>
            <Button2>Sold</Button2>
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default SalesCollectionCart;
