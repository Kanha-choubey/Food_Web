import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header>
      <Link to="/" className="logo">
        <i className="fas fa-utensils"></i>Food
      </Link>

      <div id="menu-bar" className="fas fa-bars"></div>

      <nav className="navbar">
        <Link to="/">home</Link>
        <a href="#speciality">speciality</a>
        <a href="#popular">popular</a>
        <a href="#review">review</a>
        <Link className="cart" to="/cart">
          cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
