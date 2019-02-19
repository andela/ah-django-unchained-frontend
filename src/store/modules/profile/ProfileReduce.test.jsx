import userProfile from './index';
import { SUCCESS_PROFILE, UPDATE_PROFILE, FAIL_PROFILE } from './type';

describe('profile reducer', () => {
  it('should handle profile request', () => {
    const state = {};

    const userData = {
      type: SUCCESS_PROFILE,
      isLoad: true
    };

    const expectedData = {
      isLoad: true,
      message: 'Drop/ click to add profile image',
      data: undefined,
    };
    expect(userProfile(state, userData)).toEqual(expectedData);
  });

  it('should handle profile update', () => {
    const state = {};

    const userData = {
      type: UPDATE_PROFILE,
      isLoad: true
    };

    const expectedData = {
      isLoad: true,
      message: 'Drop/ click to add profile image',
      data: undefined,
    };
    expect(userProfile(state, userData)).toEqual(expectedData);
  });

  it('should handle profile failure', () => {
    const state = {};

    const userData = {
      type: FAIL_PROFILE,
      isLoad: false
    };

    const expectedData = {
      data: undefined,
      isLoad: false
    };
    expect(userProfile(state, userData)).toEqual(expectedData);
  });

  it('should handle initial status', () => {
    const expectedData = {
      data: {},
      isLoad: false,
    };
    expect(userProfile(undefined, {})).toEqual(expectedData);
  });
});
