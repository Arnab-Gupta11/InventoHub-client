/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import useManager from "../hooks/useManager";
// import useManager from "../hooks/useManager";
// import useAuth from "../hooks/useAuth";

const ManagerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isManager, isManagerLoading] = useManager();
  const loaction = useLocation();
  if (loading || isManagerLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isManager) {
    return children;
  }
  return <Navigate to="/login" state={{ from: loaction }} replace></Navigate>;
};

export default ManagerRoute;
