import React from 'react';
import styled from 'styled-components';
import discountImg1 from "../../assets/discountImg1.jpeg"
import discountImg2 from "../../assets/discountImg2.jpeg"
import discountImg3 from "../../assets/discountImg3.jpeg"
import discountImg4 from "../../assets/discountImg4.jpeg"
import discountImg5 from "../../assets/discountImg5.jpeg"
import discountImg6 from "../../assets/discountImg6.jpeg"
import discountImg8 from "../../assets/discountImg8.jpeg"
import discountImg9 from "../../assets/discountImg9.jpeg"

const cardData = [
  {
    id: 1,
    image: discountImg1,
    hoverImage: discountImg2, // Placeholder for the hover image
    title: 'BASIC TEES CHICAGO',
  },
  {
    id: 2,
    image: discountImg3,
    hoverImage: discountImg5, // Placeholder for the hover image
    title: 'Card 2',
  },
  {
    id: 3,
    image: discountImg4,
    hoverImage: discountImg8, // Placeholder for the hover image
    title: 'Card 3',
  },
  {
    id: 4,
    image: discountImg9,
    hoverImage: discountImg6,
    title: 'Card 4',
  }
];


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  justify-content: center;

  .discount-text {
    padding: 20px 0px;
    width: 95%;
    p {
      font-size: 30px;
      font-weight: 500;
      text-align: center;
    }
  }

  .discount-card-container {
    display: flex;
    width: 95%;
    justify-content: center;
    margin-top: 20px;
  }

  .discounted-cards {
    gap: 20px;
    width: 100%;
    display: flex;

    .card {
      border: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      position: relative; /* Added to position images on top of each other */
      overflow: hidden; /* Hide overflow for a clean effect */

      .image-container {
        width: 100%;
        max-height: 500px;
        position: relative; /* Added to contain absolute positioning of images */
      }

      .image {
        position: absolute; /* Position images on top of each other */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease-in-out; /* Smooth transition */
      }

      .hover-image {
        opacity: 0; /* Initially hide hover image */
      }

      &:hover .hover-image {
        opacity: 1; /* Show hover image on hover */
      }

      &:hover .default-image {
        opacity: 0; /* Hide default image on hover */
      }
    }
  }
`;


const DiscountSection = () => {
  return (
    <Wrapper>
      <div className="discount-text">
        <p>SHOP BY DISCOUNT</p>
      </div>
      <div className="discount-card-container">
        <div className="discounted-cards">
          {cardData.map((card) => (
            <div key={card.id} className="card">
              <div className="image-container">
                <img src={card.image} alt={card.title} className="image default-image" />
                <img src={card.hoverImage} alt={`${card.title} Hover`} className="image hover-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DiscountSection;
