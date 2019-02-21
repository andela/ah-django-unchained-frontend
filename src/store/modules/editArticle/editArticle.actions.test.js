import moxios from 'moxios';
import {
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILED
} from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { editArticle } from './index';

describe('Edit Article', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should edit article after successfull HTTP call', () => {
    const mockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };
    const expectedActions = [
      {
        type: EDIT_ARTICLE_REQUEST,
        isLoading: true
      },
      {
        type: EDIT_ARTICLE_SUCCESS,
        response: mockHttpResponse,
        isLoading: false,
        isEdited: true
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
    const userData = {
        title: 'My story',
        description: 'A short story',
        body: 'This is my story',
        tagList: []
    };
    store.dispatch(editArticle(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to update article after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, data: { errors: [] } }
    };
    const expectedActions = [
      {
        type: EDIT_ARTICLE_REQUEST,
        isLoading: true
      },
      {
        type: EDIT_ARTICLE_FAILED,
        errors: mockHttpResponse.response.data.errors,
        isLoading: false,
        isEdited: false
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
    const userData = {
        title: 'My story',
        description: 'A short story',
        body: 'This is my story'
    };
    store.dispatch(editArticle(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
