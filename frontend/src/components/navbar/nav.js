import React from 'react';
import '../navbar/nav.css'; 

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Mac</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">Watch</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Cart</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
