import '../assets/css/Cart.css';
import React, { useEffect, useState } from 'react';

const Cart = (props) => {
  const [cost, setCost] = useState(0);

  const { products, removeFromCart, updateQuantity } = props;

  useEffect(() => {
    let result = products.reduce((acc, obj) => {
      return acc + obj.price * obj.quantity;
    }, 0);

    setCost(result);
  }, [products]);

  const handleRemove = (e) => {
    const target = e.target.dataset.product;

    removeFromCart(target);
  };

  const handleQuantity = (e) => {
    const addOrRemove = e.target.textContent;
    const value = e.target.parentNode.dataset.quantity;
    const target = e.target.parentNode.dataset.product;

    updateQuantity(target, value, addOrRemove);
  };

  return (
    <div className="modal-overlay">
      <div className="side-cart-container">
        <div className="side-cart-header">
          <div className="side-cart-title">
            <h1>Your items</h1>
          </div>
          <div className="cart-close-btn">
            <button onClick={props.close}>&times;</button>
          </div>
        </div>
        <div className="products-cart-container">
          {products.map((item) => {
            return (
              <div className="product-container" key={item.id}>
                <div className="main-desc">
                  <div className="image-container">
                    <img alt="product" src={item.image} />
                  </div>
                  <div className="product-title">
                    <p>{item.title}</p>
                  </div>
                </div>

                <div
                  className="quantity-container"
                  data-product={item.title}
                  data-quantity={item.quantity}
                >
                  <button onClick={handleQuantity} className="quantity-btn">
                    -
                  </button>
                  <p data-testid="itemsInCart">{item.quantity}</p>
                  <button onClick={handleQuantity} className="quantity-btn">
                    +
                  </button>
                </div>

                <div className="product-description">
                  <div className="product-rating">
                    <p>{item.rating.rate} ⭐</p>
                    <p>{item.rating.count} reviews</p>
                  </div>
                  <div className="product-price">
                    <button
                      data-product={item.title}
                      onClick={handleRemove}
                      className="remove-product"
                    >
                      X
                    </button>
                    <p>{item.price}$</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="checkout-container">
          <div className="price-content">
            <p data-testid="totalCost">{Math.floor(cost * 100) / 100}$ Total</p>
          </div>
          <div className="checkout-btn">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
