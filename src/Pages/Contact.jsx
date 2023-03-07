import {React, useEffect, useState} from "react";
import ContactForm from "../components/ContactForm";
import C_Banner from "../components/C_Banner";
import Footer from "../components/Footer";
import Header from "../components/navbar/Header";
import Newsletter from "../components/Newsletter";
import StatusMessage from "../components/message/StatusMessage";
import ScrollToTop from "../components/ScrollToTop";
import TopModal from "../components/message/StatusMessage";
import { SeoHeader } from "../components/navbar/SeoHeader";

const Contact = () => {
  ScrollToTop();
  const[data, setData] = useState()
  const[messageType, setMessageType] = useState()
  const[error, setError] = useState()
  const[status, setStatus] = useState()

  return (
    <>
    <SeoHeader
        title="Contact instinctHub"
        description="Connect with us and take the first step towards achieving your goals."
        type="webapp"
        name="InstinctHub"
        thumbnail=''
        url={window.location.href}
      />
      <Header />
      <StatusMessage 
          setStatus={setMessageType}
          status={messageType}
      />
      <C_Banner />
      <ContactForm 
        setData={setData} 
        setMessageType={setMessageType} 
        messageType={messageType} 
        setError={setError} 
        setStatus={setStatus} 
        data={data}
        status={status}
      />
      <TopModal />
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
};

export default Contact;
