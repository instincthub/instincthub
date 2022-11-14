import React from "react";
import Footer from "../components/Footer";
import Header from "../components/navbar/Header";
// import PricingBanner from "../components/PricingBanner";
import { useState } from "react";
import FreePlan from "../components/FreePlan";
import CoursesPlan from "../components/CoursesPlan";
import EnterprisePlan from "../components/EnterprisesPlan";
import TrackPlan from "../components/TrackPlan";
import ScrollToTop from "../components/ScrollToTop";

const Pricing = () => {
  ScrollToTop()
  const [duration, setDuration] = useState('monthly');
  return (
    <section>
      <Header />
      <section className="banner_pricing">
        <div className="main_content container">
          <h1>Flexible plan for Everybody</h1>
          <p>
            Our plans are made for everyone, Whether you’re just starting out
            learning or have been on here for a long time. we have a plan for
            you.
          </p>
          <div className="switch_parent txt-align">
            <label class="switch">
              {/* Change duration state */}
              <input type="checkbox" onClick={(e) => e.target.checked ? setDuration('yearly') : setDuration('monthly')} />
              <span class="slider round"></span>
            </label>
            <p className="monthly_bill">Bill me Yearly</p>
          </div>
        </div>
      </section>

      <section className="subsc container fourcard_grid">
        <FreePlan duration={duration}/>
        <CoursesPlan duration={duration}/>
        <TrackPlan duration={duration}/>
        <EnterprisePlan duration={duration}/>
      </section>

      <Footer />
    </section>
  );
};

export default Pricing;
