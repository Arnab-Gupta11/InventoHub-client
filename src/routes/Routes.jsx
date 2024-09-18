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
import UpdateProduct from "../pages/Dashboard/Manager/ManageProduct/AddProduct/UpdateProduct/UpdateProduct";
import ManageShop from "../pages/Dashboard/Admin/Manage Shop/ManageShop";
import AdminSummary from "../pages/Dashboard/Admin/AdminSummary/AdminSummary";
import Payment from "../pages/Dashboard/Manager/Subscription/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import Unauthorize from "../pages/Error/Unauthorize";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create-store",
        element: (
          <PrivateRoute>
            <CreateStore></CreateStore>
          </PrivateRoute>
        ),
      },
      {
        path: "/watch-demo",
        element: <WatchDemo></WatchDemo>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/unauthorize",
    element: <Unauthorize></Unauthorize>,
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
      {
        path: "manage-shop",
        element: <ManageShop></ManageShop>,
      },
      {
        path: "admin-summary",
        element: <AdminSummary></AdminSummary>,
      },
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
        path: "manage-product/:id",
        element: <UpdateProduct></UpdateProduct>,
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
        path: "subscription/:id",
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`https://inventohub.vercel.app/subscription/${params.id}`),
      },
      {
        path: "sales-summary",
        element: <SalesSummary></SalesSummary>,
      },
    ],
  },
]);

export default router;
