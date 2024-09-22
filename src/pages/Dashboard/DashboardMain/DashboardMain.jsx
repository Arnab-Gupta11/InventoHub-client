import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const DashboardMain = () => {
  return (
    <div>
      <Helmet>
        <title>Inventohub | Dashboard</title>
      </Helmet>
      <div className="bg-[#FAFBFE] dark:bg-dark-bg-200 min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardMain;
