import moxios from 'moxios';
import * as types from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { likeArticle, dislikeArticle } from './index';

describe('ArticleDetail', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should like article successful', () => {
    const mockHttpResponse = {
      status: 201,
      data: { status: 201 }
    };
    const expectAction = [
      {
        type: types.LIKE_DISLIKE_ARTICLE_REQUEST,
        payload: mockHttpResponse
      },
      {
        type: types.LIKE_DISLIKE_ARTICLE_SUCCESS,
        payload: mockHttpResponse
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 201,
        response: mockHttpResponse
      });
    });
    store.dispatch(likeArticle('slug')).then(() => {
      expect(store.getActions()).toEqual(expectAction);
    });
  });

  it('should dislike article successful', () => {
    const mockHttpResponse = {
      status: 201,
      data: { status: 201 }
    };
    const expectAction = [
      {
        type: types.DISLIKE_DISLIKE_ARTICLE_REQUEST,
        payload: mockHttpResponse
      },
      {
        type: types.DISLIKE_DISLIKE_ARTICLE_SUCCESS,
        payload: mockHttpResponse
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 201,
        response: mockHttpResponse
      });
    });
    store.dispatch(dislikeArticle('slug')).then(() => {
      expect(store.getActions()).toEqual(expectAction);
    });
  });
});
