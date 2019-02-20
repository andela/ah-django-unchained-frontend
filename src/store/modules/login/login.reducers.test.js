import { loginReducer } from './index';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from './types';

describe('Login reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {};
    expect(loginReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle login request', () => {
    const state = {};

    const userData = {
      type: LOGIN_REQUEST,
      isLoading: true,
      isLoggedIn: false
    };

    const expectedData = {};
    expect(loginReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle login success', () => {
    const state = {};

    const userData = {
      type: LOGIN_SUCCESS,
      isLoggedIn: true,
      isLoading: false
    };

    const expectedData = {
      isLoggedIn: true,
      isLoading: false
    };
    expect(loginReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle login failure', () => {
    const state = {};

    const userData = {
      type: LOGIN_FAILED,
      isLoggedIn: false,
      isLoading: false
    };

    const expectedData = {
      isLoggedIn: false,
      isLoading: false
    };
    expect(loginReducer(state, userData)).toEqual(expectedData);
  });
});
