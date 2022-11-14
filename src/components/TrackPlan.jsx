import React from "react";
import { Link } from "react-router-dom";

const TrackPlan = (props) => {
  return (
    <div className="grid-row">
      <div className="plans">
        <div className="plan_top">
          <h3>Recommended</h3>
          <h4>Track</h4>
          
          <p className="price">
            {props.duration === 'monthly' ? 'N70,000/monthly' : 'N756,000/yearly'}<span> </span>
          </p>
          <span className="save_msg">{props.duration === 'yearly' ? 'N84,000 saved from yearly 10% discount' : ''}</span>
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

          <Link to={props.duration === 'monthly' ? "https://paystack.com/pay/instincthub-tracks-month" : "https://paystack.com/pay/instincthub-tracks-yearly"}>
            <button className="native-btn">Choose Plan</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TrackPlan;
