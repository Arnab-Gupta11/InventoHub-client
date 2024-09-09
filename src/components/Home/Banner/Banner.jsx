import { Link } from "react-router-dom";
import banner from "../../../assets/banner.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div className="bg-gradinent-bg">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center min-h-screen ">
          <div className="grid grid-cols-1 bs:grid-cols-2 gap-3 bs:gap-7 justify-center items-center mx-5 bs:px-20 lg:mx-0 bs:mt-20">
            <div className="lg:w-full h-full flex justify-center bs:ml-5 bs:justify-start items-center order-2 bs:order-1">
              <div className="">
                <h2 className="text-2xl text-dark-text-100 md:text-4xl lg:text-6xl font-Cormorant-Garamond font-bold mb-5 md:mb-10 text-center bs:text-left">
                  Your Gateway
                  <br className="hidden bs:block" /> to Smart <span className="text-light-text-300">Inventory</span>{" "}
                  <br className="hidden bs:block" /> <span className="text-light-text-300">Solutions</span>
                </h2>
                <p className="text-xs xsm:text-sm md:text-base bs:text-lg text-dark-text-200 font-medium text-center bs:text-left pb-10 sm:pb-20 bs:pb-0">
                  Welcome to a world where tracking and managing <br className="hidden lg:block" /> your inventory are as simple as a few clicks.
                </p>
                <Link></Link>
              </div>
            </div>
            <div className="w-4/5 bs:w-full mx-auto order-1 bs:order-2 mt-8 bs:mt-0">
              <Lottie animationData={banner} loop={true} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <div className="w-full -z-10  relative">
          <img src={banner} className="w-full h-[400px] lg:h-screen object-cover brightness-50" />
          <div className="absolute flex items-end lg:items-center w-full h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 lg:w-full" data-aos="zoom-in">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10">
                Your Gateway
                <br /> to Smart <span className="text-[#b090ea]">Inventory</span> <br /> <span className="text-[#90DCEA]">Solutions</span>
              </h2>
              <p className="hidden lg:block lg:text-lg">
                Welcome to a world where tracking and managing your inventory <br /> are as simple as a few clicks
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
