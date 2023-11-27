import Button2 from "../../../../components/shared/Button2/Button2";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import useSingleShop from "../../../../hooks/useSingleShop";
const ManageProductTitle = () => {
  const { shop } = useSingleShop();
  console.log(shop.productLimit);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl md:text-3xl text-[#1B2850] font-semibold">Total 6 Product Added</h2>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default ManageProductTitle;
