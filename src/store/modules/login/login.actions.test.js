import moxios from 'moxios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { loginUser, logoutUser } from './index';

describe('Login', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch logout user and return expectedActions', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: LOGOUT_SUCCESS,
        isLoggedIn: false,
      },
    ];
    store.dispatch(logoutUser());
    expect(store.getActions()).toEqual(expectedActions);
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
});
