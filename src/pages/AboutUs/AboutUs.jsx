import React from 'react';
import './AboutUs.css';  // Ensure the CSS file is correctly linked

function AboutUs() {
  const services = ["Rental", "Service", "Repair", "License", "Installation", "Sales"];
  const keywords = ["safety", "innovation", "efficiency", "support"];

  const highlightKeywords = text => {
    const words = text.split(' ');
    return words.map(word => (
      keywords.includes(word.toLowerCase()) ? <strong key={word}>{word} </strong> : word + ' '
    ));
  };

  return (
    <div className="about-us-container">
      <h1>Supporting Your Heights, Ensuring Your Safety</h1>
      <p>{highlightKeywords("At Hexagon Scaffolding, we are dedicated to elevating the standards of safety and innovation in suspended scaffolding. Our comprehensive range of services, from rental to installation, is designed to ensure maximum efficiency and safety for every project we undertake. With years of expertise and a commitment to excellence, we empower our clients to achieve new heights with complete confidence and support.")}</p>
      <h2>Our Services</h2>
      <ul className="services-list-about">
        {services.map(service => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;
