import axios from 'axios';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST } from './types';

const initialState = {};

export const loginRequestAction = () => ({
  type: LOGIN_REQUEST,
  isLoading: true,
  success: false
});

export const loginSuccessAction = response => ({
  type: LOGIN_SUCCESS,
  isLoggedIn: true,
  isLoading: false,
  success: true,
  response
});

export const loginErrorAction = response => ({
  type: LOGIN_ERROR,
  isLoggedIn: false,
  isLoading: false,
  success: false,
  response
});

export const loginUser = userData => dispatch => {
  dispatch(loginRequestAction());
  axios
    .post('http://127.0.0.1:8000/api/users/login/', {
      user: userData
    })
    .then(res => {
      dispatch(loginSuccessAction(res));
    })
    .catch(errors => {
      dispatch(loginErrorAction(errors));
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
