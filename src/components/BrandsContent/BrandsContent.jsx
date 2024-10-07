import React from 'react';
import styled from 'styled-components';

const cardData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/24454078/pexels-photo-24454078/free-photo-of-woman-in-jamaica-t-shirt-and-jean-overalls.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    hoverImage: 'https://images.pexels.com/photos/24454080/pexels-photo-24454080/free-photo-of-woman-in-jamaica-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Hover image
    title: 'BASIC TEES CHICAGO',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/24454058/pexels-photo-24454058/free-photo-of-young-woman-in-a-black-vest-and-white-shorts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hoverImage: 'https://images.pexels.com/photos/24454068/pexels-photo-24454068/free-photo-of-young-woman-in-a-black-vest-sitting-and-fixing-her-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Hover image
    title: 'Card 2',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/18787126/pexels-photo-18787126/free-photo-of-model-wearing-white-blazer-on-beige-glitter-blouse-and-cut-off-jeans-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hoverImage: 'https://images.pexels.com/photos/15043058/pexels-photo-15043058/free-photo-of-woman-wearing-a-black-blazer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Hover image
    title: 'Card 3',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3328614/pexels-photo-3328614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hoverImage: 'https://images.pexels.com/photos/3328616/pexels-photo-3328616.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Hover image
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
    width: 99%;
    height: 340px;
    justify-content: center;
    margin-top: 20px;
  }

  .discounted-cards {
    gap: 5px;
    width: 100%;
    display: flex;

    .card {
      border: none !important;
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
  
  .linkbtn {
    margin-top: 10px;
    a {
      color: grey;
    }
  }
`;

const BrandsSection = () => {
  return (
    <Wrapper>
      <div className="discount-text">
        <p>#IWEARKLAASERIES</p>
      </div>
      <div className="discount-card-container">
        <div className="discounted-cards">
          {cardData.map((card) => (
            <div key={card.id} className="card">
              <div className="image-container">
                <img src={card.image} alt={card.title} className="image default-image" />
                <img src={card.hoverImage} alt={`${card.title} Hover`} className="image hover-image" />
              </div>
              {/* You can also add title if needed */}
              {/* <p>{card.title}</p> */}
            </div>
          ))}
        </div>
      </div>
      <div className="linkbtn">
        <a href="">View More</a>
      </div>
    </Wrapper>
  );
};

export default BrandsSection;
