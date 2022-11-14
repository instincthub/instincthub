import React from "react";
import { Link } from "react-router-dom";

const CoursesPlan = (props) => {
  return (
    <div className="grid-row">
      <div className="plans">
        <div className="plan_top">
          <h4>Individual</h4>
          <p className="price">
            {props.duration === 'monthly' ? 'N20,000/monthly' : 'N216,000/yearly'}<span> </span>
          </p>
          <span className="save_msg">{props.duration === 'yearly' ? 'N24,000 saved from monthly 10% discount.' : ''}</span>
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
          <Link to={props.duration === 'monthly' ? "https://paystack.com/pay/instincthub-courses-month": "https://paystack.com/pay/instincthub-courses-yearly"}>
            <button className="native-btn">Choose Plan</button>
          </Link>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default CoursesPlan;
