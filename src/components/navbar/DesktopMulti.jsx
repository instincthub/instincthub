import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Master = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <Courses>
      <div className="ff_portion">
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active")}`}
            onClick={() => handleClick(1)}
          >
            Course Library
          </button>
          <button
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => handleClick(2)}
          >
            Track Library
          </button>
        </div>
      </div>
      <div className="ff_2">
        <div className="panels flex_2 great_wall">
          <div className={`panel ${checkActive(1, "active")}`}>
            <CourseLibrary />
            <div className="action_point">
              <a href="https://skills.instincthub.com/">
                <button className="important-btn">Course Library</button>
              </a>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active")}`}>
            <TrackLibrary />

            <div className="action_point">
              <a href="https://skills.instincthub.com/course/tracks/list/">
                <button className="important-btn">Track Library</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Courses>
  );
};
const DesktopMulti = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandlingOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        onMouseEnter={(e) => {
          e.stopPropagation();
        }}
      >
        <Master />
        <img
          src="https://www.svgrepo.com/show/315851/close.svg"
          alt="c"
          onClick={onClose}
        />
      </ModalContainer>
    </HandlingOverlay>
  );
};
export default DesktopMulti;

const CourseLibrary = () => {
  return (
    <div className="control_list">
      {/* Web Development */}
      <ul>
        <h5>HTML</h5>
        <li>
          <a href="https://skills.instincthub.com/course/introduction-html-basics/">
            Introduction to HTML
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/html-fundamentals/">
            HTML Fundamental
          </a>
        </li>
      </ul>

      {/* Design */}
      <ul>
        <h5>CSS</h5>
        <li>
          <a href="https://skills.instincthub.com/?subject=css">
            Introduction to CSS
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/Responsive-Web-Design/">
            Responsive Designs
          </a>
        </li>
        {/* <li>
          <a href="">Game Design</a>
        </li>
        <li>
          <a href="">Web Design</a>
        </li>
        <li>
          <a href="">Graphics design & illustration</a>
        </li> */}
      </ul>

      {/* Data Science */}
      <ul>
        <h5>Javascript</h5>
        <li>
          <a href="https://skills.instincthub.com/course/introduction-to-javascript/">
            Introduction to Javascript
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/janascript-anatomy/">
            Javascript Anatomy
          </a>
        </li>
        {/* <li>
          <a href="">Statistics</a>
        </li>
        <li>
          <a href="">Data Analysis</a>
        </li> */}
      </ul>

      {/* Marketing */}
      <ul>
        <h5>Python</h5>
        <li>
          <a href="https://skills.instincthub.com/course/introduction-to-python-programming-language/">
            Intro to Python
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/week-21-24-python-for-kids/">
            Python for Kids
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/Python-Control-Flow/">
            Python Control Flow
          </a>
        </li>
      </ul>
    </div>
  );
};
const TrackLibrary = () => {
  return (
    <div className="control_list">
      {/* Web Development */}
      <ul>
        <h5>Frontend Development</h5>
        <li>
          <a href="https://skills.instincthub.com/course/tracks/units/1/">
            Git Basics
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/tracks/units/1/">
            HTML Fundamentals
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/tracks/units/1/">
            CSS Basics
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/tracks/units/1/">
            Responsive Web Design
          </a>
        </li>
        <li>
          <a href="https://skills.instincthub.com/course/tracks/units/1/">
            Introduction to Javascript
          </a>
        </li>
      </ul>
    </div>
  );
};

// All Styles
let Courses = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  .great_wall {
    max-width: 870px;
    margin: 50px auto;
    .action_point {
      text-align: right;
    }
  }
  .control_list {
    display: flex;
    justify-content: space-between;
    ul {
      padding: 0 20px;
    }
  }
  .ff_portion {
    background: #00838f;
    width: 30%;
    .tabs {
      display: flex;
      flex-wrap: wrap;
      max-width: 240px;
      margin: 100px auto;
      button {
        color: #ffffff !important;
        transform: scale(1);
        width: 200px;
        &:hover {
          background: transparent;
          color: #ffffff !important;
          transform: scale(1.03);
        }
      }
      .active {
        background: #ffffff;
        color: #00838f !important;
        &:hover {
          background: #ffffff;
          color: #00838f !important;
        }
      }
    }
  }
  .ff_2 {
    background: #f9f9f9;
    border: 1px solid rgba(44, 51, 58, 0.1);
    width: 70%;
  }
`;
let HandlingOverlay = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  @media (max-width: 488px) {
    padding: 20px !important;
  }
`;

let ModalContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: 70px auto;
  height: auto;
  background: #ffffff;
  img {
    width: 35px;
    height: 35px;
    position: absolute;
    top: 20px;
    padding: 5px;
    cursor: pointer;
    right: 20px;
    transition: 0.3s;
    &:hover {
      background: #f3f3f3;
    }
  }

  @media (max-width: 488px) {
    img {
      top: 20px;
      right: 20px;
    }
  }
`;
