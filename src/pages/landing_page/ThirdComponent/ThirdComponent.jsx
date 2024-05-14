import React, { useState } from 'react';
import './ThirdComponent.css'; // Ensure this CSS file is in the same folder and contains the CSS code provided earlier

const ThirdComponent = () => {



  const [activeIndex, setActiveIndex] = useState(0);
  const tabsData = [
    {
      title: "Suspended Scaffolds",
      description: "Explore the use of suspended scaffolds for work at height. These platforms are ideal for tasks on high-rise buildings, providing a safe and adjustable work area.",
      imageUrl: "https://imgur.com/hXhZRyq.png" // Image URL remains the same as placeholder
    },
    {
      title: "Motor Hoists",
      description: "Motor hoists are critical for lifting heavy materials to the work site. Learn about their load capacity and safety features to ensure efficient operation.",
      imageUrl: "https://imgur.com/HyJZj5q.png" // Image URL remains the same as placeholder
    },
    {
      title: "Modular Scaffolding",
      description: "Modular scaffolding offers versatility and ease of assembly for various construction projects. Discover the modular systems that can fit your specific construction needs.",
      imageUrl: "https://imgur.com/lDsOMwB.png" // Image URL remains the same as placeholder
    },
    {
      title: "Weather Protection",
      description: "Understand the importance of weather protection in scaffolding. From debris nets to temporary roofs, ensure your work continues safely regardless of weather conditions.",
      imageUrl: "https://imgur.com/HNkNRXs.png" // Image URL remains the same as placeholder
    }
  ];
  

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <main style={{ fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h2>Our Products</h2>
      </header>
      <section>
        <ul className='indexes'>
          {tabsData.map((_, index) => (
            <li key={index} style={{ borderColor: activeIndex === index ? 'rgba(211,38,38,0.6)' : 'transparent', cursor: 'pointer' }} onClick={() => handleClick(index)}>
              {`0${index + 1}`}
            </li>
          ))}
        </ul>
        <div className='tabs'>
          {tabsData.map((tab, index) => (
            <div key={index} className={`tab ${activeIndex === index ? 'active' : ''}`} style={{ opacity: activeIndex === index ? 1 : 0 }}>
              <article className='tab-content'>
                <h3>{tab.title}</h3>
                <p>{tab.description}</p>
                <button>Read More</button>
              </article>
              <div className='tab-image'>
                <img src={tab.imageUrl} alt={tab.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ThirdComponent;
