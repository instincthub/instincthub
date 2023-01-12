import { React, useState, useEffect } from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Header from "../components/navbar/Header";
import Jobs from "../components/Jobs";
import CoreValues from "../components/CoreValues";
import SelectDrop from "../components/SelectDrop";
import CareerBenefit from "../components/CareerBenefit";
import CareerGrowth from "../components/CareerGrowth";
import CareerBanner from "../components/CareerBanner";
import ScrollToTop from "../components/ScrollToTop";
import { fetchLeadAPI } from "../assets/js/help_func";

const About = () => {
  ScrollToTop()

  return (
    <section>
      <Header />
      <CareerBanner />
      <CareerGrowth />
      <CareerBenefit />
      <CoreValues />
      <Jobs  />
      {/* <SelectDrop selected={selected} setSelected={setSelected} /> */}
      <Newsletter />
      <Footer />
    </section>
  );
};

export default About;
