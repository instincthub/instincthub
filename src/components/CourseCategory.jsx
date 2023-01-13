import React from "react";
import H2headings from "./H2headings";

const CourseCategory = () => {
  return (
    <div className="container" id="courses">
      <H2headings class="h2heading" h2="Course Category" />
      <div className="course_base">
        <h3 className="python">Python</h3>
        <h3 className="React">React</h3>
        <h3 className="css">CSS</h3>
        <h3 className="html">HTML</h3>
        <h3 className="django">Django</h3>
        <h3 className="javascript">Javascript</h3>
        <h3 className="php">Php</h3>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="https://skills.instincthub.com/">
          <button className="outlined-btn">Browse all courses</button>
        </a>
      </div>
    </div>
  );
};

export default CourseCategory;
