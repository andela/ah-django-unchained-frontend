// Actions for profile
import { REQUEST_PROFILE } from './type';
// import http from '../../../utils/helpers/http';


const newState = {
  'first_name': 'John',
  'last_name': 'Doe',
  'gender': 'male',
  'bio': 'This is a simple bio of John'
}
export const profileRequestAction = (dispatch) => (
  dispatch({
  type: REQUEST_PROFILE,
  payload:  newState
}))


// reducer for profile
const profileReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case REQUEST_PROFILE: 
      return {
        ...state,
        data: action.payload
      }
    
    
    default:
    return state
  }
}


export default profileReducer;