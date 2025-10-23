import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <img
            src="https://collegesofdistinction.com/wp-content/uploads/2019/12/scholarship-money-grad-cap.jpeg"
            alt="Scholarship Management System"
            className="project-image"
          />
          <div className="project-info">
            <h3>Scholarship Management System</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div><br/>
             <button className='btn'>ViewCode</button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src="https://img.freepik.com/free-vector/flat-fashion-stylist-career-landing-page-template_23-2150038690.jpg"
            alt="Online Fashion Stylist Website"
            className="project-image"
          />
          <div className="project-info">
            <h3>Online Fashion Stylist Website</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>MongoDB</span>
            </div><br/><br/><br/>
             <button className='btn'>ViewCode</button>
          </div>
        </div>
       <div className="project-card">
          <img
            src="https://paintit.ai/tools/ai-house-generator/img/hero.png"
            alt="Scholarship Management System"
            className="project-image"
          />
          <div className="project-info">
            <h3>Building Layout Generator</h3>
            <div className="tech-stack">
              <span>Java</span>
              <span>Open CV</span>
              <span>React js</span>
              <span>Three.js</span>
                <span>Rest API</span>
            </div><br/><br/>
            <button className='btn'>ViewCode</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
