import '../assets/css/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <h1>Welcome!</h1>
      </div>
      <nav className="nav-content">
        <ul>
          <Link to="/">
            <li>Homepage</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
        <h3>Logo</h3>
      </nav>
    </div>
  );
};

export default Nav;
