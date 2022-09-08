import React from "react";
import "./VisitorInfo.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import slide1 from "./../../../assets/images/sliderLogo/NMST.gif";
import slide2 from "./../../../assets/images/sliderLogo/medco.png";
import slide3 from "./../../../assets/images/sliderLogo/cardio.png";
import { Card } from "react-bootstrap";
const VisitorInfo = () => {
  return (
    <>
      <h2 className="heading">Our Health Partners</h2>
      <CarouselProvider
        naturalSlideWidth={350}
        naturalSlideHeight={60}
        totalSlides={3}
        isPlaying={true}
      >
        <Slider className="slider-container">
          <Slide index={0}>
            {/* <img src={slide1} alt="" /> */}
            <div className="slide-card">
              <Card>
                <Card.Img variant="top" src={slide2} />
              </Card>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide-card">
              <Card>
                <Card.Img variant="top" src={slide1} />
              </Card>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="slide-card">
              <Card>
                <Card.Img variant="top" src={slide3} />
              </Card>
            </div>
          </Slide>
        </Slider>
        {/* <div className="slide-button">
          {" "}
          <ButtonBack>....Back </ButtonBack>
          <ButtonNext>Next...</ButtonNext>
        </div> */}
      </CarouselProvider>
    </>
  );
};

export default VisitorInfo;
