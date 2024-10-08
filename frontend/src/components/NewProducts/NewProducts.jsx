import React from "react";
import styled from "styled-components";
import eleventh from "../../assets/eleventh.png"
import sixth from "../../assets/sixth.png"
import second from "../../assets/second.png"
import third from "../../assets/third.png"
import thirteen from "../../assets/thirteen.jpeg"
import fourteen from "../../assets/fourteen.jpeg"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  .new-products-text {
  }
  p {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
  }
`;
const ImgContainer = styled.div`
  width: 90%;
  .image-container-circle {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding: 0px 50px;
  }

  .image-box {
    text-align: center;
  }

  .image-box img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%; /* To make the image circular */
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: grey;
  }
`;
const NewProducts = () => {
  return (
    <Wrapper>
      <TextContainer>
        <div className="new-products-text">
          <p>SHOP</p>
          <p style={{ color: "red", fontSize: "50px" }}>NOW</p>
        </div>
      </TextContainer>
      <ImgContainer>
        <div className="image-container-circle">
          <div className="image-box">
            <img
              src={eleventh}
              alt="Image 1"
            />
            <p>CLASSIC BLACK TEE</p>
          </div>
          <div className="image-box">
            <img
              src={fourteen}
              alt="Image 2"
            />
            <p>ABSTRACT ART TEE</p>
          </div>
          <div className="image-box">
            <img
              src={sixth}
              alt="Image 3"
            />
            <p>COOL GRAPHIC TEE</p>
          </div>
          <div className="image-box">
            <img
              src={third}
              alt="Image 4"
            />
            <p>FLORAL FUN TEE</p>
          </div>
          <div className="image-box">
            <img
              src={thirteen}
              alt="Image 5"
            />
            <p>ARIES PRINT TEE</p>
          </div>
          <div className="image-box">
            <img
              src={second}
              alt="Image 6"
            />
            <p>NATURE INSPIRED TEE</p>
          </div>
        </div>
      </ImgContainer>
    </Wrapper>
  );
};

export default NewProducts;
