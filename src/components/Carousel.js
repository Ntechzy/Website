import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import logo1 from "../assets/images/partner_logo/Shri-Babu-Singh-Jay-Singh-Ayurvedic-Medical-College-Hospital-18.png";
import logo2 from "../assets/images/partner_logo/2.png";
import logo3 from "../assets/images/partner_logo/9.png";
import logo4 from "../assets/images/partner_logo/Shri-Babu-Singh-Jay-Singh-Ayurvedic-Medical-College-Hospital-10.png";
import logo5 from "../assets/images/partner_logo/Shri-Babu-Singh-Jay-Singh-Ayurvedic-Medical-College-Hospital-12.png";
import logo6 from "../assets/images/partner_logo/Shri-Babu-Singh-Jay-Singh-Ayurvedic-Medical-College-Hospital-16.png";
// import logo7 from "../assets/images/partner_logo/Shri-Babu-Singh-Jay-Singh-Ayurvedic-Medical-College-Hospital-20-1.png";
import logo8 from "../assets/images/partner_logo/Shri-Babu-Singh-Jay-Singh-Ayurvedic-Medical-College-Hospital-21.png";
import logo9 from "../assets/images/partner_logo/Your-paragraph-text-2.png";
import logo10 from "../assets/images/partner_logo/Your-paragraph-text-3.png";
import logo11 from "../assets/images/partner_logo/Your-paragraph-text-4.png";
import logo12 from "../assets/images/partner_logo/Your-paragraph-text-5.png";
import logo13 from "../assets/images/partner_logo/Your-paragraph-text-7.png";
import logo14 from "../assets/images/partner_logo/Your-paragraph-text-8.png";
import logo15 from "../assets/images/partner_logo/ks (1).png";
import logo16 from "../assets/images/partner_logo/web logos (1).png";

const Carousel = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [localimages, setlocalimages] = useState([
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
  ]);
  const [activeState, setActiveState] = useState([0, 1, 2, 3]);

  const nextSlide = () => {
    // setCurrentSlide((prevSlide) =>
    //   prevSlide === images.length - 1 ? 0 : prevSlide + 1
    // );
    console.log(activeState[2] + 1, localimages.length);
    if (activeState[3] + 1 < localimages.length) {
      let temp = [];
      activeState.map((ritick) => {
        temp.push(ritick + 1);
      });
      setActiveState(temp);
    }
  };

  const prevSlide = () => {
    if (activeState[0] > 0) {
      let temp = activeState.map((ritick) => ritick - 1);
      setActiveState(temp);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); // Change slide every 2.5 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);


  console.log("print", images);
  return (
    <div className="relative w-full px-5">
      <div className="overflow-hidden relative mx-5">
        <div className="flex justify-between">
          {localimages?.map((image, index) => {
            return (
              <div
                key={index}
                className={`w-50 h-50 ${
                  activeState.includes(index) ? "block" : "hidden"
                }`}
                aria-hidden={index !== currentSlide}
                aria-labelledby={`slide-${index}`}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="custom-ritick"
                  id={`slide-${index}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 px-3 py-1 rounded-full"
        onClick={prevSlide}
        aria-label="Previous">
        ‹
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 px-3 py-1 rounded-full"
        onClick={nextSlide}
        aria-label="Next">
        ›
      </button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Carousel;



