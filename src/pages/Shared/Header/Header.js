import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navbar, Button } from "react-bootstrap";
const Header = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const logoutMedicare = () => {
    signOut(auth).then(navigate("/"));
  };

  return (
    <div>
      <Navbar className="header" id="menu" fixed="top">
        <Link to="/" className="logo" style={{ textDecoration: "none" }}>
          {" "}
          <i className="fas fa-heartbeat"></i> Medi
          <span className="text-success">Care</span>{" "}
        </Link>

        <nav className="navbar" style={{ textDecoration: "none" }}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            About Us
          </Link>
          <Link style={{ textDecoration: "none" }} to="/services">
            Services
          </Link>
          <Link style={{ textDecoration: "none" }} to="/doctors">
            Our Doctors
          </Link>
        </nav>
        {user ? (
          <Button onClick={logoutMedicare} variant="outline-warning">
            Log Out
          </Button>
        ) : (
          <Link className="btn" Link to="login">
            Login
          </Link>
        )}
      </Navbar>
    </div>
  );
};

export default Header;
