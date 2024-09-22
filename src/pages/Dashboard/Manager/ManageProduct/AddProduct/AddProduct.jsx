import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";
import useAuth from "../../../../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageUpload from "../../../../../api/utils";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { FiUpload } from "react-icons/fi";
import Button from "../../../../../components/shared/Button/Button";
import { useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const product_name = data.name;
    const product_location = data.location;
    const product_quantity = parseInt(data.quantity);
    const production_cost = parseInt(data.cost);
    const profit_margin = parseInt(data.profit);
    const discount = parseInt(data.discount) || 0;
    const product_description = data.desc;
    const image = data.image[0];
    const imageData = await imageUpload(image);
    const product_image = imageData?.data?.display_url;
    const currentDate = new Date();
    const currentDay = currentDate.toISOString().split("T")[0];
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

      const res = await axiosSecure.post("/products", newProduct);
      setLoading(false);
      reset();

      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Product added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
      // navigate("/dashboard/manage-product");
    } catch (err) {
      console.log("🚀 ~ file: CreateStore.jsx:27 ~ handleAddProduct ~ err:", err);
    }
  };
  return (
    <div className="">
      <div className="md:px-5 mx-auto py-5 ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl xsm:text-2xl md:text-3xl text-light-text-100 dark:text-dark-text-100 font-semibold border-l-8 border-[#FF792E] pl-2 sm:pl-4 flex-1">
            Add new product
          </h2>
          <button
            className="w-8 h-8 xs:w-10 xs:h-10 bg-button-gradient hover:bg-button-gradient-hover rounded-full grid place-items-center text-white"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
        <form
          className="bg-light-bg-200 dark:bg-dark-bg-300 shadow-light-container-shadow dark:shadow-dark-container-shadow px-4 py-8 md:px-10 md:py-12 mb-10 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <label className="text-light-text-100 dark:text-dark-text-100 font-medium" htmlFor="">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Product Name"
                id=""
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-100  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product name is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-light-text-100 dark:text-dark-text-100 font-medium" htmlFor="">
                Product Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter Product Location"
                id=""
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-100  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("location", { required: true })}
              />
              {errors.location && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Location is required</span>}
            </div>
          </div>
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <label className="text-light-text-100 dark:text-dark-text-100 font-medium" htmlFor="">
                Product Quantity
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter Product Quantity"
                id=""
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-100  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("quantity", { required: true })}
              />
              {errors.quantity && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Quantity is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-light-text-100 dark:text-dark-text-100 font-medium" htmlFor="">
                Production Cost
              </label>
              <input
                type="text"
                name="cost"
                placeholder="Enter Production Cost"
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-100  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("cost", { required: true })}
              />
              {errors.cost && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Cost is required</span>}
            </div>
          </div>
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <label className="text-light-text-100 dark:text-dark-text-100 font-medium" htmlFor="">
                Profit Margin ( )%
              </label>
              <input
                placeholder="Enter Profit Margin"
                type="text"
                name="profit"
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-100  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("profit", { required: true })}
              />
              {errors.profit && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Profit Margin is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-light-text-100 dark:text-dark-text-100 font-medium" htmlFor="">
                Discount ( )%
              </label>
              <input
                placeholder="Enter Discount"
                type="text"
                name="discount"
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-100  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
              />
            </div>
          </div>

          {/* form row */}

          <div>
            <div className="flex flex-col xs:flex-row items-center mt-4 gap-3">
              {/* File Upload Button */}
              <label
                htmlFor="file_input"
                className="cursor-pointer flex items-center justify-center px-4 py-2 bg-[#5356FB] text-white font-medium rounded-lg text-base shadow-md hover:bg-[#0B6FFC] transition-all duration-300 flex-1 w-full md:w-1/2"
              >
                <FiUpload className="w-3 h-3 xs:w-5 xs:h-5 mr-2" />
                Upload Product Image
              </label>

              {/* Hidden File Input */}
              <input className="hidden" id="file_input" name="image" type="file" accept="image/*" {...register("image", { required: true })} />

              {/* Display Selected File Name */}
              <p className="text-sm text-slate-500 dark:text-dark-slate-700 font-medium flex-1">
                {watch("image")?.[0]?.name ? `${watch("image")[0].name}` : "No file selected"}
              </p>
            </div>
            {errors.image && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Image is required</span>}
          </div>

          {/* <div className="">
            <label className="text-light-text-100 dark:text-dark-text-100 font-medium" htmlFor="">
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
          </div> */}

          {/* form row */}

          <div className=" mt-5">
            <label className="text-light-text-100 dark:text-dark-text-100 font-medium" htmlFor="">
              Product Description
            </label>
            <textarea
              className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-100  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
              name="desc"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter  Product Description ..."
              {...register("desc", { required: true })}
            />
            {errors.desc && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Description is required</span>}
          </div>

          {/* button */}
          <div className=" mt-8 ">
            <Button variant={"default"}>
              {loading ? (
                <span className="animate-spin flex justify-center">
                  <ImSpinner9 />
                </span>
              ) : (
                "Add Product"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
