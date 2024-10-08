import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const Wrapper = styled.div`
  h2 {
    margin-bottom: 2.5rem;
    font-size: 32px;
  }

  .summary-context {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

function Checkout() {
  const { cartItems } = useContext(CartContext); // Access cartItems from context
  const [shipping, setShipping] = useState(5);
  const [userEmail, setUserEmail] = useState(""); // To capture user's email
  const [address, setAddress] = useState(""); // To capture user's address

  const totalPrice =
    cartItems.reduce((sum, item) => sum + item.price, 0) + shipping;

  const handleBuyNow = async () => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          address: address,
          cartItems: cartItems,
          totalPrice: totalPrice,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email: " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred!");
    }
  };

  return (
    <Wrapper>
      <div
        className="shopping-cart-container"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div
          className="shopping-cart"
          style={{
            borderRadius: "40px 0px 0px 40px",
            boxShadow: "0px 0px 10px",
            padding: "30px",
            width: "40%",
            height: "500px",
          }}
        >
          <h2>Shopping Cart</h2>
          <div
            className="cart-items"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                  style={{ display: "flex", gap: "30px" }}
                >
                  <div
                    className="item-info"
                    style={{ display: "flex", gap: "30px" }}
                  >
                    <img
                      style={{ height: "70px" }}
                      src={item.image}
                      alt={item.title}
                      className="item-img"
                    />
                    <div className="caption">
                      <h4 style={{ fontSize: "20px" }}>{item.title}</h4>
                      <p style={{ fontSize: "12px", color: "grey" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <p
                    className="item-price"
                    style={{
                      display: "flex",
                      fontSize: "14px",
                      gap: "10px",
                      alignItems: "baseline",
                    }}
                  >
                    Rs.{" "}
                    <span style={{ fontSize: "16px", color: "red" }}>
                      {item.price}
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>

        <div
          className="summary"
          style={{
            boxShadow: "0px 0px 10px",
            padding: "30px",
            width: "25%",
            backgroundColor: "#e5e5e5",
          }}
        >
          <h2>Summary</h2>
          <div className="summary-context">
            <div>
              <span>Items: {cartItems.length}</span>{" "}
              <span> Rs. {totalPrice - shipping}</span>
            </div>
            <div className="shipping">
              <label>Shipping</label>
              <select
                value={shipping}
                onChange={(e) => setShipping(Number(e.target.value))}
              >
                <option value={5}>Standard-Delivery - Rs. 5.00</option>
              </select>
            </div>

            {/* User Email Input */}
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* User Address Input */}
            <div>
              <label>Address:</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
              />
            </div>

            <p>Total Price: Rs. {totalPrice.toFixed(2)}</p>
            <button className="checkout-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Checkout;
