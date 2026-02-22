import React, { useEffect } from "react";
import "./events.css";
import ReactGA from "react-ga";

const events = () => {
    useEffect(() => {
        document.title = "Stages | India Innovates 2026";
    });

    const handleStage = (stage) => {
        ReactGA.event({
            category: "Button",
            action: "click",
            label: `Events Stage-${stage}`,
        });
        if (stage == "1") {
            document.querySelector("#line-progress").style.width = "0%";
            document
                .querySelectorAll(".section-content")
                .forEach((stage) => stage.classList.remove("active"));
            document.querySelector(".stage1-content").classList.add("active");
        }
        if (stage == "2") {
            document.querySelector("#line-progress").style.width = "50%";
            document
                .querySelectorAll(".section-content")
                .forEach((stage) => stage.classList.remove("active"));
            document.querySelector(".stage2-content").classList.add("active");
        }
        if (stage == "3") {
            document.querySelector("#line-progress").style.width = "100%";
            document
                .querySelectorAll(".section-content")
                .forEach((stage) => stage.classList.remove("active"));
            document.querySelector(".stage3-content").classList.add("active");
        }
    };

    return (
        <React.Fragment>
            <div className="parent-events">
                <div style={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    padding: "1rem"
                }}>
                    <h1 style={{ color: "#ffd700", marginBottom: "0.5rem" }}>India Innovates 2026</h1>
                    <p style={{ color: "#ccc" }}>Building for the Nation | Contributing to Viksit Bharat 2047</p>
                </div>

                <div className="events-progress-bar">
                    <ul>
                        <li onClick={() => handleStage("1")}>Round 1</li>
                        <li onClick={() => handleStage("2")}>Round 2</li>
                        <li onClick={() => handleStage("3")}>Round 3</li>
                    </ul>
                    <div id="line">
                        <div id="line-progress"></div>
                    </div>
                </div>

                <div className="events-container">
                    <div className="section-content stage1-content active">
                        <div className="section-format">
                            <h1>Round 1: Registration & PPT Submission</h1>
                            <p>
                                <strong style={{ color: "#ffd700" }}>Registration Period:</strong> 24th January 2026 - 10th March 2026
                                <br /><br />
                                <strong style={{ color: "#ffd700" }}>PPT Submission:</strong> 11th March 2026 - 15th March 2026
                                <br /><br />

                                <strong>How to Register:</strong>
                                <br />
                                1️⃣ Register on Unstop for India Innovates 2026
                                <br />
                                2️⃣ Form a team of 3-6 members
                                <br />
                                3️⃣ Choose your domain: Data Mining, Cybersecurity, or AI Innovation
                                <br /><br />

                                <strong>PPT Submission Guidelines:</strong>
                                <br />
                                📝 Submit your PPT in format: <span style={{ color: "#ffd700" }}>TeamName_DomainName.ppt/.pdf</span>
                                <br />
                                📋 Describe your idea, approach, and expected impact
                                <br />
                                ⚠️ Non-compliant submissions may be rejected
                                <br /><br />

                                <em style={{ color: "#aaa" }}>This won't be an elimination round, but the best solutions will be provided an exhibition space to display the product to investors, founders, policy makers, politicians, and industry leaders.</em>
                            </p>
                        </div>
                    </div>

                    <div className="section-content stage2-content">
                        <div className="section-format">
                            <h1>Round 2: Evaluation</h1>
                            <p>
                                <strong style={{ color: "#ffd700" }}>Date:</strong> 28th March 2026
                                <br /><br />

                                🔍 The Core Committee members and mentors will thoroughly review all submitted PPTs during the evaluation phase.
                                <br /><br />

                                <strong>Evaluation Criteria:</strong>
                                <br />
                                ✅ Quality of the solution
                                <br />
                                ✅ Feasibility of implementation
                                <br />
                                ✅ Innovation and creativity
                                <br />
                                ✅ Potential impact on nation-building and Viksit Bharat 2047
                                <br /><br />

                                📢 Teams will be shortlisted based on these criteria. Only filtered teams will move forward to the final showcase round at Bharat Mandapam.
                                <br /><br />

                                <em style={{ color: "#aaa" }}>Selected teams will get the opportunity to present their solutions to government leaders, industry experts, and investors.</em>
                            </p>
                        </div>
                    </div>

                    <div className="section-content stage3-content">
                        <div className="section-format">
                            <h1>Round 3: The Grand Finale</h1>
                            <p>
                                <strong style={{ color: "#ffd700" }}>Date:</strong> 28th March 2026
                                <br />
                                <strong style={{ color: "#ffd700" }}>Venue:</strong> Bharat Mandapam, New Delhi
                                <br /><br />

                                🎉 The solutions will be presented to our judges who will be present at Bharat Mandapam, India's prestigious convention centre.
                                <br /><br />

                                <strong>What to Expect:</strong>
                                <br />
                                🏆 On-the-spot evaluation by judges
                                <br />
                                🏛️ Interaction with government ministries and policy makers
                                <br />
                                💰 Prizes worth ₹10,05,000
                                <br />
                                🤝 Networking with investors, founders, and industry leaders
                                <br /><br />

                                <strong>Winner Announcement:</strong>
                                <br />
                                Winners from all domains will be declared by judges along with ministry representatives.
                                <br /><br />

                                <em style={{ color: "#ffd700" }}>This is your chance to showcase at a national stage where policy meets innovation!</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default events;
