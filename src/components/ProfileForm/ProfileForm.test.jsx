import React from 'react';
import { shallow, mount } from 'enzyme';
import { ProfileForm } from './index';

describe('ProfileForm', () => {
  let wrapperTrue;
  let wrapperFalse;
  let wrapperInstance;
  let dummyPropTrue;
  beforeEach(() => {
    dummyPropTrue = {
      data: {
        profile: {}
      },
      match: {
        params: {
          username: 'username'
        }
      },
      updateProfile: jest.fn(() => {
        Promise.resolve();
      }),
      isLoad: true
    };

    const dummyPropFalse = {
      data: {
        profile: {}
      },
      isLoad: false
    };

    wrapperTrue = shallow(<ProfileForm user={dummyPropTrue} />);
    wrapperFalse = shallow(<ProfileForm user={dummyPropFalse} />);
    wrapperInstance = mount(<ProfileForm user={dummyPropTrue} username='username' updateProfile={dummyPropTrue.updateProfile} />).instance();
  });

  it('should match snapshot when isLoad is true', () => {
    expect(wrapperTrue).toMatchSnapshot();
  });

  it('should match snapshot when isload is false', () => {
    expect(wrapperFalse).toMatchSnapshot();
  });

  it('should dispatch when updateProfile is called', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };

    const state = {
      first_name: 'john',
      last_name: 'doe',
      bio: 'bio',
      gender: 'male'
    };

    wrapperInstance.setState(state);
    wrapperInstance.handleChange(event);
    expect(wrapperInstance.state).toEqual(state);
  });

  it('should call updateProfile with username and state', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };
    const state = {
      first_name: 'john',
      last_name: 'doe',
      bio: 'bio',
      gender: 'male'
    };
    wrapperInstance.setState(state);
    wrapperInstance.updateProfile(event);
    expect(dummyPropTrue.updateProfile).toHaveBeenCalledWith('username', state);
  });
});
