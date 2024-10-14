import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  background-color: #eff3f6;
  flex-wrap: wrap; /* Flex wrap for better responsiveness on smaller screens */

  .shopping-cart-container {
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    width: 55%;
    background-color: white;
    box-shadow: 0px 0px 8px 0px;
    padding: 20px;
    overflow: hidden;
    height: 450px;
    margin-bottom: 20px; /* Spacing for mobile view */

    .upper-text{
      justify-content: space-between;
    display: flex;
    align-items: center;

    p{
      font-size: 12px;
    }
    }
  }

  .cart-items-carousel {
    overflow-y: auto;
    height: auto; /* Remove fixed height for flexibility */
    max-height: 400px; /* Limit the height on larger screens */
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }

  .cart-item img {
    width: 80px;
    height: auto;
  }

  .product-details {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin: 0px 30px;
    text-align: left;

    .size-options{
      display: flex;
    align-items: center;
    gap: 20px;

    label{
      display: flex;
    flex-direction: column;
    align-items: center;
    }
    }

    .product-details-sec1{
    display: flex;
    flex-direction: column;
}
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .quantity-btn {
    padding: 5px 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    background-color: #f1f1f1;
    border-radius: 3px;
  }

  .delete-btn {
    color: red;
    cursor: pointer;
    font-size: 20px;
  }

  .summary {
    width: 35%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 24px;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 8px 0px;
    justify-content: space-between;

    .summary-section2 {
      width: 100%;
      background-color: rgb(255, 245, 235);
      border-radius: 24px;
      padding: 30px;
      margin-top: 20px;

      .quantity-items {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .summary-context {
    display: flex;
    background-color: white;
    border-radius: 24px;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    .first-text {
      display: flex;
      width: 100%;
      align-items: flex-start;

      p {
        font-size: 18px;
        font-weight: 500;
        padding-bottom: 20px;
      }
    }

    .city-prov {
      display: flex;
      width: 100%;
      gap: 10px;
    }
  }

  .summary-items {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
  }

  .checkout-btn {
    padding: 10px;
    background-color: #000000;
    color: white;
    border: none;
    width: 100%;
    cursor: pointer;
    border-radius: 24px;
    margin-top: auto;
  }

  .checkout-btn:hover {
    background-color: #3c3c3c;
  }

  input {
    padding: 10px;
    width: 100%;
    margin: 8px 0;
    border-radius: 30px;
    border: 1px solid #ddd;
    background-color: #dadada45;
  }

  @media (max-width: 1200px) {
    .shopping-cart-container {
      width: 60%;
    }

    .summary {
      width: 35%;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column; /* Stack cart and summary sections */
    align-items: center;

    .shopping-cart-container {
      width: 100%; /* Full width on medium screens */
    }

    .summary {
      width: 100%;
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    .cart-item img {
      width: 70px; /* Adjust image size for smaller screens */
    }

    .product-details {
      margin-left: 10px;
    }

    .first-text p {
      font-size: 16px; /* Adjust text size for small screens */
    }
  }

  @media (max-width: 576px) {
    .shopping-cart-container,
    .summary {
      width: 100%;
    }

    .quantity-btn {
      padding: 3px 8px; /* Smaller buttons for mobile */
    }

    .cart-item img {
      width: 50px; /* Smaller images for mobile */
    }

    .summary-context input {
      font-size: 14px; /* Input fields adjust for smaller screens */
    }
  }
`

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [groupedItems, setGroupedItems] = useState(
    cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += parseFloat(item.price);
      } else {
        acc.push({ ...item, quantity: 1, totalPrice: parseFloat(item.price) });
      }
      return acc;
    }, [])
  );

  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (id, size) => {
    setSelectedSizes((prev) => ({ ...prev, [id]: size }));
  };

  const adjustQuantity = (id, type) => {
    setGroupedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
              totalPrice:
                type === "increase"
                  ? item.totalPrice + parseFloat(item.price)
                  : item.quantity > 1
                  ? item.totalPrice - parseFloat(item.price)
                  : item.totalPrice,
            }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setGroupedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = groupedItems.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  const handleCheckout = () => {
    // Validation to check if any field is empty
    if (!name || !email || !phNumber || !address || !zip || !city) {
      setShowModal(true); // Show modal if any field is empty
      return;
    }

    // Check if size is selected for each item
    for (const item of groupedItems) {
      if (!selectedSizes[item.id]) {
        alert(`Please select a size for ${item.name}.`);
        return; // Exit if a size is not selected
      }
    }

    // Proceed with the checkout (API request)
    axios.post("http://localhost:5000/checkout", {
      cartItems: groupedItems.map(item => ({
        ...item,
        selectedSize: selectedSizes[item.id], // No default size
      })),
      name,
      email,
      phNumber,
      address,
      city,
      zip,
      totalPrice,
    })
    .then(response => {
      // Show confirmation modal instead of alert
      setShowConfirmationModal(true);
      // Clear input fields after successful checkout
      setName("");
      setEmail("");
      setPhNumber("");
      setAddress("");
      setZip("");
      setCity("");
      setGroupedItems([]); // Clear grouped items after successful checkout
    }).catch(error => {
      console.error("Error during checkout:", error);
      alert("Failed to proceed.");
    });
  };

  return (
    <Wrapper>
      <div className="shopping-cart-container">
        <div className="upper-text">
          <h2>Your Cart</h2>
          <p><b>Note:</b><i>You can cancel the order from <a href="mailto:infoklaa63@gmail.com">infoklaa63@gmail.com</a></i></p>
        </div>
        <div className="cart-items-carousel">
          {groupedItems.length > 0 ? (
            groupedItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="product-details">
                  <div className="product-details-sec1">
                  <h4>{item.name}</h4>
                  <p>Description: {item.description}</p>
                  <p>Price: Rs. {item.totalPrice.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => adjustQuantity(item.id, "decrease")}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => adjustQuantity(item.id, "increase")}
                    >
                      +
                    </button>

                  </div>
                  </div>
                  <div className="size-options">
                    <label>
                      <input 
                        type="radio" 
                        value="S" 
                        name={`size-${item.id}`} 
                        onChange={() => handleSizeChange(item.id, 'S')} 
                      /> S
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        value="M" 
                        name={`size-${item.id}`} 
                        onChange={() => handleSizeChange(item.id, 'M')} 
                      /> M
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        value="L" 
                        name={`size-${item.id}`} 
                        onChange={() => handleSizeChange(item.id, 'L')} 
                      /> L
                    </label>
                  </div>
                  
                </div>
                <FaTrashAlt
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                />
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <div className="summary-context">
          <div className="first-text">
            <p>Please fill up your info:</p>
          </div>
          <div className="city-prov">
            <input
              type="text"
              placeholder="Your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Zip Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phNumber}
            onChange={(e) => setPhNumber(e.target.value)}
            required
          />
        </div>
        <div className="summary-section2">
        <div className="quantity-items">
            <p>Total Items:</p>
            <p>{groupedItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
        </div>
        <div className="summary-items">
            <p>Total Price:</p>
            <p>Rs. {totalPrice.toFixed(2)}</p>
        </div>
          <Button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      </div>
      
    </Wrapper>
  );
}

export default Checkout;
