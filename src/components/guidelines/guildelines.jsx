import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines | India Innovates 2026";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <p style={{ textAlign: "center", color: "#ffd700", marginBottom: "2rem", fontSize: "1.1rem" }}>
          India Innovates 2026 | Bharat Mandapam, New Delhi | 28 March 2026
        </p>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              <strong style={{ color: "#ffd700" }}>Team & Registration</strong>
              <br /><br />
              1. Teams must have 3-6 members. 🤝👥
              <br /> <br />
              2. Registration deadline: 10th March 2026 on Unstop. ⏰🗓️{" "}
              <br />
              <br />
              3. PPT submission period: 11th - 15th March 2026. 📝🗓️{" "}
              <br />
              <br />
              <strong style={{ color: "#ffd700" }}>Submission Guidelines</strong>
              <br /><br />
              4. Submit PPT in format: TeamName_DomainName.ppt/.pdf describing your idea, approach, and expected impact. 📄✅
              <br />
              <br />
              5. Non-compliant submissions may be rejected. ⚠️
              <br />
              <br />
              6. The project should be original and innovative, contributing to Viksit Bharat 2047. 🚀🇮🇳 <br />
              <br />
              7. Choose from 3 domains: Data Mining & Processing, Cybersecurity & National Security, or AI-Powered Innovation. 💡
              <br />
              <br />
            </div>
            <div className="guidelines-2">
              <strong style={{ color: "#ffd700" }}>Evaluation Process</strong>
              <br /><br />
              8. Round 1 (PPT Submission) is not an elimination round - best solutions get exhibition space. 🎯
              <br />
              <br />
              9. Round 2 (Evaluation): Core Committee reviews PPTs based on quality, feasibility, innovation, and impact. 👁️‍🗨️
              <br />
              <br />
              10. Round 3 (Grand Finale): Present to judges at Bharat Mandapam with on-spot evaluation. 🏆
              <br />
              <br />
              <strong style={{ color: "#ffd700" }}>Code of Conduct</strong>
              <br /><br />
              11. Professional conduct is mandatory. Any unethical behavior will result in disqualification. 🚫👮‍♂️
              <br />
              <br />
              12. Teams must present solutions clearly and professionally during the finale. 🗣️📊
              <br />
              <br />
              13. Prizes worth ₹10,05,000 for winners across all domains! 💰🏅
              <br /> <br />
              14. Each domain includes Open Innovation - bring your unique ideas for national development! ✨🇮🇳
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
