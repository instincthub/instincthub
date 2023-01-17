import React from "react";
import H2heading from "./H2headings";

const WhoWeare = () => {
  return (
    <div id="spaces">
      <H2heading
        class="container h2heading"
        h2="Who we are"
        p="We have been doing this for over 3 years because we want to always provide learning experience that are not taught in schools."
      />

      <div className="whoweare container">
        <div className="per_who student">
          <h3>1.6K</h3>
          <p>Students</p>
        </div>
        <div className="per_who quality">
          <h3>40+</h3>
          <p>Quality Courses</p>
        </div>
        <div className="per_who instructor">
          <h3>12</h3>
          <p>Experience Instructor</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeare;
