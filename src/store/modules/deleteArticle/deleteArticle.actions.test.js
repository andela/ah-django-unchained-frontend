import moxios from 'moxios';
import {
  DELETE_ARTICLE_FAILED,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS
} from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { deleteArticle } from './index';

describe('Delete article', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should delete article after successfull HTTP call', () => {
    const mockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };
    const expectedActions = [
      {
        type: DELETE_ARTICLE_REQUEST,
        isLoading: true
      },
      {
        type: DELETE_ARTICLE_SUCCESS,
        response: mockHttpResponse,
        isLoading: false,
        isDeleted: true
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 200,
        response: mockHttpResponse
      });
    });
    const deleteStatus = {
      is_deleted: true
    };
    store.dispatch(deleteArticle(deleteStatus)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to delete article after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, data: { errors: [] } }
    };
    const expectedActions = [
      {
        type: DELETE_ARTICLE_REQUEST,
        isLoading: true
      },
      {
        type: DELETE_ARTICLE_FAILED,
        errors: mockHttpResponse.response.data.errors,
        isLoading: false,
        isDeleted: false
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
    const userData = {};
    store.dispatch(deleteArticle(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
