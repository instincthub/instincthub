import React from "react";
import {createRoot} from 'react-dom/client';
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/instincthub.css";
import LandingPage from "./Pages/Landing";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Policy from "./Pages/Policy";
// import Career from "./Pages/Career";
// import Pricing from "./Pages/Pricing";
// import Payment from "./Pages//Payment";
// import JobDetails from "./Pages/JobDetails";
// import Blog from "./Pages/Blog/Blog";
// import BlogDetails from "./Pages/Blog/BlogDetails";
// import Individual from "./Pages/Apps/Individual";
// import KidsCanCode from "./Pages/Apps/KidsCanCode";
// import Enterprise from "./Pages/Apps/Enterprises";
// import CourseCreation from "./Pages/Apps/CourseCreation";





function Index() {
    return (
        <BrowserRouter basename="/instincthub" >
            <Routes>
                <Route index element={<LandingPage />} />

                {/* About */}
                {/* <Route path="/about/" element={<About />} />
                <Route path="/about/contact/" element={<Contact />} />
                <Route path="/about/career/" element={<Career />} />
                <Route path="/about/career/:slug/" element={<JobDetails />} /> */}

                {/* Products */}
                {/* <Route path="/products/individual/" element={<Individual />} />
                <Route path="/products/kidscancode/" element={<KidsCanCode />} />
                <Route path="/products/enterprise/" element={<Enterprise />} />
                <Route path="/products/course-creation/" element={<CourseCreation />} />
                <Route path="/products/pricing/" element={<Pricing />} />
                <Route path="/product/payment/" element={<Payment />} /> */}

                {/* Policies */}
                {/* <Route path="/policies/privacy-policy/" element={<Policy />} /> */}

                {/* Posts */}
                {/* <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug/" element={<BlogDetails />} /> */}
          </Routes>
        </BrowserRouter>
      );
  }
  
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<Index />);
