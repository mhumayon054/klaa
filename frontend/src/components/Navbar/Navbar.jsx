import React, { useState } from "react";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GiFlowers } from "react-icons/gi";
import DropDownBtn from "../DropDownBtn/DropDownBtn";
import CartPopUp from '../CartPopUp/CartPopUp'; // Import the CartPopUp component
import UserPopup from '../UserPopup/UserPopup'; // Import UserPopup
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Column1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(255, 245, 235);
  p {
    padding: 10px 15px;
    font-size: 15px;
  }`
;

const Column2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid lightgrey;

  .section1 {
    width: 30%;
    display: flex;
    align-items: center;
    button {
      color: black;
      background-color: white;
      width: 35%;
      padding: 8px 0px;
      border: none;
      letter-spacing: 2px;
    }
    button:hover {
      p {
        transition: transform 0.3s ease-in-out;
        transform: scale(1.1);
      } 
    }
  }
  .section2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
  }
  .section3 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    gap: 15px;
  }`
;

const Column3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  ul {
    display: flex;
    list-style: none;
    gap: 25px;
    li {
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Add state for cart items

  // Function to handle opening the cart popup
  const handleCartToggle = () => {
    setIsCartOpen(prev => !prev);
  };

  const handleUserIconClick = () => {
    setIsUserPopupOpen(false); // Close UserPopup
    navigate("/checkout"); // Navigate to /checkout page
  };

  const handleClosePopup = () => {
    setIsCartOpen(false);
    setIsUserPopupOpen(false);
  };

  return (
    <Container>
      <Column1>
        <p>Limited Edition is live. Shop your favourites now!</p>
      </Column1>

      <Column2>
        <div className="section1">
          <button
            style={{ color: "white", background: "black", border: "none" }}
          >
            <p>LUXURY</p>
          </button>
          <button><p>ESSENTIAL</p></button>
        </div>
        <div className="section2">
          <h1>KLAA</h1>
          <GiFlowers size={30} />
        </div>
        <div className="section3">
          <IoMdSearch size={20} onClick={handleCartToggle} />
          <FaUser size={15} onClick={handleUserIconClick} /> {/* Update this line */}
        </div>
      </Column2>

      <Column3>
        <DropDownBtn />
      </Column3>

      {/* Render CartPopUp if the popup is open */}
      {isCartOpen && (
        <CartPopUp 
          isOpen={isCartOpen} 
          onClose={handleCartToggle} 
          items={cartItems} // Pass cart items
        />
      )}

      {/* Render UserPopup if the popup is open */}
      {isUserPopupOpen && (
        <UserPopup 
          isOpen={isUserPopupOpen} 
          onClose={handleClosePopup} 
          products={cartItems} // Pass cart items to UserPopup if needed
        />
      )}
    </Container>
  );
};

export default Navbar;
