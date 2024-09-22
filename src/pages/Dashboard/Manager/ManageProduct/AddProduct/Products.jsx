/* eslint-disable react/prop-types */
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
const Products = ({ product, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { _id, product_name, product_quantity, saleCount, product_image } = product;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${user?.email}/${_id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.deletedCount > 0) {
            Swal.fire("Your Product has been Deleted!", "success");
            refetch();
          }
        });
      }
    });
  };
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
      <td className="p-2 text-center">{product_quantity}</td>
      <td className="p-2 text-center">{saleCount}</td>
      <td className="p-2">
        <div className="flex items-center justify-center gap-4 ">
          <Link to={`/dashboard/manage-product/${_id}`}>
            <span className="text-2xl text-[#637381] font-medium hover:text-black dark:hover:text-dark-text-100 cursor-pointer ">
              <BiEditAlt className="hover:scale-105 duration-500" />
            </span>
          </Link>
          <span className="text-2xl text-red-700 font-medium hover:text-red-600 cursor-pointer" onClick={handleDelete}>
            <RiDeleteBin6Line className="hover:scale-105 duration-500" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default Products;
