import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Make sure you have the corresponding CSS file

const texts = ["Rental", "Service", "Repair", "License", "Installation", "Sales"];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % texts.length);
    }, 3000); // Move to the next text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <div className="slideshow-slides">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
