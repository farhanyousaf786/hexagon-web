import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondComponent.css';

const cardData = [
    {
      category: "Rentals",
      text: "Explore the newest trends in property rentals.",
      image: "https://imgur.com/hXhZRyq.png"
    },
    {
      category: "Licensing",
      text: "Stay informed about the latest licensing regulations and changes.",
      image: "https://imgur.com/HNkNRXs.png"
    },
    {
      category: "Repair",
      text: "Top solutions for all kind of damaged equipment",
      image: "https://imgur.com/Hyppul2.png"
    },
    {
      category: "Services",
      text: "Stay informed about the latest licensing regulations and changes.",
      image: "https://imgur.com/lDsOMwB.png"
    },
    {
      category: "Sales",
      text: "Get the latest trends and strategies in sales.",
      image: "https://imgur.com/97YbjVp.png"
    },
    {
      category: "Installation",
      text: "Learn about innovative installation techniques and tools.",
      image: "https://imgur.com/HyJZj5q.png"
    },
];

const SecondComponent = () => {
    const navigate = useNavigate();

    const handleLearnMore = (category) => {
        navigate(`/details/${category}`);
    };

    return (
        <div className="latest-news-container">
            <Title />
            <div className="card-list">
                {cardData.map((data, index) => (
                    <Card key={index} data={data} onLearnMore={() => handleLearnMore(data.category)} />
                ))}
            </div>
        </div>
    );
};

const Title = () => (
    <section className="app-title">
        <h1>Scaffolding Safety First.</h1>
    </section>
);

const Card = ({ data, onLearnMore }) => (
    <article className="card">
        <CardHeader image={data.image} category={data.category} />
        <CardBody text={data.text} onLearnMore={onLearnMore} />
    </article>
);

const CardHeader = ({ image, category }) => (
    <header style={{ backgroundImage: `url(${image})` }} className="card-header">
        <h4 className="card-header--title">{category}</h4>
    </header>
);

const CardBody = ({ text, onLearnMore }) => (
    <div className="card-body">
        <p>{text}</p>
        <button className="button-primary" onClick={onLearnMore}>Learn More</button>
    </div>
);

export default SecondComponent;
