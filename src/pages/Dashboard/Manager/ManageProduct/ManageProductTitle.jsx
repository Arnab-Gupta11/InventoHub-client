/* eslint-disable react/prop-types */
import Button2 from "../../../../components/shared/Button2/Button2";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import useSingleShop from "../../../../hooks/useSingleShop";
import toast, { Toaster } from "react-hot-toast";
const ManageProductTitle = ({ productCount }) => {
  console.log("🚀 ~ file: ManageProductTitle.jsx:7 ~ ManageProductTitle ~ productCount:", productCount);
  const { shop } = useSingleShop();
  console.log("🚀 ~ file: ManageProductTitle.jsx:7 ~ ManageProductTitle ~ shop:", shop.productLimit);
  const handleAddProduct = () => {
    if (productCount === shop.productLimit) {
      toast("You reached your product limit! please buy subscription.", {
        icon: "📑",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Toaster></Toaster>
        <div>
          <h2 className="text-xl md:text-3xl text-[#1B2850] font-semibold">Total {productCount} Product Added</h2>
        </div>
        <div>
          <Link to={productCount === shop.productLimit ? "/dashboard/subscription" : "/dashboard/manage-product/addProduct"}>
            <Button2>
              <div className="flex gap-3 items-center" onClick={handleAddProduct}>
                <span className="font-semibold">
                  <IoMdAdd />
                </span>
                Add Product
              </div>
            </Button2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageProductTitle;
