import { Link } from "react-router-dom";
import DashContainer from "../../../../components/shared/DashContainer/DashContainer";
import useProducts from "../../../../hooks/useProducts";
import Products from "./AddProduct/Products";
import ManageProductTitle from "./ManageProductTitle";
import Button2 from "../../../../components/shared/Button2/Button2";
import { IoMdAdd } from "react-icons/io";
import Loader from "../../../../components/shared/Loader/Loader";

const ManageProduct = () => {
  const [result, refetch, isLoading] = useProducts();

  if (isLoading === true) {
    return <Loader></Loader>;
  }
  return (
    <div>
      {result.length > 0 ? (
        <div className="py-5 px-8">
          <ManageProductTitle productCount={result.length}></ManageProductTitle>
          <DashContainer>
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-base text-[#1B2850] font-normal bg-[#FAFBFE] border-none rounded-md">
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th> Sale Count</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result?.map((product) => (
                      <Products key={product._id} product={product} refetch={refetch}></Products>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </DashContainer>
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
