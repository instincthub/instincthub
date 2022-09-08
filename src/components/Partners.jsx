import React from "react";
import Images from "../assets/images/Images";

const Testimonial = () => {
  return (
    <div className="container">
      <div className="overflowing">
        <div className="partners">
          <div className="per_partner">
            <img src={Images.talentQl} alt="" />
          </div>
          <div className="per_partner">
            <img src={Images.eyowo} alt="" />
          </div>
          <div className="per_partner">
            <img src={Images.piggyvest} alt="" />
          </div>
          <div className="per_partner">
            <img src={Images.andela} alt="" />
          </div>
          <div className="per_partner">
            <img src={Images.talentQl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
