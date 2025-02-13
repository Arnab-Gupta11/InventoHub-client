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
          <div className="py-5">
            <SalesState />

            <h2 className="text-base xsm:text-lg xs:text-xl md:text-3xl text-light-text-100 dark:text-dark-text-100 font-semibold mb-5 mt-10">
              Total {result.length} Product Sold
            </h2>
            <div>
              <div className="overflow-auto rounded-md block mt-5 shadow-light-container-shadow dark:shadow-dark-container-shadow">
                <table className="w-full">
                  {/* head */}
                  <thead className="bg-gray-50 dark:bg-dark-bg-300 border-b-2 border-gray-200 dark:border-slate-800 text-lg">
                    <tr className="text-light-text-100 dark:text-dark-text-100">
                      <th className=" py-4 px-3 text-sm font-semibold tracking-wide text-left">Product Name</th>
                      <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center">Selling Date</th>
                      <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">Profit</th>
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
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
            <div className="text-center">
              <h1 className="text-lg xs:text-3xl text-light-text-100 dark:text-dark-text-100 font-extrabold mt-4">No Products Available</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;
