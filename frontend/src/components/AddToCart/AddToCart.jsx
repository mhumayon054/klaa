import React, { useState } from 'react';

const AddToCart = ({ product }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleBuyNow = () => {
        // Send cart details to the backend
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cart),
        }).then((res) => {
            if (res.ok) {
                alert('Order placed, email sent to admin!');
            } else {
                alert('Error placing order');
            }
        });
    };

    return (
        <div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
};

export default AddToCart;
