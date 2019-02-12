import moxios from 'moxios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { registerUser } from './index';

describe('Register', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should post user details after successfull HTTP call', () => {
    const mockHttpResponse = {
      status: 201,
      data: { status: 201 }
    };
    const expectedActions = [
      {
        type: SIGNUP_REQUEST,
        isFetching: true
      },
      {
        type: SIGNUP_SUCCESS,
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
    const userData = {
      username: 'testUser',
      email: 'test@mail.com',
      password: 'Pass@1234'
    };
    store.dispatch(registerUser(userData)).then(() => {
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
        type: SIGNUP_REQUEST,
        isFetching: true
      },
      {
        type: SIGNUP_FAILURE,
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
    const userData = {
      username: 'testUser',
      email: 'testmailcom.',
      password: 'Pass@1234'
    };
    store.dispatch(registerUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
