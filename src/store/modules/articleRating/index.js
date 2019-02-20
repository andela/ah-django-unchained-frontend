import { httpWithToken } from '../../../utils/helpers/http';
import { POST_RATING_REQUEST, POST_RATING_SUCCESS, POST_RATING_FAILURE } from './types';

// actions for rating article
export const rateRequest = () => ({
  type: POST_RATING_REQUEST,
  message: 'rating'
});

export const rateSuccess = rating => ({
  type: POST_RATING_SUCCESS,
  rating
});

export const rateFailure = errors => ({
  type: POST_RATING_FAILURE,
  errors
});

export const postRating = payload => dispatch => {
  const { slug, rating } = payload;
  dispatch(rateRequest());
  return httpWithToken
    .post(`api/articles/${slug}/rate/`, rating)
    .then(res => {
      dispatch(rateSuccess(res.data));
    })
    .catch(error => {
      dispatch(rateFailure(error.response.data.error));
    });
};

// reducer for rating article
const initialState = {
  ratingResponse: 0,
  isRated: false
};

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_RATING_REQUEST:
      return { ...state, ratingResponse: action.message };
    case POST_RATING_SUCCESS:
      return { ...state, ratingResponse: action.rating, isRated: true };
    case POST_RATING_FAILURE:
      return { ...state, ratingResponse: action.errors };
    default:
      return state;
  }
};

export default ratingReducer;
