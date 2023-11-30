import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import imageUpload from "../../api/utils";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const CreateStore = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const handleCreateShop = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const shop_name = form.name.value;
    const shop_location = form.location.value;
    const owner_name = user?.displayName;
    const owner_email = user?.email;
    const shop_info = form.info.value;
    //save image
    const logo = form.logo.files[0];
    const imageData = await imageUpload(logo);
    const shop_logo = imageData?.data?.display_url;

    const newStore = { shop_name, shop_location, owner_name, owner_email, shop_logo, shop_info };
    console.log(newStore);

    // // Send data to the server
    try {
      const res = await axiosPublic.post("/shops", newStore);
      const { data } = await axiosSecure.get(`/shops/${user?.email}`);
      const updateUserInfo = { shop_name, shop_logo, role: "manager", shopId: data?._id };
      await axiosPublic.patch(`/users/manager/${user?.email}`, updateUserInfo);
      setLoading(false);

      if (res.data.insertedId) {
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
    <div className="min-h-screen bg-[#FAFBFE] z-0">
      <div className="max-w-screen-lg mx-auto pt-10 ">
        <h2 className="text-5xl font-bold border-l-8 border-[#FF792E] text-[#1B2850] pl-4 mb-10 ml-5 ">Create Your Store</h2>
        <form className="px-5 border bg-white p-7 mb-10 rounded-md mx-3 lg:mx-0" onSubmit={handleCreateShop}>
          {/* form row */}
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Shop Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter Shop name"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Shop Location
              </label>
              <input
                required
                type="text"
                name="location"
                placeholder="Enter Shop Location"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
          </div>
          {/* form row */}
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Shop Owner Name
              </label>
              <input
                defaultValue={user?.displayName}
                readOnly
                type="text"
                name="ownerName"
                id="ownerName"
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
            <div className="w-1/2">
              <label className="text-[#1B2850]" htmlFor="">
                Shop Owner Email
              </label>
              <input
                readOnly
                defaultValue={user?.email}
                type="text"
                name="ownerEmail"
                id="email"
                className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              />
            </div>
          </div>

          {/* form row */}

          <div className="">
            <label className="text-[#1B2850]" htmlFor="">
              Shop Logo
            </label>
            <input
              className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              aria-describedby="file_input_help"
              name="logo"
              id="file_input"
              type="file"
              accept="image/*"
            />
          </div>

          {/* form row */}

          <div className=" mt-5">
            <label className="text-[#1B2850]" htmlFor="">
              Shop Info
            </label>
            <textarea
              className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block w-full py-3 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
              name="info"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          {/* button */}
          <div className=" mt-8 ">
            <button className="w-full hover:border-2 text-white hover:border-[#FF792E] hover:bg-white hover:text-[#FF792E] font-semibold bg-[#FF792E] py-3 text-xl hover:transition hover:duration-500 mt-8 rounded-md cursor-pointer">
              {loading ? (
                <span className="animate-spin flex justify-center">
                  <ImSpinner9 />
                </span>
              ) : (
                "Create Shop"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
