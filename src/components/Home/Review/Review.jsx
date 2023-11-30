import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://inventohub.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div className="bg-[#FAFBFE] mt-16">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className=" px-5 text-center ">
          <div className="">
            <h4 className="text-[#FF6A25] text-2xl font-semibold mb-3">Testimonial</h4>
            <h2 className="text-5xl font-bold text-[#1B2850] mb-4">What People say</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mr-5 lg:mr-0">
          {reviews.slice(0, 3)?.map((review) => (
            <ReviewCard key={review._id} reviewCard={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
