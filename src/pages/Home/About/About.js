import React from "react";
import "./About.css";
import aboutImg from "../../../assets/images/aboutImage.svg";
const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>About</span> us{" "}
        </h1>

        <div className="row">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>

          <div className="content">
            <h3>We take care of your healthy life</h3>
            <p>We provide a complete health care solution. </p>
            <p>
              We follow The primary health care approach is both a philosophy of
              health care and an approach to providing health services, and
              embraces five types of care: promotive; preventive; curative;
              rehabilitative; and supportive.
              <p>
                This a Complete demo web solution for healthCare service
                developed by Mohammad Nazmus Sakib (Saizeed), Who is a Software
                Engineer, wants to do better solution for people around the
                world{" "}
              </p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
