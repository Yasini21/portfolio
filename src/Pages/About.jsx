import React from "react";
import "./About.css";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 65 },
    { name: "Express.js", level: 60 },
  ];
  const hobbies=["Music","Dance","Drawing","Reading","Chess","Outdoor Games"];
  const certifications = [
    { title: "AI Search Algorithm and Problem Solving", issuer: "Nptel" },
    { title: "UI&UX", issuer: "Novitech" },
    
  ];

  return (
    <>
    <div className="skills-section">
      <h2 className="title">Tech Stacks</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="extras-container">
      <div className="non-skills">
          <h2 className="title">Beyond Code</h2>
          <div className="hobbies-grid">
            {hobbies.map((hobby,index)=>(
              <div key={index} className="hobby-box">
               <h3>{hobby}</h3>
              </div>
            ))}
          </div>
      </div>
      <div className="cert-section">
        <h2 className="title">Certifications 🏅</h2>
        <div className="cert-list">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   </> 
  );
};

export default Skills;
