import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.init";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logoutMedicare = () => {
    signOut(auth).then(navigate("/home"));
  };

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
        </nav>
        {user ? (
          <button onClick={logoutMedicare} className="btn text-danger">
            Log Out
          </button>
        ) : (
          <Link className="btn" Link to="login">
            Login
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
