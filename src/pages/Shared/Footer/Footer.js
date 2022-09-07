import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <Link to="/">
              {" "}
              <i className="fas fa-chevron-right"></i> home{" "}
            </Link>
            <Link to="/services">
              {" "}
              <i className="fas fa-chevron-right"></i> services{" "}
            </Link>
            <Link to="/about">
              {" "}
              <i className="fas fa-chevron-right"></i> about{" "}
            </Link>
            <Link to="/doctors">
              {" "}
              <i className="fas fa-chevron-right"></i> doctors{" "}
            </Link>
          </div>

          <div className="box">
            <h3>Services</h3>
            <Link to="services">
              {" "}
              <i className="fas fa-chevron-right"></i> dental care{" "}
            </Link>
            <Link to="services">
              {" "}
              <i className="fas fa-chevron-right"></i> Emergency{" "}
            </Link>
            <Link to="services">
              {" "}
              <i className="fas fa-chevron-right"></i> cardiology{" "}
            </Link>
            <Link to="services">
              {" "}
              <i className="fas fa-chevron-right"></i> diagnosis{" "}
            </Link>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <Link to="#">
              {" "}
              <i className="fas fa-phone"></i> 02-2323232{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fas fa-mobile"></i> 01735005354{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fas fa-envelope"></i>info@gmail.com{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i>Dhaka-1200{" "}
            </Link>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <Link to="#">
              {" "}
              <i className="fab fa-facebook-f"></i> facebook{" "}
            </Link>

            <Link to="#">
              {" "}
              <i className="fab fa-instagram"></i> instagram{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fab fa-linkedin"></i> linkedin{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fab fa-youtube"></i> youtube{" "}
            </Link>
          </div>
        </div>
        <br />
        <div className="credit">
          {" "}
          developed by{" "}
          <span className="text-info">
            <Link to="https://www.linkedin.com/in/sakibsaizeed/">
              SakibSaizeed
            </Link>{" "}
            &copy; {year}
          </span>{" "}
          | all rights reserved{" "}
        </div>
      </section>
    </div>
  );
};

export default Footer;
