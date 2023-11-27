import DashContainer from "../../../../components/shared/DashContainer/DashContainer";
import Loader from "../../../../components/shared/Loader/Loader";
import useShops from "../../../../hooks/useShops";
import ManageShopCard from "./ManageShopCard";

const ManageShop = () => {
  const [result, isLoading] = useShops();
  if (isLoading === true) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        {result.length > 0 ? (
          <div className="py-5 px-8">
            <h2 className="text-xl md:text-3xl text-[#1B2850] font-semibold ml-1">Total {result.length} Shop</h2>
            <DashContainer>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr className="text-base text-[#1B2850] font-normal bg-[#FAFBFE] border-none rounded-md">
                        <th>Shop Name</th>
                        <th>Product Limit</th>
                        <th> Shop Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result?.map((shop) => (
                        <ManageShopCard key={shop._id} shop={shop}></ManageShopCard>
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
              <h1 className="text-3xl text-[#1B2850] font-extrabold mt-4">No Shop Available</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageShop;
