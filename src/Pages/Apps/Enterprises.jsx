import React from "react";
import Accordion from "../../components/Accordion";
import Carousel from "../../components/Carousel";
import Images from "../../assets/images/Images";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Partners from "../../components/Partners";
// import Benefits from "../../components/Benefits";
import H2headings from "../../components/H2headings";
import Ent_Feature from "../../components/Ent_Feature";
import MiniHeading from "../../components/MiniHeading";
import Process from "../../components/Process";
import EnterpriseFeatures from "../../components/EContentF";

const Enterprises = () => {
  return (
    <>
      <Navbar />
      <Banner
        specify="indv"
        h1="A trusted partner for your employee development"
        p="Built for complex enterprise-grading system, tracking both individual and team statistics and can be configured to location, business unit and office geography. "
        img={Images.enterprise_landing}
      />
      <div className="ent_partner pt-10">
        <H2headings
          class="container h2heading p-50"
          p="Don’t miss the opportunity to join the digital revolution & be the first 50 early bird companies."
        />
        <Partners />
      </div>
      <Ent_Feature />
      <Accordion />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Enterprises;
