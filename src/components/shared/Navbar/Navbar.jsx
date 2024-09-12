import { Link, NavLink } from "react-router-dom";
import NavbarTitle from "./NavbarTitle";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useManager from "../../../hooks/useManager";
import useAdmin from "../../../hooks/useAdmin";

import Dropdown from "./Dropdown";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
const Navbar = () => {
  const [isManager] = useManager();
  const [isAdmin] = useAdmin();

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 77.3) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const { user } = useAuth();

  return (
    <div
      className={
        navbar
          ? "w-full sticky top-0 bg-light-bg-100 dark:bg-dark-bg-300 transition-colors  z-50  shadow-md shadow-light-bg-400 dark:shadow-dark-bg-100 text-light-text-100 dark:text-dark-text-100 font-medium text-base py-2"
          : "w-full fixed z-50 transition-colors ease-out text-light-text-100 dark:text-dark-text-100 font-medium text-base py-4"
      }
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-5">
        <div className="flex justify-between items-center w-full ">
          <div className=" px-2 mx-2">
            <NavbarTitle />
          </div>
          <div className="lg:hidden flex items-center">
            {user ? <Dropdown /> : ""}

            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#F8F8F8" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>

        <div className="flex-none hidden lg:block">
          <ul className="flex gap-5 items-center justify-end">
            {/* Navbar menu content here */}
            <NavLink to="/" className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2" : "")}>
              Home
            </NavLink>
            {!isManager && !isAdmin && (
              <NavLink to="/create-store" className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2" : "")}>
                Create Store
              </NavLink>
            )}
            {(isAdmin || isManager) && (
              <NavLink
                to={isManager ? "/dashboard/manage-product" : "/dashboard/manage-shop"}
                className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2" : "")}
              >
                Dashboard
              </NavLink>
            )}
            <NavLink to="/watch-demo" className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2" : "")}>
              Watch demo
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2" : "")}>
              Register
            </NavLink>
            <ToggleTheme />
            {user ? <Dropdown /> : ""}
            <div>
              {user ? (
                ""
              ) : (
                <button className="bg-button-gradinent px-8 py-2 rounded-md hover:bg-button-gradinent-hover font-semibold text-white font-nunito">
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
