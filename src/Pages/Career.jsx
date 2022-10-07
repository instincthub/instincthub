import React from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Header from "../components/navbar/Header";
import Jobs from "../components/Jobs";
import Test from "../test/Test";
import CoreValue from "../components/CoreValue";
import CareerBenefit from "../components/CareerBenefit";
import CareerGrowth from "../components/CareerGrowth";
import CareerBanner from "../components/CareerBanner";

const About = () => {
  return (
    <section>
      <Header />
      <CareerBanner />
      <CareerGrowth />
      <CareerBenefit />
      <CoreValue />
      <Jobs />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default About;
