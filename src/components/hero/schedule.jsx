import "./schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <p style={{ textAlign: "center", color: "#ffd700", marginBottom: "2rem", fontSize: "1.1rem" }}>
            India Innovates 2026 | Bharat Mandapam, New Delhi
          </p>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Jan
                  <div>
                    <div>24</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration Opens</h2>
              <p className="container-description">
                Registration is now open for India's brightest student innovators! 
                Join us at India's Biggest Tech Innovation Summit where code meets 
                constitution. Team size: 3-6 members. Register on Unstop to participate.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Registration Closes</h2>
              <h1 className="date">
                <div>
                  Mar
                  <div>
                    <div>10</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Last call for registration! Don't miss this incredible opportunity 
                to showcase your innovation at a national stage in front of investors, 
                government leaders, bureaucrats, diplomats, founders, and ecosystem builders.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h1 className="date">
                <div>
                  Mar
                  <div>
                    <div>11</div> <div>th</div>
                  </div>
                  -Mar
                  <div>
                    <div>15</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <h2 className="container-title">Round 1: PPT Submission</h2>
              <p className="container-description">
                Submit your presentation around the solution you have built. 
                Teams must submit their PPT in format: TeamName_DomainName.ppt/.pdf 
                describing your idea, approach, and expected impact. This won't be 
                an elimination round, but the best solutions will be provided an 
                exhibition space.
              </p>

              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Round 2: Evaluation</h2>
              <h1 className="date">
                <div>
                  Mar
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                The Core Committee members and mentors will thoroughly review all 
                submitted PPTs during the evaluation phase. Teams will be shortlisted 
                based on quality, feasibility, innovation, and impact. Only filtered 
                teams will move forward to the final showcase round.
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">Round 3: The Grand Finale</h2> <br />
              <h1 className="date">
                <div>
                  Mar
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                The solutions will be presented to our judges at Bharat Mandapam, 
                New Delhi. On-the-spot evaluation by judges along with ministries 
                will declare the winners from all domains. Display your product to 
                investors, founders, policy makers, politicians, and industry leaders.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Award Ceremony</h2>
              <h1 className="date">
                <div>
                  Mar
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Winners are announced across all domains with prizes worth ₹10,05,000! 
                Celebrate outstanding innovations that contribute to Viksit Bharat 2047. 
                Recognition from government leaders, industry experts, and the innovation ecosystem.
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <p style={{ textAlign: "center", color: "#ffd700", marginBottom: "1.5rem", fontSize: "0.9rem", padding: "0 1rem" }}>
            India Innovates 2026 | Bharat Mandapam, New Delhi
          </p>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Registration Opens</h2>{" "}
              <h2 className="date-mobile">
                <div>
                  Jan
                  <div>
                    <div>24</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Registration is now open for India's brightest student innovators! 
                Team size: 3-6 members. Register on Unstop to participate in India's 
                Biggest Tech Innovation Summit.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Registration Closes</h2>
              <h1 className="date-mobile">
                <div>
                  Mar
                  <div>
                    <div>10</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Last call for registration! Don't miss this incredible opportunity 
                to showcase your innovation at a national stage.
              </p>
              <span className="circle-mobile "></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Round 1: PPT Submission</h2>
              <h1 className="date-mobile">
                <div>
                  Mar
                  <div>
                    <div>11</div> <div>th</div>
                  </div>
                  -Mar
                  <div>
                    <div>15</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Submit your presentation in format: TeamName_DomainName.ppt/.pdf 
                describing your idea, approach, and expected impact.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h2 className="container-title-mobile">Round 2: Evaluation</h2>
              <h1 className="date-mobile">
                <div>
                  Mar
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Core Committee and mentors review submissions. Teams shortlisted 
                based on quality, feasibility, innovation, and impact.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Round 3: Grand Finale</h2>{" "}
              <br />
              <h1 className="date-mobile">
                <div>
                  Mar
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Present to judges at Bharat Mandapam. On-the-spot evaluation 
                by judges along with ministries will declare winners.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Award Ceremony</h2>
              <h1 className="date-mobile">
                <div>
                  Mar
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Winners announced with prizes worth ₹10,05,000! Celebrating 
                innovations for Viksit Bharat 2047.
              </p>
              <span className="circle-mobile"></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
