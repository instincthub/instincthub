import React from "react";
import Footer from "../components/Footer";
import T_C from "../components/T_C";
import Header from "../components/navbar/Header";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  ScrollToTop()
  return (
    <section>
      <Header />
      <T_C />
      <Footer />
    </section>
  );
};

export default About;
