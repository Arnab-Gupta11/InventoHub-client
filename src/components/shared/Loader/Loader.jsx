import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <span className="animate-spin flex justify-center text-[#FF792E] text-7xl">
          <ImSpinner9 />
        </span>
      </div>
    </div>
  );
};

export default Loader;
