import {
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS
} from '../PasswordReset/types';
import { http } from '../../../utils/helpers/http';

export const updateRequest = () => ({
  type: UPDATE_PASSWORD_REQUEST,
  isFetching: true
});

export const updateFailure = payload => ({
  payload,
  type: UPDATE_PASSWORD_FAILURE,
  isFetching: false
});

export const updateSuccess = payload => ({
  payload,
  type: UPDATE_PASSWORD_SUCCESS,
  isFetching: false
});

export const updatePassword = newpassword => dispatch => {
  const password_data = newpassword.newpassword;
  const token = newpassword.token;
  dispatch(updateRequest());
  return http
    .put('api/users/passwordresetdone/' + token, password_data)
    .then(res => {
      const response = res.data['message'];
      dispatch(updateSuccess(response));
    })
    .catch(error => {
      dispatch(updateFailure(error));
    });
};

const initialState = {
  isFetching: false,
  response: '',
  errors: ''
};
export const updatepasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.payload
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.payload
      };
    default:
      return state;
  }
};
export default updatepasswordReducer;
