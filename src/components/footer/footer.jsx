import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
const footer = () => {
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          2026 - {"All Rights Reserved."}
        </p>
        <p className="copyright">
          India Innovates 2026 | MCD | DDU | IIT Kharagpur | NSUT | GGSIPU
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
