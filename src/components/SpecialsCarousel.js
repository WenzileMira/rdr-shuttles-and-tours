import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SpecialsCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SpecialsCarousel;
