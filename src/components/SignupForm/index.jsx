import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupForm.scss';
import { Button } from '../Button/index';
import { InputBox } from '../InputBox/index';

const SignupForm = () => (
  <form className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <div className='card'>
          <header className='card-header'>
            <h4 className='card-title mt-2'>Create Account</h4>
          </header>
          <article className='card-body'>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <InputBox
                type='text'
                name='username'
                placeholder='Enter username'
                className='form-control'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <InputBox
                type='email'
                name='email'
                placeholder='Enter email'
                className='form-control'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <InputBox
                type='password'
                name='password'
                placeholder='Enter password'
                className='form-control'
                required
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
              />
            </div>
            <div className='form-group'>
              <Button type='submit' className='btn btn-info btn-block' text='Register' />
            </div>
          </article>
        </div>
      </div>
    </div>
  </form>
);

export default SignupForm;
