import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#749E6A', display: 'flex', justifyContent: 'flex-end', alignContent: 'center' }}>
      <ul style={{ listStyle: 'none', display: 'flex' }} className='navbarlist'>
        <li style={{ marginRight: '15px' }}>
          <NavLink exact to="/" activeclassname="active" className="nav-link">Home</NavLink>
        </li>
        <li style={{ marginRight: '15px' }}>
          <NavLink to="/impossible" activeclassname="active" className="nav-link">Impossible List</NavLink>
        </li>
        <li style={{ marginRight: '15px' }}>
          <NavLink to="/about" activeclassname="active" className="nav-link">About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
