const Question = () => {
  const shadow = {
    boxShadow: "0px 0px 15px  #d3dce6",
  };
  return (
    <div>
      <div className="collapse collapse-arrow  mb-4" style={shadow} data-aos="fade-up">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-lg font-semibold text-[#1B2850]">What are the key benefits of using an InventoHub?</div>
        <div className="collapse-content text-[#7B7B8A]">
          <p>Improved accuracy, cost savings, enhanced efficiency, real-time visibility, and better decision-making are key benefits.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow  mb-4 " style={shadow} data-aos="fade-up">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold text-[#1B2850]">How does it work?</div>
        <div className="collapse-content text-[#7B7B8A]">
          <p>It integrates with existing systems, uses technology like barcode scanning, and updates inventory in real-time.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow  " style={shadow} data-aos="fade-up">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg  font-semibold text-[#1B2850]">How can an inventory management system help prevent stockouts?</div>
        <div className="collapse-content text-[#7B7B8A]">
          <p> By setting up automated reorder points, the system ensures timely restocking to meet customer demand.</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
