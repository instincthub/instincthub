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
          <h3>120K</h3>
          <p>Our Students</p>
        </div>
        <div className="per_who quality">
          <h3>60+</h3>
          <p>Quality Courses</p>
        </div>
        <div className="per_who instructor">
          <h3>17</h3>
          <p>Experience Instructors</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeare;
