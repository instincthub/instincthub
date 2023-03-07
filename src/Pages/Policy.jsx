import React from "react";
import Footer from "../components/Footer";
import PolicyDetails from "../components/PolicyDetails";
import Header from "../components/navbar/Header";
import ScrollToTop from "../components/ScrollToTop";
import { SeoHeader } from "../components/navbar/SeoHeader";

const About = () => {
  ScrollToTop()
  return (
    <section>
      <SeoHeader
          title="instinctHub Policies"
          description="At instinctHub, we believe in fostering a positive and inclusive community for all users."
          type="webapp"
          name="InstinctHub"
          thumbnail=''
          url={window.location.href}
        />
      <Header />
      <PolicyDetails />
      <Footer />
    </section>
  );
};

export default About;
