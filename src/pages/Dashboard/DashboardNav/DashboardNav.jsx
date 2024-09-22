import { IoHome } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiVideoFill } from "react-icons/pi";

import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ToggleTheme from "../../../components/shared/ToggleTheme/ToggleTheme";
import Dropdown from "../../../components/shared/Navbar/Dropdown";
import { FiMenu } from "react-icons/fi";
const DashboardNav = ({ isOpen, setIsOpen }) => {
  const { user } = useAuth();
  return (
    <div className="bg-light-bg-200 dark:bg-dark-bg-300 w-full flex justify-evenly md:justify-end items-center  md:gap-6 py-4 md:px-6 px-2 shadow-light-container-shadow dark:shadow-dark-container-shadow">
      <Link to={"/"}>
        <span className="text-xl text-light-text-100 dark:text-dark-text-100">
          <IoHome />
        </span>
      </Link>
      <Link to={"/watch-demo"}>
        <span className="text-2xl text-light-text-100 dark:text-dark-text-100">
          <PiVideoFill />
        </span>
      </Link>
      <ToggleTheme />
      {user ? <Dropdown /> : ""}
      <button className="lg:hidden text-2xl text-light-text-100 dark:text-dark-text-100" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={24} />
      </button>
    </div>
  );
};

export default DashboardNav;
