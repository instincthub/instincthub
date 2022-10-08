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
            N70,000 <span> /Monthly</span>
          </p>
          <p>$000 billed annually save 20%</p>
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
          <li className="not_available">Onboarding plan creation</li>
          <li className="not_available">
            Ability to assign courses & Skill paths
          </li>
          <li className="not_available">Team learning Analytics</li>

          <Link to="/payment">
            <button className="native-btn">Choose Plan</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FreePlan;
