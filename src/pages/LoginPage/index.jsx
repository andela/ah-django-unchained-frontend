import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../store/modules/login';
import { Button } from '../../components/Button';
import { InputBox } from '../../components/InputBox';
import SocialAuth from '../SocialAuth/index';
import './LoginPage.scss';

export class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const { loginUser } = this.props;
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    loginUser(user);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        {isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <header className="card-header">
                    <h4 className="card-title mt-2">Login</h4>
                  </header>
                  <article className="card-body">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <InputBox
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                        placeholder="Enter email"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <InputBox
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.handleChange}
                        placeholder="Enter password"
                        className="form-control"
                        required
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      />
                    </div>
                    <div className="form-group">
                      <Button
                        type="submit"
                        className="btn btn-info btn-block"
                        text="Log In"
                      />
                      <p className="d-flex justify-content-center">
                        Dont have an account? Sign up here
                      </p>
                      <p className="d-flex justify-content-center">
                        <a href=" ">
                          <Link to="/passwordreset">
                            Forgot password? Click here
                          </Link>
                        </a>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </form>
        )}
        <div className="social-login">
          <h4>Login With</h4>
          <SocialAuth />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  response: state.loginReducer.response,
  errors: state.loginReducer.errors,
  isLoggedIn: state.loginReducer.isLoggedIn,
  isLoading: state.loginReducer.isLoading,
});

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
