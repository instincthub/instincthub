import React from "react";
import Images from "../assets/images/Images";

const CareerGrowth = () => {
  return (
    <section className="container " id="Growth">
      <div className="mini_heading">
        <p className="cap_lock-txt">Room for Growth</p>
        <h2>Our business opportunity is massive, and growing</h2>
        <p>
          Unlock the full potential of your career with our massive and growing
          business opportunity. Our organization is committed to providing you
          with the resources and support you need to succeed. Whether you're an
          entrepreneur looking to start your own business, an experienced
          professional looking to expand your reach, or just someone who wants
          to take control of your financial future, our opportunity has
          something for everyone.
        </p>
      </div>

      <div className="img_disk">
        <img src={Images.workstation} alt="" />
      </div>
    </section>
  );
};

export default CareerGrowth;
