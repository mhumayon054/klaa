import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import second from "../../assets/second.png";
import sixth from "../../assets/sixth.png";
import eleventh from "../../assets/eleventh.png";

const ImageData = [
  {
    id: 1,
    image: second,
  },
  {
    id: 2,
    image: sixth,
  },
  {
    id: 3,
    image: eleventh,
  },
  {
    id: 4,
    image: second,
  },
  {
    id: 5,
    image: eleventh,
  },
  {
    id: 6,
    image: sixth,
  },
];

const Wrapper = styled.div`
  margin-top: 20px;
  overflow: hidden; /* Hide horizontal overflow */

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
    height: 640px;
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

  @media (max-width: 1024px) {
    .image-container {
      height: 250px; /* Adjust height for medium screens */
    }
  }

  @media (max-width: 600px) {
    .image-container {
      height: 200px; /* Adjust height for smaller screens */
    }
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
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

const ImgCarousal = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ImgCarousal;
