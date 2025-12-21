import Carousel from "react-bootstrap/Carousel";
import "../css/dist/css/bootstrap.css";

const ControlledCarousel = ({ images, interval }) => {
  return (
    <div className="carousel-wrapper">
      <Carousel fade interval={interval} controls={false} indicators={false}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-wrapper">
              <img
                src={img}
                alt={`slide-${index}`}
                className="carousel-image"
              />

              {/* Blur layer */}
              <div className="carousel-blur-overlay"></div>

              {/* Welcome text */}
              <div className="carousel-text">
                <h1>Welcome to Rapid Dynamic Reach Shuttles & Tours</h1>
                <p>
                  24/7 availability and emergency response - Reliable, comfortable and professional transportation solutions
                  with experinced drivers. All documentst are in order, thus providing swift services with ease across the continent!!!
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;
