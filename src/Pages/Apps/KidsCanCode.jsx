import React from "react";
import FAQs from "../../components/FAQs";
import Carousel from "../../components/Carousel";
import KidsFeature from "../../components/KidsFeature";
import Images from "../../assets/images/Images";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Banner from "../../components/Banner";
import Benefits from "../../components/Benefits";
import Header from "../../components/navbar/Header";
import ScrollToTop from "../../components/ScrollToTop";
import { useEffect } from "react";

const Individual = () => {
  ScrollToTop();

  useEffect(() => {
    document.title = "Kids Can Code ";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "We have courses that your child can start taking immediately";
    document.head.appendChild(meta);
  }, []);
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
      <FAQs apiPath="/api/v1/home_pages/faqs/?limit=10&product_name=KIDSCANCODE" />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Individual;
