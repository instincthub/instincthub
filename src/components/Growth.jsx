import React from "react";
import Images from "../assets/images/Images";
import MiniHeading from "./MiniHeading";

const Growth = (props) => {
  return (
    <section className="container growth" id="change_top">
      <div className="gravity">
        <div className="mini_heading ">
          <p className="cap_lock-txt"></p>
          <h2>Real-time visual on your teams growth.</h2>
          <p>
            Let help you streamline your workflow and automate manual tasks
            throughout contract lifecycle in systematic, rule-based environment.
          </p>
          <h3>12+ Online Course</h3>
          <h3>Approved by social expert</h3>
          <button className="outlined-btn pt-4" disabled>
            Explore Library
          </button>
        </div>
      </div>

      <div className="laptop_img">
        <img src={Images.laptop} alt="" />
      </div>
    </section>
  );
};

export default Growth;
