import { React } from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/style.css";
import "./assets/scss/instincthub.css";
import LandingPage from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import Career from "./Pages/Career";
import Pricing from "./Pages/Pricing";
import AdminLogin from "./Pages/Blog/Login";
import Success from "./Pages/PricingAlert/Success";
import Error from "./Pages/PricingAlert/Error";
import Error404 from "./components/Status/Error404";
import Error500 from "./components/Status/Error500";
import JobDetails from "./Pages/JobDetails";
import Blog from "./Pages/Blog/Blog";
import AdminBlogList from "./Pages/Blog/AdminBlogList";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Individual from "./Pages/Apps/Individual";
import KidsCanCode from "./Pages/Apps/KidsCanCode";
import Enterprise from "./Pages/Apps/Enterprises";
import CourseCreation from "./Pages/Apps/CourseCreation";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<LandingPage />} />

        {/* Admin Login */}
        <Route exact path="/login/" element={<AdminLogin />} />

        {/* Users */}
        <Route path="/:slug/" element={<UserProfile />} />

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
        {/* <Route path="/products/payment/" element={<Success />} /> */}
        {/* <Route path="/products/payment/failed" element={<Error />} /> */}

        {/* Errors */}
        <Route path="*" element={<Error404 />} />
        <Route path="/error500" element={<Error500 />} />

        {/* Policies */}
        <Route path="/policies/:slug/" element={<Policy />} />

        {/* Posts */}
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/admin" element={<AdminBlogList />} />
        <Route path="/blog/:slug/" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
