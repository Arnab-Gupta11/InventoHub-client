/* eslint-disable react/prop-types */
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import useSingleShop from "../../../../hooks/useSingleShop";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../../../components/shared/Button/Button";
const ManageProductTitle = ({ productCount }) => {
  const { shop } = useSingleShop();
  const handleAddProduct = () => {
    if (productCount === shop.productLimit) {
      toast("You reached your product limit! please buy subscription.", {
        icon: "📑",
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col xs:flex-row justify-between items-center gap-3">
        <Toaster></Toaster>
        <div>
          <h2 className="text-base xsm:text-lg xs:text-xl md:text-3xl text-light-text-100 dark:text-dark-text-100 font-semibold">
            Total Products in Inventory: {productCount}
          </h2>
        </div>
        <div>
          <Link to={productCount === shop.productLimit ? "/dashboard/subscription" : "/dashboard/manage-product/addProduct"}>
            <Button variant={"default"} size={"md"} onClick={handleAddProduct} icon={IoMdAdd} iconAnimation={"hover:scale-110"}>
              Add Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageProductTitle;
