import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateStore from "../pages/CreateStore/CreateStore";
import WatchDemo from "../pages/WatchDemo/WatchDemo";
import Dashboard from "../layouts/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create-store",
        element: <CreateStore></CreateStore>,
      },
      {
        path: "/watch-demo",
        element: <WatchDemo></WatchDemo>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

export default router;
