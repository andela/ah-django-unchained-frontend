import {toast} from 'react-toastify';
import {
  CREATE_COMMENT_REQUEST,CREATE_COMMENT_FAILURE,CREATE_COMMENT_SUCCESS
} from './types';
import  { httpWithToken }  from '../../../utils/helpers/http';

export const createCommentRequest = () => ({
  type: CREATE_COMMENT_REQUEST,
  isFetching: true
});

export const createCommentFailure = payload => ({
  payload,
  type: CREATE_COMMENT_FAILURE,
  isFetching: false
});

export const createCommentSuccess = payload => ({
  payload,
  type: CREATE_COMMENT_SUCCESS,
  isFetching: false,
  message:'success'
});
 
export const postComment = ({slug,new_comment}) => dispatch => {
  dispatch(createCommentRequest());
  return httpWithToken
    .post(`/api/articles/${slug}/comments/`, new_comment)
    .then((res) => {
      toast.success('Commented successfuly');
      dispatch(createCommentSuccess(res.data));
    })
    .catch((error) => {
      toast.error('This field cannot be blank');
      dispatch(createCommentFailure(error.response.data));
    });
};
const initialState ={
  isFetching: false,
  response: '',
  errors: ''
};

export const createCommentReducer = (state = initialState, action)=>{
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
    return {
         ...state,
         isFetching: action.isFetching
        };
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.payload
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.payload,
        message:action.message
      };
    default:
      return state;
    }
  };

  export default createCommentReducer;
