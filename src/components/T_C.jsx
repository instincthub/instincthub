import React, { useState } from "react";
import AvailableJobs from "./Privacy";
import AppliedJobs from "./Terms";

const JobTabs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="container job_tab">
        <div className="mt-10 tab_flex">
          <div className="tabs flex_1 dummy_height">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              Privacy Policy
            </button>
            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => handleClick(2)}
            >
              Terms and condition
            </button>
          </div>

          <div className="panels flex_2">
            {/*==========
              Privacy Policy
            =========== */}
            <div className={`panel ${checkActive(1, "active")}`}>
              <AvailableJobs />
            </div>

            {/*==========
              Terms and condition
            =========== */}
            <div className={`panel ${checkActive(2, "active")}`}>
              <AppliedJobs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobTabs;
