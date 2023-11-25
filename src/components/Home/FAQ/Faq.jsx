import Section from "../../shared/Section/Section";
import Question from "./Qustion";
import faqImg from "../../../assets/faq.jpg";
const Faq = () => {
  return (
    <div>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 max-w-screen-xl items-center mx-auto gap-7 px-5 lg:px-0">
          <div className="md:col-span-3">
            <div className="text-center  px-5 lg:px-0 lg:text-start mb-5">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#FF6A25]">Frequently Asked Questions</h2>
              <h1 className="text-3xl lg:text-6xl  font-semibold text-[#1B2850] mt-3">
                Explore common queries about <span className="text-[#FF6A25]"> InventoHub</span>
              </h1>
            </div>
            <div>
              <Question></Question>
            </div>
          </div>
          <div className="md:col-span-2 order-first md:order-last">
            <img className="h-full rounded-lg hidden lg:block" src={faqImg} alt="" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Faq;
