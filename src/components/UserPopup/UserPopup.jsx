// UserPopup.jsx
import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 90px;
  z-index: 1001;
  right: 30px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 25px;
  width: 350px;
  height: auto; /* Change to auto to fit content */
  max-height: 450px;
  overflow-y: auto; /* Allow scrolling if content overflows */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const UserPopup = ({ isOpen, onClose, products }) => {
  if (!isOpen) return null;

  return (
    <PopupContainer>
      <h2>User Menu</h2>
      <button onClick={onClose}>Close</button>
      <h3>Your Products:</h3>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        products.map((product, index) => (
          <ProductItem key={index}>
            <Image src={product.image} alt={product.title} />
            <div>
              <p>{product.title}</p>
              <p>Price: {product.price}</p>
            </div>
          </ProductItem>
        ))
      )}
    </PopupContainer>
  );
};

export default UserPopup;
