// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/instincthub.css";
import LandingPage from "./Pages/Landing";
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
          <Route path="individual/" element={<Individual />} />
          <Route path="kidscancode/" element={<KidsCanCode />} />
          <Route path="enterprise/" element={<Enterprise />} />
          <Route path="course-creation/" element={<CourseCreation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
