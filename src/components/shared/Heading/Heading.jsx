/* eslint-disable react/prop-types */
const Heading = ({ heading, subHeading, keyword }) => {
  return (
    <div className="text-center mb-10 xs:mb-16 md:mb-20 space-y-4">
      <span className="font-Cormorant-Garamond font-bold text-lg sm:text-xl bs:text-2xl text-light-text-400 shadow-md shadow-[#FCD0CC] px-3 py-1 rounded-md mb-4">
        {heading}
      </span>
      <h2 className="text-xl sm:text-2xl bs:text-4xl font-bold mb-8 text-light-text-100">
        {subHeading}
        <span className="text-light-text-300 font-Work-Sans">{keyword}</span>
      </h2>
    </div>
  );
};

export default Heading;
