/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Button2 from "../../../../components/shared/Button2/Button2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Button from "../../../../components/shared/Button/Button";

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
    <tr className="odd:bg-white odd:dark:bg-[#0d1127] even:bg-gray-50 even:dark:bg-dark-bg-300 text-sm text-light-text-200 dark:text-dark-text-200 whitespace-nowrap font-medium hover:bg-[#cbe1ff] dark:hover:bg-[#172c48]">
      <td className="p-2 text-center">{_id}</td>
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
      <td className="p-2 text-center">{product_quantity}</td>
      <td className="p-2 text-center">{discount}%</td>
      <td className="p-2 text-center">${sellingPrice}</td>
      <td className="p-2 text-center">
        <div className="inline-flex justify-center items-center">
          <Link to={`/dashboard/check-out`}>
            <div onClick={handleSold}>
              <Button variant={"default"} size={"md"}>
                Sold
              </Button>
            </div>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default SalesCollectionCart;
