import React from "react";

const AllJobs = () => {
  let PerJob = (props) => {
    return (
      <div className="per_job">
        <div className="one">
          <h5>{props.role}</h5>
          <p>{props.location}</p>
        </div>

        <button className="outlined-btn">Apply</button>
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
