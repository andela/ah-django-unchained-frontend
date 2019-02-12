import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupForm = ({
    handleChange, handleSubmit, messages,
}) => (
    <form onSubmit={handleSubmit} className='registrationForm'>
    <div className='head'>Signup</div>
    <hr />

    <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
            type='text'
            name='username'
            onChange={handleChange}
            placeholder='Enter username'
            className='form-control'
            required
        />
    </div>

    <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
            type='email'
            name='email'
            onChange={handleChange}
            placeholder='Enter email'
            className='form-control'
            required
        />
    </div>

    <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='Enter password'
            className='form-control'
            required
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
        />
    </div>

    <div className='form-group'>
        <label htmlFor='cpassword'>Confirm Password</label>
        <input
            type='password'
            name='cpassword'
            onChange={handleChange}
            placeholder='Confirm password'
            className='form-control'
            required
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
        />
    </div>

    <div className='form-group'>
      <button type='submit' className='btn btn-primary login-button' disabled={true}>
        Sign Up
      </button>
    </div>

    </form>
);

SignupForm.propTypes = {
    signupAction: PropTypes.func,
    signedUp: PropTypes.bool,
    success: PropTypes.object,
    error: PropTypes.object,
  };

export default SignupForm;
