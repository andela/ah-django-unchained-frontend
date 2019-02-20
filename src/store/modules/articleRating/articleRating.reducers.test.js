import { ratingReducer } from './index';
import { POST_RATING_SUCCESS, POST_RATING_FAILURE, POST_RATING_REQUEST } from './types';

describe('ratingReducer', () => {
  it('should return the initial state', () => {
    expect(ratingReducer(undefined, {})).toEqual({
      ratingResponse: 0,
      isRated: false
    });
  });

  it('should handle rate request', () => {
    const initialState = {
      ratingResponse: 0,
      isRated: false
    };

    const rateData = {
      type: POST_RATING_REQUEST,
      isRated: false
    };

    const expectedData = {
      isRated: false
    };
    expect(ratingReducer(initialState, rateData)).toEqual(expectedData);
  });

  it('should handle rate success', () => {
    const initialState = {
      ratingResponse: 0,
      isRated: false
    };

    const rateData = {
      type: POST_RATING_SUCCESS,
      rating: {
        message: 'Article successfully rated',
        rating: 1,
        average_rating: 1.5
      }
    };

    const expectedData = {
      ratingResponse: {
        message: 'Article successfully rated',
        rating: 1,
        average_rating: 1.5
      },
      isRated: true
    };
    expect(ratingReducer(initialState, rateData)).toEqual(expectedData);
  });

  it('should handle rate failure', () => {
    const initialState = {
      ratingResponse: 0,
      isRated: false
    };

    const rateData = {
      type: POST_RATING_FAILURE,
      errors: 'you are not'
    };

    const expectedData = {
      ratingResponse: 'you are not',
      isRated: false
    };
    expect(ratingReducer(initialState, rateData)).toEqual(expectedData);
  });
});
