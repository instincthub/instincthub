import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const FreePlan = () => {
  return (
    <div className="grid-row">
      <div className="plans">
        <div className="plan_top">
          <h4>Free</h4>
          <p>Limited access</p>
        </div>

        <ul className="access">
          <li>7 days limited access </li>
          <li>limited courses</li>
          <li>Quizes</li>
          <li className="not_available">Projects</li>
          <li className="not_available">Community support</li>
          <li className="not_available">Usage and progress tracking</li>
          <li className="not_available">Completion Certificates</li>
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

          <Link to="/payment">
            <button className="native-btn">Choose Plan</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FreePlan;
