import * as types from './types';
import {http} from '../../../utils/helpers/http';

const initialState = {
  articles: [],
  message: ''
};

export const getAllArticlesRequest = () => ({
  type: types.GET_ALL_ARTICLES_REQUEST,
  payload: {
    fetching: true,
    message: 'fetching'
  }
});

export const getAllArticlesSuccess = article => ({
  type: types.GET_ALL_ARTICLES_SUCCESS,
  payload: {
    article,
    message: 'success'
  }
});

export const getAllArticlesFailure = error => ({
  type: types.GET_ALL_ARTICLES_FAILURE,
  payload: {
    error,
    fetching: false,
    message: 'failure'
  }
});

export const getallArticles = () => dispatch => {
  dispatch(getAllArticlesRequest());
  return http
    .get('/api/articles/')
    .then(res => {
      dispatch(getAllArticlesSuccess(res.data.results));
    })
    .catch(error => {
      dispatch(getAllArticlesFailure(error));
    });
};

export const getAllArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.article,
        message: action.payload.message
      };
    case types.GET_ALL_ARTICLES_REQUEST:
      return { ...state, ...action.payload };

    case types.GET_ALL_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        message: action.payload.message
      };
    default:
      return state;
  }
};
export default getAllArticleReducer;
