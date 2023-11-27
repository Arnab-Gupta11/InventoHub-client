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
    <div>
      <ul className="menu p-4 w-60 min-h-screen bg-white  mb-10 text-lg">
        <div className="mb-8 ml-4">
          <Logo></Logo>
        </div>
        {/* Sidebar content here */}
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
          Home
        </NavLink>
        {!isAdmin && !isManager && (
          <NavLink to="/create-store" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
            Create Store
          </NavLink>
        )}
        {(isAdmin || isManager) && (
          <NavLink
            to={isManager ? "/dashboard/manage-product" : "/dashboard/manage-shop"}
            className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}
          >
            Dashboard
          </NavLink>
        )}
        <NavLink to="/watch-demo" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
          Watch demo
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? "text-yellow-300 ml-6 mb-1" : "text-[#1B2850] ml-6 mb-1")}>
          Register
        </NavLink>
        <div>
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
