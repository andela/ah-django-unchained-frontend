import { combineReducers } from 'redux';
import { signUpReducer } from './modules/signup/index';
import {loginReducer} from './modules/login/index';
import socialAuth from './modules/socialAuth/index';

const rootReducer = combineReducers({ 
    signUpReducer, loginReducer, socialAuth
});

export default rootReducer;
