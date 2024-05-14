import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Header.css";
import logo from "../../Assets/logo.jpg"; // Adjust the path to your logo
import Slideshow from "./SlideShow/SlideShow";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    const navHeight = 80; // Adjust if nav height is different
    if (position > navHeight && !isNavFixed) {
      setIsNavFixed(true);
    } else if (position <= navHeight && isNavFixed) {
      setIsNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavFixed]);

  return (
    <div id="wrap">
      <div
        id="header"
        style={{ transform: `translateY(${scrollPosition / 2}px)` }}
      >
        <div className="logo-container">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>

        <div className="contact-info">
          <div className="header-content">
            <Slideshow />
            <div className="phone-box">
              {/* <span className="phone-icon">&#x260E;</span>{""} */}
              <span className="phone-text">123-456-7890</span>
            </div>
          </div>
        </div>


        
      </div>
      <div id="nav" className={isNavFixed ? "fixed" : ""}>
        <button className="nav-button" onClick={() => navigate("/")}>Home</button>
        <button className="nav-button" onClick={() => navigate("/products")}>Products</button>
        <button className="nav-button" onClick={() => navigate("/services")}>Services</button>
        <button className="nav-button" onClick={() => navigate("/about-us")}>About</button>
      </div>
    </div>
  );
}

export default Header;

/*

Rental
Sales
Service
Installation
Engineering
Training
------------------


-------------------


Skyclimber
winsafe
powerclimber
spider
easyScale
*/