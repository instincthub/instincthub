import React from "react";

const CreatorsFeatures = (props) => {
  let Feature = () => {
    <div className={props.features}>
      <div className="accessible">
        <h4>Easy Accessable</h4>
        <p>Easy to access Materials on the go anytime.</p>
      </div>
      <div className="flexible">
        <h4>Flexible Study Time</h4>
        <p>Easy to access Materials on the go anytime.</p>
      </div>
      <div className="affordable">
        <h4>Most Affordable Cost</h4>
        <p>Easy to access Materials on the go anytime.</p>
      </div>
      <div className="community">
        <h4>Community Support</h4>
        <p>Easy to access Materials on the go anytime.</p>
      </div>
    </div>;
  };
  return (
    <section className="width-manager" id="spaces">
      <div className="featured">
        <div className="frame">
          <img src={props.img} alt="FEATURES Pictures" />
        </div>
        <div className="features_cap">
          <p className="cap_lock-txt">{props.fp}</p>
          <h2>{props.h2}</h2>
          <p>
            We understand that our users may have different needs, and we are
            dedicated to providing the best possible service to each and every
            one of them. We look forward to hearing from you and helping you
            make the most of our platform.
          </p>
          <p>
            If you have any questions or concerns about our website or the
            services we offer, please don't hesitate to reach out to us. Our
            friendly and knowledgeable customer support team is here to help
            you.
          </p>

          <div className="get_start mt-2">
            <a href="tel:+23490164140911">
              <button className="outlined-btn schedule">{props.button}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsFeatures;
