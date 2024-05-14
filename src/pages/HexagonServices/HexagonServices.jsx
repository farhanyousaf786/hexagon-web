import React, { Component } from "react";
import Hexagon from "../landing_page/Hexagon/Hexagon";
import "./HexagonServices.css";


const HexagonServices = () => {
  const hexagonTexts = [
    "Rental",
    "Service",
    "Repair",
    "License",
    "Installation",
    "Sales",
  ];

  return (
    <div className="hexagon-services">
   
      <ul className="hexagon-services-layout">
        <div className="hexagon-layout">
          {hexagonTexts.map((text, index) => (
            <Hexagon key={index} text={text} />
          ))}
          <Hexagon text="Services" isCenter />
        </div>
      </ul>
      <div className="services-list">
      <div className="service">
        <h2 className="service-title">Installation</h2>
        <p>Hexagon Scaffolding provides expert installation services ensuring safety and efficiency for every project. Our skilled team guarantees a reliable setup, tailored to meet your specific construction needs.</p>
      </div>
      <div className="service">
        <h2 className="service-title">Sales</h2>
        <p>Specializing in the sale of high-quality suspended scaffolds, Hexagon Scaffolding offers a variety of options to fit any project scale. Our products promise durability and safety, enhancing your on-site operations.</p>
      </div>
      <div className="service">
        <h2 className="service-title">License</h2>
        <p>We ensure all scaffolding projects comply with local and national safety regulations. Hexagon Scaffolding assists in acquiring the necessary licensing, providing peace of mind and legal security for your construction activities.</p>
      </div>
      <div className="service">
        <h2 className="service-title">Services</h2>
        <p>At Hexagon Scaffolding, our comprehensive service solutions cover maintenance, support, and consultations to extend the lifespan of your equipment and ensure your projects proceed without interruptions.</p>
      </div>
      <div className="service">
        <h2 className="service-title">Rental</h2>
        <p>Offering flexible rental options, Hexagon Scaffolding caters to temporary and long-term needs with a vast inventory of scaffolding systems. Ideal for various project sizes, our rentals are cost-effective and reliable.</p>
      </div>
      <div className="service">
        <h2 className="service-title">Repair</h2>
        <p>We provide prompt repair services to address any issues with your scaffolding equipment. Our maintenance team ensures that all equipment is restored to optimal condition, minimizing downtime and ensuring safety.</p>
      </div>
      <div className="service">
        <h2 className="service-title">Service</h2>
        <p>Our dedicated service team at Hexagon Scaffolding is committed to exceptional customer support and technical assistance. We ensure your scaffolding systems are always functioning efficiently and safely.</p>
      </div>
    </div>
    </div>
  );
};

export default HexagonServices;
