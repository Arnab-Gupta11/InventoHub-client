import { Helmet } from "react-helmet-async";
import About from "../../components/Home/About/About";
import Banner from "../../components/Home/Banner/Banner";
import Contact from "../../components/Home/Contact/Contact";
import Faq from "../../components/Home/FAQ/FAQ";
import Review from "../../components/Home/Review/Review";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import MeetMyTeam from "../../components/Home/MeetMyTeam/MeetMyTeam";
// import MeetMyTeam from "../../components/Home/MeetMyTeam/MeetMyTeam";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Inventohub | Home</title>
      </Helmet>
      <Banner></Banner>
      <WhyChooseUs />
      <About></About>
      <MeetMyTeam />
      <Faq />
      <Review/>
    </div>
  );
};

export default Home;
