import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/style.css";
import Landing from "./Pages/Landing";
import Individual from "./Pages/Apps/Individual";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/individual" component={Individual} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
