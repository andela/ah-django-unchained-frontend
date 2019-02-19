import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../store/modules/login';
import Logo from '../../assets/images/logo.png';
import './NavBar.css';

export class NavBar extends Component {
  clearToken = () => {
    const {logoutUser} = this.props;
    logoutUser();
  };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="nav-link">
            <img src={Logo} alt="logo" id="logo" className="rounded-circle" />
            <span id="authors"> Authors </span>
            <span id="haven"> Haven </span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {!isLoggedIn ?
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/login">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul> :
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/createArticle">
                    Create article
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/draft">
                    View Drafts
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to={`/profile/update/${localStorage.getItem('username')}`}>
                    My Profile
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/login" onClick={this.clearToken}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            }
          </div>
        </nav>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn,
  logoutUser: state
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(NavBar);
