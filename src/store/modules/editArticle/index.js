import { toast } from 'react-toastify';
import {
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILED
} from './types';
import {httpWithToken} from '../../../utils/helpers/http';

const initialState = {};

export const editArticleRequest = () => ({
  type: EDIT_ARTICLE_REQUEST,
  isLoading: true,
  isEdited: false
});

export const editArticleSuccess = response => ({
  type: EDIT_ARTICLE_SUCCESS,
  isLoading: false,
  isEdited: true,
  response
});

export const editArticleFailed = response => ({
  type: EDIT_ARTICLE_FAILED,
  isLoading: false,
  isEdited: false,
  response
});

export const editArticle = (articleSlug, editedArticle) => dispatch => {
  dispatch(editArticleRequest());
  return httpWithToken
    .put(`api/articles/${articleSlug}/`, editedArticle)
    .then(res => {
      console.log(res);
      toast.success('Article updated Successful');
      dispatch(editArticleSuccess(res.data));
    })
    .catch(errors => {
      console.log(errors.response.data.detail);
      toast.error(errors.response.data.detail);
      dispatch(editArticleFailed(errors.response.data.detail));
    });
};

export const editArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        response: action.response,
        isLoading: false,
        isEdited: true
      };
    case EDIT_ARTICLE_FAILED:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        isEdited: false,
        errors: action.response
      };
    default:
      return state;
  }
};

export default editArticleReducer;
