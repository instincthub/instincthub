import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import JobBrief from "../components/JobBrief";
import Footer from "../components/Footer";
import Header from "../components/navbar/Header";
import ScrollToTop from "../components/ScrollToTop";

const JobDetails = () => {
  ScrollToTop()
  return (
    <section>
      <Header />
      <JobBrief />
      <Footer />
    </section>
  );
};

export default JobDetails;
