import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useAuth from "../../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../../hooks/useAxiosSecure";
import imageUpload from "../../../../../../api/utils";
import Button2 from "../../../../../../components/shared/Button2/Button2";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const [myData, setMyData] = useState({});

  // using Promises
  useEffect(() => {
    axiosSecure.get(`/products/${user?.email}/${id}`).then((response) => setMyData(response.data));
  }, [axiosSecure, id, user.email]);

  const {
    product_name,
    product_location,
    product_quantity,
    production_cost,
    profit_margin,
    discount,
    product_description,
    product_image: img,
  } = myData;
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const product_name = form.name.value;
    const product_location = form.location.value;
    const product_quantity = parseInt(form.quantity.value);
    const production_cost = parseInt(form.cost.value);
    const profit_margin = parseInt(form.profit.value);
    const discount = parseInt(form.discount.value);
    const product_description = form.desc.value;

    //save image
    const image = form.image.files[0];
    if (form.image.files[0]) {
      let imageData = await imageUpload(image);
      var product_image = imageData?.data?.display_url;
    } else {
      product_image = img;
    }

    // // Send data to the server
    try {
      const updatedProduct = {
        product_name,
        product_location,
        product_quantity,
        production_cost,
        profit_margin,
        discount,
        product_image,
        product_description,
        sellingPrice: parseInt(production_cost * ((100 + 7.5 + profit_margin) / 100)),
      };

      const res = await axiosSecure.put(`/products/${user?.email}/${id}`, updatedProduct);
      setLoading(false);
      console.log("🚀 ~ file: UpdateProduct.jsx:59 ~ handleUpdateProduct ~ res:", res);

      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "Product updated successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
      navigate("/dashboard/manage-product");
    } catch (err) {
      console.log("🚀 ~ file: CreateStore.jsx:27 ~ handleUpdateProduct ~ err:", err);
    }
  };
  return (
    <div className="min-h-screen bg-[#FAFBFE] z-0">
      <div className="px-2 md:px-8 mx-auto py-5 ">
        <h2 className="text-3xl font-bold border-l-8 border-[#FF792E] text-[#1B2850] pl-4 mb-6 ml-5 ">Update Product</h2>
        <form className="px-5 border bg-white p-7 mb-10 rounded-md mx-3 lg:mx-0" onSubmit={handleUpdateProduct}>
          {/* form row */}
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Product Name
              </label>
              <input
                required
                type="text"
                name="name"
                defaultValue={product_name}
                placeholder="Enter Product Name"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Product Location
              </label>
              <input
                required
                defaultValue={product_location}
                type="text"
                name="location"
                placeholder="Enter Product Location"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
          </div>
          {/* form row */}
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Product Quantity
              </label>
              <input
                defaultValue={product_quantity}
                required
                type="text"
                name="quantity"
                placeholder="Enter Product Quantity"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Buying price
              </label>
              <input
                defaultValue={production_cost}
                required
                type="text"
                name="cost"
                placeholder="Enter Buying Price"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
          </div>
          {/* form row */}
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Profit Margin ( )%
              </label>
              <input
                defaultValue={profit_margin}
                placeholder="Enter Profit Margin"
                type="text"
                name="profit"
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Discount ( )%
              </label>
              <input
                defaultValue={discount}
                placeholder="Enter Discount"
                type="text"
                name="discount"
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
          </div>

          {/* form row */}

          <div className="">
            <label className="text-[#1B2850]" htmlFor="">
              Product Image
            </label>
            <input
              className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              aria-describedby="file_input_help"
              name="image"
              id="file_input"
              type="file"
              accept="image/*"
            />
          </div>

          {/* form row */}

          <div className=" mt-5">
            <label className="text-[#1B2850]" htmlFor="">
              Product Description
            </label>
            <textarea
              defaultValue={product_description}
              className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              name="desc"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter  Product Description ..."
            ></textarea>
          </div>

          {/* button */}
          <div className=" mt-8 ">
            <Button2 className="w-full hover:border-2 text-white hover:border-[#FF792E] hover:bg-white hover:text-[#FF792E] font-semibold bg-[#FF792E] py-3 text-xl hover:transition hover:duration-500 mt-8 rounded-md cursor-pointer">
              {loading ? (
                <span className="animate-spin flex justify-center">
                  <ImSpinner9 />
                </span>
              ) : (
                "Update Product"
              )}
            </Button2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
