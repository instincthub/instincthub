import React from "react";
import Images from "../assets/images/Images";

const Banner = (props) => {
  return (
    <section className="individual_banner" id="">
      <div className="container control_banner" id={props.specify}>
        <div className="crave_both">
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
          <div className="txt-align">
            <button className="important-btn">Get Started</button>
          </div>
        </div>

        <div className="cut_img">
          <img src={props.img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
