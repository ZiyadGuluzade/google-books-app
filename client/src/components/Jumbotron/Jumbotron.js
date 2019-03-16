import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-4">
    {children}
  </div>
);

export default Jumbotron;
