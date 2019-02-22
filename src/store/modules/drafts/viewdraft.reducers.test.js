import {
  GET_DRAFT_REQUEST,
  GET_DRAFT_SUCCESS,
  GET_DRAFT_FAILURE
} from './types';
import { getDraftReducer } from './index';

describe('GetDraftReducer', () => {
  it('should return the initial state', () => {
    const expectedData = {
        isFetching: false,
        response: '',
        errors: ''
    };
    expect(getDraftReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle get draft request', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData = {
      type: GET_DRAFT_REQUEST,
      isFetching: true
    };
    expect(getDraftReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle get draft success', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData = {
      type: GET_DRAFT_SUCCESS,
      isFetching: true
    };
    expect(getDraftReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle get draft failure', () => {
    const state = {};
    const expectedData = {
      isFetching: true
    };
    const userData = {
      type: GET_DRAFT_FAILURE,
      isFetching: true
    };
    expect(getDraftReducer(state, userData)).toEqual(expectedData);
  });
});
