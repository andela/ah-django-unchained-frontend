import moxios from 'moxios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { loginUser } from './index';

describe('Login', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should post user details after successfull HTTP call', () => {
    const mockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };
    const expectedActions = [
      {
        type: LOGIN_REQUEST,
        isLoading: true
      },
      {
        type: LOGIN_SUCCESS,
        response: mockHttpResponse,
        isLoading: false,
        isLoggedIn: true
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
      email: 'test@mail.com',
      password: 'Pass@1234'
    };
    store.dispatch(loginUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to post user details after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, data: { errors: [] } }
    };
    const expectedActions = [
      {
        type: LOGIN_REQUEST,
        isLoading: true
      },
      {
        type: LOGIN_FAILED,
        errors: mockHttpResponse.response.data.errors,
        isLoading: false,
        isLoggedIn: false
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
      email: 'testmailcom.',
      password: 'Pass@1234'
    };
    store.dispatch(loginUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
