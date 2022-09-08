import React from "react";
import Images from "../assets/images/Images";

const Features = () => {
  return (
    <section className="width-manager " id="spaces">
      <div className="featured pt-10 pb-10" id="1240">
        <div className="frame">
          <img src={Images.workspace} alt="FEATURES Pictures" />
        </div>
        <div className="features_cap" id="Cap">
          <p className="cap_lock-txt">Our Features</p>
          <h2>Instincthub features and unique delivery</h2>
          <p>
            We are a technology enterprise development establishment that
            focuses on helping your workforce achieve a premium learning
            experience with our physical and virtual engagment.
          </p>

          <div className="manage_features">
            <div className="accessible">
              <h4>100% Digital Content + Live Classes</h4>
              <p>Easy to access Materials on the go anytime.</p>
            </div>
            <div className="flexible">
              <h4>Enterprise-grading System </h4>
              <p>Easy to access Materials on the go anytime.</p>
            </div>
            <div className="group">
              <h4>Dedicated Success Team </h4>
              <p>
                We’ll create a partnership with you to develope and implement a
                learning strategy that aligned with your business Values.
              </p>
            </div>
            <div className="group">
              <h4>Personalized Learning</h4>
              <p>
                We help structure learning path based on your organization
                needs, and also engage your employees and monitor their
                progress.
              </p>
            </div>
            <div className="accessible">
              <h4>Multiple Projects</h4>
              <p>
                We’ll create a partnership with you to develope and implement a
                learning strategy that aligned with your business Values.
              </p>
            </div>
            <div className="community">
              <h4>Community Support</h4>
              <p>
                We have adquate support channel created for all our students
                enrolled in respective of their learning pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
