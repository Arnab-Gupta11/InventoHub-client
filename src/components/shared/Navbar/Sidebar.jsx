import { Link, NavLink } from "react-router-dom";
import NavbarTitle from "./NavbarTitle";
import useAuth from "../../../hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div>
      <ul className="menu p-4 w-60 min-h-screen bg-white  mb-10 text-lg">
        <div className="mb-8 ml-4">
          <NavbarTitle></NavbarTitle>
        </div>
        {/* Sidebar content here */}
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
          Home
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
          Contact us
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
          Dashboard
        </NavLink>
        <NavLink to="/our-menu" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
          Our menu
        </NavLink>
        <NavLink to="/our-shop" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
          Our Shop
        </NavLink>
        <div>
          {user ? (
            ""
          ) : (
            <button className=" bg-[#FF792E]   px-8 py-2 rounded-md hover:bg-orange-600 hover:duration-500 font-semibold text-white ml-5">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
