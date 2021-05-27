import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='hero-container-child'><h1>Hello, I'm J Han</h1></div>
        <div className='hero-container-child'><p>I.T Student at Kwantlen Polytechnic University</p></div>
    </div>
  );
}

export default HeroSection;