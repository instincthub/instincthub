import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";

const AllJobs = ({jobs}) => {
  useEffect(()=>{

  }, [jobs])
  return (
    <>
    {
      jobs ?
        jobs.results.map((option, index)=>{
          return <div key={index}>
            <div className="per_job">
              <div className="one">
                <h5>{option.title}</h5>
                <p>{option.job_category}</p>
              </div>
              <Link to={`/about/career/${option.id}`}>
                <button className="outlined-btn">Apply</button>
              </Link>
            </div>
          </div>
        })
      :
        <p>No Result found for this category.</p>
    }
    </>
  );
};

export default AllJobs;
