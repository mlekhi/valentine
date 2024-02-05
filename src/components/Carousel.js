import './Carousel.css';
import Slider from "react-slick";

function Carousel({ slideDirection }) {
  const path = "cute_pics"; // path to folder

  const images = [
    `${path}/image1.jpg`,
    `${path}/image2.jpg`,
    `${path}/image3.jpg`,
    `${path}/image4.jpg`,
    `${path}/image5.jpg`,
    `${path}/image6.jpg`,
  ]; // Replace with your actual image URLs

  const animationClassName = slideDirection === 'up' ? 'photobooth-frame-up' : 'photobooth-frame-down';
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="photobooth-container">
      <div className={`${animationClassName}`}>
        <Slider {...settings}>
        </Slider>
        {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}      
      </div>
    </div>
  );
}

export default Carousel;