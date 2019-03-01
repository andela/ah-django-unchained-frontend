import moxios from 'moxios';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { postComment ,createCommentSuccess } from './index';
import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS
} from './types';

describe('PostComment', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create a comment for a particular comment',()=>{
    const mockHttpResponse ={
      status: 201,
      data:{ status: 201}
    };
    const expectedActions =[
      {
        type: CREATE_COMMENT_REQUEST,
        isFetching: true
      },
      {
        type: CREATE_COMMENT_SUCCESS,
        payload: mockHttpResponse,
        isFetching: false,
        message: 'Success'
      }
    ];
    const  store = mockStore();
    moxios.wait(()=>{
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 201,
        response: mockHttpResponse
      });
    });
    const userData = {
      'body': 'This is helpful'
    };
    store.dispatch(postComment(userData)).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to post a comment after an unsuccessful HTTP call',()=>{
    const mockHttpResponse ={
      status: 400,
      response: { status:400,data:{errors:[]}}
    };
    const expectedActions = [{
      type: CREATE_COMMENT_REQUEST,
      isFetching: true
    },
    {
      type: CREATE_COMMENT_FAILURE,
      errors: mockHttpResponse.response.data.errors,
      isFetching: false,
    }
  ];
  const store = mockStore();
  moxios.wait(()=>{
    const request = moxios.requests.mostRecent();
    return request.reject({
      status: 400,
      response: mockHttpResponse
    });
    
    });
    const userData={
      'body': 'This is a comment'
    };
    store.dispatch(postComment(userData)).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  });
  
