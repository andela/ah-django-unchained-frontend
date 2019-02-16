import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import Logo from '../../assets/images/logo.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      loggedIn: false
    };
  }

  toggleNavBar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <div>
        <Navbar className="navbar navbar-expand-lg navbar bg-dark navbar-dark ">
          <NavbarBrand href="/" className="nav-link">
            <img src={Logo} alt="Logo" />
            Authors Haven
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto">
              {loggedIn ? (
                <Link to="logout" class="text-info nav-link">
                  Logout
                </Link>
              ) : (
                <ul className="container">
                  <li>
                    <Link to="signup" className="text-info nav-link">
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-info nav-link">
                      Login
                    </Link>
                  </li>
                </ul>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
