import { likeDislikeArticle } from './index';
import * as types from './types';

describe('LikeDislikeReducer', () => {
  it('should handle like article request', () => {
    const state = {
      likes: '',
      message: ''
    };

    const request = {
      type: types.LIKE_DISLIKE_ARTICLE_REQUEST,
      payload: {
        likeDisliking: true,
        message: 'likeDisliking'
      }
    };
    const expectedData = {
      likes: '',
      likeDisliking: true,
      message: 'likeDisliking'
    };
    expect(likeDislikeArticle(state, request)).toEqual(expectedData);
  });

  it('should like article successful', () => {
    const state = {
      likesDislikes: '',
      message: ''
    };

    const request = {
      type: types.LIKE_DISLIKE_ARTICLE_SUCCESS,
      payload: {
        likesDislikes: 2,
        message: 'success'
      }
    };
    const expectedData = {
      likesDislikes: 2,
      message: 'success'
    };
    expect(likeDislikeArticle(state, request)).toEqual(expectedData);
  });

  it('should like article failure', () => {
    const state = {};

    const request = {
      type: types.LIKE_DISLIKE_ARTICLE_FAILURE,
      payload: {
        error: {},
        message: 'failure'
      }
    };
    const expectedData = { error: {}, message: 'failure' };
    expect(likeDislikeArticle(state, request)).toEqual(expectedData);
  });
});
