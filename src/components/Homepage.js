import '../assets/css/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-title">
        <h1>
          Welcome to the online store that <span>delivers</span>
        </h1>
      </div>
      <div className="homepage-content">
        <div>
          <p>
            Only the most <span>high quality</span>
          </p>
          <p>fresh</p>
          <p>
            fast-fashion <span>clothing</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
