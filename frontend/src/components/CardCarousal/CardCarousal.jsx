import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousal.css';
import { CartContext } from '../../context/CartContext';
import first from "../../assets/first.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import eight from "../../assets/eight.png";
import twelfth from "../../assets/twelve.png";
import ninth from "../../assets/ninth.png";
import seventh from "../../assets/seventh.png";
import sixth from "../../assets/sixth.png";

const cardData = [
  {
    id: 1,
    image: first,
    title: "Beauty Face",
    description: "COTTON FABRIC",
    price: "1499",
  },
  {
    id: 2,
    image: fourth,
    title: "Beauty Face",
    description: "COTTON FABRIC",
    price: "1499",
  },
  {
    id: 3,
    image: fifth,
    title: "Fly Face",
    description: "COTTON FABRIC",
    price: "1499",
  },
  {
    id: 4,
    image: eight,
    title: "Never Give Up",
    description: "COTTON FABRIC",
    price: "1499",
  },
  {
    id: 5,
    image: ninth,
    title: "Aries",
    description: "COTTON FABRIC",
    price: "1499",
  },
  {
    id: 6,
    image: twelfth,
    title: "Towards Honesty",
    description: "COTTON FABRIC",
    price: "1499",
  },
  {
    id: 7,
    image: seventh,
    title: "Never Give Up",
    description: "COTTON FABRIC",
    price: "1499",
  },
  {
    id: 8,
    image: sixth,
    title: "Never Give Up",
    description: "COTTON FABRIC",
    price: "1499",
  },
];

const CardCarousal = () => {
  const { addToCart } = useContext(CartContext);
  
  const [addedItem, setAddedItem] = useState(null);

  const handleAddToCart = (card) => {
    addToCart(card);
    setAddedItem(card.id); // Set the added item ID to show the button animation

    // Reset the state after 2 seconds
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="carousel-container">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <div className="image-container">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="caption-section">
              <div className="text-col">
                <p>{card.title}</p>
                <p>{card.description}</p>
                <p>
                  Rs.{" "}
                  <span
                    style={{
                      fontSize: "20px",
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    {card.price}
                  </span>
                </p>
              </div>
              <div className="cart-btn">
                <button onClick={() => handleAddToCart(card)}>
                  <span className={`button-text ${addedItem === card.id ? 'fade-out' : ''}`}>
                    ADD TO CART
                  </span>
                  <span className={`added-text ${addedItem === card.id ? 'slide-down' : ''}`}>
                    Added
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousal;
