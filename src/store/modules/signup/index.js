//Action creators for sign up
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import http from '../../../utils/helpers/http';
<<<<<<< HEAD

export const signupRequestAction = () => ({
  type: SIGNUP_REQUEST,
  isFetching: true
=======
export const signupRequestAction = payload => ({
  type: SIGNUP_REQUEST,
  payload,
>>>>>>> feat(registration-redux): Implement API call and redux configuration
});

export const signupSuccessAction = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
<<<<<<< HEAD
  isFetching: false, 
  isSuccesfull: true
=======
>>>>>>> feat(registration-redux): Implement API call and redux configuration
});

export const signupFailureAction = errors => ({
  type: SIGNUP_FAILURE,
<<<<<<< HEAD
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
=======
  errors,
});


export const signupAsync = user => (dispatch) => {
  dispatch(signupRequestAction());
  http
  .post('/api/users/', user)
  .then((res) => {
    const response = res.data;
    dispatch(signupSuccessAction(response))

  }).catch((err) => {
    const { data } = err.response;

    if (err.response.status === 504 || err.response.status === 500) {
      console.log("Something went wrong");
    }
    if (err.response.status === 400) {
      const errorKeys = Object.keys(data.errors);
      if (errorKeys.indexOf("email") !== -1) {
        console.log(data.errors.email);
      }
      if (errorKeys.indexOf("password") !== -1) {
        console.log(data.errors.password);
      }
      if (errorKeys.indexOf("username") !== -1) {
        console.log(data.errors.username);
      }
    }
    dispatch(signupFailureAction(data.errors));
  });
}
>>>>>>> feat(registration-redux): Implement API call and redux configuration

//Reducer for signUp
export const signUpReducer = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
<<<<<<< HEAD
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
=======
      return { isFetching: true };
    case SIGNUP_FAILURE:
      return {
        isFetching: false,
        errors: action.errors
      };
    case SIGNUP_SUCCESS:
      return {
        isFetching: false,
        response: action.response
>>>>>>> feat(registration-redux): Implement API call and redux configuration
      };
    default:
      return state;
  }
};

export default signUpReducer;
