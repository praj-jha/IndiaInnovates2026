import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";
import ReactGA from "react-ga";

const faqs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          FAQs
        </h1>

        <div className="faqs-section">
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is a hackathon?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              A hackathon is a social coding event that brings computer
              programmers and other interested people together to improve upon
              or build a new software program or a hardware solution for the
              provided problem statements.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is India Innovates 2026?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              India Innovates 2026 is India's Biggest Tech Innovation Summit
              where Code Meets Constitution. Organized by MCD, DDU, IIT Kharagpur,
              DTC, NSUT, GGSIPU, THE FISTA, and CBPACS at Bharat Mandapam,
              New Delhi. It invites India's brightest student innovators to
              bring working products and breakthrough ideas.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Who can participate?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              India Innovates 2026 is open to all students, professionals, and
              tech enthusiasts from across India. Whether you are a student,
              working professional, or startup founder, you are welcome to
              participate.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              How much is the registration fee?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Registration details and fee information will be available on
              the Unstop platform. Please visit the registration link for
              complete details about participation fees and what is included.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Where is the venue?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              India Innovates 2026 will be held at Bharat Mandapam, Pragati
              Maidan, New Delhi. This state-of-the-art venue hosted the G20
              Summit in 2023 and offers world-class facilities for this
              grand event.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              How to register for the hackathon?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Click the Register button on the home page and you will be
              directed to the Unstop registration page. Complete your
              registration there and our organizing team will contact you
              with further details.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the prize money of the winning team?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              India Innovates 2026 has an exciting prize pool of Rs. 10,05,000
              for winners across various domains!
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the team size to participate?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Teams must have 3-6 members. Please check the Unstop platform
              for detailed eligibility criteria and team composition guidelines.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What are the prerequisites considered for registering?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Participants may need to have knowledge and skills in areas such
              as electronics, programming, data analytics, and IoT technologies,
              depending on the theme of the hackathon. Participants must need to
              bring their own laptops, sensors, microcontrollers, and other
              necessary tools and equipment.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;
