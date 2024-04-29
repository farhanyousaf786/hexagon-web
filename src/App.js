import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page/LandignPage.jsx";
import Header from "./pages/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
