import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Popular from "./components/Popular";
import Gallery from "./components/Gallery";
import Speciality from "./components/Speciality";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speciality" element={<Speciality />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
