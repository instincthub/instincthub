import React from "react";
import SVGs from "../assets/svg/SVGs";

const KidsFeatures = () => {
  return (
    <section className="width-manager" id="spaces">
      <div className="featured">
        <div className="frame">
          <img src={SVGs.star_gif} alt="FEATURES Pictures" className="gif" />
        </div>
        <div className="features_cap">
          <div className="mini_heading">
            <p className="cap_lock-txt">OUR VALUE</p>
            <h2>Instincthub values</h2>
            <p>
              Nisi ut ultricies feugiat aliquam dignissim. Orci velit ultrices
              non est lectus. Aliquet dui vulputate auctor dictumst mauris
              lobortis. Faucibus viverra donec placerat quam consectetur cum
              faucibus augue elit. Urna donec sagittis.
            </p>
          </div>

          <div className="about_feature">
            <div className="">
              <p>
                Eget egestas dolor pretium etiam volutpat. Dapibus non malesuada
                purus venenatis cursus orci nunc ut eu.
              </p>
              <p>
                Eget egestas dolor pretium etiam volutpat. Dapibus non malesuada
                purus venenatis cursus orci nunc ut eu.
              </p>
              <p>
                Eget egestas dolor pretium etiam volutpat. Dapibus non malesuada
                purus venenatis cursus orci nunc ut eu.
              </p>
              <p>
                Eget egestas dolor pretium etiam volutpat. Dapibus non malesuada
                purus venenatis cursus orci nunc ut eu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsFeatures;
