import cartSVG from '../assets/svg/cart-shopping-solid.svg';

const Cart = (props) => {
  const handleCart = () => {};

  return (
    <div className="cart-container">
      <button
        className="cart-btn"
        style={{ backgroundImage: `url(${cartSVG})` }}
        onClick={handleCart}
      ></button>
    </div>
  );
};

export default Cart;
