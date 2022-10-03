import React from "react";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import AboutProcess from "../components/AboutProcess";
import AboutF from "../components/AboutF";
import Header from "../components/navbar/Header";
import Teams from "../components/Teams";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <section>
      <Header />
      <AboutBanner />
      <AboutProcess />
      <AboutF />
      <Teams />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default About;
