//Action creators for sign up
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import http from '../../../utils/helpers/http';

export const signupRequestAction = () => ({
  type: SIGNUP_REQUEST,
  isFetching: true
});

export const signupSuccessAction = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
  isFetching: false, 
  isSuccesfull: true
});

export const signupFailureAction = errors => ({
  type: SIGNUP_FAILURE,
  isFetching: false,
  isSuccesfull: false,
  errors
});


export const registerUser = user => dispatch => {
  dispatch(signupRequestAction());
  return http.post('api/users/', {user})
  .then((res) => {
    const { response } = res.data;
    dispatch(signupSuccessAction(response));
  }).catch((errors) => {
    const { data } = errors.response;
    dispatch(signupFailureAction(data.errors));
    });
};

//Reducer for signUp
export const signUpReducer = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.errors,
        isSuccesfull: action.isSuccesfull
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.payload,
        isSuccesfull: action.isSuccesfull
      };
    default:
      return state;
  }
};

export default signUpReducer;
