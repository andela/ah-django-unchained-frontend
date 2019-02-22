import {
  GET_DRAFT_REQUEST,GET_DRAFT_FAILURE,GET_DRAFT_SUCCESS
} from './types';
import  { httpWithToken }  from '../../../utils/helpers/http';

export const getDraftArticlesRequest = () => ({
  type: GET_DRAFT_REQUEST,
  isFetching: true
});

export const getDraftArticlesFailure = payload => ({
  payload,
  type: GET_DRAFT_FAILURE,
  isFetching: false
});

export const getDraftArticlesSuccess = payload => ({
  payload,
  type: GET_DRAFT_SUCCESS,
  isFetching: false
});

export const getDraft = () => dispatch => {
  dispatch(getDraftArticlesRequest());
  const link ='/api/articles/draft/';
  return httpWithToken
    .get(link).then(res => {
      dispatch(getDraftArticlesSuccess(res.data.results));
    })
    .catch(error => {
      dispatch(getDraftArticlesSuccess(error));
    });
};
const initialState ={
  isFetching: false,
  response: '',
  errors: ''
};

export const getDraftReducer = (state = initialState, action)=>{
  switch (action.type) {
    case GET_DRAFT_REQUEST:
    return {
         ...state,
         isFetching: action.isFetching
        };
    case GET_DRAFT_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.payload
      };
    case GET_DRAFT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.payload
      };
    default:
      return state;
    }
  };

export default getDraftReducer;
