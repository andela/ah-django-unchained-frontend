import { combineReducers } from 'redux';
import { signUpReducer } from './modules/signup/index';
import {loginReducer} from './modules/login/index';

const rootReducer = combineReducers({ 
    signUpReducer, loginReducer
});

export default rootReducer;
