import '../assets/css/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <h1>Supmeme</h1>
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
      </nav>
    </div>
  );
};

export default Nav;
