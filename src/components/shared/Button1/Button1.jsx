/* eslint-disable react/prop-types */
const Button1 = ({ children }) => {
  return (
    <div>
      <button className="bg-[#1B2850]  px-8 py-2 rounded-md hover:bg-[#FF792E]  hover:duration-500 font-semibold text-white">{children}</button>
    </div>
  );
};

export default Button1;
