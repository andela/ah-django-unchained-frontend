import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
            <a className="navbar-brand" href="/">
              <img src= { Logo } alt=""/>
            </a>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
      <a className="nav-link" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Profile</a>
    </li>
  </ul>
</nav>

        </div>
    );
};

export default Navbar;