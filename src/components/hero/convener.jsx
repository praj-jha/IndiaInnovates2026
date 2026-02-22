import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Organizing Partners</h1>
        </div>

        <div className="convener-container" style={{ flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
          <div className="convener-card">
            <img className="convener-card-image" src="/images/diamond.webp" alt="MCD" />
            <h1 className="convener-name">MCD</h1>
            <h1 className="convener-position">Municipal Corporation of Delhi</h1>
          </div>
          <div className="convener-card">
            <img className="convener-card-image" src="/images/diamond.webp" alt="DDU" />
            <h1 className="convener-name">DDU</h1>
            <h1 className="convener-position">Deen Dayal Upadhyaya</h1>
          </div>
          <div className="convener-card">
            <img className="convener-card-image" src="/images/diamond.webp" alt="IIT KGP" />
            <h1 className="convener-name">IIT Kharagpur</h1>
            <h1 className="convener-position">Indian Institute of Technology</h1>
          </div>
          <div className="convener-card">
            <img className="convener-card-image" src="/images/diamond.webp" alt="DTC" />
            <h1 className="convener-name">DTC</h1>
            <h1 className="convener-position">Delhi Transport Corporation</h1>
          </div>
          <div className="convener-card">
            <img className="convener-card-image" src="/images/diamond.webp" alt="NSUT" />
            <h1 className="convener-name">NSUT</h1>
            <h1 className="convener-position">Netaji Subhas University of Technology</h1>
          </div>
          <div className="convener-card">
            <img className="convener-card-image" src="/images/diamond.webp" alt="GGSIPU" />
            <h1 className="convener-name">GGSIPU</h1>
            <h1 className="convener-position">Guru Gobind Singh Indraprastha University</h1>
          </div>
          <div className="convener-card">
            <img className="convener-card-image" src="/images/diamond.webp" alt="THE FISTA" />
            <h1 className="convener-name">THE FISTA</h1>
            <h1 className="convener-position">Partner Organization</h1>
          </div>
          <div className="convener-card">
            <img className="convener-card-image" src="/images/diamond.webp" alt="CBPACS" />
            <h1 className="convener-name">CBPACS</h1>
            <h1 className="convener-position">Partner Organization</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
