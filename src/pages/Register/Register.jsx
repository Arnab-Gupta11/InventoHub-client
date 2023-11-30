import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";
import useAuth from "../../hooks/useAuth";
import NavbarTitle from "../../components/shared/Navbar/NavbarTitle";
import imageUpload from "../../api/utils";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { registerUser, updateUserProfile, googleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //email password register
  const onSubmit = async (data) => {
    const image = data.image[0];
    try {
      //1.upload image
      const imageData = await imageUpload(image);
      // 2.user registration
      await registerUser(data.email, data.password);

      //3.Update user profile
      await updateUserProfile(data.name, imageData?.data?.display_url);

      const currentUser = {
        email: data.email,
        name: data.name,
        role: "guest",
        status: "verified",
      };
      await axiosPublic.post(`/users`, currentUser);

      toast.success("User signup successfully");
      reset();
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }

    return {};
  };

  //Google sign in
  const handleGoogleLogin = async () => {
    try {
      // 2.user registration
      const result = await googleSignIn();

      // 4.Save User
      const currentUser = {
        email: result?.user?.email,
        name: result?.user?.displayName,
        role: "guest",
        status: "verified",
      };
      await axiosPublic.post(`/users`, currentUser);

      toast.success("User signup successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const shadow = {
    boxShadow: "0px 0px 25px  #d3dce6",
  };
  return (
    <div className="min-h-screen bg-[#FAFBFE] z-0 font-crimson">
      <Helmet>
        <title>Inventohub | Register</title>
      </Helmet>
      <Toaster></Toaster>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col py-8 items-center lg:flex-row gap-5">
          <div className="hidden md:block md:w-5/12 ">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
          <div className="w-11/12 md:10/12 lg:w-4/12  text-[#2d373c] bg-base-100 rounded-lg mx-auto" style={shadow}>
            <div className="text-center mb-3 mt-3">
              <div className="ml-32 mt-8">
                <NavbarTitle></NavbarTitle>
              </div>
              <h1 className="text-5xl font-bold pt-10 text-[#1B2850]">Register now!</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    className="px-4 py-3 rounded-lg shadow-inner shadow-violet-300 outline-none border-none mb-4"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Name is required</span>}
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="px-4 py-3 rounded-lg shadow-inner shadow-violet-300 outline-none border-none mb-4"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Email is required</span>}
                </div>
                <div className="form-control">
                  <input
                    className="px-4 py-3 rounded-lg shadow-inner shadow-violet-300 outline-none border-none "
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    accept="image/*"
                    {...register("image", { required: true })}
                  />
                  <p className=" text-sm text-gray-500 mb-4" id="file_input_help ">
                    Upload image (PNG, JPG )
                    {errors.image && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Image is required</span>}
                  </p>
                </div>
                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="px-4 py-3 w-full rounded-lg shadow-inner shadow-violet-300 outline-none border-none bg-transparent mb-4"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Password is required</span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">
                        Password must contain at least 6 characters, at least 1 capital letter, and at least 1 special character.
                      </span>
                    )}
                  </div>
                </div>
                <p>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="ml-3">
                    Accept our term and condition
                  </label>
                </p>
                <div className="form-control mt-6 p-0">
                  <button
                    className="bg-[#1B2850]  px-8 py-2 rounded-md hover:bg-[#FF792E]  hover:duration-500 font-semibold text-white"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
              <hr className="my-5 bg-[#1B2850]" />
              <div>
                <div className="flex items-center px-4 py-3 w-full rounded-lg justify-center text-lg gap-2 border border-[#1B2850] shadow-md hover:shadow-md hover:shadow-[#1B2850]">
                  <div className="">
                    <FcGoogle></FcGoogle>
                  </div>

                  <button onClick={handleGoogleLogin} className="text-[#706F6F] font-medium">
                    Sign in with Google
                  </button>
                </div>
              </div>

              <label className="label text-neutral font-medium">
                Already have an account?
                <Link to="/login" className="text-[#FF792E] text-base link link-hover ml-2 font-semibold">
                  Please Login
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
