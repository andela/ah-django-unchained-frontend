import { editArticleReducer } from './index';
import {
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILED
} from './types';

describe('Edit article reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {};
    expect(editArticleReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle edit article request', () => {
    const state = {};

    const articleData = {
      type: EDIT_ARTICLE_REQUEST,
      isLoading: true
    };

    const expectedData = {};
    expect(editArticleReducer(state, articleData)).toEqual(expectedData);
  });

  it('should handle edit article success', () => {
    const state = {};

    const articleData = {
      type: EDIT_ARTICLE_SUCCESS,
      isLoading: false,
      isEdited: true
    };

    const expectedData = {
      isLoading: false,
      isEdited: true
    };
    expect(editArticleReducer(state, articleData)).toEqual(expectedData);
  });

  it('should handle edit article failure', () => {
    const state = {};

    const articleData = {
      type: EDIT_ARTICLE_FAILED,
      isLoading: false,
      isEdited: false
    };

    const expectedData = {
      isLoading: false,
      isEdited: false
    };
    expect(editArticleReducer(state, articleData)).toEqual(expectedData);
  });
});
