import Swal from "sweetalert2";
import Button2 from "../../../../components/shared/Button2/Button2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PropTypes from "prop-types";
// import { jsPDF } from "jspdf";
const CheckOutCard = ({ product }) => {
  //   const doc = new jsPDF({
  //     // orientation: "landscape",
  //     unit: "in",
  //     format: [14, 12],
  //   });
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { productId, product_name, product_image, discount, sellingPrice, production_cost } = product;

  const handlePaid = async () => {
    const paidProduct = {
      productId,
      email: user?.email,
      product_name,
      product_image,
      discount,
      sellingPrice,
      production_cost,
      currentDate: new Date().toLocaleDateString(),
      currentTime: new Date().toLocaleTimeString(),
    };
    // const val = "hello";
    // const val1 = "tello";
    // doc.text(product_name, 1, 1);
    // doc.text(discount, 1, 2);
    // doc.save("two-by-four.pdf");

    await axiosSecure.patch(`/products/${user.email}/${productId}`);
    const result = await axiosSecure.post("/sales", paidProduct);
    console.log("🚀 ~ file: CheckOutCard.jsx:42 ~ handlePaid ~ result:", result);
    if (result.data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Product paid",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
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
      <td className="text-[#637381] font-medium"></td>
      <td className="text-[#637381] font-medium">{discount}%</td>
      <td className="text-[#637381] font-medium">${sellingPrice}</td>
      <td className="flex items-center gap-4">
        <div onClick={handlePaid}>
          <Button2>Get Paid</Button2>
        </div>
      </td>
    </tr>
  );
};

CheckOutCard.propTypes = {
  product: PropTypes.object,
};
export default CheckOutCard;
