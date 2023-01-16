import { React, useState } from "react";
import FAQs from "../../components/FAQs";
import Carousel from "../../components/Carousel";
import Images from "../../assets/images/Images";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Partners from "../../components/Partners";
// import Benefits from "../../components/Benefits";
import H2headings from "../../components/H2headings";
import MiniHeading from "../../components/MiniHeading";
import Process from "../../components/Process";
import EnterpriseFeatures from "../../components/EContentF";
import Header from "../../components/navbar/Header";
import ScrollToTop from "../../components/ScrollToTop";
import StatusMessage from "../../components/message/StatusMessage";
import { useEffect } from "react";

const Enterprises = () => {
  ScrollToTop();

  /* 
    Show message for "success" or "error".
    The default state is ''.
    Render the StatusMessage below the Header
    props: [type, setType, message]
  */
  useEffect(() => {
    document.title = "Create Courses ";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Create your first course with us !!!";
    document.head.appendChild(meta);
  }, []);
  const [messageType, setMessageType] = useState("");
  const [error, setError] = useState([]);

  return (
    <>
      <Header />
      <StatusMessage
        setMessageType={setMessageType}
        messageType={messageType}
      />
      <Banner
        specify="kidscc"
        h1="Come and impact lives with us. and turn your knowlegde into income"
        p="Become a creator, change lives- including yours. "
        img={Images.videogif}
      />
      <div className="ent_partner">
        <H2headings
          class="container h2heading p-50"
          p="Don’t miss the opportunity to join the digital revolution & be the first 50 early bird companies."
        />
        <Partners />
      </div>

      <MiniHeading class="mt-10" />
      <Process />
      <EnterpriseFeatures
        img={Images.on_phone}
        // fp="Get a quote"
        h2="Why you should start with us"
        // p="You get to teach your course your way
        // You get to inspire thousand of learners
        // You get rewarded with payments for your knowledge "
        button="Start With Us"
      />
      <Carousel />
      <FAQs apiPath="/api/v1/home_pages/faqs/?limit=10&product_name=" />
      <Newsletter
        setMessageType={setMessageType}
        messageType={messageType}
        setError={setError}
        error={error}
      />
      <Footer />
    </>
  );
};

export default Enterprises;
