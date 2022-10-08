import React from "react";
import Footer from "../components/Footer";
import FreePlan from "../components/FreePlan";
import Individual from "../components/Individual";
import Enterprise from "../components/EnterprisesPlan";
import Track from "../components/Track";
import Header from "../components/navbar/Header";

import PricingBanner from "../components/PricingBanner";

const About = () => {
  return (
    <section>
      <Header />
      <PricingBanner />
      <section className="subsc container fourcard_grid">
        <FreePlan />
        <Individual />
        <Track />
        <Enterprise />
      </section>
      <Footer />
    </section>
  );
};

export default About;
