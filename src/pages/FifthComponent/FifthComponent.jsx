import React, { useState, useEffect, useRef } from 'react';
import './FifthComponent.css'; // Make sure your CSS is correctly imported

const FifthComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0); // State to manage active slide index

    const slides = [
        {
            id: 's1',
            title: 'Suspended Scaffolds',
            description: 'Explore the use of suspended scaffolds for work at height. These platforms are ideal for tasks on high-rise buildings, providing a safe and adjustable work area.',
            color: '#001957',
            imageUrl: "https://imgur.com/hXhZRyq.png"
        },
        {
            id: 's2',
            title: 'Motor Hoists',
            description: 'Motor hoists are critical for lifting heavy materials to the work site. Learn about their load capacity and safety features to ensure efficient operation. Click learn more.',
            color: '#001957',
            imageUrl: "https://imgur.com/HyJZj5q.png"
        },
        {
            id: 's3',
            title: 'Modular Scaffolding',
            description: 'Modular scaffolding offers versatility and ease of assembly for various construction projects. Discover the modular systems that can fit your specific construction needs.',
            color: '#001957',
            imageUrl: "https://imgur.com/lDsOMwB.png"
        },
        {
            id: 's4',
            title: 'Weather Protection',
            description: 'Understand the importance of weather protection in scaffolding. From debris nets to temporary roofs, ensure your work continues safely regardless of weather conditions.',
            color: '#001957',
            imageUrl: "https://imgur.com/HNkNRXs.png"
        }
    ];

    // Declare intervalId using useRef to keep consistent reference
    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 3000); // Change slides every 2 seconds

        return () => clearInterval(intervalId.current); // Clean up the interval on component unmount
    }, []);

    const handlePrev = (event) => {
        event.preventDefault();
        setActiveIndex(prevIndex => (prevIndex + slides.length - 1) % slides.length);
        resetInterval();
    };

    const handleNext = (event) => {
        event.preventDefault();
        setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
        resetInterval();
    };

    // Reset the automatic slide change timer when manually navigating
    const resetInterval = () => {
        clearInterval(intervalId.current);
        intervalId.current = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 3000);
    };

    return (
        <div className="CSSgal">

            <div className="slider" style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: 'transform 0.8s ease' }}>
                
                {slides.map((slide, index) => (
                    <div key={index} style={{ background: slide.color, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h3>{slide.title}</h3>
                        <center><p>{slide.description}</p></center>
                        <button className="fifth-comp-button">Learn More</button>

                    </div>
                ))}
            </div>

            <div className="prevNext">
                <a href="#" onClick={handlePrev}>&laquo; Prev</a>
                <a href="#" onClick={handleNext}>Next &raquo;</a>
            </div>
        </div>
    );
};

export default FifthComponent;
