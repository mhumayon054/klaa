import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CardCarousal.css';
import CartPopUp from '../CartPopUp/CartPopUp'; 
import UserPopup from '../UserPopup/UserPopup'; 

const cardData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/10557056/pexels-photo-10557056.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'BASIC TEES CHICAGO',
    description: 'COTTON FABRIC',
    price: "$10"
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/7679666/pexels-photo-7679666.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Card 2',
    description: 'This is the description for Card 2',
    price: "$10"
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/7319172/pexels-photo-7319172.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Card 3',
    description: 'This is the description for Card 3',
    price: "$10"
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/7679666/pexels-photo-7679666.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Card 2',
    description: 'This is the description for Card 2',
    price: "$10"
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/6076048/pexels-photo-6076048.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Card 5',
    description: 'This is the description for Card 5',
    price: "$10"
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/5159242/pexels-photo-5159242.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Card 6',
    description: 'This is the description for Card 6',
    price: "$10"
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Card 7',
    description: 'This is the description for Card 7',
    price: "$10"
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Card 8',
    description: 'This is the description for Card 8',
    price: "$10"
  },
];

const CardCarousal = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(""); 

  const handleAddToCartClick = (card) => {
    setCartItems((prevItems) => [...prevItems, card]); 
    setNotification("Your product is added"); 
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 2000);
  };

  const handleClosePopup = () => {
    setIsCartOpen(false);
    setIsUserPopupOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
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
                <p>Rs. <span>{card.price}</span></p>
              </div>
              <div className="cart-btn">
                <button onClick={() => handleAddToCartClick(card)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {isCartOpen && (
        <CartPopUp 
          isOpen={isCartOpen} 
          onClose={handleClosePopup} 
          message={notification}
        />
      )}

      {isUserPopupOpen && (
        <UserPopup 
          isOpen={isUserPopupOpen} 
          onClose={handleClosePopup} 
          products={cartItems} 
        />
      )}
    </div>
  );
};

export default CardCarousal;
