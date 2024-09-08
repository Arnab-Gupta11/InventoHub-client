import { Link } from "react-router-dom";
import logo from "../../../assets/logoDark.png";
const NavbarTitle = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to={"/"}>
        <img src={logo} alt="" className="w-40" />
      </Link>
    </div>
  );
};

export default NavbarTitle;
