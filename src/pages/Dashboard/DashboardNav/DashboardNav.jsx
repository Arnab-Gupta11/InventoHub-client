import { IoHome } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiVideoFill } from "react-icons/pi";

import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const DashboardNav = () => {
  const { user, logoutUser } = useAuth();
  return (
    <div className="bg-white shadow-2xl w-full flex justify-evenly md:justify-end items-center  md:gap-6 py-4 md:pr-10">
      <Link to={"/"}>
        <span className="text-2xl text-[#1B2850]">
          <IoHome />
        </span>
      </Link>
      <Link to={"/watch-demo"}>
        <span className="text-2xl text-[#1B2850] mt-1">
          <PiVideoFill />
        </span>
      </Link>
      {user ? (
        <div className="dropdown dropdown-end  ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-[#FBB04B]">
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
      <label htmlFor="my-drawer-2" className="drawer-button lg:hidden text-2xl text-[#1B2850]">
        <GiHamburgerMenu />
      </label>
    </div>
  );
};

export default DashboardNav;
