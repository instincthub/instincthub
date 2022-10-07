import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import JBrief from "./JBrief";

const JobTabs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
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
              <JBrief />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobTabs;
