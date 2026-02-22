import React, { useEffect, useState } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set1 = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  useEffect(() => {
    document.title = "Problem Statements | India Innovates 2026";
  });
  
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Problem Statements",
    });
    const ElementVisibility = Element.currentTarget.querySelector(
      ".software-content-description"
    );
    ElementVisibility.classList.toggle("projects-close");
    ElementVisibility.classList.toggle("projects-view");
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  const problemStatements = {
    dataMining: {
      title: "Data Mining and Processing",
      subtitle: "Strengthening Democracy, Governance & Citizen Services",
      problems: [
        {
          title: "AI-powered Global Ontology Engine",
          description: "Design and develop an AI-powered Global Ontology Engine that can collect and understand structured and unstructured data from multiple sources to provide actionable insights for governance and policy-making decisions."
        },
        {
          title: "Smart Citizen Services Platform",
          description: "Build a unified platform that integrates various government services, enabling citizens to access, track, and interact with public services seamlessly using AI-driven assistance."
        },
        {
          title: "Electoral Data Analytics System",
          description: "Create an intelligent system for analyzing electoral data, voter patterns, and demographic trends to enhance democratic processes and ensure fair representation."
        },
        {
          title: "Open Innovation",
          description: "Propose your own innovative solution that strengthens democracy, governance, citizen services, or political systems. Your unique ideas for national development are welcome!"
        }
      ]
    },
    cybersecurity: {
      title: "Cybersecurity and National Security",
      subtitle: "Protecting India's Digital Infrastructure",
      problems: [
        {
          title: "Critical Infrastructure Protection",
          description: "Develop advanced security solutions to protect critical national infrastructure including power grids, transportation systems, and communication networks from cyber threats."
        },
        {
          title: "AI-based Threat Detection",
          description: "Build an intelligent threat detection system that can identify, analyze, and respond to cybersecurity threats in real-time across government networks and systems."
        },
        {
          title: "Secure Digital Identity Framework",
          description: "Design a robust digital identity verification system that ensures privacy, prevents fraud, and enables secure access to government services."
        },
        {
          title: "Open Innovation",
          description: "Propose your own innovative cybersecurity or national security solution. Ideas for protecting digital sovereignty and national interests are welcome!"
        }
      ]
    },
    aiInnovation: {
      title: "AI-Powered Innovation",
      subtitle: "Building Tomorrow's Technological Solutions",
      problems: [
        {
          title: "Smart Agriculture System",
          description: "Develop AI-powered solutions for precision agriculture, crop monitoring, yield prediction, and resource optimization to transform Indian farming."
        },
        {
          title: "Healthcare AI Platform",
          description: "Create intelligent healthcare solutions for disease prediction, diagnosis assistance, telemedicine, and health record management to improve public health outcomes."
        },
        {
          title: "Education Technology Solution",
          description: "Build adaptive learning platforms, skill assessment tools, or educational AI assistants that can transform the Indian education landscape."
        },
        {
          title: "Open Innovation",
          description: "Propose your own AI-powered solution for any national challenge. Innovative ideas that contribute to Viksit Bharat 2047 are encouraged!"
        }
      ]
    }
  };

  const getFilteredProblems = () => {
    if (activeCategory === "all") {
      return Object.keys(problemStatements);
    }
    return [activeCategory];
  };

  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Problem Statements</h1>
        <p className="projects-disclaimer" style={{ marginBottom: "1rem", color: "#ffd700", fontWeight: "bold" }}>
          Building for the Nation | Contributing to Viksit Bharat 2047
        </p>
        <p className="projects-disclaimer">
          Each domain includes an Open Innovation category - bring your unique ideas to transform India!
        </p>
        
        {/* Category Filter */}
        <div className="category-filter" style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "1rem", 
          marginBottom: "2rem",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={() => handleCategoryFilter("all")}
            style={{
              padding: "0.8rem 1.5rem",
              background: activeCategory === "all" ? "linear-gradient(135deg, #ffd700, #ff8c00)" : "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "25px",
              color: activeCategory === "all" ? "#000" : "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease"
            }}
          >
            All Domains
          </button>
          <button 
            onClick={() => handleCategoryFilter("dataMining")}
            style={{
              padding: "0.8rem 1.5rem",
              background: activeCategory === "dataMining" ? "linear-gradient(135deg, #ffd700, #ff8c00)" : "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "25px",
              color: activeCategory === "dataMining" ? "#000" : "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease"
            }}
          >
            Data Mining
          </button>
          <button 
            onClick={() => handleCategoryFilter("cybersecurity")}
            style={{
              padding: "0.8rem 1.5rem",
              background: activeCategory === "cybersecurity" ? "linear-gradient(135deg, #ffd700, #ff8c00)" : "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "25px",
              color: activeCategory === "cybersecurity" ? "#000" : "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease"
            }}
          >
            Cybersecurity
          </button>
          <button 
            onClick={() => handleCategoryFilter("aiInnovation")}
            style={{
              padding: "0.8rem 1.5rem",
              background: activeCategory === "aiInnovation" ? "linear-gradient(135deg, #ffd700, #ff8c00)" : "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "25px",
              color: activeCategory === "aiInnovation" ? "#000" : "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease"
            }}
          >
            AI Innovation
          </button>
        </div>

        {getFilteredProblems().map((categoryKey) => {
          const category = problemStatements[categoryKey];
          return (
            <div key={categoryKey} style={{ marginBottom: "3rem" }}>
              <h2 style={{ 
                color: "#ffd700", 
                textAlign: "center", 
                marginBottom: "0.5rem",
                fontSize: "1.8rem"
              }}>
                {category.title}
              </h2>
              <p style={{ 
                color: "#aaa", 
                textAlign: "center", 
                marginBottom: "1.5rem",
                fontStyle: "italic"
              }}>
                {category.subtitle}
              </p>
              
              <div className="software-container">
                {category.problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className="software-content" 
                    onClick={handleSoftwareView}
                    style={{
                      background: problem.title === "Open Innovation" 
                        ? "linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,140,0,0.2))" 
                        : undefined,
                      border: problem.title === "Open Innovation" 
                        ? "2px solid #ffd700" 
                        : undefined
                    }}
                  >
                    <h1 className="software-content-title">
                      {problem.title === "Open Innovation" ? "✨ " : ""}{problem.title}
                    </h1>
                    <p className="software-content-description projects-close">
                      {problem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        
        <div style={{ 
          textAlign: "center", 
          marginTop: "2rem", 
          padding: "2rem",
          background: "rgba(255,215,0,0.1)",
          borderRadius: "15px",
          border: "1px solid rgba(255,215,0,0.3)"
        }}>
          <h3 style={{ color: "#ffd700", marginBottom: "1rem" }}>
            PPT Submission Format
          </h3>
          <p style={{ color: "#ccc" }}>
            Teams must submit their PPT in this format: <strong style={{ color: "#fff" }}>TeamName_DomainName.ppt/.pdf</strong>
          </p>
          <p style={{ color: "#aaa", marginTop: "0.5rem", fontSize: "0.9rem" }}>
            Describe your idea, approach, and expected impact. Non-compliant submissions may be rejected.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;
