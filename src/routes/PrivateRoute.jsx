import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import Loader from "../components/shared/Loader/Loader";
import useAuth from "../hooks/useAuth";
// import Lottie from "lottie-react";
// import loadingAnimation from "../assets/loadingAnimation.json";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <Loader></Loader>;
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
