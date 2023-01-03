import { React, useState, useEffect } from "react";
import AllJobs from "./AllJobs";
import styled from "styled-components";
import { fetchLeadAPI } from "../assets/js/help_func";

const JobTabs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  // const setSelected = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

    const [selected, setSelected] = useState();

    /*
      Get Jobs List from LeadAPIs
    */
      const [data, setData] = useState()
  
       
      // console.log(jobs);
  
      useEffect(()=>{
        let cat_url = selected && selected !== 'ALL' ? 
        `https://leadapi.instincthub.com/api/v1/careers/?company_id=c2f9f41c-a6fc-43dd-a21d-49c0412f5476&job_category=${selected}` : 
        'https://leadapi.instincthub.com/api/v1/careers/?company_id=c2f9f41c-a6fc-43dd-a21d-49c0412f5476';
  
        fetchLeadAPI(setData, cat_url)
        console.log(data);
        
        
      },[selected])

  const handleClick = (e) =>{
    // console.log(e.textContent.toUpperCase());
    setSelected(e.textContent.toUpperCase())
  }

  
  return (
    <JobWrapper>
      <div className="container job_tab" id="openpositions">
        <div className="mini_heading mt-10">
          <h3>Want to join team?</h3>
          <p>Check out Job openings below and fill the application form.</p>
        </div>
        <div className="mt-3 tab_flex">
          <div className="tabs flex_1 dummy_height">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={(e) => handleClick(e.target)}
            >
              All
            </button>
            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={(e) => handleClick(e.target)}
            >
              Developer
            </button>
            <button
              className={`tab ${checkActive(3, "active")}`}
              onClick={(e) => handleClick(e.target)}
            >
              Design
            </button>
            <button
              className={`tab ${checkActive(4, "active")}`}
              onClick={(e) => handleClick(e.target)}
            >
              Animination
            </button>
            <button
              className={`tab ${checkActive(5, "active")}`}
              onClick={(e) => handleClick(e.target)}
            >
              Instructor
            </button>
          </div>

          <div className="panels flex_2">
            <div className={`panel ${checkActive(1, "active")}`}>
              <AllJobs jobs={data}/>
            </div>

            {/* <div className={`panel ${checkActive(2, "active")}`}>
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
            </div> */}
          </div>
        </div>
      </div>
    </JobWrapper>
  );
};

export default JobTabs;

const JobWrapper = styled.div `
  min-height: 50vh;
`;
