import { singleArticle } from './index';
import { GET_SINGLE_ARTICLE_FAIL, GET_SINGLE_ARTICLE_REQUEST } from './type';

describe('ArticleDetailReducer', () => {
  it('should run with  the initial state and return isFetching false', () => {
    const expectedData = {
      isFetching: false,
      isFound: true
    };
    const action = {
      type: undefined
    };

    expect(singleArticle({}, action)).toEqual(expectedData);
  });

  it('should run with ARTICLE SUCCESS return isFetching true', () => {
    const expectedData = {
      isFetching: true,
      data: undefined,
      isFound: true
    };
    const action = {
      type: GET_SINGLE_ARTICLE_REQUEST
    };

    expect(singleArticle({}, action)).toEqual(expectedData);
  });

  it('should run with ARTICLE FAIL return isFetching false', () => {
    const expectedData = {
      isFetching: false,
      data: undefined,
      isFound: false
    };
    const action = {
      type: GET_SINGLE_ARTICLE_FAIL
    };

    expect(singleArticle({}, action)).toEqual(expectedData);
  });
});
