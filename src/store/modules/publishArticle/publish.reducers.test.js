import { publish } from './index';
import {
  PUBLISH_ARTICLE_REQUEST,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_FAILURE
} from './types';

describe('publish reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {
      isFetching: false
    };
    expect(publish(undefined, {})).toEqual(expectedData);
  });

  it('should handle publish article request', () => {
    const state = {};

    const articleData = {
      type: PUBLISH_ARTICLE_REQUEST,
      isFetching: true
    };

    const expectedData = {
      isFetching: true
    };
    expect(publish(state, articleData)).toEqual(expectedData);
  });

  it('should handle publish article success', () => {
    const state = {};

    const articleData = {
      type: PUBLISH_ARTICLE_SUCCESS,
      isFetching: false,
      isSuccesfull: true
    };

    const expectedData = {
      isFetching: false,
      isSuccesfull: true
    };
    expect(publish(state, articleData)).toEqual(expectedData);
  });

  it('should handle article failure', () => {
    const state = {};

    const articleData = {
      type: PUBLISH_ARTICLE_FAILURE,
      isFetching: true,
      isSuccesfull: false
    };

    const expectedData = {
      isFetching: true,
      isSuccesfull: false
    };
    expect(publish(state, articleData)).toEqual(expectedData);
  });
});
