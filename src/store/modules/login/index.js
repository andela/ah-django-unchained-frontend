import { LOGIN_ERROR, LOGIN_SUCCESS } from './types';
import axios from 'axios';

const initialState = {};

export const logginSuccessAction = response => ({
  type: LOGIN_SUCCESS,
  isLoggedIn: true,
  response
});

export const logginErrorAction = response => ({
  type: LOGIN_ERROR,
  isLoggedIn: false,
  response
});

export const loginUser = userData => dispatch => {
  axios
    .post('http://127.0.0.1:8000/api/users/login/', {
      user: userData
    })
    .then(res => {
      dispatch(logginSuccessAction(res));
    })
    .catch(errors => {
      dispatch(logginErrorAction(errors));
    });
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.response.data.user.token);
      return {
        response: action.payload
      };
    case LOGIN_ERROR:
      return {
        errors: action.response.response.data.errors.error[0]
      };
    default:
      return state;
  }
};

export default loginReducer;
