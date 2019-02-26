import getAllArticleReducer from './index';
import {
  GET_ALL_ARTICLES_REQUEST,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAILURE
} from './types';

describe('GetArticles Reducer', () => {
  it('should should handle get article request state', () => {
    const state = {
      articles: [],
      message: ''
    };

    const request = {
      type: GET_ALL_ARTICLES_REQUEST,
      payload: {
        fetching: true,
        message: 'fetching'
      }
    };

    const expectedData = {
      articles: [],
      fetching: true,
      message: 'fetching'
    };
    expect(getAllArticleReducer(state, request)).toEqual(expectedData);
  });

  it('should should  fetch article successfully', () => {
    const state = {
      articles: [],
      message: ''
    };

    const request = {
      type: GET_ALL_ARTICLES_SUCCESS,
      payload: {
        article: [
          { title: 'title', slug: 'slug', description: ' desc', body: 'body' },
          {
            title: 'title2',
            slug: 'slug2',
            description: ' desc2',
            body: 'body2'
          }
        ],
        message: 'success'
      }
    };

    const expectedData = {
      articles: [
        { title: 'title', slug: 'slug', description: ' desc', body: 'body' },
        { title: 'title2', slug: 'slug2', description: ' desc2', body: 'body2' }
      ],
      message: 'success'
    };
    expect(getAllArticleReducer(state, request)).toEqual(expectedData);
  });

  it('should fetch article failed', () => {
    const state = {};

    const request = {
      type: GET_ALL_ARTICLES_FAILURE,
      payload: {
        error: {},
        fetching: false
      }
    };

    const expectedData = { error: { error: {}, fetching: false } };
    expect(getAllArticleReducer(state, request)).toEqual(expectedData);
  });
});
