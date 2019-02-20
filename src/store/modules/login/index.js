import axios from 'axios';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST } from './types';

const initialState = {};

export const loginRequestAction = () => ({
  type: LOGIN_REQUEST,
  isLoading: true,
  isLoggedIn: false
});

export const loginSuccessAction = response => ({
  type: LOGIN_SUCCESS,
  isLoggedIn: true,
  isLoading: false,
  response
});

export const loginErrorAction = response => ({
  type: LOGIN_ERROR,
  isLoggedIn: false,
  isLoading: false,
  response
});

export const loginUser = userData => dispatch => {
  dispatch(loginRequestAction());
  return axios
    .post('http://127.0.0.1:8000/api/users/login/', {
      user: userData
    })
    .then(res => {
      dispatch(loginSuccessAction(res));
    })
    .catch(errors => {
      dispatch(loginErrorAction(errors.response.data.errors.error));
    });
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoggedIn: true,
        isLoading: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        response: action.payload,
        isLoggedIn: false,
        isLoading: false,
        errors: action.response
      };
    default:
      return state;
  }
};

export default loginReducer;
