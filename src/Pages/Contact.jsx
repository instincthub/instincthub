import React from "react";
import ContactForm from "../components/ContactForm";
import C_Banner from "../components/C_Banner";
import Footer from "../components/Footer";
import Header from "../components/navbar/Header";
import Newsletter from "../components/Newsletter";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  ScrollToTop()
  return (
    <>
      <Header />
      <C_Banner />
      <ContactForm />
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
};

export default Contact;
