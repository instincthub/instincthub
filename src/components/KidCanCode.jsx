import React from "react";
import { Link } from "react-router-dom";

const KidCanCode = () => {
  return (
    <div className="per_gird gross-flex grid-4">
      <h1>Kids Can Code</h1>

      <div className="ent_d4 slide-in-bck-center">
        <div className="prior">
          <div className="trans">
            <h2>Kids Can Code</h2>
            <p>
              The biggest risk is not taking any risk... In a world that's
              changing really quickly, the only strategy that is guaranteed to
              fail is not taking risks
            </p>
            <Link to="products/kidscancode/">
              <button className="outlined-btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidCanCode;
