import React, { useState } from "react";
import AllJobs from "./AllJobs";
import DevJobs from "./DevJob";
import Design from "./DesignJob";
import Anime from "./AnimeJob";
import Instructor from "./InstrJob";

const JobTabs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="container job_tab">
        <div className="mini_heading mt-10">
          <h2>Want to join team?</h2>
          <p>Check out Job openings below and fill the application form.</p>
        </div>
        <div className="mt-3 tab_flex">
          <div className="tabs flex_1 dummy_height">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              All
            </button>
            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => handleClick(2)}
            >
              Developer
            </button>
            <button
              className={`tab ${checkActive(3, "active")}`}
              onClick={() => handleClick(3)}
            >
              Design
            </button>
            <button
              className={`tab ${checkActive(4, "active")}`}
              onClick={() => handleClick(4)}
            >
              Animination
            </button>
            <button
              className={`tab ${checkActive(5, "active")}`}
              onClick={() => handleClick(5)}
            >
              Instructor
            </button>
          </div>

          <div className="panels flex_2">
            <div className={`panel ${checkActive(1, "active")}`}>
              <AllJobs />
            </div>

            <div className={`panel ${checkActive(2, "active")}`}>
              <DevJobs />
            </div>
            <div className={`panel ${checkActive(3, "active")}`}>
              <Design />
            </div>
            <div className={`panel ${checkActive(4, "active")}`}>
              <Anime />
            </div>
            <div className={`panel ${checkActive(5, "active")}`}>
              <Instructor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobTabs;
