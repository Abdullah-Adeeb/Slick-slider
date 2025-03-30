// AT FIRST Run these two command in the terminal 
 // npm i react-slick
 //npm install slick-carousel

 // AFter this Run these commands in the terminal
 //npm install react-slick --save
 //npm install slick-carousel --save

//THEN IMPORT



import React from "react";
import Product from "../Product";
import Slider from "react-slick"; //import to use slider
import "slick-carousel/slick/slick.css"; // for css of the slider
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const SlickSlider = () => {  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  

  return (
    <>
      <Container className={'py-20 relative'}>
        <div className="slider-container">
          {/* <Slider {...settings}> // slider settings to use the slider
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
          </Slider> */}
        </div>
      </Container>
    </>
  );
};

export default SlickSlider;
