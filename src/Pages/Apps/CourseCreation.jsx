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

const Enterprises = () => {
  ScrollToTop()

  /* 
    Show message for "success" or "error".
    The default state is ''.
    Render the StatusMessage below the Header
    props: [type, setType, message]
  */
    const [messageType, setMessageType] = useState('');
    const [error, setError] = useState([])

  
  return (
    <>
      <Header />
      <StatusMessage 
          setMessageType={setMessageType}
          messageType={messageType}
      />
      <Banner
        specify="kidscc"
        h1="We help digitalizing course creation from conventional mode to digital."
        p="Suscipit adipiscing placerat rhoncus pretium. Maecenas sodales cras dignissim ipsum turpis gravida. In bibendum sed gravida vitae dignissim. "
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
        fp="Get a quote"
        h2="We start with discovery call to understand"
        p="Nisl vel amet ac quam cursus pharetra et. Volutpat consectetur integer purus risus etiam in vivamus. Maecenas donec leo amet feugiat morbi semper velit. Consectetur egestas aliquam nulla magna nisl mauris et lectus. "
        button="Schedule Call"
      />
      <Carousel />
      <FAQs apiPath="/api/v1/home_pages/faqs/?limit=10&product_name=ENTERPRISE"/>
      <Newsletter setMessageType={setMessageType} messageType={messageType} setError={setError} error={error} />
      <Footer />
    </>
  );
};

export default Enterprises;
