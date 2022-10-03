import '../assets/css/Cart.css';

const Cart = (props) => {
  const { products, removeFromCart } = props;

  const handleRemove = (e) => {
    const target = e.target.dataset.product;

    removeFromCart(target);
  };

  return (
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

              <div>
                <p>quantity goes here</p>
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
    </div>
  );
};

export default Cart;
