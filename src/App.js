import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Input, Card, Button, Layout } from "./components";
import HomePage from "./pages/HomePage";
import "./styles/styles.scss";

const App = () => {
  return (
    <Router>
      <HomePage />
    </Router>
  );
};

export default App;
