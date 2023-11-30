import { Link } from "react-router-dom";
import Button1 from "../../components/shared/Button1/Button1";

const Unauthorize = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl text-[#FF792E] font-extrabold mb-7">Unauthorize Access</h1>
        <Link to={"/"}>
          <Button1>Go To Home</Button1>
        </Link>
      </div>
    </div>
  );
};

export default Unauthorize;
