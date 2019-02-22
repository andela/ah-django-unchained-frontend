import moxios from 'moxios';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { getDraft, getDraftArticlesSuccess } from './index';
import {
  GET_DRAFT_REQUEST,
  GET_DRAFT_SUCCESS,
  GET_DRAFT_FAILURE
} from './types';

describe('getDraft', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should return action', () => {
    const expectedAction = getDraftArticlesSuccess();
    expect(expectedAction.type).toEqual('GET_DRAFT_SUCCESS');
  });

  it('should get draft articles', () => {
    const mockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };
    const expectedActions = [
      {
        type: GET_DRAFT_REQUEST,
        isFetching: true
      },
      {
        payload: mockHttpResponse.data,
        type: GET_DRAFT_SUCCESS,
        isFetching: false
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      return request.resolve({
        status: 200,
        response: mockHttpResponse,
      });
    });
    const token= 'localStorage.getItem';
    store.dispatch(getDraft(token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to get draft', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400  }
    };
    const expectedActions = [
      { type: GET_DRAFT_REQUEST, isFetching: true },
      {
        errors: mockHttpResponse.errors,
        type: GET_DRAFT_FAILURE,
        isFetching: false
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
   
    store.dispatch(getDraft()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
