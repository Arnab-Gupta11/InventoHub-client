/* eslint-disable react/prop-types */
const DashContainer = ({ children }) => {
  return (
    <div className=" bg-light-bg-200 dark:bg-dark-bg-300 shadow-light-container-shadow dark:shadow-dark-container-shadow mb-10 rounded-md lg:mx-0 min-h-screen mt-6">
      {children}
    </div>
  );
};

export default DashContainer;
