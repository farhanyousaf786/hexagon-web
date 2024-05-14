import React from 'react';
import './Hexagon.css'; // Ensure the CSS file is linked

const Hexagon = ({ text, isCenter }) => {
    const className = `hexagon ${isCenter ? 'center' : ''}`;
    const displayText = isCenter ? 'Hexagon Scaffolding' : text;
    const textStyle = isCenter ? { fontSize: '10px', fontWeight: 'bold' } : null; // Inline style for center text

    return (
        <div className={className}>
            <div className="hexagon-inner">
                <span className="hexagon-text" style={textStyle}>{displayText}</span>
            </div>
        </div>
    );
};

export default Hexagon;
