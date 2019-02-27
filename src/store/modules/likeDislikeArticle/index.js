import * as types from './types';
import { httpWithToken } from '../../../utils/helpers/http';

const initialState = {
  likesDislikes: '',
  message: ''
};

export const likeDislikeArticleRequest = () => ({
  type: types.LIKE_DISLIKE_ARTICLE_REQUEST,
  payload: {
    likeDisliking: true,
    message: 'likeDisliking'
  }
});

export const likeDislikeArticleSuccess = response => ({
  type: types.LIKE_DISLIKE_ARTICLE_SUCCESS,
  payload: {
    likesDislikes: response,
    message: 'success'
  }
});

export const likeDislikeArticleFailure = error => ({
  type: types.LIKE_DISLIKE_ARTICLE_FAILURE,
  payload: {
    error,
    message: 'failure'
  }
});

export const likeArticle = slug => dispatch => {
  dispatch(likeDislikeArticleRequest());
  return httpWithToken
    .put(`/api/articles/${slug}/like/`)
    .then(response => {
      dispatch(likeDislikeArticleSuccess(response));
    })
    .catch(error => {
      dispatch(likeDislikeArticleFailure(error));
    });
};

export const dislikeArticle = slug => dispatch => {
  dispatch(likeDislikeArticleRequest());
  return httpWithToken
    .put(`/api/articles/${slug}/dislike/`)
    .then(response => {
      dispatch(likeDislikeArticleSuccess(response));
    })
    .catch(error => {
      dispatch(likeDislikeArticleFailure(error));
    });
};

export const likeDislikeArticle = (state = initialState, action) => {
  switch (action.type) {
    case types.LIKE_DISLIKE_ARTICLE_REQUEST:
      return {
        ...state,
        likeDisliking: action.payload.likeDisliking,
        message: action.payload.message
      };
    case types.LIKE_DISLIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        likesDislikes: action.payload.likesDislikes,
        message: action.payload.message
      };
    case types.LIKE_DISLIKE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message
      };
    default:
      return state;
  }
};
export default likeDislikeArticle;
