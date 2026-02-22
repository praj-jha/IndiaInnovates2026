import React from "react";
import "./convener.css";
const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Register Now</h1>
        </div>

        <div className="convener-container" style={{ justifyContent: "center" }}>
          <div
            className="convener-card"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://unstop.com/conferences/india-innovates-2026-municipal-corporation-of-delhi-1625920")}
          >
            <img
              className="convener-card-image"
              src="/images/diamond.webp"
              alt="Register on Unstop"
            />
            <h1 className="convener-name">Register on Unstop</h1>
            <h1 className="convener-position">
              Click here to register your team
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
