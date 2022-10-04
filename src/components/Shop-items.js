import '../assets/css/Shop-page.css';

import React, { useEffect } from 'react';
import { useState } from 'react';

const ShopItems = (props) => {
  const [renderItems, setRenderItems] = useState([]);
  const [filter, setFilter] = useState('');

  const { items, mensClothing, womensClothing, jewelery, addToCart } = props;

  useEffect(() => {
    setRenderItems(items);
  }, []);

  const handleBuy = (e) => {
    const target = e.target.dataset.product;

    addToCart(target);
  };

  const handleFilter = (e) => {
    const allButtons = document.querySelectorAll('.filter-btn');
    allButtons.forEach((button) => {
      button.classList.remove('active-btn');
    });

    const target = e.target.textContent;
    if (target === filter) {
      setRenderItems(items);
      e.target.classList.remove('active-btn');
      setFilter('');
    } else {
      if (target === "Men's Clothing") {
        setRenderItems(mensClothing);
      } else if (target === "Women's Clothing") {
        setRenderItems(womensClothing);
      } else if (target === 'Jewelery') {
        setRenderItems(jewelery);
      }
      setFilter(target);
      e.target.classList.add('active-btn');
    }
  };

  return (
    <div className="shop-container">
      <div className="sidebar-container">
        <div>
          <p>Filters:</p>
        </div>
        <div className="sidebar-buttons">
          <button onClick={handleFilter} className="filter-btn">
            Men's Clothing
          </button>
          <button onClick={handleFilter} className="filter-btn">
            Women's Clothing
          </button>
          <button onClick={handleFilter} className="filter-btn">
            Jewelery
          </button>
        </div>
      </div>
      <div className="shop-page-container">
        {renderItems.map((item) => {
          return (
            <div className="shop-item-container" key={item.id}>
              <div className="main-desc">
                <div className="image-container">
                  <img alt="product" src={item.image} />
                </div>
                <div className="product-title">
                  <p>{item.title}</p>
                </div>
              </div>

              <div className="product-description">
                <div className="product-rating">
                  <p>{item.rating.rate} ⭐</p>
                  <p>{item.rating.count} reviews</p>
                </div>
                <div className="product-price">
                  <p>{item.price}$</p>
                  <button
                    data-product={item.title}
                    data-testid={item.title}
                    onClick={handleBuy}
                    className="add-product"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopItems;
