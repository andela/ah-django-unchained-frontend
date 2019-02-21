import  {ARTICLE_SUCCESS, ARTICLE_FAIL} from './type';
import http from '../../../utils/helpers/http';

//  Actions for getting single profle
const getSingleArticleAction = payload => ({
  type: ARTICLE_SUCCESS,
  payload
});

const  failSingleArticleAction = payload  => ({
  type: ARTICLE_FAIL,
  payload
});


// dispatcher for getting single article
export const getSingleArticleDispatch = article => dispatch => {
  return http.get(`api/articles/${article}/`)
    .then((res) => {
      if (res.data === {'detail': 'Not found.' }){
        dispatch(failSingleArticleAction(res.data));
      }
      dispatch(getSingleArticleAction(res.data));
    })
    .catch((error) => {
      dispatch(failSingleArticleAction(error));
    });
};

// reducers for articles
const singleArticleReducer = (state = {data: {}}, action) =>{
  switch(action.type){
    case ARTICLE_SUCCESS:
      return {
        ...state,
        isFetch: true,
        data: action.payload
      };

    case ARTICLE_FAIL:
    return {
      ...state,
      isFetch:false,
      data: action.payload
    };

    default:
      return{
        ...state,
        isFetch:false
      };
  }
};

export default singleArticleReducer;