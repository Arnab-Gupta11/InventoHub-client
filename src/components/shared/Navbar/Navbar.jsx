import { Link, NavLink } from "react-router-dom";
import NavbarTitle from "./NavbarTitle";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useManager from "../../../hooks/useManager";
import useAdmin from "../../../hooks/useAdmin";

import Dropdown from "./Dropdown";
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
  const { logoutUser, user } = useAuth();

  return (
    <div
      className={
        navbar
          ? "w-full fixed bg-[#050d0f] transition-colors  z-50 text-white shadow-md shadow-[#0C1C1F]"
          : "w-full fixed z-50 text-light-text-100 transition-colors"
      }
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4">
        <div className="flex justify-between w-full">
          <div className=" px-2 mx-2">
            <NavbarTitle />
          </div>
          <div className="lg:hidden flex items-center">
            {user ? <Dropdown /> : ""}

            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>

        <div className="flex-none hidden lg:block">
          <ul className="flex gap-5 items-center justify-end">
            {/* Navbar menu content here */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-dark-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md px-2"
                  : "text-dark-text-100 font-semibold text-lg"
              }
            >
              Home
            </NavLink>
            {!isManager && !isAdmin && (
              <NavLink
                to="/create-store"
                className={({ isActive }) =>
                  isActive
                    ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md px-2"
                    : "text-dark-text-100 font-semibold text-lg"
                }
              >
                Create Store
              </NavLink>
            )}
            {(isAdmin || isManager) && (
              <NavLink
                to={isManager ? "/dashboard/manage-product" : "/dashboard/manage-shop"}
                className={({ isActive }) =>
                  isActive
                    ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md px-2"
                    : "text-dark-text-100 font-semibold text-lg"
                }
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to="/watch-demo"
              className={({ isActive }) =>
                isActive
                  ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md px-2"
                  : "text-dark-text-100 font-semibold text-lg"
              }
            >
              Watch demo
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md px-2"
                  : "text-dark-text-100 font-semibold text-lg"
              }
            >
              Register
            </NavLink>
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
