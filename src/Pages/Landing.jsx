import React from "react";
import Navbar from "../components/Nav4Landing";
import Grid from "../components/3DGrid";
import ScrollToTop from "../components/ScrollToTop";

const LandingPage = () => {
  ScrollToTop()
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Navbar />
      <Grid />
    </div>
  );
};
export default LandingPage;
