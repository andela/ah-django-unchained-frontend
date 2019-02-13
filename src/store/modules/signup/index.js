//Action creators for sign up
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import http from '../../../utils/helpers/http';
// import axios from 'axios';

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


export const signupAsync = user => dispatch => {
  const dummy = {
    "user":{
      "username": "kwanjwweww",
      "email": "django.uncha500@gmail.com",
      "password": "jakejake!#12J"
    }
  }
  http
  .request({
    method: 'post',
    url: 'api/users/',
    data: dummy
  })
  .then((res) => {
    const response = res.data;
    console.log(response)
    dispatch(signupSuccessAction(response))

  }).catch((err) => {
    // console.log(err)
    // const { data } = err.response;

    // if (err.response.status === 504 || err.response.status === 500) {
    //   console.log("Something went wrong");
    // }
    // if (err.response.status === 400) {
    //   const errorKeys = Object.keys(data.errors);
    //   if (errorKeys.indexOf("email") !== -1) {
    //     console.log(data.errors.email);
    //   }
    //   if (errorKeys.indexOf("password") !== -1) {
    //     console.log(data.errors.password);
    //   }
    //   if (errorKeys.indexOf("username") !== -1) {
    //     console.log(data.errors.username);
    //   }
    // }
    dispatch(signupFailureAction());
  });
}

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
