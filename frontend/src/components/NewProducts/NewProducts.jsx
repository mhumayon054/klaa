import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import eleventh from "../../assets/eleventh.png";
import sixth from "../../assets/sixth.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import thirteen from "../../assets/thirteen.jpeg";
import fourteen from "../../assets/fourteen.jpeg";
import Whatsapp from "../../assets/Whatsapp.svg";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0;
  width: 100%; /* Ensure the wrapper stays within the screen */
  overflow: hidden; /* Prevent horizontal scroll caused by overflow */

  @media screen and (max-width: 430px) {
    display: flex;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;

  .shop {
    text-align: center;
    font-size: 30px;
    font-weight: 500;

    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }
  }

  .now {
    text-align: center;
    font-size: 50px;
    color: red;
    font-weight: 500;

    @media screen and (max-width: 1024px) {
      font-size: 30px;
    }
  }
`;

const ImgContainer = styled.div`
  width: 80%;
  overflow: hidden;

  .slick-slide {
    width: auto !important; /* Automatically adjust to content */
    max-width: 180px;
    outline: none !important;
    padding: 0px 10px;
  }

  .image-box {
    width: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: center !important;

    a{
      text-decoration: none;
    }
  }
  .image-box img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;

    @media screen and (max-width: 1024px) {
      width: 100px;
      height: 100px;
    }

    @media screen and (max-width: 600px) {
      width: 80px;
      height: 80px;
    }
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: grey;

    @media screen and (max-width: 1024px){
      font-size: 10px;
    }
  }
`;


const NewProducts = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
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
    <Wrapper>
      <TextContainer>
        <div className="new-products-text">
          <p className="shop">SHOP</p>
          <p className="now">NOW</p>
        </div>
      </TextContainer>
      <ImgContainer>
        <Slider {...settings}>
          <div className="image-box">
            <img src={eleventh} alt="Image 1" />
            <p>CLASSIC BLACK TEE</p>
          </div>
          <div className="image-box">
            <img src={fourteen} alt="Image 2" />
            <p>ABSTRACT ART TEE</p>
          </div>
          <div className="image-box">
            <img src={sixth} alt="Image 3" />
            <p>COOL GRAPHIC TEE</p>
          </div>
          <div className="image-box">
            <img src={third} alt="Image 4" />
            <p>FLORAL FUN TEE</p>
          </div>
          <div className="image-box">
            <img src={thirteen} alt="Image 5" />
            <p>ARIES PRINT TEE</p>
          </div>
          <div className="image-box">
            <img src={second} alt="Image 6" />
            <p>NATURE INSPIRED TEE</p>
          </div>
          <div className="image-box">
            <a href="https://wa.me/923194160712">
              <img src={Whatsapp} alt="Image 6" />
              <p>Your Custom Design</p>
            </a>
          </div>
        </Slider>
      </ImgContainer>
    </Wrapper>
  );
};

export default NewProducts;
