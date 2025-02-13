import Loader from "../../../../components/shared/Loader/Loader";
import DashContainer from "../../../../components/shared/DashContainer/DashContainer";
import Swal from "sweetalert2";
import CheckOutCard from "./CheckOutCard";
import useCarts from "../../../../hooks/useCarts";
import Button2 from "../../../../components/shared/Button2/Button2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import jsPDF from "jspdf";
import { Helmet } from "react-helmet-async";
import Button from "../../../../components/shared/Button/Button";
const CheckOut = () => {
  const [result, refetch, isLoading] = useCarts();
  const axiosSecure = useAxiosSecure();
  if (isLoading === true) {
    return <Loader></Loader>;
  }
  refetch();
  const cartId = result?.map((obj) => obj._id);
  const cartProductsIds = result?.map((obj) => obj.productId);
  const updatedData = result.map((obj) => ({
    ...obj,
    currentDate: new Date().toLocaleDateString(), // Add current date
    currentTime: new Date().toLocaleTimeString(), // Add current time
  }));

  const selectedProperty = ["productId", "product_name", "sellingPrice", "currentDate", "currentTime"];
  const invoice = updatedData.map((oldObj) => {
    const newObj = {};
    selectedProperty.forEach((property) => {
      newObj[property] = oldObj[property];
    });
    return newObj;
  });

  const handlePaid = async () => {
    const result = await axiosSecure.post("/sales", updatedData);
    await axiosSecure.post("/getPaid", { cartProductsIds, cartId });

    if (result.data.insertedCount) {
      Swal.fire({
        title: "Success!",
        text: "Product paid",
        icon: "success",
        confirmButtonText: "Cool",
      });
      refetch();
    }
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set initial y-coordinate for text
    let y = 20;

    // Function to check if there is enough space for content on the current page
    const checkIfNewPageNeeded = () => {
      if (y > 250) {
        // Adjust the value based on your layout
        doc.addPage(); // Add a new page
        y = 10; // Reset the y-coordinate
      }
    };

    // Iterate through the array of objects
    invoice.forEach((item) => {
      // Check if a new page is needed
      checkIfNewPageNeeded();

      doc.text("Invoice", 10, 10);
      // Iterate through object properties
      Object.keys(item).forEach((key) => {
        const value = item[key];
        // Add key-value pairs to the PDF
        doc.text(`${key}: ${value}`, 10, y);
        y += 10; // Move to the next line

        // Check if a new page is needed after each line
        checkIfNewPageNeeded();
      });

      // Add a line break between objects
      y += 5;
    });

    // Save the PDF or open in a new tab
    doc.save("Invoice.pdf");
  };
  return (
    <div>
      <Helmet>
        <title> Inventohub | Check Out </title>
      </Helmet>
      {result.length > 0 ? (
        <div className="py-5">
          <div className="flex justify-between flex-col xs:flex-row items-center gap-3">
            <h2 className="text-lg xsm:text-xl xs:text-2xl md:text-3xl text-light-text-100 dark:text-dark-text-100 font-semibold">
              Confirm Your Purchase
            </h2>
            <div>
              <Button variant={"default"} size={"md"} onClick={handlePaid}>
                Get Paid
              </Button>
            </div>
          </div>
          <div className="mb-7"></div>
          <div>
            <div className="overflow-auto rounded-md block mt-5 shadow-light-container-shadow dark:shadow-dark-container-shadow">
              <table className="w-full">
                {/* head */}
                <thead className="bg-gray-50 dark:bg-dark-bg-300 border-b-2 border-gray-200 dark:border-slate-800 text-lg">
                  <tr className="text-light-text-100 dark:text-dark-text-100">
                    <th className="py-4 px-3 text-sm font-semibold tracking-wide text-left">Product Name</th>
                    <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center">Discount</th>
                    <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">SellingPrice</th>
                    <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-center">Action</th>
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
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <h1 className="text-lg xs:text-3xl text-light-text-100 dark:text-dark-text-100 font-extrabold mt-4">No Product Available</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
