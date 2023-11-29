import DashContainer from "../../../../components/shared/DashContainer/DashContainer";
import Loader from "../../../../components/shared/Loader/Loader";
import useSales from "../../../../hooks/useSales";
import SalesCard from "./SalesCard";
import SalesState from "./SalesState";

const Sales = () => {
  const [result, isLoading] = useSales();
  if (isLoading === true) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        {result.length > 0 ? (
          <div className="py-5 px-8">
            <SalesState />
            <DashContainer>
              <h2 className="text-xl md:text-3xl text-[#1B2850] font-semibold ml-1 mb-5">Total {result.length} Product Sold</h2>
              <div>
                <div className="overflow-x-auto ">
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr className="text-base text-[#1B2850] font-normal bg-[#FAFBFE] border-none rounded-md">
                        <th>Product Name</th>
                        <th> Selling Date</th>
                        <th>Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result?.map((saleProduct) => (
                        <SalesCard key={saleProduct._id} saleProduct={saleProduct}></SalesCard>
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
              <h1 className="text-3xl text-[#1B2850] font-extrabold mt-4">No Products Available</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;
