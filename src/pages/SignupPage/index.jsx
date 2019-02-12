import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SignupForm from '../../components/SignupForm';
import { registerUser } from '../../store/modules/signup/index';
import Loader from '../../components/Loader/index';

export class SignUpPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { registerUser } = this.props;
    registerUser(this.state);
    e.target.reset();
  };

  render() {
    const { isSuccesfull, errors, isFetching} = this.props;
    const passwordErrorMessage = errors
    ? errors.password
    : null;
    const emailErrorMessage = errors
    ? errors.email
    : null;
    const usernameErrorMessage = errors
    ? errors.username
    : null;
    return (
      <React.Fragment>
        {
          isSuccesfull
            ? <Redirect to='/' />
            :<div id='loginContainer'>
              {isFetching === true ? <Loader /> :
              <SignupForm
                onSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                passwordErrorMessage={passwordErrorMessage}
                usernameErrorMessage={usernameErrorMessage}
                emailErrorMessage={emailErrorMessage}
              />}
            </div> 
        }
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  isFetching: state.signUpReducer.isFetching,
  errors: state.signUpReducer.errors,
  isSuccesfull: state.signUpReducer.isSuccesfull
});

export const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user)),
});

SignUpPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object,
  isSuccesfull: PropTypes.bool.isRequired
};

SignUpPage.defaultProps = {
  errors: undefined
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
