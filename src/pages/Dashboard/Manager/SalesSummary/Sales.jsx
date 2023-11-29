import { useState } from "react";
import DashContainer from "../../../../components/shared/DashContainer/DashContainer";
import Loader from "../../../../components/shared/Loader/Loader";
import Pagination from "../../../../components/shared/Pagination/Pagination";
import useSales from "../../../../hooks/useSales";
import SalesCard from "./SalesCard";
import SalesState from "./SalesState";

const Sales = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [result, isLoading] = useSales();
  if (isLoading === true) {
    return <Loader></Loader>;
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = result.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <div>
        {result.length > 0 ? (
          <div className="py-5 px-8">
            <SalesState />
            <DashContainer>
              <h2 className="text-xl md:text-3xl text-[#1B2850] font-semibold ml-1 mb-5">Total {result.length} Product Sold</h2>
              <div>
                <div className="overflow-x-auto min-h-[450px]">
                  <table className="table w-full ">
                    {/* head */}
                    <thead>
                      <tr className="text-base text-[#1B2850] font-normal bg-[#FAFBFE] border-none rounded-md">
                        <th>Product Name</th>
                        <th> Selling Date</th>
                        <th>Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPosts?.map((saleProduct) => (
                        <SalesCard key={saleProduct._id} saleProduct={saleProduct}></SalesCard>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination totalPosts={result.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
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
