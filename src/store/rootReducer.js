import { combineReducers } from 'redux';
import { signUpReducer } from './modules/signup/index';
import profileReducer  from './modules/profile/index';

const rootReducer = combineReducers({ 
    signUpReducer,
    profileReducer
});

export default rootReducer;
