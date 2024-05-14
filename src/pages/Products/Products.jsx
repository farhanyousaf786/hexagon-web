import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Make sure to style these appropriately

function Products() {
  const productCategories = [
    {
      title: "Suspended Scaffolding Platforms",
      items: [
        "WINSAFE SUPERMOD PLATFORMS MANUAL",
        "WINSAFE SUPERMOD PLATFORM OPERATING INSTRUCTIONS",
        "TRACTEL® THRUSAFe® MODULAR PLATFORM FOR CONFINED SPACES",
        "TRACTEL® SOLSIT® BOSUN CHAIR MANUAL",
        "TRACTEL® SKYSAFE® MODULAR AND KNOCKDOWN PLATFORMS MANUAL",
        "TRACTEL® MODULAR SCAFFOLD VARIANCE",
        "SKYCLIMBER MKD MODULAR PLATFORM MANUAL",
        "SKY CLIMBER SKY STAGE ULTRA (SSU) MANUAL",
        "SKY CLIMBER SERVICE BULLETIN #151"
      ]
    },
    {
      title: "Suspended Scaffolding Motors",
      items: [
        "SPIDER SC1000 / SC1500 OPERATOR'S MANUAL",
        "SKYCLIMBER COMPACT 750 HOIST MANUAL",
        "SKYCLIMBER COMPACT 1000 HOIST MANUAL",
        "GORILLA CLIMBER MANUAL HOIST OPERATING MANUAL",
        "GRIPHOIST MECHANICAL HOIST MANUAL",
        "HILO",
        "LNX OPERATOR'S MANUAL 03112014",
        "GENERATORS QUICK REFERENCE",
        "SKYCLIMBER ALPHA HOIST 1000",
        "SKYCLIMBER CX 1250 HOIST",
        "SKYCLIMBER® MODEL 4 HOIST",
        "TRACTEL® TIRAK® TE MANUAL",
        "TRACTEL® TIRAK MOTORS 2015 EDITION MANUAL",
        "TRACTEL® TMS-600 MANUAL HOIST MANUAL"
      ]
    },
    {
      title: "Suspended Scaffolding Outrigger Systems",
      items: [
        "WINSAFE 1500 SERIES OUTRIGGER SYSTEM",
        "CABLE TRUSS INSTRUCTIONS",
        "DELTAJIBS",
        "WINSAFE 1500 SERIES OUTRIGGER SYSTEM",
        "13.5' REACH WINSAFE OUTRIGGER",
        "Winsafe Cable Truss System 18' or 20'"
      ]
    },
    {
      title: "Suspended Scaffolding Accessories",
      items: [
        "ADJUSTABLE ROPE LANYARD",
        "ALUMINUM TRIPOD",
        "ANCHOR SLING RATED 5,000 LBS.",
        "ANCHOR SLING RATED 10,000 LBS.",
        "ANCHORAGE D-RING",
        "CONNECTORS - CARBINERS",
        "FALLSTOP BEAM CLAMP",
        "FALLSTOP BEAM TROLLEY",
        "FALLSTOP WIRE FORM CONNECTOR",
        "FALLSTOP WIRE ROPE GRAB",
        "GRIPGRAB ROPE GRAB",
        "TRACTEL® REBAR CHAIN ASSEMBLY",
        "TRACTEL® REBAR WEB ASSEMBLY",
        "MILLER ROOFSTRIDER RM50P & RM65G SPECIFICATION SHEET",
        "ROPE LANYARD"
      ]
    }
  ];

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      {productCategories.map((category, index) => (
        <div key={index}>
          <h2>{category.title}</h2>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>
                <Link to={`/products/${item.replaceAll(' ', '-').toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Products;
