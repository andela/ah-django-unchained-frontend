import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { loginUser } from '../../store/modules/login/index';
import { Button } from '../../components/Button/index';
import { InputBox } from '../../components/InputBox/index';

class LoginPage extends Component {
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
    const { errors } = this.props;
    const loginErrors = errors ? errors : null;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <header className="card-header">
                  <h4 className="card-title mt-2">Create Account</h4>
                </header>
                <article className="card-body">
                  <p className="d-flex justify-content-center bg-danger text-white">
                    {loginErrors}
                  </p>
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
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    />
                  </div>
                  <div className="form-group">
                    <Button type="submit" className="btn btn-info btn-block" text='Log In'>
                      Log In
                    </Button>
                    <p className="d-flex justify-content-center">
                      Dont have an account? Sign up here!
                    </p>
                    <p className="d-flex justify-content-center">
                      Forgot password? Reset it here.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  response: state.login.response,
  errors: state.login.errors
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
