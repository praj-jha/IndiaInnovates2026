import React from "react";
import "./sponsors.css";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <Faqs />
        <Convener />
        <Coordinators />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
