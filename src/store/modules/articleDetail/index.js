import { GET_SINGLE_ARTICLE_SUCCESS, GET_SINGLE_ARTICLE_FAIL, GET_SINGLE_ARTICLE_REQUEST } from './type';
import {http} from '../../../utils/helpers/http';

//  Actions for getting single article
const getSingleArticleRequest = () => ({
  type: GET_SINGLE_ARTICLE_REQUEST
});

const getSingleArticleSuccess = payload => ({
  type: GET_SINGLE_ARTICLE_SUCCESS,
  payload
});

const getSingleArticleFail = payload => ({
  type: GET_SINGLE_ARTICLE_FAIL,
  payload
});

// dispatcher for getting single article
export const getSingleArticle = article => dispatch => {
  dispatch(getSingleArticleRequest());
  return http.get(`api/articles/${article}/`)
    .then((res) => {
      dispatch(getSingleArticleSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getSingleArticleFail(error));
    });
};

// reducers for articles
export const singleArticle = (state = { data: {} }, action) => {
  switch (action.type) {
    case GET_SINGLE_ARTICLE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFound: true,
      };

    case GET_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFound: true,
        data: action.payload
      };

    case GET_SINGLE_ARTICLE_FAIL:
      return {
        ...state,
        isFetching: false,
        isFound: false,
        data: action.payload
      };

    default:
      return {
        ...state,
        isFound: true,
        isFetching: false
      };
  }
};

export default singleArticle;
