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
  const { logoutUser, user } = useAuth();

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
          <div className="  lg:hidden flex items-center">
            {user ? (
              <div className="dropdown dropdown-end z-50 ml-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-14 rounded-full border-2 border-[#FBB04B]">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="text-base  font-medium text-[#1B2850] mb-0">{user?.displayName}</a>
                  </li>
                  <li>
                    <a className="text-base  font-medium text-[#1B2850] mt-0">{user?.email}</a>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button onClick={logoutUser} className="text-[#FF6A25] text-lg font-medium ">
                        Logout
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

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
              <div className="dropdown dropdown-end z-50 ml-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-14 rounded-full border-2 border-[#FBB04B]">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="text-base  font-medium mb-0 text-[#1B2850]">{user?.displayName}</a>
                  </li>
                  <li>
                    <a className="text-base  font-medium text-[#1B2850] mt-0">{user?.email}</a>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button onClick={logoutUser} className="text-[#FF6A25] text-lg font-medium">
                        Logout
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            <div>
              {user ? (
                ""
              ) : (
                <button className=" bg-[#FF792E]   px-8 py-2 rounded-md hover:bg-orange-600 hover:duration-500 font-semibold text-white">
                  <Link to={"/login"}>Login</Link>
                </button>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
