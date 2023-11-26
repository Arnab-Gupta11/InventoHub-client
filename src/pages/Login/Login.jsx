import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import Lottie from "lottie-react";
import toast, { Toaster } from "react-hot-toast";

import loginAnimation from "../../assets/loginAnimation.json";
import useAuth from "../../hooks/useAuth";
import NavbarTitle from "../../components/shared/Navbar/NavbarTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Login = () => {
  const axiosPublic = useAxiosPublic();
  const { loginUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  //   const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //email password register
  const onSubmit = async (data) => {
    try {
      // 2.user login
      await loginUser(data.email, data.password);
      //   console.log("🚀 ~ file: Register.jsx:28 ~ onSubmit ~ result:", result);

      toast.success("User signin successfully");
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
        role: "guest",
        status: "verified",
      };
      await axiosPublic.post(`/users`, currentUser);

      //5.get Token
      //   await getToken(result?.user?.email);
      toast.success("User signin successfully");
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
    <div className="min-h-screen bg-[#FAFBFE] z-0 pt-10 font-crimson">
      <Toaster></Toaster>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col py-8 items-center lg:flex-row gap-5">
          <div className="hidden md:block md:w-5/12 ">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
          <div className="w-11/12  md:10/12 lg:w-4/12  text-[#1B2850] bg-base-100 rounded-lg mx-auto" style={shadow}>
            <div className="text-center mb-3 mt-3">
              <div className="ml-32 mt-8">
                <NavbarTitle></NavbarTitle>
              </div>
              <h1 className="text-xl md:text-4xl lg:px-5 font-bold pt-10 text-[#1B2850]">Login to your account</h1>
              <div className="mt-2 font-medium text-lg">
                Dont have an account?
                <Link to="/register" className="text-[#FF792E] text-base link link-hover ml-2 font-semibold">
                  Please Register
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    Login
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
