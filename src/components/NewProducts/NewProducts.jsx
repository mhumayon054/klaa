import React from "react";
import styled from "styled-components";

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
          <p style={{ color: "red", fontSize: "50px" }}>SALE</p>
        </div>
      </TextContainer>
      <ImgContainer>
        <div className="image-container-circle">
          <div className="image-box">
            <img
              src="https://images.pexels.com/photos/11494662/pexels-photo-11494662.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Image 1"
            />
            <p>Image Title 1</p>
          </div>
          <div className="image-box">
            <img
              src="https://images.pexels.com/photos/6321685/pexels-photo-6321685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 2"
            />
            <p>Image Title 2</p>
          </div>
          <div className="image-box">
            <img
              src="https://images.pexels.com/photos/11597200/pexels-photo-11597200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Image 3"
            />
            <p>Image Title 3</p>
          </div>
          <div className="image-box">
            <img
              src="https://images.pexels.com/photos/9947827/pexels-photo-9947827.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Image 4"
            />
            <p>Image Title 4</p>
          </div>
          <div className="image-box">
            <img
              src="https://images.pexels.com/photos/13183217/pexels-photo-13183217.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Image 5"
            />
            <p>Image Title 5</p>
          </div>
          <div className="image-box">
            <img
              src="https://images.pexels.com/photos/724499/pexels-photo-724499.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 6"
            />
            <p>Image Title 6</p>
          </div>
        </div>
      </ImgContainer>
    </Wrapper>
  );
};

export default NewProducts;
