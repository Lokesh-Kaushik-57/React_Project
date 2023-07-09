import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CardInvitations.css";
import Background from "../Images/Background.jpg";
import Card1 from "../Images/card1.webp";
import Card2 from "../Images/card2.webp";
import Card3 from "../Images/card3.webp";
import Card4 from "../Images/card4.webp";
import Card5 from "../Images/card5.webp";
import Card6 from "../Images/card6.webp";
import { Link } from "react-router-dom";

const CustomPrevArrow = (props) => (
  <div
    className="custom-prev-arrow"
    onClick={props.onClick}
    style={{ color: "#FF1493" }} // Change the color here
  >
    <ArrowCircleLeftIcon />
  </div>
);

const CustomNextArrow = (props) => (
  <div
    className="custom-next-arrow"
    onClick={props.onClick}
    style={{ color: "#FF1493" }} // Change the color here
  >
    <ArrowCircleRightIcon />
  </div>
);

const Carousel = ({ inViewRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true);
    }
  }, [isInView]);

  return (
    <>
      <div className="home2" style={{ backgroundImage: `url(${Background})` }}>
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {
                  x: 1200,
                  opacity: 0,
                  scale: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 150,
            delay: 0.25,
          }}
          onViewportEnter={() => setIsInView(true)}
          className="carousel-container"
          ref={inViewRef}
        >
          <Slider {...settings}>
            <div className="carousel-item">
              <img src={Card1} alt="not found" />
            </div>
            <div className="carousel-item">
              <img src={Card2} alt="not found" />
            </div>
            <div className="carousel-item">
              <img src={Card3} alt="not found" />
            </div>
            <div className="carousel-item">
              <img src={Card4} alt="not found" />
            </div>
            <div className="carousel-item">
              <img src={Card5} alt="not found" />
            </div>
            <div className="carousel-item">
              <img src={Card6} alt="not found" />
            </div>
          </Slider>
        </motion.div>
        <Link to="/card-invitations/sample-card-slide">
          <motion.button
            initial={false}
            animate={
              isLoaded && isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    rotate: 360,
                  }
                : {
                    opacity: 0,
                    scale: 0,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
              delay: 0.75,
            }}
            onViewportEnter={() => setIsInView(true)}
            className="button"
            onLoad={() => setIsInView(true)}
          >
            View Sample Card
          </motion.button>
        </Link>
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {
                  x: -1200,
                  opacity: 0,
                  scale: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 150,
            delay: 0.25,
          }}
          onViewportEnter={() => setIsInView(true)}
          className="headings"
        >
          <h1>Wedding Cards</h1>
        </motion.div>
      </div>
    </>
  );
};

export default Carousel;
