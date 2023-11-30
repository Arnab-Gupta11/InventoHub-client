import Footer from "../../components/shared/Footer/Footer";
import DashboardMain from "../../pages/Dashboard/DashboardMain/DashboardMain";
import DashboardNav from "../../pages/Dashboard/DashboardNav/DashboardNav";
import DashboardSidebar from "../../pages/Dashboard/DashboardSidebar/DashboardSidebar";
const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <DashboardNav></DashboardNav>
          <DashboardMain></DashboardMain>
          <Footer></Footer>
        </div>
        <DashboardSidebar></DashboardSidebar>
      </div>
    </div>
  );
};

export default Dashboard;
