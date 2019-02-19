import axios from 'axios';
import { toast } from 'react-toastify';
import { SUCCESS_PROFILE, FAIL_PROFILE, UPDATE_PROFILE, UPDATE_PROFILE_IMAGE } from './type';
import {httpWithToken} from '../../../utils/helpers/http';

let initialSate = {};

// Actions for profile
const getProfileSuccess = payload => (
  {
    type: SUCCESS_PROFILE,
    payload
  });

const getProfileFail = payload => (
  {
    type: FAIL_PROFILE,
    payload
  });

const getupdateProfile = payload => ({
  type: UPDATE_PROFILE,
  payload
});

const getupdateProfileImage = (payload) => ({
  type: UPDATE_PROFILE_IMAGE,
  message: payload
});

// dispatcher for profiles
export const getProfile = user => dispatch => {
  return httpWithToken.get(`api/profiles/${user}/`)
    .then((res) => {
      dispatch(getProfileSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getProfileFail(error));
    });
};

export const updateProfile = (user, data) => dispatch => {
  return httpWithToken.put(`api/profiles/${user}/`, data)
    .then((res) => {
      dispatch(getupdateProfile(res.data));
      toast.success('Profile upload Successful');
    })
    .catch((error) => {
      dispatch(getProfileFail(error));
    });
};

export const updateProfileImage = (user, data) => dispatch => {
  const url = 'http://cors-anywhere.herokuapp.com/http://api.cloudinary.com/v1_1/authors/upload';
  const headers = { 'Content-Type': 'application/x-wwww-form-urlencoded', 'mode': 'no-cors' };
  const formData = new FormData();
  formData.append('file', data);
  formData.append('upload_preset', 'default-preset');
  dispatch(getupdateProfileImage('Uploading'));
  return axios.post(url, formData, { headers: headers })
    .then(res => {
      dispatch(updateProfile(user, { 'profile_image': res.data.secure_url }));
    })
    .catch((error) => {
      dispatch(getProfileFail(error));
    });
};

// reducer for getting profile
const userProfile = (state = { data: initialSate }, action) => {
  switch (action.type) {
    case SUCCESS_PROFILE:
      return {
        ...state,
        message: 'Drop/ click to add profile image',
        isLoad: true,
        data: action.payload
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        message: 'Drop/ click to add profile image',
        isLoad: true,
        data: action.payload
      };

    case UPDATE_PROFILE_IMAGE:
      return {
        ...state,
        message: action.message
      };

    case FAIL_PROFILE:
      return {
        ...state,
        isLoad: false,
        data: action.payload
      };

    default:
      return {
        ...state,
        isLoad: false
      };
  }
};

export default userProfile;
