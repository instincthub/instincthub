import {React, useState, useEffect} from "react";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import AboutProcess from "../components/AboutProcess";
import CoreValues from "../components/CoreValues";
import Header from "../components/navbar/Header";
import Teams from "../components/Teams";
import Newsletter from "../components/Newsletter";
import { Helmet } from "react-helmet";
import StatusMessage from "../components/message/StatusMessage";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  ScrollToTop()

  return (
    <section>
      <Helmet>
        <title>About instinctHub</title>
        <meta name="description" content="At instinctHub, our approach to learning management is centered around delivering seamless and effective solutions that meet the unique needs of both our learners and partners. Our work process is designed to ensure that we deliver the highest quality service and support, while also providing a smooth and efficient experience for our users." />
      </Helmet>
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
