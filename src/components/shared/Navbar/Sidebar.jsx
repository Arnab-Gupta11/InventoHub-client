import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useManager from "../../../hooks/useManager";
import useAdmin from "../../../hooks/useAdmin";
import Logo from "../Logo/Logo";
import NavbarTitle from "./NavbarTitle";
import Button from "../Button/Button";
import { TbTextSize } from "react-icons/tb";
import { CgLogIn, CgLogOut } from "react-icons/cg";
const Sidebar = () => {
  const { user, logoutUser } = useAuth();
  const [isManager] = useManager();
  const [isAdmin] = useAdmin();
  return (
    <div className="w-60 xsm:w-64 h-full z-50 ">
      <ul className="flex flex-col p-4 w-full min-h-screen bg-[#F8F8F8]  opacity-90 pt-10  mb-10 text-lg dark:bg-dark-bg-200 justify-between">
        {/* Sidebar content here */}
        <div className="">
          <div className="grid place-items-center">
            <NavbarTitle />
          </div>
          <div className="space-y-6 flex flex-col mt-7">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-light-text-100 dark:text-dark-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md text-center px-1"
                  : "text-light-text-100 dark:text-dark-text-100 font-semibold text-lg text-center"
              }
            >
              Home
            </NavLink>
            {!isAdmin && !isManager && (
              <NavLink
                to="/create-store"
                className={({ isActive }) =>
                  isActive
                    ? "text-light-text-100 dark:text-dark-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md text-center px-1"
                    : "text-light-text-100 dark:text-dark-text-100 font-semibold text-center text-lg"
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
                    ? "text-light-text-100 dark:text-dark-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md text-center px-1"
                    : "text-light-text-100 dark:text-dark-text-100 font-semibold text-lg text-center"
                }
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to="/watch-demo"
              className={({ isActive }) =>
                isActive
                  ? "text-light-text-100 dark:text-dark-text-100 font-semibold text-lg shadow-navlink-shadow text-center rounded-md px-1"
                  : "text-light-text-100 dark:text-dark-text-100 font-semibold text-lg text-center"
              }
            >
              Watch demo
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-light-text-100 dark:text-dark-text-100 font-semibold text-lg shadow-navlink-shadow text-center rounded-md px-1"
                  : "text-light-text-100 dark:text-dark-text-100 font-semibold text-center text-lg"
              }
            >
              Register
            </NavLink>
            <div className="flex justify-center">
              {user ? (
                <Link to={"/"}>
                <Button variant={"default"} icon={CgLogOut} className={"px-4 py-1"} onClick={logoutUser}>
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Button variant={"default"} icon={CgLogIn} className={"px-4 py-1 text-base"} onClick={logoutUser}>
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        {}
        {user && (
          <div className="flex flex-col justify-center shadow-xl shadow-dark-bg-100 border-2" style={{ wordWrap: "break-word" }}>
            <h1 className="text-base font-medium text-light-text-100 dark:text-dark-text-100">{user?.displayName}</h1>
            <h1 className="text-base font-medium text-light-text-100 dark:text-dark-text-100">{user?.email}</h1>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
