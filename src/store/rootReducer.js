import { combineReducers } from 'redux';
import { signUpReducer } from './modules/signup/index';
import {loginReducer} from './modules/login/index';
import socialAuth from './modules/socialAuth/index';
import { updatepasswordReducer } from './modules/UpdatePassword';
import {resetReducer } from './modules/PasswordReset';

const rootReducer = combineReducers({ 
    signUpReducer, loginReducer, socialAuth,resetReducer, updatepasswordReducer

});

export default rootReducer;
