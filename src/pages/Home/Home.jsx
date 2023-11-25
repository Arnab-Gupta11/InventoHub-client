import About from "../../components/Home/About/About";
import Banner from "../../components/Home/Banner/Banner";
import Contact from "../../components/Home/Contact/Contact";
import Faq from "../../components/Home/FAQ/FAQ";
// import Review from "../../components/Home/Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Faq></Faq>
      <About></About>

      <Contact></Contact>
      {/* <Review></Review> */}
    </div>
  );
};

export default Home;
