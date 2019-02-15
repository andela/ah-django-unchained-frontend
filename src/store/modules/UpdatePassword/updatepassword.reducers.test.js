import {
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS
} from '../PasswordReset/types';
import { updatepasswordReducer } from './index';

describe('Update Password reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {
      errors: '',
      isFetching: false,
      response: ''
    };
    expect(updatepasswordReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle update password request', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData = {
      type: UPDATE_PASSWORD_REQUEST,
      isFetching: true
    };
    expect(updatepasswordReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle update password success', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData1 = {
      type: UPDATE_PASSWORD_SUCCESS,
      isFetching: true
    };
    expect(updatepasswordReducer(state, userData1)).toEqual(expectedData);
  });
  it('should handle update password failure', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData = {
      type: UPDATE_PASSWORD_FAILURE,
      isFetching: true
    };
    expect(updatepasswordReducer(state, userData)).toEqual(expectedData);
  });
});
