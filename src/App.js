import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./utils/routesConfig";
import "./styles/styles.scss";
import "react-spark-ui/dist/index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
