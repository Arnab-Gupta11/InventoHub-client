import { NavLink } from "react-router-dom";
import Logo from "../../../components/shared/Logo/Logo";
import { FaBox } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdSummarize, MdPayment } from "react-icons/md";
import useAdmin from "../../../hooks/useAdmin";
import useManager from "../../../hooks/useManager";
import NavbarTitle from "../../../components/shared/Navbar/NavbarTitle";
import { dashboardManagerLink } from "../../../data/dashboardLink";

const DashboardSidebar = ({ isOpen }) => {
  const [isAdmin] = useAdmin();
  const [isManager] = useManager();
  return (
    <div
      className={`fixed lg:relative w-10/12 xs:w-64 bg-light-bg-200 dark:bg-dark-bg-300 text-light-text-100 dark:text-dark-text-100 transition-transform shadow-light-container-shadow dark:shadow-dark-container-shadow min-h-screen ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 z-20`}
    >
      <nav className="mt-5">
        <div className="grid ml-6 pt-3">
          <NavbarTitle />
        </div>
        <div className="mt-12 space-y-3 px-4">
          {isAdmin && (
            <>
              <div>
                <NavLink
                  to="/dashboard/manage-shop"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#1B2850] pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                      : "text-[#828f9a]  pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                  }
                >
                  <span>
                    <FaBox />
                  </span>
                  Mange Shop
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/dashboard/admin-summary"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#1B2850] pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                      : "text-[#828f9a]  pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                  }
                >
                  <span>
                    <MdSummarize />
                  </span>
                  Sales Summary
                </NavLink>
              </div>
            </>
          )}
          {isManager && (
            <>
              {dashboardManagerLink?.map((item, index) => {
                const { label, Icon, link } = item;
                return (
                  <NavLink
                    key={index}
                    to={link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#0B6FFC] rounded-md font-medium flex items-center gap-2 text-center py-2 border-l-4  border-light-text-300 justify-start bg-gradient-to-r from-[#acc5e7] to-white dark:from-dark-bg-200 dark:to-dark-bg-100 w-11/12 pl-5"
                        : "text-[#828f9a] rounded-md  font-medium flex items-center gap-2 text-start py-2 justify-start w-11/12 pl-6"
                    }
                  >
                    <span className="flex items-center justify-start gap-3">
                      <Icon />
                      {label}
                    </span>
                  </NavLink>
                );
              })}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
