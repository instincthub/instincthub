import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images/Images";

const Banner = (props) => {
  return (
    <section className="individual_banner" id="">
      <div className="container control_banner" id={props.specify}>
        <div className="crave_both">
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
          <div className="txt-align">
            {/* <a href="https://skills.instincthub.com/students/register/"> */}
            <Link to="/about/contact/">
              <button className="important-btn">Get Started</button>
            </Link>
            {/* </a> */}
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
