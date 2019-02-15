import {
  GET_RESETPASSWORD_REQUEST,
  GET_RESETPASSWORD_SUCCESS,
  GET_RESETPASSWORD_FAILURE
} from './types';
import { http } from '../../../utils/helpers/http';

export const resetRequest = () => ({
  type: GET_RESETPASSWORD_REQUEST,
  isFetching: true
});

export const resetSuccess = payload => ({
  payload,
  type: GET_RESETPASSWORD_SUCCESS,
  isFetching: false
});

export const resetFailure = errors => ({
  errors,
  type: GET_RESETPASSWORD_FAILURE,
  isFetching: false
});

export const resetPost = email => dispatch => {
  dispatch(resetRequest());
  return http
    .post('api/users/passwordreset/', email)
    .then(res => {
      const response = res.data;
      dispatch(resetSuccess(response));
    })
    .catch(error => {
      dispatch(resetFailure(error.response.data.errors));
    });
};

const initialState = {
  isFetching: false,
  response: '',
  errors: {}
};

export const resetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESETPASSWORD_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case GET_RESETPASSWORD_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.errors
      };
    case GET_RESETPASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.payload
      };
    default:
      return state;
  }
};
