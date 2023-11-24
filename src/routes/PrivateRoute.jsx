import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../providers/AuthProviders";
// import Lottie from "lottie-react";
// import loadingAnimation from "../assets/loadingAnimation.json";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center mt-5 min-h-screen items-center">
        {/* <Lottie className="w-36" animationData={loadingAnimation} loop={true} /> */}
        <p>loading</p>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
