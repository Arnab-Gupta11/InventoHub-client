import { Link } from "react-router-dom";
import logo1 from "../../../assets/logoDark.png";
import logo2 from "../../../assets/logolight.png";
const NavbarTitle = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to={"/"}>
        <img src={logo2} alt="" className={`w-24 xsm:w-32 sm:w-40 block dark:hidden`} />
      </Link>
      <Link to={"/"}>
        <img src={logo1} alt="" className={`w-24 xsm:w-32 sm:w-40 hidden dark:block`} />
      </Link>
    </div>
  );
};

export default NavbarTitle;
