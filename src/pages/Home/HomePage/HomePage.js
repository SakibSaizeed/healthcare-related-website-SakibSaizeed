import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Doctors></Doctors>
    </div>
  );
};

export default HomePage;
