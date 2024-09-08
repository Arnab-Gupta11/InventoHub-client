/* eslint-disable react/prop-types */
const Button2 = ({ children }) => {
  return (
    <div>
      <button className="bg-button-gradinent  px-8 py-2 rounded-md hover:bg-[#1B2850]  hover:duration-500 font-semibold text-white">
        {children}
      </button>
    </div>
  );
};

export default Button2;
