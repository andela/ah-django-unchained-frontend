import { deleteArticleReducer } from './index';
import {
  DELETE_ARTICLE_FAILED,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS
} from './types';

describe('Article delete reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {};
    expect(deleteArticleReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle article delete request', () => {
    const state = {};

    const userData = {
      type: DELETE_ARTICLE_REQUEST,
      isLoading: true
    };

    const expectedData = {};
    expect(deleteArticleReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle article delete success', () => {
    const state = {};

    const userData = {
      type: DELETE_ARTICLE_SUCCESS,
      isLoading: false,
      isDeleted: true
    };

    const expectedData = {
      isDeleted: true,
      isLoading: false
    };
    expect(deleteArticleReducer(state, userData)).toEqual(expectedData);
  });

  it('should handle article delete failure', () => {
    const state = {};

    const userData = {
      type: DELETE_ARTICLE_FAILED,
      isLoading: false,
      isDeleted: false
    };

    const expectedData = {
      isLoading: false,
      isDeleted: false
    };
    expect(deleteArticleReducer(state, userData)).toEqual(expectedData);
  });
});
