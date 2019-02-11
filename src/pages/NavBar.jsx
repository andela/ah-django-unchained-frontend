import React, { Component } from 'react';
import {Collapse,Navbar,NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import Logo from '../assets/images/logo.png';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.navBarToggle = this.navBarToggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  navBarToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <NavbarBrand href="/">
            <img src={Logo} alt="Logo" />
Authors Haven
          </NavbarBrand>
          <NavbarToggler onClick={this.navBarToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to='signup'>SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/login'>Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> 
        
      </div>
    );
  }
}
export default NavBar;