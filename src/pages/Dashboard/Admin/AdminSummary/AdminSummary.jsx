import { Helmet } from "react-helmet-async";
import Users from "./Users";

const AdminSummary = () => {
  return (
    <div>
      <Helmet>
        <title>Inventohub | Sales Summary</title>
      </Helmet>
      <Users></Users>
    </div>
  );
};

export default AdminSummary;
