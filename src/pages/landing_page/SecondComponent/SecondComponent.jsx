import React from 'react';
import './SecondComponent.css';

const cardData = [
    {
      category: "Rentals",
      title: "",
      text: "Explore the newest trends in property rentals.",
      image: "https://imgur.com/hXhZRyq.png"
    },
    {
      category: "Licensing & Training",
      title: "",
      text: "Stay informed about the latest licensing regulations and changes.",
      image: "https://imgur.com/HNkNRXs.png"
    },
    {
      category: "Repair",
      title: "",
      text: "Top solutions for all kind of damaged equipment",
      image: "https://imgur.com/Hyppul2.png"
    },
    {
      category: "Services",
      title: "",
      text: "Stay informed about the latest licensing regulations and changes.",
      image: "https://imgur.com/lDsOMwB.png"
    },
    {
      category: "Sales",
      title: "",
      text: "Get the latest trends and strategies in sales.",
      image: "https://imgur.com/97YbjVp.png"
    },
    {
      category: "Installation",
      title: "",
      text: "Learn about innovative installation techniques and tools.",
      image: "https://imgur.com/HyJZj5q.png"
    },

  ];
  
const SecondComponent = () => {
    return (
      <div className="latest-news-container">
        <Title />
        <div className="card-list">
          {cardData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    );
  };
  
  const Title = () => (
    <section className="app-title">
      <div className="app-title-content">
        <h1>Scaffolding Safety First.</h1>
        <p>Covering the latest and greatest!</p>
      </div>
    </section>
  );
  
  const Card = ({ data }) => (
    <article className="card">
      <CardHeader image={data.image} category={data.category} />
      <CardBody title={data.title} text={data.text} />
    </article>
  );
  
  const CardHeader = ({ image, category }) => (
    <header style={{ backgroundImage: `url(${image})` }} className="card-header">
      <h4 className="card-header--title">{category}</h4>
    </header>
  );
  
  const CardBody = ({  text }) => (
    <div className="card-body">
      <p>{text}</p>
      <button className="button-primary">Learn More</button>
    </div>
  );
  
  export default SecondComponent;