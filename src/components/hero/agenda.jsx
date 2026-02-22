import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">
          <div className="title2">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            <h1 className="title-name">Agenda</h1>
          </div>
          <div className="agenda-text">
            <div className="agenda-lottie-animation">
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "40vw",
                  height: "50vh",
                  scale: "1.3",
                  // background: "red",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.5);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>
            <div className="agenda-des">
              <strong style={{ color: "#ffd700", fontSize: "1.2em" }}>Building for the Nation | Contributing to Viksit Bharat 2047</strong>
              <br /><br />
              India Innovates 2026 is India's Biggest Tech Innovation Summit — Where Code Meets Constitution.
              We invite India's brightest student innovators to bring working products, prototypes, and
              breakthrough ideas that can transform governance, security, and national systems.
              <br /><br />
              This is your chance to showcase at a national stage where policy meets innovation,
              in front of investors, government leaders, bureaucrats, diplomats, founders, and ecosystem builders
              at Bharat Mandapam, New Delhi.
            </div>
          </div>
        </div>
        <div className="parent-vision">
          <div className="vision">
            <div className="about-vision-title " id="agenda-left">
              <img
                src="/images/vision.webp"
                alt="vision-image"
                width="300px"
                className="about-vision-image"
              />
              Vision
            </div>
            <div className="about-vision-description" id="agenda-right">
              Contributing to Viksit Bharat 2047 — a developed India by its centenary of independence.
              Our vision is to empower young innovators to build solutions that transform governance,
              strengthen democracy, enhance citizen services, and secure our digital future.
              Through collaboration between technology and policy, we aim to create lasting impact
              on national systems and inspire the next generation of nation-builders.
            </div>
          </div>
          <div className="mission">
            <div className="about-mission-title" id="agenda-right">
              <img
                src="/images/target.webp"
                alt="mission-image"
                width={"250px"}
                className="about-mission-image"
              />
              Mission
            </div>
            <div className="about-mission-description" id="agenda-left">
              To bridge the gap between innovation and implementation by bringing together
              student innovators, government bodies, and industry leaders under one roof at
              Bharat Mandapam. Our mission is to identify breakthrough ideas across Data Mining,
              Cybersecurity, and AI Innovation that can be adopted at scale to serve the nation.
              Together, we build solutions that shape India's technological future.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
