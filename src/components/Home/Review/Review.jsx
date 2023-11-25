import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div className="bg-[#FAFBFE] mt-16">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className=" px-5 text-center ">
          <div className="">
            <h4 className="text-[#FF792E] text-2xl font-semibold mb-3">Testimonial</h4>
            {/* <h2 className="text-5xl font-bold text-[#2d373c] mb-4">What People say about</h2> */}
            <div className="text-xl md:text-4xl font-bold  mb-10">
              <span className="text-[#1B2850] font-extrabold">What Our Clients says</span>
            </div>
          </div>
          <div className="flex gap-5">
            <Marquee pauseOnHover="ture">
              {reviews?.map((review) => (
                <ReviewCard key={review._id} reviewCard={review}></ReviewCard>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
