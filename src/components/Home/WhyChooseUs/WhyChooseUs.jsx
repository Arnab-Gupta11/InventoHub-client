import features from "../../../data/whyChooseUsData"; // Import the features array
import Section from "../../shared/Section/Section";

const WhyChooseUs = () => {
  return (
    <Section>
      <div className="text-center mb-20 space-y-4">
        <span className="font-Cormorant-Garamond font-bold text-lg sm:text-xl bs:text-2xl text-light-text-400 shadow-md shadow-[#FCD0CC] px-3 py-1 rounded-md mb-4">
          Why Choose Us
        </span>
        <h2 className="text-xl sm:text-2xl bs:text-4xl font-bold mb-8 text-light-text-100">
          Reason for Choose <span className="text-light-text-300 font-Work-Sans">InventoHub</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bs:grid-cols-3 gap-5 gap-y-10">
        {features.map((feature, index) => {
          const Icon = feature.Icon;
          const color = feature.color;
          return (
            <div key={index} className={`rounded-2xl relative shadow-feature-card-shadow`} style={{ backgroundColor: color }}>
              <div className={`w-14 h-14 bg-[#FED2C5] inline-flex justify-center items-center text-light-text-400 absolute -mt-5 left-5 rounded-md`}>
                <Icon size={24} className="" />
              </div>
              <div className="mt-7 p-5 ">
                <h3 className="text-lg md:text-2xl font-bold mb-2 font-Cormorant-Garamond text-light-text-100">{feature.title}</h3>
                <p className="text-xs md:text-base font-medium text-light-text-200">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
