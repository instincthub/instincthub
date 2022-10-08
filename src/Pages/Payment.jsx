import React from "react";
import BillingInfo from "../components/BillingInfo";
import Footer from "../components/Footer";
import PlanSummary from "../components/PlanSummary";
import Method from "../components/Method";
import Header from "../components/navbar/Header";

const Payment = () => {
  return (
    <>
      <Header />
      <PlanSummary />
      <BillingInfo />
      <Method />
      <Footer />
    </>
  );
};

export default Payment;
