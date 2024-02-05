import React, { useState, useEffect } from "react";
import './Carousel.css';
import Slider from "react-slick";

function Carousel({ slideDirection }) {
  const path = "cute_pics"; // path to folder
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    `${path}/image1.jpeg`,
    `${path}/image2.jpeg`,
    `${path}/image3.jpg`,
    `${path}/image4.jpg`,
    `${path}/image5.jpg`,
  ]; // Replace with your actual image URLs

  const animationClassName = slideDirection === 'up' ? 'photobooth-frame-up' : 'photobooth-frame-down';
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    arrows: false,
  };

  return (
    <div className="photobooth-container">
      <div className={`${animationClassName}`}>
        <Slider {...settings}>
        </Slider>
        {images.map((image, index) => (
            <img key={currentIndex} src={image} alt={`Image ${currentIndex + 1}`} />
            ))}      
      </div>
    </div>
  );
}

export default Carousel;