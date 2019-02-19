import { postArticleReducer } from './index';
import {
  POST_ARTICLE_REQUEST,
  POST_ARTICLE_SUCCESS,
  POST_ARTICLE_FAILURE
} from './types';

describe('article reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {
      isFetching: false
    };
    expect(postArticleReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle post article request', () => {
    const state = {};

    const articleData = {
      type: POST_ARTICLE_REQUEST,
      isFetching: true
    };

    const expectedData = {
      isFetching: true
    };
    expect(postArticleReducer(state, articleData)).toEqual(expectedData);
  });

  it('should handle article success', () => {
    const state = {};

    const articleData = {
      type: POST_ARTICLE_SUCCESS,
      isFetching: false,
      isSuccesfull: true
    };

    const expectedData = {
      isFetching: false,
      isSuccesfull: true
    };
    expect(postArticleReducer(state, articleData)).toEqual(expectedData);
  });

  it('should handle article failure', () => {
    const state = {};

    const articleData = {
      type: POST_ARTICLE_FAILURE,
      isFetching: true,
      isSuccesfull: false
    };

    const expectedData = {
      isFetching: true,
      isSuccesfull: false
    };
    expect(postArticleReducer(state, articleData)).toEqual(expectedData);
  });
});
