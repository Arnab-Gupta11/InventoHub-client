import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateStore from "../pages/CreateStore/CreateStore";
import WatchDemo from "../pages/WatchDemo/WatchDemo";
import Dashboard from "../layouts/Dashboard/Dashboard";
import ManageProduct from "../pages/Dashboard/Manager/ManageProduct/ManageProduct";
import SalesCollection from "../pages/Dashboard/Manager/SalesCollection/SalesCollection";
import CheckOut from "../pages/Dashboard/Manager/CheckOut/CheckOut";
import Subscription from "../pages/Dashboard/Manager/Subscription/Subscription";
import SalesSummary from "../pages/Dashboard/Manager/SalesSummary/SalesSummary";
import AddProduct from "../pages/Dashboard/Manager/ManageProduct/AddProduct/AddProduct";

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
    children: [
      //* <----------------------Manager-Route----------------------->*/
      {
        path: "manage-product",
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: "manage-product/addProduct",
        element: <AddProduct></AddProduct>,
      },

      {
        path: "sales-collection",
        element: <SalesCollection></SalesCollection>,
      },
      {
        path: "check-out",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "sales-summary",
        element: <SalesSummary></SalesSummary>,
      },
    ],
  },
]);

export default router;
