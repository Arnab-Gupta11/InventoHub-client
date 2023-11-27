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
      <td className="text-[#637381] font-medium">{product_quantity}</td>
      <td className="text-[#637381] font-medium">{saleCount}</td>
      <td className="flex items-center gap-4">
        <Link to={`/dashboard/manage-product/${_id}`}>
          <span className="text-2xl text-[#637381] font-medium hover:text-black cursor-pointer">
            <BiEditAlt />
          </span>
        </Link>
        <span className="text-2xl text-red-600 font-medium hover:text-red-700 cursor-pointer" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </span>
      </td>
    </tr>
  );
};

export default Products;
