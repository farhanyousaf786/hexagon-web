import React from "react";
import "./LandingPage.css";
import Hexagon from "./Hexagon/Hexagon";
import Slideshow from "./SlideShowLandingPage/SlideShowLandingPage"; // Import the new component
import PartnerCompanies from "./PartnersList/PartnerCompanies";
import SecondComponent from "./SecondComponent/SecondComponent";
import SliderTextComponent from "./TextSlider/SliderTextComponent";

const LandingPage = () => {
  const hexagonTexts = [
    "Rental",
    "Service",
    "Repair",
    "License",
    "Installation",
    "Sales",
  ];

  return (
    <div>
      <div className="landing-page">
        <div className="first-comp">
          <Slideshow />
          <div className="left-text">
            <p>
              Welcome to <strong>Hexagon Scaffolding</strong>, where{" "}
              <strong>excellence in scaffolding</strong> meets the pinnacle of{" "}
              <strong>safety</strong> and <strong>reliability</strong>. Our
              services encompass <strong>customized scaffolding rental</strong>,
              precise <strong>installation</strong>, diligent{" "}
              <strong>maintenance</strong>, and comprehensive{" "}
              <strong>training programs</strong>. Every structure is
              meticulously crafted to support your construction goals with
              utmost <strong>efficiency</strong> and <strong>integrity</strong>.
              Elevate your projects to new heights with our exceptional{" "}
              <strong>scaffolding solutions</strong>.
            </p>
          </div>
          <div className="right-text">
            {" "}
            <div className="company-name-text">Hexagon Scaffolding Inc.</div>
            <div className="hexagon-layout">
              {hexagonTexts.map((text, index) => (
                <Hexagon key={index} text={text} />
              ))}
              <Hexagon text="Services" isCenter />
            </div>
          </div>
        </div>
      </div>
      <div className="partner-logos">
        {" "}
        <PartnerCompanies />
        <SecondComponent/>
        
      </div>
    </div>
  );
};

export default LandingPage;
