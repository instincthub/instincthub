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
import Payment from "./Pages//Payment";
import JobDetails from "./Pages/JobDetails";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Individual from "./Pages/Apps/Individual";
import KidsCanCode from "./Pages/Apps/KidsCanCode";
import Enterprise from "./Pages/Apps/Enterprises";
import CourseCreation from "./Pages/Apps/CourseCreation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/products/individual/" element={<Individual />} />
          <Route path="/products/about/" element={<About />} />
          <Route path="/products/contact/" element={<Contact />} />
          <Route path="/products/kidscancode/" element={<KidsCanCode />} />
          <Route path="/products/enterprise/" element={<Enterprise />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/products/career" element={<Career />} />
          <Route path="/products/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/products/job" element={<JobDetails />} />
          <Route
            path="/products/course-creation/"
            element={<CourseCreation />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
