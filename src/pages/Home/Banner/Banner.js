import React from "react";
import "./Banner.css";
import bannerImage from "../../../assets/images/result.svg";
const Banner = () => {
  return (
    <div>
      <section className="home-banner" id="home">
        <div className="image">
          <img src={bannerImage} alt="" />
        </div>

        <div className="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          <a href="#" className="btn">
            {" "}
            contact us <span className="fas fa-chevron-right"></span>{" "}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Banner;
