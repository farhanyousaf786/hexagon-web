import React from 'react';
import './FourthComponent.css'; // Make sure you import the CSS file for styles

function FourthComponent() {
  return (
    <div className="fourth-component">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.7744726794323!2d-74.20168638459371!3d40.71617127933216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253234e0433cb%3A0x663d7ff15db9c6dc!2s369%20Jelliff%20Ave%2C%20Newark%2C%20NJ%2007108%2C%20USA!5e0!3m2!1sen!2s!4v1665777284345!5m2!1sen!2s"
        width="90%"
        height="200"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default FourthComponent;
