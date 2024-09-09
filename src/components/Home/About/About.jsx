import Section from "../../shared/Section/Section";
import about1 from "../../../assets/about1.jpg";
import about2 from "../../../assets/about2.jpg";
import Heading from "../../shared/Heading/Heading";
import "./about.css";
import AboutLeftSection from "./AboutLeftSection";
import AboutRightSection from "./AboutRightSection";
import AboutImage from "./AboutImage";
const About = () => {
  return (
    <div>
      <Section>
        <Heading heading={"About Us"} subHeading={"Your Success is Our Priority: Get to "} keyword={"Know Us"} />
        {/* First section */}
        <div className="grid grid-cols-1 bs:grid-cols-2 gap-5 bs:gap-10 items-center group">
          <div className="">
            <AboutImage img={about1} />
          </div>
          <div>
            <AboutLeftSection
              title={"Company Overview"}
              description={
                "Founded in 2024, InventoHub was born out of the need for a more efficient and user-friendly inventory management solution. Our mission is to empower businesses with cutting-edge tools to streamline their inventory processes, reduce costs, and drive growth."
              }
            />
            <AboutLeftSection
              title={"Achievements & Milestones"}
              description={
                "Since our launch, we've successfully onboarded over 100 businesses, helping them manage over 1 million inventory items seamlessly. We are proud to be recognized by [Industry Publication] as one of the top emerging tech companies in 2024."
              }
            />
          </div>
        </div>
        {/* second section */}
        <div className="grid grid-cols-1 bs:grid-cols-2 gap-5 bs:gap-10 items-center mt-5 md:mt-10 bs:mt-16 justify-end group">
          <div className="text-right order-2 bs:order-1">
            <AboutRightSection
              title={"Vision & Values"}
              description={
                "Our vision is to be the leading provider of scalable and secure inventory management solutions worldwide. We value innovation, customer satisfaction, and integrity in every aspect of our work."
              }
            />
            <AboutRightSection
              title={"Our Commitment to Quality"}
              description={
                "We are dedicated to delivering a top-notch product that evolves with your business. Our customer support team is here to help you every step of the way, ensuring that you get the most out of our system."
              }
            />
          </div>
          <div className="order-1 bs:order-1">
            <AboutImage img={about2} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
// Welcome to our InventoHub, where seamless organization meets unmatched efficiency. Say goodbye to the chaos of manual tracking and
// embrace the future of inventory control. Our user-friendly interface empowers you to effortlessly manage stock levels, streamline
// order processes, and gain real-time insights into your inventorys heartbeat. Experience the ease of automated updates, precise
// forecasting, and a comprehensive overview of your assets. Take charge of your inventory with confidence and precision. Welcome to a
// new era of inventory management.
