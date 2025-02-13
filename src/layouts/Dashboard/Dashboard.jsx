import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Footer from "../../components/shared/Footer/Footer";
import DashboardMain from "../../pages/Dashboard/DashboardMain/DashboardMain";
import DashboardNav from "../../pages/Dashboard/DashboardNav/DashboardNav";
import DashboardSidebar from "../../pages/Dashboard/DashboardSidebar/DashboardSidebar";
import { NavLink, Outlet } from "react-router-dom";
import { FaBox, FaClipboardCheck } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import useAdmin from "../../hooks/useAdmin";
import useManager from "../../hooks/useManager";
import NavbarTitle from "../../components/shared/Navbar/NavbarTitle";
import { MdPayment, MdSummarize } from "react-icons/md";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" lg:flex min-h-screen bg-gray-100 font-Work-Sans">
        {/* Sidebar */}
        <DashboardSidebar isOpen={isOpen} />

        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${isOpen && "brightness-50"} z-0`} onClick={() => isOpen === true && setIsOpen(false)}>
          {/* Navbar */}
          <DashboardNav isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Content Area */}
          <div className="flex-1 bg-light-bg-100 dark:bg-dark-bg-200 min-h-screen p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
