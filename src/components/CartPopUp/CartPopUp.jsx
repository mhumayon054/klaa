import React, { useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); 
  display: flex;
  justify-content: center; 
  align-items: center; 
  z-index: 1000; 
`;

const CartModalContainer = styled.div`
  width: 300px; 
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  text-align: center; 
  z-index: 1001; 
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Message = styled.p`
  font-size: 18px; 
`;

function CartPopUp({ onClose }) {
  // Use useEffect to close the popup after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500); // 1000 milliseconds = 1 second

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Overlay onClick={onClose}> {/* Ensure the overlay itself can close the popup */}
      <CartModalContainer onClick={(e) => e.stopPropagation()}> {/* Prevent clicks inside from closing */}
        <CloseButton onClick={onClose}>×</CloseButton>
        <Message>Your Product is Added</Message>
      </CartModalContainer>
    </Overlay>
  );
}

export default CartPopUp;
