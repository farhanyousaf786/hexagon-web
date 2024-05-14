import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page/LandignPage.jsx";
import Header from "./pages/Header/Header.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import Products from "./pages/Products/Products.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import HexagonServices from "./pages/HexagonServices/HexagonServices.jsx";
import DetailPageWithParams from "./pages/landing_page/SecondComponent/DetailPage/DetailPage.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/services" element={<HexagonServices/>} />
        <Route path="/details/:category" element={<DetailPageWithParams />} />




      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
