import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="menu p-4 w-80 min-h-screen bg-base-200 text-center mb-10 text-lg">
        {/* Sidebar content here */}
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}>
          Home
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}>
          Contact us
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}>
          Dashboard
        </NavLink>
        <NavLink to="/our-menu" className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}>
          Our menu
        </NavLink>
        <NavLink to="/our-shop" className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}>
          Our Shop
        </NavLink>
        <button className="text-white uppercase font-bold hover:bg-yellow-300 hover:px-4 hover:py-2 hover:rounded-md ">Sign Out</button>
      </ul>
    </div>
  );
};

export default Sidebar;
