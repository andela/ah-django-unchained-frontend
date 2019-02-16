import moxios from 'moxios';
import { FETCHING, FETCH_FAILED, SOCIAL_AUTH_REQUEST } from './types';
import * as action_types from './index';
import { mockStore } from '../../../utils/helpers/testHelpers';

describe('Social Authentication', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should authenticate user after successfull HTTP call', () => {
    const mockHttpResponse = {
      data: {
        email: 'georgeymutti',
        username: 'georgey',
        token: 'BCDSKBFU89W4RFBDN'
      },
      status: 200,
      statusText: 'OK'
    };

    const expectedActions = [
      {
        type: FETCHING,
        payload: mockHttpResponse,
        fetching: true,
        message: 'fetching'
      },
      {
        type: SOCIAL_AUTH_REQUEST,
        payload: {
          fetching: false,
          users: mockHttpResponse,
          message: 'success'
        }
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
      provider: 'google-oauth2',
      access_token: 'ya29.Gly0Blnk'
    };
    store.dispatch(action_types.authenticateUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to authenticate user after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, data: { errors: [] } }
    };
    const expectedActions = [
      {
        type: FETCH_FAILED,
        payload: mockHttpResponse,
        fetching: false,
        message: 'error'
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
      provider: 'google-oauth2',
      access_token: 'ya29.Gly0Blnk'
    };
    store.dispatch(action_types.authenticateUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return auth user data passed to google action', () => {
    const googleData = {
      provider: 'google',
      access_token: 'Cfew9NBSJ8dfnerjfdlsf'
    };
    expect(action_types.googleAuth(googleData)).toEqual(googleData);
  });

  it('should receive correct data from facebook provider', () => {
    const userData = {
      provider: 'facebook',
      name: 'MaryGigz',
      access_token: 'fndldksbvdhjbcdsk'
    };
    const expectedAction = {
      type: SOCIAL_AUTH_REQUEST,
      payload: {
        fetching: false,
        users: userData,
        message: 'success'
      }
    };
    expect(action_types.authenticateUserSuccess(userData)).toEqual(
      expectedAction
    );
  });

  it('should return correct error', () => {
    const expectedAction = {
      type: FETCH_FAILED,
      payload: {
        fetching: false,
        message: 'error'
      }
    };
    expect(action_types.authenticateUserFailed('error')).toEqual(
      expectedAction
    );
  });
});
