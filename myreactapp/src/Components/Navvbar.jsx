import React from 'react';
import './Navvbar.css';

const Navvbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='Navbar'>
      <div className="container">
        <p className="logo">YASINI V</p>
      </div>
      <div className='link'>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </div>
  );
};

export default Navvbar;
