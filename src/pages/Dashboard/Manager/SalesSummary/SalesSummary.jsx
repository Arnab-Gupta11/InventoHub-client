import { Helmet } from "react-helmet-async";
import Sales from "./Sales";

const SalesSummary = () => {
  return (
    <div>
      <Helmet>
        <title>Inventohub | Sales Summary</title>
      </Helmet>
      <Sales />
    </div>
  );
};

export default SalesSummary;
