import moxios from 'moxios';
import {
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE
} from './types';
import { mockStore } from '../../../utils/helpers/testHelpers';
import { uploadImage } from './index';

describe('uploadImage', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should post image details after successfull HTTP call', () => {
    const mockHttpResponse = {
      status: 201,
      data: { status: 201 }
    };
    const expectedActions = [
      {
        type: IMAGE_UPLOAD_REQUEST,
        isFetching: true
      },
      {
        type: IMAGE_UPLOAD_SUCCESS,
        payload: mockHttpResponse,
        isFetching: false,
        success: true
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 201,
        response: mockHttpResponse
      });
    });
    const imageData = 'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg';
    store.dispatch(uploadImage(imageData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to post image details after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, data: { errors: [] } }
    };
    const expectedActions = [
      {
        type: IMAGE_UPLOAD_REQUEST,
        isFetching: true
      },
      {
        type: IMAGE_UPLOAD_FAILURE,
        errors: mockHttpResponse.response.data.errors,
        isFetching: false,
        success: false
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.reject({
        status: 400,
        response: mockHttpResponse
      });
    });
    const imageData = 'bad.jpg';
    store.dispatch(uploadImage(imageData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
