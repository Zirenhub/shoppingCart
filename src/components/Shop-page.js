import React from 'react';
import { useState, useEffect } from 'react';
import ShopItems from './Shop-items';
import CartButton from './Cart-button';

const ShopPage = () => {
  const [items, setItems] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const arrangeItems = (result) => {
    const allItems = result;

    allItems.forEach((element) => {
      if (element.category === "men's clothing") {
        setMensClothing((prevItems) => [...prevItems, element]);
        setItems((prevItems) => [...prevItems, element]);
      } else if (element.category === 'jewelery') {
        setJewelery((prevItems) => [...prevItems, element]);
        setItems((prevItems) => [...prevItems, element]);
      } else if (element.category === "women's clothing") {
        setWomensClothing((prevItems) => [...prevItems, element]);
        setItems((prevItems) => [...prevItems, element]);
      }
    });
  };

  const addToCart = (product) => {
    const findAlreadyExists = cart.find((obj) => {
      return obj.title === product;
    });

    if (findAlreadyExists) {
      return;
    }

    const findProdcut = items.find((obj) => {
      return obj.title === product;
    });

    setCart((prevItems) => [...prevItems, findProdcut]);
  };

  const removeFromCart = (product) => {
    setCart((current) =>
      current.filter((item) => {
        return item.title !== product;
      })
    );
  };

  const getData = async ({ controller }) => {
    setLoading(true);

    console.log('fetching data!');
    const data = await fetch('https://fakestoreapi.com/products', {
      signal: controller.signal,
    });
    const result = await data.json();
    if (data.ok) {
      console.log(result);
      arrangeItems(result);
    } else {
      throw new Error(result.message || result.statusText);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log('use effect!');

    const controller = new AbortController();
    getData({ controller });

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <CartButton cart={cart} removeFromCart={removeFromCart} />
        <ShopItems
          items={items}
          womensClothing={womensClothing}
          mensClothing={mensClothing}
          jewelery={jewelery}
          addToCart={addToCart}
        />
      </div>
    );
  }
};

export default ShopPage;
