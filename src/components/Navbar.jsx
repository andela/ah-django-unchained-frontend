import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
            <a class="navbar-brand" href="/">Logo</a>
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