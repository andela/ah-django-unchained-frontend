//Action creators for sign up
import { toast } from 'react-toastify';
import {
  POST_ARTICLE_REQUEST,
  POST_ARTICLE_SUCCESS,
  POST_ARTICLE_FAILURE,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE
} from './types';
import {httpWithToken,  http} from '../../../utils/helpers/http';

//Action creators for posting articles
export const postArticleRequest= () => ({
  type: POST_ARTICLE_REQUEST,
  isFetching: true
});

export const postArticleSuccess = payload => ({
  type: POST_ARTICLE_SUCCESS,
  payload,
  isFetching: false,
  isSuccesfull: true
});

export const postArticleFailure = errors => ({
  type: POST_ARTICLE_FAILURE,
  isFetching: false,
  isSuccesfull: false,
  errors
});

//Action creators for uploading an image
export const imageUploadRequest= () => ({
  type: IMAGE_UPLOAD_REQUEST,
  isFetching: true,
  message: 'Image upload in progress...'
});

export const imageUploadSuccess = payload => ({
  type: IMAGE_UPLOAD_SUCCESS,
  payload,
  isFetching: false,
  message: 'Image uploaded successfully.'

});

export const imageUploadFailure = errors => ({
  type: IMAGE_UPLOAD_FAILURE,
  isFetching: false,
  errors,
  message: 'Image upload failed. maximum file size is 2mb.'

});

//Async function for posting an article
export const postArticle = article => dispatch => { 
  dispatch(postArticleRequest());
  return httpWithToken
    .post('/api/articles/',article)
    .then(res => {
      const { response } = res.data;
      toast.success('Draft saved successfully');
      dispatch(postArticleSuccess(response));
    })
    .catch(errors => {
      toast.error('Something went wrong. Couldn\'t save your draft');
      const { data } = errors.response;
      dispatch(postArticleFailure(data));
    });
};

//Async function for uploading an image
export const uploadImage = image => dispatch => { 
  dispatch(imageUploadRequest());
  const url = 'https://cors-anywhere.herokuapp.com/https://api.cloudinary.com/v1_1/authors/upload';
  const formData = new FormData();
  const headers = { 'Content-Type': 'application/x-wwww-form-urlencoded'};
  formData.append('file', image);
  formData.append('upload_preset', 'default-preset');
  return http
    .post(url, formData, { headers: headers })
    .then(res => {
      toast.success('Image saved successfully');
      const imageUrl = res.data.secure_url;
      dispatch(imageUploadSuccess(imageUrl));
    })
    .catch(errors => {
      toast.error('Something went wrong. Couldn\'t upload your image');
      const { data } = errors.response;
      dispatch(imageUploadFailure(data));
    });

};

//Reducer for postArticle
export const postArticleReducer = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case POST_ARTICLE_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case POST_ARTICLE_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.errors,
        isSuccesfull: action.isSuccesfull
      };
    case POST_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.payload,
        isSuccesfull: action.isSuccesfull
      };
    default:
      return state;
  }
};

// Reducer for Image Upload
export const imageUploadReducer = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_REQUEST:
      return { ...state, isFetching: action.isFetching, message: action.message };
    case IMAGE_UPLOAD_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.errors,
        message: action.message

      };
    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.payload,
        message: action.message
      };
    default:
      return state;
  }
};
