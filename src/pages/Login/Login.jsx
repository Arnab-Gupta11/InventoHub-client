import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import Lottie from "lottie-react";
import toast, { Toaster } from "react-hot-toast";
import loginAnimation from "../../assets/loginAnimation.json";
import useAuth from "../../hooks/useAuth";
import NavbarTitle from "../../components/shared/Navbar/NavbarTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import Button from "../../components/shared/Button/Button";
const Login = () => {
  const axiosPublic = useAxiosPublic();
  const { loginUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    document.documentElement.classList.add(currentMode);
  }, []);
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

      toast.success("User signin successfully");
      reset();
      navigate(location?.state ? location.state : "/");
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
        name: result?.user.displayName,
        role: "guest",
        status: "verified",
      };
      await axiosPublic.post(`/users`, currentUser);

      //5.get Token
      //   await getToken(result?.user?.email);
      toast.success("User signin successfully");

      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // const shadow = {
  //   boxShadow: "0px 0px 10px 0px  #d3dce6",
  // };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-light-bg-200 dark:bg-dark-bg-300 z-0 pt-0 md:pt-10 font-Work-Sans">
      <Helmet>
        <title>Inventohub | Login</title>
      </Helmet>
      <Toaster></Toaster>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col py-8 items-center lg:flex-row gap-5">
          <div className="hidden md:block md:w-5/12 ">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
          <div className="w-11/12  md:10/12 lg:w-4/12 bg-light-bg-100 dark:bg-dark-bg-200 rounded-lg mx-auto shadow-md shadow-light-bg-400 dark:shadow-dark-bg-200">
            <div className="text-center mb-3 mt-8">
              <div className="grid place-items-center">
                <NavbarTitle />
              </div>
              <h1 className="text-xl xsm:text-2xl sm:text-4xl lg:px-5 font-bold pt-10 text-light-text-100 dark:text-dark-text-100">
                Login to your account
              </h1>
              <div className="mt-2 font-medium text-xs xsm:text-sm md:text-base text-light-text-200 dark:text-dark-text-200">
                Don&apos;t have an account?
                <Link to="/register" className="text-[#FF792E] link link-hover ml-2 font-semibold">
                  Please Register
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-4 py-3 w-full rounded-lg shadow-inner shadow-violet-300 dark:shadow-dark-bg-300 outline-none border-none bg-transparent font-medium text-slate-600 dark:text-dark-text-200"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-red-700 text-xs font-medium mt-1 mb-3 ml-1">Email is required</span>}
                </div>

                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="px-4 py-3 w-full rounded-lg shadow-inner shadow-violet-300 dark:shadow-dark-bg-300 outline-none border-none bg-transparent mt-4 font-medium text-slate-600 dark:text-dark-text-200"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/,
                      })}
                    />
                    <span
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="absolute top-8 right-4 cursor-pointer text-slate-500"
                    >
                      {showPassword ? <AiOutlineEye size={16} /> : <AiOutlineEyeInvisible size={16} />}
                    </span>
                    {errors.password?.type === "required" && (
                      <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Password is required</span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-green-500 text-xs font-medium mt-1 mb-3 ml-1 text-justify">
                        Password must contain at least 6 characters, at least 1 capital letter, and at least 1 special character.
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-control mt-6 p-0">
                  <Button variant={"default"} className={"w-full"}>
                    Login
                  </Button>
                </div>
              </form>

              <div className="my-5 border-[0.5px] border-light-bg-400 dark:border-slate-800 " />
              <div className="grid place-items-center">
                <Button variant={"outline"} size={"auto"} icon={FcGoogle} iconPosition={"left"} onClick={handleGoogleLogin}>
                  Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
