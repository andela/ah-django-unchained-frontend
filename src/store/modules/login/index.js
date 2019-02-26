import { toast } from 'react-toastify';
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_REQUEST } from './types';
import { http } from '../../../utils/helpers/http';

const initialState = {};

export const loginUserRequest = () => ({
  type: LOGIN_REQUEST,
  isLoading: true,
  isLoggedIn: false
});

export const loginUserSuccess = response => ({
  type: LOGIN_SUCCESS,
  isLoggedIn: true,
  isLoading: false,
  response
});

export const loginUserFailed = response => ({
  type: LOGIN_FAILED,
  isLoggedIn: false,
  isLoading: false,
  response
});

export const loginUser = userData => dispatch => {
  dispatch(loginUserRequest());
  return http
    .post('api/users/login/', { user: userData })
    .then(res => {
      localStorage.setItem('token', res.data.user.token);
      toast.success('Login Successful');
      dispatch(loginUserSuccess(res));
    })
    .catch(errors => {
      toast.error(errors.response.data.errors.error[0]);
      dispatch(loginUserFailed(errors.response.data.errors.error));
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
    case LOGIN_FAILED:
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
