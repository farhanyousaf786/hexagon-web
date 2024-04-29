import React from 'react';
import './Hexagon.css'; // Ensure the CSS file is linked

const Hexagon = ({ text, isCenter }) => {
  const className = `hexagon ${isCenter ? 'center' : ''}`;
  return (
    <div className={className}>
      <div className="hexagon-inner">
        <span className="hexagon-text">{text}</span>
      </div>
    </div>
  );
};

export default Hexagon;
