import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import createApp from '../api/bookstoreApi';
import user from '../images/user.svg';

const Navbar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul className="nav-links">
        <li>
        <NavLink to="/">BOOKS </NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES </NavLink>
        </li>
      </ul>
      <button type="button" style={{ display: 'none' }} onClick={createApp}>create app</button>
    </nav>
    <div className="nav-user">
    <img src={user} alt="user" />
    </div>
  </header>
);

export default Navbar;
