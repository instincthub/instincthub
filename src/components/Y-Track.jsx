import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const FreePlan = () => {
  return (
    <div className="grid-row">
      <div className="plans">
        <div className="plan_top">
          <h3>Recommended</h3>
          <h4>Track</h4>
          <p className="price">
            672,000 <span> /Yearly</span>
          </p>
          <p>N168,000 saved from annual,20% Discount</p>
        </div>

        <ul className="access">
          <li>7 days limited access </li>
          <li>limited courses</li>
          <li>Quizes</li>
          <li>Projects</li>
          <li>Community support</li>
          <li>Usage and progress tracking</li>
          <li>Completion Certificates</li>
          <li>Live Support</li>
          <li>Slack integration</li>
          <li>Personalized path and course assignment</li>
          <li>Access to our customers success team</li>
          <li>Onboarding plan creation</li>
          <li>Ability to assign courses & Skill paths</li>
          <li>Team learning Analytics</li>

          <Link to="/payment">
            <button className="native-btn">Choose Plan</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FreePlan;
