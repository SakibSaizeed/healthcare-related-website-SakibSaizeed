import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1>header</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  );
};

export default Header;
