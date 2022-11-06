import React from "react";
import Footer from "../components/Footer";
import Header from "../components/navbar/Header";
// import PricingBanner from "../components/PricingBanner";
import MonthlyBill from "../components/MonthlyBill";
import YearlyBill from "../components/YearlyBill";
import { useState } from "react";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);
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
              <input type="checkbox" onClick={() => setYearly(!yearly)} />

              <span class="slider round"></span>
            </label>
            <p className="monthly_bill">Bill me Yearly</p>
            {/* <p className="yearly_bill">Billed Yearly</p> */}
          </div>
        </div>
      </section>
      {/* <PricingBanner /> */}

      {yearly ? <YearlyBill /> : <MonthlyBill />}
      {/* Conditional Rendering */}
      {/* <MonthlyBill /> */}

      <Footer />
    </section>
  );
};

export default Pricing;
