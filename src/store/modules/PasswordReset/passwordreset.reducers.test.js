import {
  GET_RESETPASSWORD_REQUEST,
  GET_RESETPASSWORD_SUCCESS,
  GET_RESETPASSWORD_FAILURE
} from './types';
import { resetReducer } from './index';

describe('Resetlink Reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {
      errors: {},
      isFetching: false,
      response: ''
    };
    expect(resetReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle reset link request', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData = {
      type: GET_RESETPASSWORD_REQUEST,
      isFetching: true
    };
    expect(resetReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle reset link success', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData = {
      type: GET_RESETPASSWORD_SUCCESS,
      isFetching: true
    };
    expect(resetReducer(state, userData)).toEqual(expectedData);
  });
  it('should handle reset link failure', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData = {
      type: GET_RESETPASSWORD_FAILURE,
      isFetching: true
    };
    expect(resetReducer(state, userData)).toEqual(expectedData);
  });
});
