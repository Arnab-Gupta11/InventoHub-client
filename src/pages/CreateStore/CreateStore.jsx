import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import imageUpload from "../../api/utils";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Button from "../../components/shared/Button/Button";
const CreateStore = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const shop_name = data.name;
    const shop_location = data.location;
    const owner_name = user?.displayName;
    const owner_email = user?.email;
    const shop_info = data.info;
    const image = data.logo[0];
    const imageData = await imageUpload(image);
    const shop_logo = imageData?.data?.display_url;
    const newStore = { shop_name, shop_location, owner_name, owner_email, shop_logo, shop_info };
    // Send data to the server
    try {
      const res = await axiosPublic.post("/shops", newStore);
      const { data } = await axiosSecure.get(`/shops/${user?.email}`);
      const updateUserInfo = { shop_name, shop_logo, role: "manager", shopId: data?._id };
      await axiosPublic.patch(`/users/manager/${user?.email}`, updateUserInfo);
      setLoading(false);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          title: "Success!",
          text: "Shop Created Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
      navigate("/dashboard/manage-product");
    } catch (err) {
      console.log("🚀 ~ file: CreateStore.jsx:27 ~ handleCreateShop ~ err:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFE] dark:bg-dark-bg-200 z-0">
      <div className="max-w-screen-lg mx-auto pt-10 px-4 bs:px-0">
        <h2 className="text-xl xsm:text-2xl sm:text-3xl bs:text-5xl font-bold border-l-8 border-[#FF792E] text-light-text-100 dark:text-dark-text-100 pl-2 md:pl-4 mb-5 md:mb-10 ">
          Create Your Store
        </h2>
        <form
          className=" bg-light-bg-100 dark:bg-dark-bg-300 shadow-light-container-shadow dark:shadow-dark-container-shadow px-6 py-8 md:px-14 md:py-16 mb-10 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enter Shop name"
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Shop name is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="location"
                placeholder="Enter Shop Location"
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("location", { required: true })}
              />
              {errors.location && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Shop Location is required</span>}
            </div>
          </div>
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <input
                defaultValue={user?.displayName}
                readOnly
                type="text"
                name="ownerName"
                id="ownerName"
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-1.5 rounded-md bg-transparent font-medium text-slate-600"
                {...register("ownerName", { required: true })}
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                readOnly
                defaultValue={user?.email}
                type="text"
                name="ownerEmail"
                id="email"
                className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("ownerEmail", { required: true })}
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
                Upload Logo
              </label>

              {/* Hidden File Input */}
              <input className="hidden" id="file_input" name="logo" type="file" accept="image/*" {...register("logo", { required: true })} />

              {/* Display Selected File Name */}
              <p className="text-sm text-slate-500 dark:text-dark-slate-700 font-medium flex-1">
                {watch("logo")?.[0]?.name ? `${watch("logo")[0].name}` : "No file selected"}
              </p>
            </div>
            {errors.location && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Shop Logo is required</span>}
          </div>

          {/* form row */}

          <div className=" mt-5">
            <textarea
              className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
              name="info"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter Shop Info...."
              {...register("info", { required: true })}
            />
            {errors.location && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Shop Info is required</span>}
          </div>

          {/* button */}
          <div className=" mt-8 ">
            <Button className={"w-full md:w-4/6"}>
              {loading ? (
                <span className="animate-spin flex justify-center">
                  <ImSpinner9 />
                </span>
              ) : (
                "Create Shop"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
