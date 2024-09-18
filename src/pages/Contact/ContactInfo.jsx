/* eslint-disable react/prop-types */
const ContactInfo = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="flex flex-col gap-3 text-center bg-light-bg-100 dark:bg-dark-bg-300 items-center py-6 px-5 shadow-light-container-shadow dark:shadow-dark-container-shadow rounded-lg group hover:-translate-y-2 duration-500">
      <Icon className="md:w-8 md:h-8 w-5 h-5 text-light-text-400 group-hover:scale-125 duration-700 ease-in-out" />
      <h1 className="font-bold text-light-text-100 dark:text-dark-text-100">
        {item.label}
        <span className="font-medium text-light-text-200 dark:text-dark-text-200">{item.info}</span>
      </h1>
      <p className="font-bold text-[#0B6FFC]">{item.desc}</p>
    </div>
  );
};

export default ContactInfo;
