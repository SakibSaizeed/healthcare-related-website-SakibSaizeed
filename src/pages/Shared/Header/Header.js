import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo" style={{ textDecoration: "none" }}>
          {" "}
          <i className="fas fa-heartbeat"></i> Medi
          <span className="text-success">Care</span>{" "}
        </Link>

        <nav className="navbar" style={{ textDecoration: "none" }}>
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login">Login</Link>
        </nav>
        {/* 
        <div id="menu-btn" className="fas fa-bars"></div> */}
      </header>
    </div>
  );
};

export default Header;
