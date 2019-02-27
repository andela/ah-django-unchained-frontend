import { combineReducers } from 'redux';
import { signUpReducer } from './modules/signup/index';
import { loginReducer } from './modules/login/index';
import socialAuth from './modules/socialAuth/index';
import { updatepasswordReducer } from './modules/UpdatePassword';
import articleReducer from './modules/getArticles/index';
import { singleArticle } from './modules/articleDetail/index';
import { getDraftReducer } from './modules/drafts/index';
import {
  postArticleReducer,
  imageUploadReducer
} from './modules/createArticle/index';
import { ratingReducer } from './modules/articleRating/index';
import { resetReducer } from './modules/PasswordReset';
import { deleteArticleReducer } from './modules/deleteArticle';
import  userProfile  from './modules/profile/index';
import { likeDislikeArticle } from './modules/likeDislikeArticle/index';

const rootReducer = combineReducers({
  signUpReducer,
  loginReducer,
  socialAuth,
  resetReducer,
  updatepasswordReducer,
  articleReducer,
  singleArticle,
  getDraftReducer,
  postArticleReducer,
  imageUploadReducer,
  ratingReducer,
  deleteArticleReducer,
  userProfile,
  likeDislikeArticle
});

export default rootReducer;
