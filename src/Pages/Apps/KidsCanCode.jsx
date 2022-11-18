import React from "react";
import Accordion from "../../components/Accordion";
import Carousel from "../../components/Carousel";
import KidsFeature from "../../components/KidsFeature";
import Images from "../../assets/images/Images";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Banner from "../../components/Banner";
import Benefits from "../../components/Benefits";
import Header from "../../components/navbar/Header";
import ScrollToTop from "../../components/ScrollToTop";

const Individual = () => {
  ScrollToTop()
  return (
    <>
      <Header />
      <Banner
        specify="kidscc"
        h1="Quality tutoring for you Children through our digital tutorials."
        p=" Our courses provides your children fun time while learning with us. With the best mentors we have, educational strategies and well structured curriculum. we ensure your kids education will be guaranteed."
        img={Images.kidscancode}
      />
      {/* <Partners /> */}
      <Benefits />
      {/* <Features /> */}
      <KidsFeature />
      <Carousel id="forKids" />
      <Accordion />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Individual;
