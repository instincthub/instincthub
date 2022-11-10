import React from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/instincthub.css";
import LandingPage from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import Career from "./Pages/Career";
import Pricing from "./Pages/Pricing";
// import Payment from "./Pages//Payment";
import AdminLogin from "./Pages/Authentication/Login";
import Success from "./Pages/PricingAlert/Success";
import Error from "./Pages/PricingAlert/Error";
import JobDetails from "./Pages/JobDetails";
import Blog from "./Pages/Blog/Blog";
import AdminBlog from "./Pages/Blog/Admin";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Individual from "./Pages/Apps/Individual";
import KidsCanCode from "./Pages/Apps/KidsCanCode";
import Enterprise from "./Pages/Apps/Enterprises";
import CourseCreation from "./Pages/Apps/CourseCreation";

function App() {
  return (
    <BrowserRouter basename="/instincthub">
      <Routes>
        <Route index element={<LandingPage />} />

        {/* Admin Login */}
        <Route path="/login/" element={<AdminLogin />} />

        {/* About */}
        <Route path="/about/" element={<About />} />
        <Route path="/about/contact/" element={<Contact />} />
        <Route path="/about/career/" element={<Career />} />
        <Route path="/about/career/:slug/" element={<JobDetails />} />

        {/* Products */}
        <Route path="products/individual" element={<Individual />} />
        <Route path="/products/kidscancode/" element={<KidsCanCode />} />
        <Route path="/products/enterprise/" element={<Enterprise />} />
        <Route path="/products/course-creation/" element={<CourseCreation />} />
        <Route path="/products/pricing/" element={<Pricing />} />
        {/* <Route path="/product/payment/" element={<Payment />} /> */}
        <Route path="/product/payment=success" element={<Success />} />
        <Route path="/product/payment=error" element={<Error />} />

        {/* Policies */}
        <Route path="/policies/privacy-policy/" element={<Policy />} />

        {/* Posts */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/admin" element={<AdminBlog />} />
        <Route path="/blog/:slug/" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
