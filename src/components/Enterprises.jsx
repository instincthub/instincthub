import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images/Images";

const Enterprises = () => {
  return (
    <div className="per_gird gross-flex ent">
      <h1>Enterprises</h1>

      <div className="ent_d2 slide-in-bck-center">
        <div className="prior">
          <div className="trans">
            <h2>Enterprises</h2>
            <p className="max405">
              Keep your employees up-to-date with the latest tech skills. <br />
              Our 'Tech Skills for Employees' training program offers
              customizable courses for your team's specific needs. Invest in
              their success today.
            </p>
            <Link to="products/enterprise/">
              <button className="outlined-btn cab">Training</button>
            </Link>
            <Link to="products/course-creation/">
              <button className="outlined-btn">Create Course</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprises;
