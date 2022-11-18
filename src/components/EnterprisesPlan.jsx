import React from "react";
import { Link } from "react-router-dom";

const EnterprisePlan = () => {
  return (
    <div className="grid-row">
      <div className="plans">
        <div className="plan_top">
          <h4>Enterprise</h4>
          <Link to="#">Reach out for custom quote</Link>
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

          <Link to="https://paystack.com/pay/instincthub-tracks-month">
            <button className="native-btn schedule">Schedule a call</button>
          </Link>
        </ul>
      </div>
      
    </div>
  );
};

export default EnterprisePlan;
