import React from "react";
import Navbar from "../components/Nav4Landing";
import Grid from "../components/3DGrid";
import ScrollToTop from "../components/ScrollToTop";
import { SeoHeader } from "../components/navbar/SeoHeader";

const LandingPage = () => {
  ScrollToTop()
  return (
    <div>
    <SeoHeader
        title="instinctHub - Learning Made Easy"
        description="Welcome to our learning platform! Here, you'll find a wealth of knowledge and resources at your fingertips. Whether you're a student, professional, or lifelong learner, we've got something for you. Our platform is designed to be interactive, engaging and easy-to-use. With a variety of courses, videos, assessments, and interactive activities, you'll be able to learn at your own pace and on your own schedule. We are committed to providing you with the best educational experience, and our team of experienced educators is always available to support you. Join us today and start expanding your horizons!"
        type="webapp"
        name="InstinctHub"
        thumbnail=''
        url={window.location.href}
      />
      <Navbar />
      <Grid />
    </div>
  );
};
export default LandingPage;
