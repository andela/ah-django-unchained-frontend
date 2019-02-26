import moxios from 'moxios';
import { GET_ALL_ARTICLES_SUCCESS, GET_ALL_ARTICLES_REQUEST } from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { getallArticles } from './index';

describe('GetArticles', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch actions when getallArticles function is called ', () => {
    const mockHttpResponse = {
      articles: [
        { title: 'title', slug: 'slug', description: ' desc', body: 'body' },
        { title: 'title2', slug: 'slug2', description: ' desc2', body: 'body2' }
      ]
    };
    const expectedActions = [
      {
        type: GET_ALL_ARTICLES_REQUEST,
        payload: {
          fetching: true,
          message: 'fetching'
        }
      },
      {
        type: GET_ALL_ARTICLES_SUCCESS,
        payload: {
          article: mockHttpResponse,
          message: 'success'
        }
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
    store.dispatch(getallArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
