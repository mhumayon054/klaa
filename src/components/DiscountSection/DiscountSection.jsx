import React from 'react';
import styled from 'styled-components';

const cardData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/27940207/pexels-photo-27940207/free-photo-of-model-in-a-black-sweatshirt-and-beige-pants-sitting-on-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=600',
    hoverImage: 'https://images.pexels.com/photos/12027083/pexels-photo-12027083.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder for the hover image
    title: 'BASIC TEES CHICAGO',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/18157751/pexels-photo-18157751/free-photo-of-woman-raising-her-arm-over-her-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hoverImage: 'https://images.pexels.com/photos/6917595/pexels-photo-6917595.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Placeholder for the hover image
    title: 'Card 2',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hoverImage: 'https://images.pexels.com/photos/20736690/pexels-photo-20736690/free-photo-of-woman-model-in-oversized-white-t-shirt-posing-in-front-of-mural.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder for the hover image
    title: 'Card 3',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/9373423/pexels-photo-9373423.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    hoverImage: 'https://images.pexels.com/photos/24287017/pexels-photo-24287017/free-photo-of-young-woman-in-a-casual-outfit-standing-in-a-garage.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Placeholder for the hover image
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
