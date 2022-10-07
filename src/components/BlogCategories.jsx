import React, { useState } from "react";
import AllBlog from "./AllBlog";

const BlogCategories = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="container job_tab" id="openpositions">
        <div className="blog_categories">
          <div className="tabs flex_1 dummy_height">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              All categories
            </button>
            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => handleClick(2)}
            >
              Education
            </button>
            <button
              className={`tab ${checkActive(3, "active")}`}
              onClick={() => handleClick(3)}
            >
              Security
            </button>
            <button
              className={`tab ${checkActive(4, "active")}`}
              onClick={() => handleClick(4)}
            >
              Digital Marketing
            </button>
            <button
              className={`tab ${checkActive(5, "active")}`}
              onClick={() => handleClick(5)}
            >
              Community
            </button>
          </div>

          <div className="panels flex_2">
            <div className={`panel ${checkActive(1, "active")}`}>
              <AllBlog />
            </div>

            <div className={`panel ${checkActive(2, "active")}`}></div>
            <div className={`panel ${checkActive(3, "active")}`}></div>
            <div className={`panel ${checkActive(4, "active")}`}></div>
            <div className={`panel ${checkActive(5, "active")}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCategories;
