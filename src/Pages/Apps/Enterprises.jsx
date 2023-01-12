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

const Enterprises = () => {
  ScrollToTop()
  return (
    <>
      <Header />
      <Banner
        specify="indv"
        h1="A trusted partner for your employee development"
        p="Built for complex enterprise-grading system, tracking both individual and team statistics and can be configured to location, business unit and office geography. "
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
      <FAQs apiPath="/api/v1/home_pages/faqs/?limit=10&product_name=ENTERPRISE" />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Enterprises;
