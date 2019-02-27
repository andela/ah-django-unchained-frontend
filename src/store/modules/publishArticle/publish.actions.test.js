import moxios from 'moxios';
import { PUBLISH_ARTICLE_REQUEST, PUBLISH_ARTICLE_SUCCESS, PUBLISH_ARTICLE_FAILURE } from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { publishArticle } from './index';

describe('Register', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should publish article details after successfull HTTP call', () => {
    const mockHttpResponse = {
      status: 201,
      data: { status: 201 }
    };
    const expectedActions = [
      {
        type: PUBLISH_ARTICLE_REQUEST,
        isFetching: true
      },
      {
        type: PUBLISH_ARTICLE_SUCCESS,
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
      articlename: 'testarticle',
      email: 'test@mail.com',
      password: 'Pass@1234'
    };
    store.dispatch(publishArticle(articleData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to publish article details after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, data: { errors: [] } }
    };
    const expectedActions = [
      {
        type: PUBLISH_ARTICLE_REQUEST,
        isFetching: true
      },
      {
        type: PUBLISH_ARTICLE_FAILURE,
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
      articlename: 'testarticle',
      email: 'testmailcom.',
      password: 'Pass@1234'
    };
    store.dispatch(publishArticle(articleData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
