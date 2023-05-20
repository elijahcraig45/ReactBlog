import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'olive', display: 'flex', justifyContent: 'flex-end' }}>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        <li style={{ marginRight: '15px' }}>
          <Link to="/" style={{ color: 'mauve' }}>Home</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/resume" style={{ color: 'mauve' }}>Resume</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/about" style={{ color: 'mauve' }}>About</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/impossible" style={{ color: 'mauve' }}>Impossible List</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
