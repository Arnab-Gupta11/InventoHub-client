import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import Sidebar from "../../components/shared/Navbar/Sidebar";
import Footer from "../../components/shared/Footer/Footer";
import Navbar2 from "../../components/shared/Navbar/Navbar2";

const Root = () => {
  const location = useLocation();

  return (
    <div className="font-Work-Sans">
      <div className="">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          {location?.pathname === "/" ? <Navbar /> : <Navbar2 />}
          {/*  */}

          {/* Page content here */}
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
        <div className="drawer-side z-50 min-h-screen w-full">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Root;
