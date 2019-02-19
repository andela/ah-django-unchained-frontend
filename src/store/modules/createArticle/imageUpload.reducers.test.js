import { imageUploadReducer } from './index';
import {
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE
} from './types';

describe('image reducer', () => {
  it('should return the initial state', () => {
    const expectedData = {
      isFetching: false
    };
    expect(imageUploadReducer(undefined, {})).toEqual(expectedData);
  });

  it('should handle post image request', () => {
    const state = {};

    const imageData = {
      type: IMAGE_UPLOAD_REQUEST,
      isFetching: true,
      message: 'Image upload in progress...'
    };

    const expectedData = {
      isFetching: true,
      message: 'Image upload in progress...'
    };
    expect(imageUploadReducer(state, imageData)).toEqual(expectedData);
  });

  it('should handle image success', () => {
    const state = {};

    const imageData = {
      type: IMAGE_UPLOAD_SUCCESS,
      isFetching: false,
      message: 'Image uploaded successfully.'
    };

    const expectedData = {
      isFetching: false,
      message: 'Image uploaded successfully.'
    };
    expect(imageUploadReducer(state, imageData)).toEqual(expectedData);
  });

  it('should handle image failure', () => {
    const state = {};

    const imageData = {
      type: IMAGE_UPLOAD_FAILURE,
      isFetching: true,
      message: 'Image upload failed. maximum file size is 2mb.'
    };

    const expectedData = {
      isFetching: true,
      message: 'Image upload failed. maximum file size is 2mb.'
    };
    expect(imageUploadReducer(state, imageData)).toEqual(expectedData);
  });
});
