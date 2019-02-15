import moxios from 'moxios';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { updatePassword } from './index';
import {
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS
} from '../PasswordReset/types';

describe('updatePassword', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should allow user to update the password', () => {
    const MockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };
    const expectedActions = [
      {
        type: UPDATE_PASSWORD_REQUEST,
        isFetching: true
      },
      {
        payload: MockHttpResponse,
        type: UPDATE_PASSWORD_SUCCESS,
        isFetching: false
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      return request.resolve({
        status: 200,
        response: MockHttpResponse
      });
    });
    const passwordData = {
      password: 'Pass@123',
      confirm_password: 'Pass@123'
    };
    store.dispatch(updatePassword(passwordData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to update user password', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, email: [''] }
    };

    const expectedActions = [
      {
        type: UPDATE_PASSWORD_REQUEST,
        isFetching: true
      },
      {
        errors: mockHttpResponse.errors,
        type: UPDATE_PASSWORD_FAILURE,
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
      confirm_password: 'Pass@123'
    };
    store.dispatch(updatePassword(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
