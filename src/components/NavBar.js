import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/About',
      text: 'About',
    },
    {
      id: 3,
      path: '/Portofolio',
      text: 'Portofolio',
    },
    {
      id: 4,
      path: '/Contact',
      text: 'Contact',
    },

  ];

  return (
    <nav>
      <ul className="nav-container">
        {links.map((link) => (
          <li className="nav-list" key={link.id}>
            <NavLink
              to={link.path}
              className="Links-to"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
