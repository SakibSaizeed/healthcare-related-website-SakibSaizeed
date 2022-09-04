import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Doctors></Doctors>
    </div>
  );
};

export default HomePage;
