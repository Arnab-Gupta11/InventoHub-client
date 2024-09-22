import { Link } from "react-router-dom";
import useProducts from "../../../../hooks/useProducts";
import Products from "./AddProduct/Products";
import ManageProductTitle from "./ManageProductTitle";
import Button2 from "../../../../components/shared/Button2/Button2";
import { IoMdAdd } from "react-icons/io";
import Loader from "../../../../components/shared/Loader/Loader";
import { Helmet } from "react-helmet-async";
const ManageProduct = () => {
  const [result, refetch, isLoading] = useProducts();

  if (isLoading === true) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Helmet>
        <title> Inventohub | Manage Product </title>
      </Helmet>
      {result.length > 0 ? (
        <div>
          <ManageProductTitle productCount={result.length}></ManageProductTitle>
          <div className="overflow-auto rounded-md block mt-5 shadow-light-container-shadow dark:shadow-dark-container-shadow">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-dark-bg-300 border-b-2 border-gray-200 dark:border-slate-800 text-lg">
                <tr className="text-light-text-100 dark:text-dark-text-100">
                  <th className=" py-4 px-3 text-sm font-semibold tracking-wide text-left">Product Name</th>

                  <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center">Quantity</th>

                  <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">Sale Count</th>

                  <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                {result?.map((product) => (
                  <Products key={product._id} product={product} refetch={refetch} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <Link to={"/dashboard/manage-product/addProduct"}>
              <Button2>
                <div className="flex gap-3 items-center">
                  <span className="font-semibold">
                    <IoMdAdd />
                  </span>
                  Add Product
                </div>
              </Button2>
            </Link>
            <h1 className="text-3xl text-[#1B2850] font-extrabold mt-4">No Product Available</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
