import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { testimonials } from "../../../data/testimonials";
import Heading from "../../shared/Heading/Heading";
import Section from "../../shared/Section/Section";
const Review = () => {
  return (
    <div className="bg-light-bg-100 dark:bg-dark-bg-300 -z-20">
      <Section>
        <Heading heading={"Testimonials"} subHeading={"What Our Clients "} keyword={"Say"} />

        <div className="flex items-center justify-center flex-col">
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            modules={[Autoplay, FreeMode, Navigation]}
            className="max-w-[90%] lg:max-w-[60%] relative mx-auto px-2 -z-20"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="rounded-lg flex flex-col items-center justify-center text-center -z-10">
                <div className="grid place-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4 z-10 bg-slate-300 dark:bg-dark-bg-100 object-cover"
                  />
                </div>
                <h3 className="text-light-text-100 dark:text-dark-text-100 text-xl sm:text-2xl font-bold font-Cormorant-Garamond mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-[10px] sm:text-sm mb-2 text-light-text-200 dark:text-slate-500 font-semibold sm:font-medium">
                  {testimonial.position}
                </p>
                <p className="text-xs sm:text-base text-slate-600 dark:text-dark-text-200 font-medium">{testimonial.testimonial}</p>
                {/* <div className="button-next-slide absolute bg-[#FFFF] text-[#e7f867] z-20">Next</div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>
    </div>
  );
};

export default Review;
