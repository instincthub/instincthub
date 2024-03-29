import React, { useEffect } from "react";
import FAQs from "../../components/FAQs";
import Carousel from "../../components/Carousel";
import WhoWeare from "../../components/WhoWeare";
import CourseCategory from "../../components/CourseCategory";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Images from "../../assets/images/Images";
import Banner from "../../components/Banner";
import Header from "../../components/navbar/Header";
import ScrollToTop from "../../components/ScrollToTop";

const Individual = () => {
  ScrollToTop();
  useEffect(() => {
    document.title = "Individual - Browse Course Libraries";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "You've enrolled as an individual.";
    document.head.appendChild(meta);
  }, []);
  return (
    <>
      <Header />
      <Banner
        specify="indv"
        h1="Learn easily anywhere and anytime with our online Courses"
        p="Our courses provides you fun time while learning with us. With the
      best mentors we have, educational strategies and well structured
      curriculum. we ensure you education will be guaranteed."
        img={Images.individual}
      />
      <WhoWeare />
      <Features />
      <CourseCategory />
      <Carousel />
      <FAQs apiPath="/api/v1/home_pages/faqs/?limit=10&product_name=INDIVIDUAL" />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Individual;
