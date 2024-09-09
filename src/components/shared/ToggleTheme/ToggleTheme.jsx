import { FaMoon } from "react-icons/fa";
import { TbSunFilled } from "react-icons/tb";
import useToggleTheme from "../../../hooks/useToggleTheme";

const ToggleTheme = () => {
  const { mode, handleTheme } = useToggleTheme();
  console.log(mode);
  return (
    <button
      onClick={handleTheme}
      className="relative w-12 h-7 px-1 bg-[#E9E9E9] shadow-theme-btn rounded-full transition-all flex items-center"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute w-5 h-5 rounded-full transition-transform duration-300 ${
          mode === "dark" ? "translate-x-5 bg-[#271362]" : "bg-[#FF5A3C]"
        }`}
        style={{ boxShadow: "0px 0px 3px rgba(0,0,0,0.9)" }}
      ></div>
      <div className="absolute left-[8px] text-[#E9E9E9] transition-opacity ease-in-out">
        <TbSunFilled size={12} className={`${mode === "light" ? "opacity-100" : "opacity-0"}`} />
      </div>
      <div className="absolute right-[8px] text-[#E9E9E9] transition-opacity ease-in-out">
        <FaMoon size={12} className={` ${mode === "dark" ? "opacity-100 " : "opacity-0"}`} />
      </div>
    </button>
  );
};

export default ToggleTheme;
