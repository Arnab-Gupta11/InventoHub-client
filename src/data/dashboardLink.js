import { FaBox } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdSummarize, MdPayment } from "react-icons/md";
export const dashboardManagerLink = [
  {
    label: "Mange Product",
    Icon: FaBox,
    link: "/dashboard/manage-product",
  },
  {
    label: "Sales Collection",
    Icon: IoCart,
    link: "/dashboard/sales-collection",
  },
  {
    label: "Check Out",
    Icon: FaClipboardCheck,
    link: "/dashboard/check-out",
  },
  {
    label: "Subscription",
    Icon: MdPayment,
    link: "/dashboard/subscription",
  },
  {
    label: "Sales Summary",
    Icon: MdSummarize,
    link: "Sales Summary",
  },
];
