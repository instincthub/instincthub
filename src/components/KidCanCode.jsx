import SpeedDial from "../components/SpeedDial";
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
              Get your child excited about coding with our interactive{" "}
              <b>Kids Can Code</b> program! Give them the skills to succeed in a
              tech-driven world and watch them thrive with <b>Kids Can Code</b>
              !"
            </p>
            <Link to="/products/kidscancode/">
              <button className="outlined-btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
      <SpeedDial />
    </div>
  );
};

export default KidCanCode;
