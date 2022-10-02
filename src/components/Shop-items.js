import '../assets/css/Shop-page.css';

const ShopItems = (props) => {
  const { items, mensClothing, womensClothing, jewelery } = props;

  return (
    <div className="shop-container">
      <div className="sidebar-container">
        <div>
          <p>Filters:</p>
        </div>
        <div className="sidebar-buttons">
          <button>Men's Clothing</button>
          <button>Women's Clothing</button>
          <button>Jewelery</button>
        </div>
      </div>
      <div className="shop-page-container">
        {items.map((item) => {
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
