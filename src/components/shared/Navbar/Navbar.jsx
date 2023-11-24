import { Link, NavLink } from "react-router-dom";
import NavbarTitle from "./NavbarTitle";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 77.3) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  console.log(navbar);
  const { logutUser, user } = useAuth();
  const handleDelete = () => {
    logutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div
      className={
        navbar ? "w-full   fixed bg-[#1B2850] transition-colors  z-10 text-white shadow-xl" : "w-full   fixed  z-10 text-white transition-colors"
      }
    >
      <div className=" max-w-screen-xl navbar  mx-auto flex justify-between items-center py-6">
        <div className="flex  justify-between w-full">
          <div className=" px-2 mx-2">
            <NavbarTitle></NavbarTitle>
          </div>
          <div className="  lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>

        <div className="flex-none hidden lg:block">
          <ul className="flex gap-5 items-center">
            {/* Navbar menu content here */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}>
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}
            >
              Contact us
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/our-menu"
              className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}
            >
              Our menu
            </NavLink>
            <NavLink
              to="/our-shop"
              className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}
            >
              Our Shop
            </NavLink>
            <NavLink to="/">
              <button className="flex items-center gap-1">
                <FaShoppingCart className="text-yellow-300"></FaShoppingCart>
                <div className="badge badge-secondary bg-pink-700">+0</div>
              </button>
            </NavLink>
            {user ? (
              <button className="text-white uppercase font-bold hover:bg-yellow-300 hover:px-4 hover:py-2 hover:rounded-md " onClick={handleDelete}>
                Logout
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="text-white uppercase font-bold hover:bg-yellow-300 hover:px-4 hover:py-2 hover:rounded-md ">Login</button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
