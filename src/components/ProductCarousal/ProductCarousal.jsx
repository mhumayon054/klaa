import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowRight,SlArrowLeft } from "react-icons/sl"; // Bootstrap style icons

const ImageData = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <SlArrowRight />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
};

const ProductWrapper = styled.div`
  margin-top: 20px;
  overflow: hidden; 
  display: flex;
  align-items: center;
  flex-direction: column;

  .discount-text {
    padding: 20px 0px;
    width: 95%;
    p {
      font-size: 30px;
      font-weight: 500;
      text-align: center;
    }
  }

  .img-carousal-container {
    width: 100%;
    padding: 10px 0px;
    margin: 0 auto;
  }

  .img-container-parent {
    width: 100%;
    margin: 0 auto;
  }

  .card {
    border: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .image-container {
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container img {
    width: 100%; /* Take full width */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Ensure the image covers the entire container */
  }

  .slick-slide {
    padding: 0 2px; 
  }

  .slick-list {
    margin: 0 -10px; /* Remove extra margin for first and last images */
  }

  .slick-arrow {
    position: absolute;
    top: 50%;
    z-index: 10; /* Increase z-index for visibility */
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7); /* Add background to make arrows stand out */
    color: white;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* Adjust arrow size */
    height: 40px;
    transform: translateY(-50%);
  }

  .slick-prev {
    left: 10px; /* Left arrow position */
    display: flex !important;
  }

  .slick-next {
    right: 10px; /* Right arrow position */
    display: flex !important;
  }

  @media (max-width: 600px) {
    .slick-prev, .slick-next {
      display: none; /* Hide arrows on small screens */
    }
  }

`;

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // Show 2 images on medium screens
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1, // Show 1 image on small screens
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductCarousal = () => {
  return (
    <ProductWrapper>
      <div className="discount-text">
        <p>#IWEARKLAASERIES</p>
      </div>
      <div className="img-carousal-container">
        <div className="img-container-parent">
          <Slider {...settings}>
            {ImageData.map((img) => (
              <div key={img.id} className="card">
                <div className="image-container">
                  <img src={img.image} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default ProductCarousal;
