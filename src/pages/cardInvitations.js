import React from "react";
import Layout from "../Components/Layout/Layout";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CardInvitations.css"
import Card1 from '../Images/card1.webp'
import Card2 from '../Images/card2.webp'
import Card3 from '../Images/card3.webp'
import Card4 from '../Images/card4.webp'
import Card5 from '../Images/card5.webp'
import Card6 from '../Images/card6.webp'
import { Link } from "react-router-dom";


const CustomPrevArrow = (props) => (
  <div
    className="custom-prev-arrow"
    onClick={props.onClick}
    style={{ color: '#FF1493' }} // Change the color here
  >
    <ArrowCircleLeftIcon />
  </div>
);

const CustomNextArrow = (props) => (
  <div
    className="custom-next-arrow"
    onClick={props.onClick}
    style={{ color: '#FF1493'  }} // Change the color here
  >
    <ArrowCircleRightIcon />
  </div>
);

const Carousel = () => {
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

  return (
    <Layout>

    <div className="carousel-container">
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
    </div>
    <Link to='/card-invitations/sample-card-slide'>
             <button className='button'>
              View Sample Card
             </button>
          </Link>
    </Layout>
  );
};

export default Carousel;