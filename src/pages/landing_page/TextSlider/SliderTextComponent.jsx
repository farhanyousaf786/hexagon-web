import React, { useState, useEffect } from 'react';
import './SliderTextComponent.css';

const SliderTextComponent = () => {
  const [sliderCounter, setSliderCounter] = useState(0);
  const sliderContent = [
    "Web Development",
    "WordPress Development",
    "App Development",
    "Plugin Development",
    "CRM Integrations"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderCounter((prevCounter) => (prevCounter + 1) % sliderContent.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [sliderContent.length]);

  return (
    <div id="slider">
      <div className="span">We excel at</div>
      <div className="span" id="sliderValue">
        {sliderContent[sliderCounter].split("").map((char, index) => (
          <div
            key={index}
            className="letter animation start"
            style={{ animationDelay: `${index / 10}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderTextComponent;
