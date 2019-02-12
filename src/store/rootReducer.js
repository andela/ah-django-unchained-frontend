import { combineReducers } from 'redux';
import { signUpReducer } from './modules/signup/index'

const rootReducer = combineReducers({ 
    signUpReducer,
});

export default rootReducer;
