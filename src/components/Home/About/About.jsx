import Section from "../../shared/Section/Section";
import about from "../../../assets/about.jpg";
import Button1 from "../../shared/Button1/Button1";
const About = () => {
  return (
    <div className="px-5 lg:px-0">
      <Section>
        <div className="hero h-[500px] rounded-3xl " style={{ backgroundImage: `url(${about}) ` }}>
          <div className="hero-overlay bg-opacity-70 bg-black rounded-3xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-4xl">
              <h1 className="mb-5 text-5xl font-bold">
                <span className="text-[#FF792E]">About</span> us
              </h1>
              <p className="mb-5 text-justify text-xs md:text-lg text-[#d3dce6]">
                Welcome to our InventoHub, where seamless organization meets unmatched efficiency. Say goodbye to the chaos of manual tracking and
                embrace the future of inventory control. Our user-friendly interface empowers you to effortlessly manage stock levels, streamline
                order processes, and gain real-time insights into your inventorys heartbeat. Experience the ease of automated updates, precise
                forecasting, and a comprehensive overview of your assets. Take charge of your inventory with confidence and precision. Welcome to a
                new era of inventory management.
              </p>{" "}
              <Button1>Know more</Button1>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
