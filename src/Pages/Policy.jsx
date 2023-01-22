import React from "react";
import Footer from "../components/Footer";
import PolicyDetails from "../components/PolicyDetails";
import Header from "../components/navbar/Header";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from "react-helmet";

const About = () => {
  ScrollToTop()
  return (
    <section>
      <Helmet>
        <title>instinctHub Policies</title>
        <meta name="description" content="At instinctHub, we believe in fostering a positive and inclusive community for all users." />
      </Helmet>
      <Header />
      <PolicyDetails />
      <Footer />
    </section>
  );
};

export default About;
