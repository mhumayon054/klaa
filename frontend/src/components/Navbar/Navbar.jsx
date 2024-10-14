import React, { useState } from "react";
import styled from "styled-components";
import cart from "../../assets/cart.svg"
import { GiFlowers } from "react-icons/gi";
import DropDownBtn from "../DropDownBtn/DropDownBtn";
import CartPopUp from '../CartPopUp/CartPopUp'; 
import UserPopup from '../UserPopup/UserPopup'; 
import { useNavigate } from "react-router-dom"; 
import Sidebar from "../Sidebar/Sidebar";

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

    @media (max-width: 768px) {
      font-size: 12px; /* Smaller font for mobile */
    }
  }
`;

const Column2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid lightgrey;
  .sidebar{
   @media screen and (max-width: 768px){
    display: flex;
  }
   @media screen and (min-width: 769px){
    display: none;
  }

}

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on mobile */
    align-items: flex-start;
  }

  .section1 {
    width: 30%;
    display: flex;
    align-items: center;

    @media screen and (max-width:600px){
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    }
    @media screen and (min-width:601px) and (max-width:768px){
      width: 100%;
        display: flex;
        padding: 10px 0px;
        justify-content: center;
    }

    button {
      color: black;
      background-color: white;
      width: 35%;
      padding: 8px 0px;
      border: none;
      letter-spacing: 2px;
      font-size: 14px; /* Default font size */
      
      /* @media (max-width: 768px) {
        width: 100%; 
        padding: 10px 0; 
        font-size: 12px; 
      } */
      
      @media screen and (min-width:601px) and (max-width: 768px) {
        width: 35%;
        padding: 10px 0; 
        font-size: 12px; 
      }
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
    
    h1{
      margin-bottom: 0px !important;
    }
    @media (max-width: 768px) {
      width: 100%; 
      justify-content: center;
      padding: 10px 0px;
    }
  }

  .section3 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    gap: 15px;

    @media (max-width: 768px) {
      width: 100%; 
      padding: 10px 0px;
      justify-content: space-between; 
    }
  }
`;

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
      
      @media (max-width: 768px) {
        font-size: 10px; /* Smaller font for mobile */
      }
    }
  }
`;


const Navbar = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartToggle = () => {
    setIsCartOpen(prev => !prev);
  };

  const handleUserIconClick = () => {
    setIsUserPopupOpen(false);
    navigate("/checkout");
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
          <button style={{ color: "white", background: "black", border: "none" }}>
            <p>LUXURY</p>
          </button>
          <button><p>ESSENTIAL</p></button>
        </div>
        <div className="section2">
          <h1>KLAA</h1>
          <GiFlowers size={30} />
        </div>
        <div className="section3">
          <div className="sidebar">
          <Sidebar />
          </div>
          <div className="navbar-icons"  onClick={handleUserIconClick}>
            <button style={{ color: "white", background: "black", border: "none", padding:"8px 0px", color: "white",background: "black",border: "none",fontSize: "14px",padding: "8px 10px",letterSpacing: "1px"}}>Cart
          <img src={cart} alt="cart" style={{width:"20px", marginLeft:"5px"}}/>
          </button>
        </div>
        </div>
      </Column2>

      <Column3>
        <DropDownBtn />
      </Column3>

      {isCartOpen && (
        <CartPopUp 
          isOpen={isCartOpen} 
          onClose={handleCartToggle} 
          items={cartItems} 
        />
      )}

      {isUserPopupOpen && (
        <UserPopup 
          isOpen={isUserPopupOpen} 
          onClose={handleClosePopup} 
          products={cartItems} 
        />
      )}
    </Container>
  );
};

export default Navbar;
