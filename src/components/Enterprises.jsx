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
              You don’t need to be a genius or a visionary, or even a college
              graduate for that matter, to be successful. You just need
              framework and a dream.
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
