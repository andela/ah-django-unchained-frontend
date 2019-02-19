import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, ViewProfile } from './index';

describe('ProfilesView', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      userProfile: {
        data: {},
        isLoad: true,
      },
      isExact: true,
      match: {
        isExact: true,
        params: { username: 'chris123' },
        path: '/profile/view/:username',
        url: '/profile/view/chris123',
      },
      getProfile: jest.fn(() => {
        Promise.resolve();
      }),
      updateProfile: jest.fn(() => {
        Promise.resolve();
      }),
      updateProfileImage: jest.fn(() => {
        Promise.resolve();
      }),
    };
    wrapper = shallow(<ViewProfile {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('The mapStateToProps', () => {
  const state = {
    'data': {},
    'isLoad': true,
    'userProfile': {
      'data': {
        'profile': {}
      }
      , 'isLoad': true
    }
  };

  const props = mapStateToProps(state);
  expect(props).toEqual(state);
});

describe('The mapDispatchToProps', () => {
  let dispatch;
  let props;

  beforeEach(() => {
    dispatch = jest.fn(() => Promise.resolve());
    props = mapDispatchToProps(dispatch);
  });

  it('Should call dispatch', () => {
    props.getProfile();
    props.updateProfile();
    props.updateProfileImage();
    expect(dispatch).toHaveBeenCalled();
  });
});
