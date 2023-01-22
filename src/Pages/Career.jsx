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
import { Helmet } from "react-helmet";

const About = () => {
  ScrollToTop()

  return (
    <section>
      <Helmet>
        <title>Career at instinctHub</title>
        <meta name="description" content="Unlock the full potential of your career with our massive and growing business opportunity. Our organization is committed to providing you with the resources and support you need to succeed. " />
      </Helmet>
      <Header />
      <CareerBanner />
      <CareerGrowth />
      <CareerBenefit />
      <CoreValues />
      {/* <Jobs  /> */}
      {/* <SelectDrop selected={selected} setSelected={setSelected} /> */}
      <Newsletter />
      <Footer />
    </section>
  );
};

export default About;
