import { toast } from 'react-toastify';
import * as action_type from './types';
import { http } from '../../../utils/helpers/http';

const initialState = {
  message: ''
};

export const googleAuth = data => {
  return data;
};
export const facebookAuth = data => {
  return data;
};

export const twitterAuth = data => {
  return data;
};

export const authenticateUserSuccess = action => ({
  type: action_type.SOCIAL_AUTH_REQUEST,
  payload: {
    fetching: false,
    users: action,
    message: 'success'
  }
});

export const authenticateUserRequest = () => ({
  type: action_type.FETCHING,
  payload: {
    fetching: true,
    message: 'fetching'
  }
});

export const authenticateUserFailed = error => ({
  type: action_type.FETCH_FAILED,
  payload: {
    fetching: false,
    message: error
  }
});

export const authenticateUser = res => dispatch => {
  dispatch(authenticateUserRequest());
  return http
    .post('/api/login/oauth/', res)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful');
      dispatch(authenticateUserSuccess(response.data));
    })
    .catch(err => {
      dispatch(authenticateUserFailed(err));
    });
};

//Social auth reducer
export const socialAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_type.GOOGLE:
      return { ...state, ...action.payload };
    case action_type.FACEBOOK:
      return { ...state, ...action.payload };
    case action_type.TWITTER:
      return { ...state, ...action.payload };
    case action_type.FETCHING:
      return { ...state, ...action.payload };
    case action_type.SOCIAL_AUTH_REQUEST:
      return { ...state, ...action.payload };
    case action_type.FETCH_FAILED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default socialAuthReducer;
