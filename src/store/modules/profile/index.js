import { REQUEST_PROFILE, FAIL_PROFILE, UPDATE_PROFILE } from './type';
import http from '../../../utils/helpers/http';
import axios from 'axios';
let initialSate = {}



// Actions for profile
const getprofileAction = payload => (
  {
    type: REQUEST_PROFILE,
    payload
  })
const failprofileAction = payload => (
  {
    type: FAIL_PROFILE,
    payload
  })

const updateProfileAction = payload => ({
  type: UPDATE_PROFILE,
  payload
})



// dispatcher for profiles
export const profileRequestDispatch = user => dispatch => {
  http.get(`api/profiles/${user}/`)
    .then((res) => {
      dispatch(getprofileAction(res.data))
    })
    .catch((error) => {
      dispatch(failprofileAction(error))
    })
}


export const profileUpdateDispatch = (user, data) => dispatch => {
  http.put(`api/profiles/${user}/`,data,{
    headers: { 
      Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNocmlzQGdtYWlsLmNvbSIsImV4cCI6MTU1MDU1ODI5Mn0.MiMNlplRSULa7HdWbUtlCuN5v3Onxh8ZlJpbFEp3aB4" 
  }} )
    .then((res) => {
      dispatch(updateProfileAction(res.data))
    })
    .catch((error) => {
      dispatch(failprofileAction(error))
    })
}

export const imageUpdateDispatch = (user, data) => dispatch => {
  const headers = {
    "Content-Type": "application/x-wwww-form-urlencoded" 
  }
  axios.put(`https://api.cloudinary.com/v1_1/authors/upload`,data, {headers:headers})
    .then((res) => {
      dispatch(updateProfileAction(res.data))
    })
    .catch((error) => {
      console.log(error.request)
      dispatch(failprofileAction(error))
    })
}

// reducer for getting profile
const getProfileReducer = (state = { data: initialSate }, action) => {
  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        ...state,
        isLoad: true,
        data: action.payload
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        isLoad: true,
        data: action.payload
      }

    case FAIL_PROFILE:
      console.log('log')
      return {
        ...state,
        isLoad: false,
        data: action.payload
      }

    default:
      return {
        ...state,
        isLoad: false
      }
  }
}


export default getProfileReducer;