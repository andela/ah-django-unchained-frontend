import { signUpReducer } from './index';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

describe('signup reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {
      isFetching: false
    };
    expect(signUpReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle signup request', () => {
    const state = {};

    const userData = {
      type: SIGNUP_REQUEST,
      isFetching: true
    };

    const expectedData = {
      isFetching: true
    };
    expect(signUpReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle signup success', () => {
    const state = {};

    const userData = {
      type: SIGNUP_SUCCESS,
      isFetching: false,
      isSuccesfull: true
    };

    const expectedData = {
      isFetching: false,
      isSuccesfull: true
    };
    expect(signUpReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle signup failure', () => {
    const state = {};

    const userData = {
      type: SIGNUP_FAILURE,
      isFetching: true,
      isSuccesfull: false
    };

    const expectedData = {
      isFetching: true,
      isSuccesfull: false
    };
    expect(signUpReducer(state, userData)).toEqual(expectedData);
  });
});
