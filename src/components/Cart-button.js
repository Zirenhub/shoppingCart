import React, { useState } from 'react';
import cartSVG from '../assets/svg/cart-shopping-solid.svg';
import Cart from './Cart';

const CartButton = (props) => {
  const [cartToggle, setCartToggle] = useState(false);

  const { cart, removeFromCart } = props;

  const handleCartToggle = () => {
    setCartToggle((pre) => !pre);
  };

  return (
    <div className="cart-container">
      <button
        className="cart-btn"
        style={{ backgroundImage: `url(${cartSVG})` }}
        onClick={handleCartToggle}
      ></button>
      <p>{cart.length}</p>
      {cartToggle && (
        <Cart
          close={() => setCartToggle(false)}
          products={cart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default CartButton;
