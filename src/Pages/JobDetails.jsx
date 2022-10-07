import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import JobBrief from "../components/JobBrief";
import Footer from "../components/Footer";
import Header from "../components/navbar/Header";

const JobDetails = () => {
  return (
    <section>
      <Header />
      <BreadCrumb
        previous="Career"
        current="Design ( Mid-level Product design )"
        prevlink="/products/career"
      />
      <JobBrief />
      <Footer />
    </section>
  );
};

export default JobDetails;
