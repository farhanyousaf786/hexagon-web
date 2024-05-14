


import { useParams } from 'react-router-dom';
import './DetailPage.css';  // Assuming styles are defined in this CSS file
import React, { useEffect } from 'react';

const details = {
    Rentals: {
        description: "Explore the flexibility of property rentals across different sectors. Understand market trends and how to leverage them for maximum profitability. Discover properties that suit various business needs, from retail spaces to large commercial complexes.",
        image: "https://imgur.com/hXhZRyq.png"
    },
    Licensing: {
        description: "Stay ahead with knowledge on licensing laws and training modules designed for real estate professionals. This section covers everything from basic certifications to advanced courses that can help you manage projects and understand legal requirements effectively.",
        image: "https://imgur.com/HNkNRXs.png"
    },
    Repair: {
        description: "Dive deeper into the methodologies and tools required for repairing and maintaining commercial and residential properties. Learn about the latest technologies that can reduce downtime and cost, ensuring your assets are always running at optimum efficiency.",
        image: "https://imgur.com/Hyppul2.png"
    },
    Services: {
        description: "Gain insights into comprehensive property management services that include tenant management, asset maintenance, and budget management. Learn how these services can be tailored to meet the unique needs of different properties.",
        image: "https://imgur.com/lDsOMwB.png"
    },
    Sales: {
        description: "Get an in-depth look at the sales strategies that top real estate firms use to maximize their return on investment. Understand the nuances of market analysis, client presentations, and negotiations that can make or break a sale.",
        image: "https://imgur.com/97YbjVp.png"
    },
    Installation: {
        description: "Explore the world of advanced installation techniques for both residential and commercial properties. Learn about the standards, safety protocols, and innovative tools that are shaping the future of installations in real estate.",
        image: "https://imgur.com/HyJZj5q.png"
    }
};


const DetailPage = () => {
    const { category } = useParams();
    const detail = details[category.replace(/%20/g, " ")]; // Handling URL encoded spaces
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="detail-container">
            <h1 className="detail-title">{category}</h1>
            <img src={detail.image} alt={category} className="detail-image"/>
            <p className="detail-description">{detail.description}</p>
        </div>
    );
};

export default DetailPage;
