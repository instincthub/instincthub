import {React, useState, useEffect} from "react";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import AboutProcess from "../components/AboutProcess";
import CoreValues from "../components/CoreValues";
import Header from "../components/navbar/Header";
import Teams from "../components/Teams";
import Newsletter from "../components/Newsletter";
import StatusMessage from "../components/message/StatusMessage";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  ScrollToTop()

  return (
    <section>
      <Header />
      <AboutBanner />
      <AboutProcess />
      <CoreValues />
      <Teams />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default About;
