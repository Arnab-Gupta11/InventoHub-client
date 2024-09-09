/* eslint-disable react/prop-types */
const Heading = ({ heading, subHeading, keyword }) => {
  return (
    <div className="text-center mb-10 xs:mb-16 md:mb-20 space-y-8">
      <span className="font-Cormorant-Garamond font-bold text-lg sm:text-xl bs:text-2xl text-[#FF792E] shadow-md shadow-[#FCD0CC] dark:shadow-[#181C51] px-3 py-1 rounded-md">
        {heading}
      </span>
      <h2 className="text-xl sm:text-2xl bs:text-4xl font-bold mb-8 text-light-text-100 dark:text-dark-text-100">
        {subHeading}
        <span className="text-light-text-300 font-Work-Sans">{keyword}</span>
      </h2>
    </div>
  );
};

export default Heading;
