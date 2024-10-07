import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
  /* Basic Layout for the shopping cart page */

.shopping-cart-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
}

.shopping-cart {
  width: 50%;
}

.cart-items {
  margin-top: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
    border-bottom: 1px solid #ccc;
}

.item-img {
  width: 50px;
  height: 50px;
}

.item-info h4 {
  margin: 0;
  font-size: 16px;
}

.item-info p {
  margin: 0;
  color: #555;
}

.item-quantity {
  display: flex;
  align-items: center;
}

.item-quantity button {
  background-color: #ddd;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

.item-price {
  font-weight: bold;
}

.summary {
  width: 30%;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 0px 10px 10px 0px;

}

.summary h3 {
  margin-bottom: 20px;
}

.summary p {
  margin: 10px 0;
}

.shipping select {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
}

.promo-code input {
  width: 100%;
  padding: 5px;
  margin-top: 10px;
}

.checkout-btn {
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
}

`

function Checkout() {
  const [items] = useState([
    { id: 1, name: 'Cotton T-shirt', price: 44, color: 'Purple', quantity: 1 },
    { id: 2, name: 'Cotton T-shirt', price: 44, color: 'Gray', quantity: 1 },
    { id: 3, name: 'Cotton T-shirt', price: 44, color: 'Black', quantity: 1 },
  ]);

  const [shipping, setShipping] = useState(5);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0) + shipping;

  return (
    <Wrapper>
    <div className="shopping-cart-container">
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={`/images/${item.color}-shirt.png`} alt={item.name} className="item-img" />
              <div className="item-info">
                <h4>Shirt</h4>
                <p>{item.name}</p>
              </div>
              <div className="item-quantity">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
              <p className="item-price">€{item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="summary">
        <h3>Summary</h3>
        <p>Items: {items.length} €{totalPrice - shipping}</p>
        <div className="shipping">
          <label>Shipping</label>
          <select value={shipping} onChange={(e) => setShipping(Number(e.target.value))}>
            <option value={5}>Standard-Delivery - €5.00</option>
          </select>
        </div>
        <div className="promo-code">
          <label>Give Code</label>
          <input type="text" placeholder="Enter your code" />
        </div>
        <p>Total Price: €{totalPrice.toFixed(2)}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
    </Wrapper>
  );
}

export default Checkout;
