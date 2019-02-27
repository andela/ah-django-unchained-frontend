//Action creators for sign up
import { toast } from 'react-toastify';
import {
  PUBLISH_ARTICLE_REQUEST,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_FAILURE,

} from './types';
import { httpWithToken } from '../../../utils/helpers/http';

//Action creators for posting articles
export const publishRequest= () => ({
  type: PUBLISH_ARTICLE_REQUEST,
  isFetching: true
});

export const publishSuccess = payload => ({
  type: PUBLISH_ARTICLE_SUCCESS,
  payload,
  isFetching: false,
  isSuccesfull: true
});

export const publishFailure = errors => ({
  type: PUBLISH_ARTICLE_FAILURE,
  isFetching: false,
  isSuccesfull: false,
  errors
});

export const publishArticle = (slug,payload ) => dispatch => {
  dispatch(publishRequest());
  return httpWithToken
    .put(`api/articles/${slug}/publish/`, payload, )
    .then(res => {
      const { response } = res.data;
      toast.success('Article published successfully');
      dispatch(publishSuccess(response));
    })
    .catch(errors => {
      const { data } = errors.response;
      toast.error('Something went wrong. Couldn\'t publish your article');
      dispatch(publishFailure(data.errors));
    });
};

//Reducer for Publishing an article
export const publish = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case PUBLISH_ARTICLE_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case PUBLISH_ARTICLE_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.errors,
        isSuccesfull: action.isSuccesfull
      };
    case PUBLISH_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.payload,
        isSuccesfull: action.isSuccesfull
      };
    default:
      return state;
  }
};
