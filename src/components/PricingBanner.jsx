import React from "react";

const PricingBanner = () => {
  return (
    <section className="banner_pricing">
      <div className="main_content container">
        <h1>Flexible plan for Everybody</h1>
        <p>
          Our plans are made for everyone, Whether you’re just starting out
          learning or have been on here for a long time. we have a plan for you.
        </p>
        <div className="switch_parent txt-align">
          <label class="switch">
            <input type="checkbox" />

            <span class="slider round"></span>
          </label>
          <p className="monthly_bill">Billed monthly</p>
          <p className="yearly_bill">Billed Yearly</p>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
