import React from "react";
import Images from "../assets/images/Images";

const KidsFeatures = () => {
  return (
    <section className="width-manager" id="spaces">
      <div className="featured">
        <div className="frame">
          <img src={Images.kidsgif} alt="FEATURES Pictures" className="gif" />
        </div>
        <div className="features_cap">
          <h2>Achieve your Kids Goal with Instincthub</h2>
          <p>
            We are the best online course platform for your kids in the world.
            We present them with a good learning experience and mentors in their
            respective fields to support their goals.
          </p>

          <div className="manage_features">
            <div className="accessible">
              <h4>12+ Online Course</h4>
            </div>
            <div className="flexible">
              <h4>Completion Certificate</h4>
            </div>
            <div className="group ">
              <h4>Community Support</h4>
            </div>
            <div className="reviews">
              <h4>5K+ Rating & Reviews</h4>
            </div>
          </div>

          <div className="get_start mt-2">
            <button className="outlined-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsFeatures;
