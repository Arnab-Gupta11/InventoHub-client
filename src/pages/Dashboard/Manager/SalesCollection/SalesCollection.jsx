import useProducts from "../../../../hooks/useProducts";
import Loader from "../../../../components/shared/Loader/Loader";
import DashContainer from "../../../../components/shared/DashContainer/DashContainer";
import SalesCollectionCart from "./SalesCollectionCart";

import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
const SalesCollection = () => {
  const [searchText, setSearchText] = useState("");
  const [result, refetch, isLoading] = useProducts();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    setMyData(result);
  }, [result]);

  if (isLoading === true) {
    return <Loader></Loader>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearchText(searchText);
    const singleData = await axiosSecure.get(`/products/${user.email}/${searchText}`);

    if (searchText) {
      setMyData([singleData.data]);
    } else {
      setMyData(result);
    }
  };
  console.log(searchText);
  return (
    <div>
      <Helmet>
        <title> Inventohub | Sales Collection </title>
      </Helmet>
      {myData.length > 0 ? (
        <div className="pb-5">
          <div className="flex justify-between items-center flex-col sm:flex-row mb-4 gap-3">
            <h2 className="text-lg xsm:text-xl xs:text-2xl md:text-3xl text-light-text-100 dark:text-dark-text-100 font-semibold">All Product </h2>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex  items-center">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search by Id"
                    className="border border-[#c2c5c7] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-100  w-full py-2 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                  />
                  <div className="mt-2 px-2">
                    <button className="px-3 py-3 bg-button-gradient hover:bg-button-gradient-hover  rounded-md hover:bg-[#1B2850]  hover:duration-500 font-semibold text-white">
                      <IoSearchSharp />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="overflow-auto rounded-md block mt-5 shadow-light-container-shadow dark:shadow-dark-container-shadow">
              <table className="w-full">
                {/* head */}
                <thead className="bg-gray-50 dark:bg-dark-bg-300 border-b-2 border-gray-200 dark:border-slate-800 text-lg">
                  <tr className="text-light-text-100 dark:text-dark-text-100">
                    <th className="w-40 py-4 px-3 text-sm font-semibold tracking-wide text-left">Product Id</th>
                    <th className=" py-4 px-3 text-sm font-semibold tracking-wide text-left">Product Name</th>

                    <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center">Quantity</th>
                    <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center">Discount</th>

                    <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">SellingPrice</th>

                    <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center">Action</th>
                  </tr>
                </thead>
                {/* <thead>
                    <tr className="text-base text-[#1B2850] font-normal bg-[#FAFBFE] border-none rounded-md">
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Discount</th>
                      <th> SellingPrice</th>
                      <th>Action</th>
                    </tr>
                  </thead> */}
                <tbody>
                  {myData?.map((product) => (
                    <SalesCollectionCart key={product._id} product={product} refetch={refetch}></SalesCollectionCart>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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

export default SalesCollection;
