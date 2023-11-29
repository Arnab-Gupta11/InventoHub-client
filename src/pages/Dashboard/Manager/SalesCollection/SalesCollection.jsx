import useProducts from "../../../../hooks/useProducts";
import Loader from "../../../../components/shared/Loader/Loader";
import DashContainer from "../../../../components/shared/DashContainer/DashContainer";
import SalesCollectionCart from "./SalesCollectionCart";

import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
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
      {myData.length > 0 ? (
        <div className="py-5 px-8">
          <h2 className="text-xl md:text-3xl text-[#1B2850] font-semibold ml-1">All Product</h2>
          <DashContainer>
            <div className="mb-7">
              <form onSubmit={handleSubmit}>
                <div className="flex  items-center">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search by Id"
                    className="border border-[#c2c5c7] focus-within:outline-[#FF792E] block py-2 px-3 mt-2 rounded-md text-[#828F9A] font-medium"
                  />
                  <div className="mt-2 px-2 p">
                    <button className="px-3 py-3 bg-[#FF792E]  rounded-md hover:bg-[#1B2850]  hover:duration-500 font-semibold text-white">
                      <IoSearchSharp />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-base text-[#1B2850] font-normal bg-[#FAFBFE] border-none rounded-md">
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Discount</th>
                      <th> SellingPrice</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myData?.map((product) => (
                      <SalesCollectionCart key={product._id} product={product} refetch={refetch}></SalesCollectionCart>
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

export default SalesCollection;
