import moxios from 'moxios';
import { POST_RATING_SUCCESS, POST_RATING_FAILURE, POST_RATING_REQUEST } from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { postRating } from './index';

describe('postRating', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should post a rating after successfull HTTP call', () => {
    const mockHttpResponse = {
      ratingResponse: {
        message: 'Article successfully rated',
        rating: 1,
        average_rating: 1.5
      },
      isRated: true
    };
    const expectedActions = [
      {
        type: POST_RATING_REQUEST,
        isRated: false
      },
      {
        type: POST_RATING_SUCCESS,
        payload: mockHttpResponse
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
    const rateData = {
      rate: 4
    };
    store.dispatch(postRating(rateData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to post a rating after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      ratingResponse: 'You are not allowed to rate your own article'
    };
    const expectedActions = [
      {
        type: POST_RATING_REQUEST,
        isRated: false
      },
      {
        type: POST_RATING_FAILURE,
        errors: mockHttpResponse,
        isRated: false
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
    const rateData = {
      rate: 6
    };
    store.dispatch(postRating(rateData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
