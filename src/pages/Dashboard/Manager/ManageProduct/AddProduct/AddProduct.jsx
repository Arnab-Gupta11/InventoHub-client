import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";
import useAuth from "../../../../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageUpload from "../../../../../api/utils";
import Button2 from "../../../../../components/shared/Button2/Button2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleAddProduct = async (e) => {
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
    const imageData = await imageUpload(image);
    const product_image = imageData?.data?.display_url;

    const currentDate = new Date();
    const currentDay = currentDate.toISOString().split("T")[0];

    // // Send data to the server
    try {
      const response = await axiosSecure.get(`/users/manager/${user?.email}`);

      const newProduct = {
        product_name,
        product_location,
        product_quantity,
        production_cost,
        profit_margin,
        discount,
        product_image,
        product_description,
        shopId: response.data.user.shopId,
        shopName: response.data.user.shop_name,
        userEmail: response.data.user.email,
        sellingPrice: parseInt(production_cost * ((100 + 7.5 + profit_margin) / 100)),
        product_addDate: currentDay,
        saleCount: 0,
      };
      console.log("🚀 ~ file: AddProduct.jsx:56 ~ handleAddProduct ~ newProduct:", newProduct);

      const res = await axiosSecure.post("/products", newProduct);
      setLoading(false);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Book added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
      navigate("/dashboard/manage-product");
    } catch (err) {
      console.log("🚀 ~ file: CreateStore.jsx:27 ~ handleAddProduct ~ err:", err);
    }
  };
  return (
    <div className="min-h-screen bg-[#FAFBFE] z-0">
      <div className="px-2 md:px-8 mx-auto py-5 ">
        <h2 className="text-3xl font-bold border-l-8 border-[#FF792E] text-[#1B2850] pl-4 mb-6 ml-5 ">Add new product</h2>
        <form className="px-5 border bg-white p-7 mb-10 rounded-md mx-3 lg:mx-0" onSubmit={handleAddProduct}>
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
                Production Cost
              </label>
              <input
                required
                type="text"
                name="cost"
                placeholder="Enter Production Cost"
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
                "Add Product"
              )}
            </Button2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
