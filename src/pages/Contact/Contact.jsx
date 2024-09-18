import Heading from "../../components/shared/Heading/Heading";
import Section from "../../components/shared/Section/Section";
import { HiOutlinePhone } from "react-icons/hi";
import { TbLocation } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import ContactInfo from "./ContactInfo";
import Lottie from "lottie-react";
import contactAnim from "../../assets/Contact.json";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import Button from "../../components/shared/Button/Button";
const contactInfo = [
  {
    icon: HiOutlinePhone,
    label: "Phone: ",
    info: "+8801783473834",
    desc: "Call Us",
  },
  {
    icon: TbLocation,
    label: "Email: ",
    info: "contact@gmail.com",
    desc: "Write Us",
  },
  {
    icon: MdOutlineLocationOn,
    label: "Address: ",
    info: "110 Down Street chattogram, Bangladesh",
    desc: "Get Location",
  },
];
const Contact = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen bg-light-bg-200 dark:bg-dark-bg-200">
      <Section>
        <Heading heading={"Contact Us"} subHeading={"Get In Touch "} keyword={"Today"} />
        {/* contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 mb-4 md:mb-8">
          {contactInfo?.map((item, index) => {
            return <ContactInfo item={item} key={index} />;
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-1/2 md:w-4/6 bs:w-11/12 mx-auto flex items-center">
            <Lottie animationData={contactAnim} loop={true} />
          </div>
          <div className="px-5">
            <h1 className="text-lg xs:text-xl md:text-3xl mt-10 md:mt-16 text-light-text-100 dark:text-dark-text-100 font-semibold mb-4 md:mb-6 text-center w-full bs:w-4/6">
              Contact Form
            </h1>
            <form autoComplete="off">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="focus-within:outline-none bg-light-bg-100 dark:bg-dark-bg-300 border-[1px] border-slate-300 dark:border-slate-600 w-full bs:w-4/6 rounded-lg py-2 shadow-light-container-shadow dark:shadow-dark-container-shadow px-4 font-medium focus-within:bg-light-bg-200 dark:focus-within:bg-light-bg-200 text-slate-600 mt-4"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="name"
                  className="focus-within:outline-none bg-light-bg-100 dark:bg-dark-bg-300 border-[1px] border-slate-300 dark:border-slate-600 w-full bs:w-4/6 rounded-lg py-2 shadow-light-container-shadow dark:shadow-dark-container-shadow px-4 font-medium focus-within:bg-light-bg-200 dark:focus-within:bg-light-bg-200 text-slate-600 mt-4"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  name="name"
                  className="focus-within:outline-none bg-light-bg-100 dark:bg-dark-bg-300 border-[1px] border-slate-300 dark:border-slate-600 w-full bs:w-4/6 rounded-lg py-2 shadow-light-container-shadow dark:shadow-dark-container-shadow px-4 font-medium focus-within:bg-light-bg-200 dark:focus-within:bg-light-bg-200 text-slate-600 mt-4"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Your Message..."
                  name="name"
                  rows={5}
                  className="focus-within:outline-none bg-light-bg-100 dark:bg-dark-bg-300 border-[1px] border-slate-300 dark:border-slate-600 w-full bs:w-4/6 rounded-lg py-2 shadow-light-container-shadow dark:shadow-dark-container-shadow px-4 font-medium focus-within:bg-light-bg-200 dark:focus-within:bg-light-bg-200 text-slate-600 mt-4"
                />
              </div>
              <div className=" mt-8 ">
                <Button variant={"default"} className={"w-full bs:w-4/6"}>
                  {loading ? (
                    <span className="animate-spin flex justify-center">
                      <ImSpinner9 />
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
