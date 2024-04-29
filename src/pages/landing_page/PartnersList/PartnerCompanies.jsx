import React from 'react';
import './PartnerCompanies.css'; // Make sure to link the correct CSS file




const logos = [
  { src: 'https://imgur.com/HTA0oEr.png', link: 'https://beeaccess.com/' },
  { src: 'https://imgur.com/Hz28o9A.png', link: 'https://www.betamaxhoist.com/' },
  { src: 'https://imgur.com/apHppsm.png', link: 'https://www.bisoh.co.jp/en/' },
  { src: 'https://imgur.com/X0Bj4Ki.png', link: 'https://www.tractel.com/us' },
  { src: 'https://imgur.com/UEUC3gE.png', link: 'https://altrex.com/en' },
  { src: 'https://imgur.com/YgdOW8Y.png', link: '' },



  // ... add more logos as needed
];


const PartnerCompanies = () => {
  return (
    <div className="partner-companies">
      <div className="logo-slideshow">
        {logos.map((logo, index) => (
          <div key={index} className="logo-container-companies">
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={`Company logo ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerCompanies;