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
            Nisl vel amet ac quam cursus pharetra et. Volutpat consectetur
            integer purus risus etiam in vivamus. Maecenas donec leo amet
            feugiat morbi semper velit. Consectetur egestas aliquam nulla magna
            nisl mauris et lectus.
          </p>

          <div className="get_start mt-2">
            <button className="outlined-btn schedule">{props.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsFeatures;
