import React from "react";
import "./Banner.css";
import bannerImage from "../../../assets/images/banner/bannernew.png";

const Banner = () => {
  return (
    <div>
      <section className="home-banner" id="home">
        <div className="image">
          <img src={bannerImage} alt="" />
        </div>

        <div className="content">
          <h3>
            <span className="banner-text">Stay healthy</span>,
            <span className="text-success"> Stay safe</span>
          </h3>
          <h5>Good Health is key to all success!</h5>
          <a href="doctors" className="btn">
            {" "}
            Doctors <span className="fas fa-chevron-right"></span>{" "}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Banner;
