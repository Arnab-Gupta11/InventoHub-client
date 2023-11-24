import banner from "../../../assets/cover.jpg";
const Banner = () => {
  return (
    <div>
      <div className="w-full">
        <div className="w-full -z-10  relative">
          <img src={banner} className="w-full h-[400px] lg:h-screen" />
          <div className="absolute flex items-end lg:items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-7 md:pl-24 w-2/3 lg:w-1/2">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10">
                Welcome to Our <span className="text-[#2ECA7F]">Library</span> Commun<span className="text-[#2ECA7F]">ity</span>
              </h2>
              <p className="hidden lg:block">
                Together, we will discover, learn, and grow. Welcome to a place where stories come alive and minds flourish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
