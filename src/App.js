// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/instincthub.css";
import Landing from "./Pages/Landing";
import Individual from "./Pages/Apps/Individual";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<Landing />} />
              <Route path="individual/" element={<Individual />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
