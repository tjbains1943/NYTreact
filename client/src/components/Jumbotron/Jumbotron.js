import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron bg-light mt-5 boxShadow"
  >
    {children}
  </div>
);

export default Jumbotron;
