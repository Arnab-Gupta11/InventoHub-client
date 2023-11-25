import Section from "../../shared/Section/Section";
import { IoCall, IoMailUnreadSharp } from "react-icons/io5";
import Form from "./Form";
const Contact = () => {
  return (
    <div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-5 max-w-screen-lg items-center mx-auto gap-3 px-5 lg:px-0">
          <div className="md:col-span-2">
            <div className="text-center  px-5 lg:px-0 lg:text-start mb-5">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#FF6A25]">Contact Us</h2>
              <h1 className="text-3xl lg:text-5xl  font-semibold text-[#1B2850] mt-3">
                Get In Touch <span className="text-[#FF6A25]"> Today</span>
              </h1>
              <p className="text-justify text-[#7B7B8A] mb-5 mt-3">
                Connect with our dedicated team for any questions or support. We value your feedback and are committed to providing excellent service
                – contact us to experience customer care at its best.
              </p>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#FFF2F2] w-10 h-10">
                    <span className="flex justify-center pt-3">
                      <IoMailUnreadSharp className=" text-[#FF7E84]  "></IoMailUnreadSharp>
                    </span>
                  </div>
                  <div>
                    <p className="text-[#1B2850]  font-semibold">Email-us :</p>
                    <p className="text-xs text-[#7B7B8A] ">Contactyourmail@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#EAF9F7] w-10 h-10">
                    <span className="flex justify-center pt-3">
                      <IoCall className=" text-[#80D7CC]  "></IoCall>
                    </span>
                  </div>
                  <div>
                    <p className="text-[#1B2850]  font-semibold">Call-us :</p>
                    <p className="text-xs text-[#7B7B8A] ">+8801735345627,+8801735345638</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="md:col-span-3 ">
            <Form></Form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
