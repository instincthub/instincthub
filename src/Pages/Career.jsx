import React from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Header from "../components/navbar/Header";
import Jobs from "../components/Jobs";

const About = () => {
  return (
    <section>
      <Header />
      <Jobs />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default About;
