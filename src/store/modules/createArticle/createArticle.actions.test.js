import moxios from 'moxios';
import {
  POST_ARTICLE_REQUEST,
  POST_ARTICLE_SUCCESS,
  POST_ARTICLE_FAILURE
} from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { postArticle } from './index';

describe('PostArticle', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should post article details after successfull HTTP call', () => {
    const mockHttpResponse = {
      status: 201,
      data: { status: 201 }
    };
    const expectedActions = [
      {
        type: POST_ARTICLE_REQUEST,
        isFetching: true
      },
      {
        type: POST_ARTICLE_SUCCESS,
        payload: mockHttpResponse,
        isFetching: false,
        success: true
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
    const articleData = {
      title: 'ethic',
      description: 'Best group ever?',
      body: 'You have to believe in them',
      tagList: ['edm', 'music', 'house']
    };
    store.dispatch(postArticle(articleData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to post article details after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, data: { errors: [] } }
    };
    const expectedActions = [
      {
        type: POST_ARTICLE_REQUEST,
        isFetching: true
      },
      {
        type: POST_ARTICLE_FAILURE,
        errors: mockHttpResponse.response.data.errors,
        isFetching: false,
        success: false
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.reject({
        status: 400,
        response: mockHttpResponse
      });
    });
    const articleData = {
      title: 'ethic',
      description: 'Best group ever?',
      body: 'You have to believe in them',
      tagList: ['edm', 'music', 'house']
    };
    store.dispatch(postArticle(articleData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
