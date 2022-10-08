import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const FreePlan = () => {
  return (
    <div className="grid-row">
      <div className="plans">
        <div className="plan_top">
          <h4>Enterprise</h4>
          <a href="mailto:info@instincthub.com">Reach out for a quote</a>
          <p>info@instincthub.com</p>
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
        </ul>
      </div>
    </div>
  );
};

export default FreePlan;
