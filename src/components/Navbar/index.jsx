import './Navbar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/images/logo.png'



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
        <a className="navbar-brand" href="/" style="width:70px;">
          <span className="text-success">Authors </span>
          <span className="text-primary">Haven</span>
        </a>
        <ul className="navbar-nav ml-auto move-right">
          <li className="nav-item active">
            <a className="nav-link btn btn-success" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-success" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  btn btn-success" href="/">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-success" href="/">Sign out</a>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;