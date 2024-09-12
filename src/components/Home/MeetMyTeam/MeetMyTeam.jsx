import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Section from "../../shared/Section/Section";
import Heading from "../../shared/Heading/Heading";
import { teamMembers } from "../../../data/teamMember";

const MeetMyTeam = () => {
  return (
    <div className=" bg-light-bg-100 dark:bg-dark-bg-300">
      <Section>
        <Heading heading={"Meet Our Team"} subHeading={"Behind the Vision of "} keyword={"InventoHub"} />
        <div className="flex items-center justify-center flex-col">
          <Swiper
            slidesPerView={1}
            // spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              520: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1680: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%] mx-auto px-2"
          >
            {teamMembers.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-feature-card-shadow dark:shadow-feature-card-shadow-dark rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 duration-500">
                  <div className="bg-team-bg rounded-lg group-hover:scale-105 duration-700 ease-in-out">
                    <img className="w-full object-contain h-64 rounded-lg" src={item.image} alt="team-member" />
                  </div>

                  <div className="flex flex-col gap-1 items-center">
                    <h1 className="text-xg sm:text-2xl font-Cormorant-Garamond font-bold text-light-text-100 dark:text-dark-text-100">{item.name}</h1>
                    <p className="text-sm sm:text-base text-light-text-200 dark:text-dark-text-200 font-medium pb-5">{item.role} </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>
    </div>
  );
};

export default MeetMyTeam;
