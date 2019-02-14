import React, { Component } from 'react';
import SignupForm from '../../components/Signup';

class SignUp extends Component {
  render() {
    return (
      <div id='loginContainer'>
        <SignupForm />
      </div>
    );
  }
}

export default SignUp;
