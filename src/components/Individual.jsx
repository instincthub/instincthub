import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const FreePlan = () => {
  return (
    <div className="grid-row">
      <div className="plans">
        <div className="plan_top">
          <h4>Individual</h4>
          <p className="price">
            N20,000 <span> /Monthly</span>
          </p>
          <p>N0 saved from monthly ,0% Discount</p>
        </div>

        <ul className="access">
          <li>7 days limited access </li>
          <li>limited courses</li>
          <li>Quizes</li>
          <li>Projects</li>
          <li>Community support</li>
          <li>Usage and progress tracking</li>
          <li>Completion Certificates</li>
          <li className="not_available">Live Support</li>
          <li className="not_available">Slack integration</li>
          <li className="not_available">
            Personalized path and course assignment
          </li>
          <li className="not_available">
            Access to our customers success team
          </li>
          <li className="not_available">Onboarding plan creation</li>
          <li className="not_available">
            Ability to assign courses & Skill paths
          </li>
          <li className="not_available">Team learning Analytics</li>

          {/* <Link to="/payment"> */}
          <a href="https://paystack.com/pay/instincthub-courses-month">
            <button className="native-btn">Choose Plan</button>
          </a>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default FreePlan;
