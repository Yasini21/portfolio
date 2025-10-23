import React from 'react'
import portfolio from "../assets/Portfolioimg.jpeg"
import "./Hero.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Three from "./Three";




function Hero(){
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
        <>
        <div className='Hero'>
          <Three/>
        <div className='HeroCont'>
          <div className="hero-img">
          <img src={portfolio} className='portimg'alt="Image"/>
        </div>
        
        <p className="name">Hi! I'm <span className='Yas'>YASINI V</span></p>
        <p className='subname'>A SOFTWARE DEVELOPER</p>
        <p className='role'>I’m a passionate Software Developer with hands-on experience<br/> in Full Stack Web Development and a growing interest in Artificial Intelligence.<br/>I love turning ideas into functional, user-friendly web applications.</p>
         <div className="social-links">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
        href="https://leetcode.com/"
        target="_blank"
        rel="noopener noreferrer">
          <SiLeetcode className="icon"/>
        </a>
        
      </div>
        </div>
        
        </div>
        <div className="Button">
          <div className='fstBtn'>
       
           <button className="btn" onClick={scrollToProjects}>
          View Project⬇️
          </button>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className='btn'>
             View Resume
            </a>
           </div> 
           
        </div>
        </>

    );
}

export default Hero