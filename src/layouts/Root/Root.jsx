import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import Sidebar from "../../components/shared/Navbar/Sidebar";

const Root = () => {
  return (
    <div className="font-crimson">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Navbar></Navbar>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side z-50 min-h-screen">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Root;
