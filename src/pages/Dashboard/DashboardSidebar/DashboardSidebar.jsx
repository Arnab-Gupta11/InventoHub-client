import { NavLink } from "react-router-dom";
import Logo from "../../../components/shared/Logo/Logo";
import { FaBox } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdSummarize, MdPayment } from "react-icons/md";
import useAdmin from "../../../hooks/useAdmin";
import useManager from "../../../hooks/useManager";

const DashboardSidebar = () => {
  const [isAdmin] = useAdmin();
  const [isManager] = useManager();
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-72 min-h-full bg-white border text-base-content">
        {/* Sidebar content here */}
        <div className="my-4 ml-4">
          <Logo></Logo>
        </div>
        <div className="mt-4 space-y-3">
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
              <div>
                <NavLink
                  to="/dashboard/manage-product"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#1B2850] pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                      : "text-[#828f9a]  pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                  }
                >
                  <span>
                    <FaBox />
                  </span>
                  Mange Product
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/dashboard/sales-collection"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#1B2850] pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                      : "text-[#828f9a]  pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                  }
                >
                  <span>
                    <IoCart />
                  </span>
                  Sales Collection
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/dashboard/check-out"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#1B2850] pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                      : "text-[#828f9a]  pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                  }
                >
                  <span>
                    <FaClipboardCheck></FaClipboardCheck>
                  </span>
                  Check Out
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/dashboard/subscription"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#1B2850] pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                      : "text-[#828f9a]  pr-28 pl-5 py-2.5 rounded-md  font-medium flex items-center gap-2"
                  }
                >
                  <span>
                    <MdPayment />
                  </span>
                  Subscription
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/dashboard/sales-summary"
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
        </div>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
