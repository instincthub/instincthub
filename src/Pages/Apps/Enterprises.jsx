import React from "react";
import FAQs from "../../components/FAQs";
import Images from "../../assets/images/Images";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Banner from "../../components/Banner";
import Partners from "../../components/Partners";
import H2headings from "../../components/H2headings";
import Ent_Feature from "../../components/Ent_Feature";
import Stat from "../../components/Stat";
import Growth from "../../components/Growth";
import Carousel from "../../components/Carousel";
import CompanyTestimonial from "../../components/Ent_Testimonials";
import Header from "../../components/navbar/Header";
import ScrollToTop from "../../components/ScrollToTop";
import { useEffect } from "react";

const Enterprises = () => {
  ScrollToTop();
  useEffect(() => {
    document.title = "Enterprises - Browse testimonies from other Companies";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "We can get you and your staff started with Digital Training ";
    document.head.appendChild(meta);
  }, []);
  return (
    <>
      <Header />
      <Banner
        specify="indv"
        h1="Help your employees acquire the right tech skills at the right time"
        p="Remote, hybrid and in-person teams can be trained from anywhere in the world with our learning management system built for the modern workforce."
        img={Images.enterprise_landing}
      />
      <div className="ent_partner ">
        <H2headings
          class="container h2heading p-50"
          p="Don’t miss the opportunity to join the digital revolution & be the first 50 early bird companies."
        />
        <Partners />
      </div>
      <Ent_Feature />
      <Stat />
      <Growth />
      <Carousel />
      {/* <CompanyTestimonial /> */}
      <FAQs apiPath="/api/v1/home_pages/faqs/?limit=10&product_name=" />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Enterprises;
