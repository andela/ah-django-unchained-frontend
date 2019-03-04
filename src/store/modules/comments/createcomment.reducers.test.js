import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS
} from './types';

import { createCommentReducer } from './index';

describe('CreateCommentReducer', () => {
  
  it('should return the initial state',()=>{
    const expectedData ={
      isFetching: false,
      response: '',
      errors: ''
    };
    expect(createCommentReducer(undefined,{})).toEqual(expectedData);
  });

  it('should handle createComment request',()=>{
    const state = {};
    const expectedState ={
      isFetching: true
    };
    const comment = {
      type: CREATE_COMMENT_REQUEST,
      isFetching:true
    };
    expect(createCommentReducer(state,comment)).toEqual(expectedState);
  });

  it('should handle createComment success',()=>{
    const state = {};
    const expectedData ={
      isFetching: true
    };
    const comment = {
      type: CREATE_COMMENT_SUCCESS,
      isFetching:true
    };
    expect(createCommentReducer(state,comment)).toEqual(expectedData);

  });

  it('should handle createComment failure',()=>{
    const state = {};
    const expectedData ={
      isFetching: true
    };
    const comment = {
      type: CREATE_COMMENT_FAILURE,
      isFetching:true
    };
    expect(createCommentReducer(state,comment)).toEqual(expectedData);
  });
  
  
});
