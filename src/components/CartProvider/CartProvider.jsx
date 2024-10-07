import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1,
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5,
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1,
    },
  ];

  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name} - Rs. {p.price}</h2>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

function Cart({ onClose }) {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
      <h1>Cart ({totalUniqueItems})</h1>
      <button onClick={onClose}>Close Cart</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash; Rs. {item.price} each
            <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
            <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CartProvider() {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <CartProvider>
      <Page />
      <button onClick={toggleCart}>Toggle Cart</button>
      {isCartOpen && <Cart onClose={toggleCart} />}
    </CartProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
