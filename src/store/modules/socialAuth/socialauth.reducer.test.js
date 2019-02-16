import socialAuthReducer from './index';
import * as action_types from './types';

describe('The SocialAuth reducer', () => {
  it('google reducer should return expected state', () => {
    const state = {};
    const fetchedData = {
      type: action_types.GOOGLE,
      payload: {
        user: 'andela',
        email: 'andlea@gmail.com'
      }
    };
    const receivedData = {
      user: 'andela',
      email: 'andlea@gmail.com'
    };
    expect(socialAuthReducer(state, fetchedData)).toEqual(receivedData);
  });

  it('facebook reducer should returns the expected state', () => {
    const state = {};
    const fetchedData = {
      type: action_types.FACEBOOK,
      payload: {
        user: 'mary',
        email: 'mary@gmail.com'
      }
    };
    const recievedData = {
      user: 'mary',
      email: 'mary@gmail.com'
    };
    expect(socialAuthReducer(state, fetchedData)).toEqual(recievedData);
  });

  it('twitter should return the expected state', () => {
    const state = {
      user: 'mary',
      email: 'mary@mail.com'
    };
    const fetchedData = {
      type: action_types.TWITTER,
      payload: {
        user: 'gigz',
        email: 'gigz@gmail.com'
      }
    };

    const receivedData = {
      user: 'gigz',
      email: 'gigz@gmail.com'
    };
    expect(socialAuthReducer(state, fetchedData)).toEqual(receivedData);
  });

  it('fetching action should update the state', () => {
    const state = {};
    const fetchedData = {
      type: action_types.FETCHING,
      payload: {
        fetching: true,
        message: 'fetching'
      }
    };

    const outPut = {
      fetching: true,
      message: 'fetching'
    };
    expect(socialAuthReducer(state, fetchedData)).toEqual(outPut);
  });

  it('receiver reducer should update the state', () => {
    const state = {};
    const receivedData = {
      type: action_types.SOCIAL_AUTH_REQUEST,
      payload: {
        user: 'George',
        email: 'george@gmail.com'
      }
    };

    const updatedData = {
      user: 'George',
      email: 'george@gmail.com'
    };
    expect(socialAuthReducer(state, receivedData)).toEqual(updatedData);
  });

  it('should update the state when fetching fails', () => {
    const state = {
      fetching: true,
      message: 'fetching'
    };

    const fetchedData = {
      type: action_types.FETCH_FAILED,
      payload: {
        fetching: false,
        message: 'failed'
      }
    };

    const outPut = {
      fetching: false,
      message: 'failed'
    };
    expect(socialAuthReducer(state, fetchedData)).toEqual(outPut);
  });
});
