import { Link } from "react-router-dom";
import Button1 from "../../components/shared/Button1/Button1";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="text-3xl">Oops!!!</h2>
        <h1 className="text-5xl text-[#FF792E] font-extrabold mb-7">Not Found</h1>
        <Link to={"/"}>
          <Button1>Go To Home</Button1>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
