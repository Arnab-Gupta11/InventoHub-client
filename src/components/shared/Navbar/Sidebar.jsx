import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useManager from "../../../hooks/useManager";
import useAdmin from "../../../hooks/useAdmin";
import Logo from "../Logo/Logo";

const Sidebar = () => {
  const { user, logoutUser } = useAuth();
  const [isManager] = useManager();
  const [isAdmin] = useAdmin();
  return (
    <div className="w-52 xsm:w-60 h-full z-50">
      <ul className="flex flex-col p-4 w-full min-h-screen bg-[#F8F8F8] opacity-90 pt-10  mb-10 text-lg">
        <div className="mb-8 ml-4">
          <Logo />
        </div>
        {/* Sidebar content here */}
        <div className="space-y-6 flex flex-col mt-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md text-center px-1"
                : "text-light-text-100 font-semibold text-lg text-center"
            }
          >
            Home
          </NavLink>
          {!isAdmin && !isManager && (
            <NavLink
              to="/create-store"
              className={({ isActive }) =>
                isActive
                  ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md text-center px-1"
                  : "text-light-text-100 font-semibold text-center text-lg"
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
                  ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow rounded-md text-center px-1"
                  : "text-light-text-100 font-semibold text-lg text-center"
              }
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to="/watch-demo"
            className={({ isActive }) =>
              isActive
                ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow text-center rounded-md px-1"
                : "text-light-text-100 font-semibold text-lg text-center"
            }
          >
            Watch demo
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-light-text-100 font-semibold text-lg shadow-navlink-shadow text-center rounded-md px-1"
                : "text-light-text-100 font-semibold text-center text-lg"
            }
          >
            Register
          </NavLink>
          <div className="flex justify-center">
            {user ? (
              <Link to={"/"}>
                <button
                  onClick={logoutUser}
                  className=" bg-[#FF792E]   px-8 py-2 rounded-md hover:bg-orange-600 hover:duration-500 font-semibold text-white ml-5"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <button className="bg-button-gradinent px-8 py-2 rounded-md hover:bg-button-gradinent-hover font-semibold text-white font-nunito">
                <Link to={"/login"}>Login</Link>
              </button>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
