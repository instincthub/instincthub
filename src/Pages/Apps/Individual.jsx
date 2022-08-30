import React from "react";
import Accordion from "../../components/Accordion";
import Carousel from "../../components/Carousel";
import CourseCategory from "../../components/CourseCategory";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

const Individual = () => {
  return (
    <>
      <CourseCategory />
      <Carousel />
      <Accordion />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Individual;
