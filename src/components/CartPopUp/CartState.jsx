import React, { useState } from 'react';
import CartModal from './CartModal';  // Import the CartModal component

function CartState() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenCart}>Add to Cart</button>
      <CartModal isOpen={isCartOpen} onClose={handleCloseCart} /> 
    </div>
  );
}

export default CartState;
