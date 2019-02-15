import moxios from 'moxios';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { resetPost, resetSuccess } from './index';
import {
  GET_RESETPASSWORD_REQUEST,
  GET_RESETPASSWORD_SUCCESS,
  GET_RESETPASSWORD_FAILURE
} from './types';

describe('ResetPassword', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should return action', () => {
    const expectedAction = resetSuccess({ date: 'this is data' });
    expect(expectedAction.type).toEqual('RESETPASSWORD_SUCCESS');
  });

  it('should send user a reset link', () => {
    const mockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };
    const expectedActions = [
      {
        type: GET_RESETPASSWORD_REQUEST,
        isFetching: true
      },
      {
        payload: mockHttpResponse.data,
        type: GET_RESETPASSWORD_SUCCESS,
        isFetching: false
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      return request.resolve({
        status: 200,
        response: mockHttpResponse
      });
    });
    const emailData = {
      email: 'margaret.chege@andela.com'
    };
    store.dispatch(resetPost(emailData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to send user reset link', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, email: [''] }
    };
    const expectedActions = [
      { type: GET_RESETPASSWORD_REQUEST, isFetching: true },
      {
        errors: mockHttpResponse.errors,
        type: GET_RESETPASSWORD_FAILURE,
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
    const userData = {
      email: 'margaret@andela.com'
    };
    store.dispatch(resetPost(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
