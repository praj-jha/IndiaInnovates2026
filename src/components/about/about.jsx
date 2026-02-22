import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About The Event</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/diamond.webp"
              alt="India Innovates logo"
              className="about-srm-logo"
            />
            India Innovates 2026
            <img
              src="/images/diamond.webp"
              alt="India Innovates logo"
              className="about-srmvec-logo"
            />
          </div>
          <div className="foundation-description" id="about-left">
            India Innovates 2026 is India's Biggest Tech Innovation Summit where 
            Code Meets Constitution. This prestigious event invites India's brightest 
            student innovators to bring working products, prototypes, and breakthrough 
            ideas that can transform governance, security, and national systems. 
            This is your chance to showcase at a national stage where policy meets 
            innovation, in front of investors, government leaders, bureaucrats, 
            diplomats, founders, and ecosystem builders at Bharat Mandapam, New Delhi 
            on 28th March 2026.
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("#")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/diamond.webp"
              alt="Innovation Themes"
            />
            Innovation Themes
          </div>
          <div className="about-srmvec-description" id="about-right">
            The summit focuses on three key innovation domains: Data Mining and 
            Processing - building solutions that strengthen democracy, governance, 
            citizen services, and political systems. Participants can choose from 
            various problem statements including designing AI-powered solutions 
            for national challenges. Teams of 3-6 members compete for prizes worth 
            Rs. 10,05,000!
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("#")}
          >
            <img
              className="about-csi-logo"
              src="/images/diamond.webp"
              alt="Organizing Partners"
            />
            Organizing Partners
          </div>
          <div className="about-csi-description" id="about-left">
            India Innovates 2026 is organized by a consortium of prestigious 
            institutions including Municipal Corporation of Delhi (MCD), DDU, 
            IIT Kharagpur, Delhi Transport Corporation (DTC), Netaji Subhas 
            University of Technology (NSUT), Guru Gobind Singh Indraprastha 
            University (GGSIPU), THE FISTA, and CBPACS - bringing together the 
            best minds from academia, government, and industry.
          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("#")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/diamond.webp"
              alt="Bharat Mandapam"
            />
            The Venue
          </div>
          <div className="about-whitehatians-description" id="about-right">
            Bharat Mandapam is India's premier convention and exhibition center 
            located at Pragati Maidan, New Delhi. This state-of-the-art venue 
            hosted the prestigious G20 Summit in 2023. The best solutions will be 
            provided exhibition space to display products to investors, founders, 
            policy makers, politicians, and industry leaders. On-spot evaluation 
            by judges along with ministries will declare the winners!
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
