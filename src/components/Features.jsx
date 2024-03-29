import React from "react";
import Images from "../assets/images/Images";

const Features = () => {
  return (
    <section className="width-manager" id="spaces">
      <div className="featured">
        <div className="frame">
          <img src={Images.feature1} alt="FEATURES Pictures" />
        </div>
        <div className="features_cap">
          <h2>
            We help build and <span> personalized </span>your learning
            Experience
          </h2>
          <p>
            We created a unique learning experience in accordance to your wishes
            with some of the benefit you get from us and also keep our students
            engagement all through their learning journey.
          </p>

          <div className="manage_features">
            <div className="accessible">
              <h4>Easy Accessable</h4>
              <p>
                Seamless and convenient access to the tools and resources you
                need
              </p>
            </div>
            <div className="flexible">
              <h4>Flexible Study Time</h4>
              <p>
                Study at your own pace and schedule with flexible learning
                options
              </p>
            </div>
            <div className="affordable">
              <h4>Most Affordable Cost</h4>
              <p>Access high-quality education at an affordable cost</p>
            </div>
            <div className="community">
              <h4>Community Support</h4>
              <p>
                Connect and collaborate with a community of like-minded
                individuals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
