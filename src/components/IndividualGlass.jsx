import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images/Images";

const IndividualGlass = () => {
  return (
    <div className="per_gird gross-flex  enterprise">
      <h1>Individuals</h1>
      <img src={Images.casual} alt="" className="bounce-top" />
      <div className="ent_d slide-in-bck-center">
        <div className="prior">
          <div className="trans">
            <h2>Individual</h2>
            <p>
              The biggest risk is not taking any risk... In a world that's
              changing really quickly, the only strategy that is guaranteed to
              fail is not taking risks
            </p>
            <Link to="/individual">
              <button className="important-btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualGlass;
