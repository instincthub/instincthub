import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import BreadCrumb from "./BreadCrumb";
import JBrief from "./JBrief";
import { useParams } from "react-router-dom";
import { fetchLeadAPI } from "../assets/js/help_func";

const JobTabs = () => {
  const [data, setData] = useState(1);
  let { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  useState(()=>{
    let job_url = 'https://leadapi.instincthub.com/api/v1/careers/job/'+slug
    fetchLeadAPI(setData, job_url)
  })
  
  return (
    <>
    <BreadCrumb
        previous="Career"
        current="Design ( Mid-level Product design )"
        prevlink="/about/career/"
      />

      <div className="container job_tab">
        <div className="mt-5 tab_flex">
          <div className="tabs flex_1 dummy_height">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              Job Brief
            </button>
          </div>

          <div className="panels flex_2">
            {/*==========
              Privacy Policy
            =========== */}
            <div className={`panel ${checkActive(1, "active")}`}>
              <JBrief data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobTabs;
