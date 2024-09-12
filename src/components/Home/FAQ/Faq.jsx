import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../../data/faqs";
import Section from "../../shared/Section/Section";
import Heading from "../../shared/Heading/Heading";
import { faqVariants } from "../../../lib/animation";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Collapse if already open
    } else {
      setOpenIndex(index); // Open the selected one
    }
  };

  return (
    <section className="py-10 bg-light-bg-200 dark:bg-dark-bg-200">
      <Section>
        <div className="max-w-4xl mx-auto px-4">
          <Heading heading={"Frequently Asked Questions"} subHeading={"Explore common queries about "} keyword={"InventoHub"} />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 dark:border-gray-600">
                <button onClick={() => toggleFAQ(index)} className="flex justify-between items-center w-full py-4 text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-light-text-100 dark:text-dark-text-100">{faq.question}</h3>
                  <span className="text-light-text-200 dark:text-dark-text-200">{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                </button>

                {/* Wrap motion.div with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key={faq.answer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={faqVariants}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                    >
                      <p className="text-xs sm:text-base text-light-text-200 dark:text-dark-text-200 font-medium pb-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Faq;
