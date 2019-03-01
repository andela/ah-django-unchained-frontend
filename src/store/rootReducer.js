import { combineReducers } from 'redux';
import { signUpReducer } from './modules/signup/index';
import { loginReducer } from './modules/login/index';
import socialAuth from './modules/socialAuth/index';
import { updatepasswordReducer } from './modules/UpdatePassword';
import { resetReducer } from './modules/PasswordReset';
import articleReducer from './modules/getArticles/index';
import { singleArticle } from './modules/articleDetail/index';
import { editArticleReducer } from './modules/editArticle/index';

const rootReducer = combineReducers({
  signUpReducer,
  loginReducer,
  socialAuth,
  resetReducer,
  updatepasswordReducer,
  articleReducer,
  editArticleReducer,
  singleArticle
});

export default rootReducer;
