import Loader from "../../../../components/shared/Loader/Loader";
import DashContainer from "../../../../components/shared/DashContainer/DashContainer";

import CheckOutCard from "./CheckOutCard";
import useCarts from "../../../../hooks/useCarts";
const CheckOut = () => {
  const [result, refetch, isLoading] = useCarts();

  if (isLoading === true) {
    return <Loader></Loader>;
  }
  refetch();
  return (
    <div>
      {result.length > 0 ? (
        <div className="py-5 px-8">
          <h2 className="text-xl md:text-3xl text-[#1B2850] font-semibold ml-1">All Product</h2>
          <DashContainer>
            <div className="mb-7"></div>
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-base text-[#1B2850] font-normal bg-[#FAFBFE] border-none rounded-md">
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Discount</th>
                      <th> SellingPrice</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result?.map((product) => (
                      <CheckOutCard key={product._id} product={product} refetch={refetch}></CheckOutCard>
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
            <h1 className="text-3xl text-[#1B2850] font-extrabold mt-4">No Product Available</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
