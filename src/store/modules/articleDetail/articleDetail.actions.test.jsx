import moxios from 'moxios';
import { GET_SINGLE_ARTICLE_SUCCESS, GET_SINGLE_ARTICLE_FAIL } from './type';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { getSingleArticle } from './index';

describe('ArticleDetail', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch single articles with success', () => {
    const mockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };

    const expectAction = [
      {
        type: GET_SINGLE_ARTICLE_SUCCESS,
        payload: mockHttpResponse,
        isFetch: true
      }
    ];

    const store = mockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 200,
        response: mockHttpResponse
      });
    });
    store.dispatch(getSingleArticle('article'))
      .then(() => {
        expect(store.getActions()).toEqual(expectAction);
      });
  });

  it('should fetch single articles with fail', () => {
    const mockHttpResponse = {
      status: 404,
      data: { status: 404 }
    };

    const expectAction = [
      {
        type: GET_SINGLE_ARTICLE_FAIL,
        payload: mockHttpResponse,
        isFetch: false
      }
    ];

    const store = mockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 404,
        response: mockHttpResponse
      });
    });
    store.dispatch(getSingleArticle('article'))
      .then(() => {
        expect(store.getActions()).toEqual(expectAction);
      });
  });
});
