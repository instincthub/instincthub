import React from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
  let PerJob = (props) => {
    return (
      <div className="per_job">
        <div className="one">
          <h5>{props.role}</h5>
          <p>{props.location}</p>
        </div>
        <Link to="/about/career/slug/">
          <button className="outlined-btn">Apply</button>
        </Link>
      </div>
    );
  };
  return (
    <div>
      <PerJob role="iOS Engineer" location="Remote, Contract" />
      <PerJob role="Back-end Developer" location="Remote, Contract" />
      <PerJob role="Front-end Developer" location="Remote, Contract" />
      <PerJob role="Mobile Dev." location="On-site, Contract" />
    </div>
  );
};

export default AllJobs;
