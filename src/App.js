import { React } from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/style.css";
import "./assets/scss/instincthub.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Career from "./pages/Career";
import Pricing from "./pages/Pricing";
import AdminLogin from "./pages/Blog/Login";
import Success from "./pages/PricingAlert/Success";
import Error from "./pages/PricingAlert/Error";
import Error404 from "./components/Status/Error404";
import Error500 from "./components/Status/Error500";
import JobDetails from "./pages/JobDetails";
import Blog from "./pages/Blog/Blog";
import AdminBlogList from "./pages/Blog/AdminBlogList";
import BlogDetails from "./pages/Blog/BlogDetails";
import Individual from "./pages/Apps/Individual";
import KidsCanCode from "./pages/Apps/KidsCanCode";
import Enterprise from "./pages/Apps/Enterprises";
import CourseCreation from "./pages/Apps/CourseCreation";
import UserProfile from "./pages/UserProfile";
import { Certificates } from "./pages/Certificates";

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

        {/* Certificate */}
        <Route path="certificates/:user/:course" element={<Certificates />} />

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
