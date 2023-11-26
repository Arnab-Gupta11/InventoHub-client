import Logo from "../../../components/shared/Logo/Logo";

const DashboardSidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-72 min-h-full bg-white border text-base-content">
        {/* Sidebar content here */}
        <div className="my-4 ml-4">
          <Logo></Logo>
        </div>
        <div className="mt-3 space-y-5">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
