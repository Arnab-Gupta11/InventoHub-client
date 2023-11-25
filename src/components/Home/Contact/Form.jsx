import Button1 from "../../shared/Button1/Button1";

const Form = () => {
  const shadow = {
    boxShadow: "0px 0px 25px  #d3dce6",
  };
  return (
    <div className=" max-w-lg mx-auto ">
      <form className="w-full px-3 lg:pl-11 py-10" style={shadow}>
        <div className="flex gap-2 lg:gap-8">
          <div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-[#F8F8F8] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-full"
                placeholder="Name*"
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                id="email"
                className="bg-[#F8F8F8] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-full "
                placeholder="email*"
                required
              />
            </div>
          </div>

          <div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-[#F8F8F8] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
                placeholder="Phone No*"
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                id="email"
                className="bg-[#F8F8F8] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
                placeholder="Website Address"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <textarea
            name=""
            id=""
            // cols="53"
            rows="5"
            className="bg-[#F8F8F8] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 my-5 w-full lg:w-11/12"
            placeholder="Your Message*"
          ></textarea>
        </div>

        <Button1>Send Message</Button1>
      </form>
    </div>
  );
};

export default Form;
