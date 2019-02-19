import moxios from 'moxios';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { getProfile, updateProfile } from './index';

describe('profile', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch user profile successfully', () => {
    const mockHttpResponse = {
      status: 200,
      data: {}
    };

    const expectActions = {
      type: 'REQUEST_PROFILE',
      payload: {
        profile: {
          first_name: 'johns',
          last_name: 'doe',
          gender: 'N',
          bio: 'tell me .cvxcx',
          profile_image: 'https://res.cloudinary.com/authors/image/upload/v1550590426/eimisvq5fcxppgbwan9h.jpg',
          updated_at: '2019-02-19'
        }
      }
    };

    const store = mockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 200,
        response: mockHttpResponse
      });
    });

    store.dispatch(getProfile('chris123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectActions);
      });
  });

  it('should update user profile successfully', () => {
    const mockHttpResponse = {
      status: 201,
      data: {}
    };

    const expectActions = {
      type: 'REQUEST_PROFILE',
      payload: {
        profile: {
          first_name: 'johns',
          last_name: 'doe',
          gender: 'N',
          bio: 'tell me .cvxcx',
          profile_image: 'https://res.cloudinary.com/authors/image/upload/v1550590426/eimisvq5fcxppgbwan9h.jpg',
          updated_at: '2019-02-19'
        }
      }
    };

    const data = {
      first_name: 'firstName',
      last_name: 'lastName',
      gender: 'gender',
      bio: 'bio'
    };
    const store = mockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 201,
        response: mockHttpResponse
      });
    });

    store.dispatch(updateProfile('chris123', data))
      .then(() => {
        expect(store.getActions()).toEqual(expectActions);
      });
  });
});
