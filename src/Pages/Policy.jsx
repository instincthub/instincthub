import React from "react";
import Footer from "../components/Footer";
import PolicyDetails from "../components/PolicyDetails";
import Header from "../components/navbar/Header";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  ScrollToTop()
  return (
    <section>
      <Header />
      <PolicyDetails />
      <Footer />
    </section>
  );
};

export default About;
