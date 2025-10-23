import React from 'react';
import Navvbar from './Components/Navvbar';
import Hero from './Components/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import State from './hooks/State';
import Three from "./Components/Three"; 
import './App.css';

const App = () => {
  return (
    <>
    
        <Three />
      
   
      <Navvbar />
      

      {/* Sections with IDs for smooth scroll */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
