// Footer.jsx
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <div className="mobile-view-footer-logo">
            Hexagon <span>Scaffolding Inc.</span>
          </div>
          <BrowserView> <center><p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="/about-us">About</a>

            <a href="/support">Faq</a>

            <a href="/about-us">Contact</a>
          </p></center></BrowserView>
         
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>369 Jelliff Ave, Newark, NJ 07108</span>
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>Cell: (212) 582-3333</p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>Phone: (718) 725-8969 Ext 105</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              {/* <a href="mailto:Support@maxsippure.com">Support@maxsippure.com</a> */}
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Hexagon Scaffolding Inc. specializes in providing top-tier suspended
            scaffolding solutions tailored for a variety of construction and
            maintenance projects. We offer both sales and expert installation
            services, ensuring safety and efficiency with every setup.
          </p>

          <div className="footer-icons">
            <a href="">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// import React from 'react';
// import './Footer.css'; // Ensure this CSS file is correctly linked

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-column">
//           <h4>Navigation</h4>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About Us</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/safety">Safety</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Our Services</h4>
//           <ul>
//             <li>Suspended Scaffolds</li>
//             <li>Motor Hoists</li>
//             <li>Modular Scaffolding</li>
//             <li>Weather Protection</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Contact Us</h4>
//           <p>Hexagon Scaffolding, Inc.<br />
//              369 Jelliff Ave | Newark | NJ 07108<br />
//              Phone: (718) 725 8969 Ext 105<br />
//              Cell: (212) 582 3333</p>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>© 2024 Your Scaffolding Company. All Rights Reserved.</p>
//         <p><strong>Explore Our Innovative Scaffolding Solutions!</strong></p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
