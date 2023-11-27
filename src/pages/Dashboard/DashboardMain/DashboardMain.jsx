import { Outlet } from "react-router-dom";

const DashboardMain = () => {
  return (
    <div>
      <div className="bg-[#FAFBFE] min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardMain;
