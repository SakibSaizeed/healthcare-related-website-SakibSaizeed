import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import VisitorInfo from "../VisitorInfo/VisitorInfo";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Doctors></Doctors>
      <VisitorInfo></VisitorInfo>
    </div>
  );
};

export default HomePage;
