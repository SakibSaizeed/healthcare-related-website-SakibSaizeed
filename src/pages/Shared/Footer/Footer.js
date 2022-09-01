import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  let year = Date();
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
            <Link to="/team">
              {" "}
              <i className="fas fa-chevron-right"></i> doctors{" "}
            </Link>
            {/* <Link to="#">
              {" "}
              <i className="fas fa-chevron-right"></i> book{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fas fa-chevron-right"></i> review{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fas fa-chevron-right"></i> blogs{" "}
            </Link> */}
          </div>

          <div className="box">
            <h3>our services</h3>
            <Link to="#">
              {" "}
              <i className="fas fa-chevron-right"></i> dental care{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fas fa-chevron-right"></i> message therapy{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fas fa-chevron-right"></i> cardiology{" "}
            </Link>
            <Link to="#">
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
              <i className="fas fa-envelope"></i> info@gmail.com{" "}
            </Link>
            <Link to="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Dhaka-1361{" "}
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
          Developed by <span>sakibSaizeed@{year}</span> | all rights reserved{" "}
        </div>
      </section>
    </div>
  );
};

export default Footer;
