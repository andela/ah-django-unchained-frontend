//Action creators for sign up
import { toast } from 'react-toastify';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import http from '../../../utils/helpers/http';
import axios from 'axios'
export const signupRequestAction = payload => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signupSuccessAction = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFailureAction = errors => ({
  type: SIGNUP_FAILURE,
  errors
});

export const registerUser = user => dispatch => {
  dispatch(signupRequestAction());
  return http
    .post('api/users/', { user })
    .then(res => {
      const { response } = res.data;
      toast.success('Account created successfully');
      dispatch(signupSuccessAction(response));
      localStorage.setItem('token', res.data.user.token);
      localStorage.setItem('username', res.data.user.username);
    })
    .catch(errors => {
      const { data } = errors.response;
      dispatch(signupFailureAction(data.errors));
    });
};

//Reducer for signUp
export const signUpReducer = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { isFetching: true };
    case SIGNUP_FAILURE:
      console.log(action.errors)
      return {
        isFetching: false,
        errors: action.errors
      };
    case SIGNUP_SUCCESS:
      return {
        isFetching: false,
        response: action.response
      };
    default:
      return state;
  }
};

export default signUpReducer;
