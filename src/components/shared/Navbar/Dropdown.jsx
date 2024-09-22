import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { TbLogout2 } from "react-icons/tb";
import { motion } from "framer-motion";

const Dropdown = () => {
  const { logoutUser, user } = useAuth();
  const avatarVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <div className="dropdown dropdown-end  z-50 ">
      <motion.label tabIndex={0} className="btn btn-ghost btn-circle avatar" whileHover="hover" variants={avatarVariants}>
        <div className="w-10 md:w-14 rounded-full border-2 border-light-text-300">
          <img src={user?.photoURL} />
        </div>
      </motion.label>
      <ul tabIndex={0} className="shadow dropdown-content bg-[#F8F8F8] dark:bg-dark-bg-100 rounded-box w-auto  py-3 px-4">
        <h1 className="text-base font-medium text-light-text-100 dark:text-dark-text-100">{user?.displayName}</h1>
        <h1 className="text-base font-medium text-light-text-100 dark:text-dark-text-100">{user?.email}</h1>
        <li>
          <Link to={"/"}>
            <span
              onClick={logoutUser}
              className="text-light-text-300 font-medium cursor-pointer inline-flex items-center gap-1 hover:border-b-2 border-light-text-300"
            >
              Logout <TbLogout2 size={14} className="mt-1" />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
