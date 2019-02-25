import { toast } from 'react-toastify';
import {
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_FAILED,
  DELETE_ARTICLE_SUCCESS
} from './types';
import { httpWithToken } from '../../../utils/helpers/http';

const initialState = {};

export const deleteArticleRequest = () => ({
  type: DELETE_ARTICLE_REQUEST,
  isLoading: true,
  isDeleted: false
});

export const deleteArticleSuccess = response => ({
  type: DELETE_ARTICLE_SUCCESS,
  isLoading: false,
  isDeleted: true,
  response
});

export const deleteArticleFailed = response => ({
  type: DELETE_ARTICLE_FAILED,
  isLoading: false,
  isDeleted: false,
  response
});

export const deleteArticle = (articleSlug, deletedStatus) => dispatch => {
  dispatch(deleteArticleRequest());
  return httpWithToken
    .put(`api/articles/delete/${articleSlug}/`, deletedStatus)
    .then(res => {
      toast.success('Article deleted Successfully');
      dispatch(deleteArticleSuccess(res));
    })
    .catch(errors => {
      toast.error(errors.response.data.detail);
      dispatch(deleteArticleFailed(errors.response.data.detail));
    });
};

export const deleteArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        response: action.response,
        isDeleted: true,
        isLoading: false
      };
    case DELETE_ARTICLE_FAILED:
      return {
        ...state,
        response: action.response,
        isLoading: false,
        isDeleted: false,
        errors: action.response
      };
    default:
      return state;
  }
};

export default deleteArticleReducer;
