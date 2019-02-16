import React from 'react';
import { shallow, mount } from 'enzyme';
import jest from 'jest-mock';
import { mapDispatchToProps, mapStateToProps, SocialAuth } from './index';

describe('SocialAuth', () => {
  it('should render the socialAuth component as expected', () => {
    const component = shallow(<SocialAuth debug />);
    expect(component).toMatchSnapshot();
  });

  describe('render the component and check if all item loads successfully', () => {
    let props;
    let wrapper;
    let wrapperInstance;

    beforeEach(() => {
      props = {
        socialAuth: {},
        message: '',
        googleAuthentication: jest.fn(() => Promise.resolve()),
        facebookAuthentication: jest.fn(() => Promise.resolve()),
        twitterAuthentication: jest.fn(() => Promise.resolve()),
        getUserData: jest.fn(() => Promise.resolve()),
        authenticateUserRequest: jest.fn(() => Promise.resolve())
      };
      wrapper = mount(<SocialAuth {...props} />);
      wrapperInstance = wrapper.instance();
    });

    it('should dispatch getUserData when checkProvider is called ', () => {
      let accessToken = {
        accessToken: 'ya29hgbdfkglnf.gh',
        provider: 'google-oauth2'
      };
      wrapperInstance.checkProvider(accessToken);
      expect(props.getUserData).toHaveBeenCalled();
    });

    it('should dispatch authenticateUserRequest when getSocialData is called ', () => {
      let oauthprovider = {
        providerId: 'google.com',
        isOAuthProvider: true
      };
      wrapperInstance.getSocialData(
        oauthprovider,
        'google-oauth2',
        'GOOGLE_ACCESS_CODE_SUCCESS'
      );
      expect(props.authenticateUserRequest).toHaveBeenCalled();
    });

    it('should render all child elements correctly', () => {
      expect(wrapper.find('.google').exists()).toBe(true);
      expect(wrapper.find('.facebook').exists()).toBe(true);
      expect(wrapper.find('.twitter').exists()).toBe(true);
      expect(wrapper.find('button').exists()).toBe(true);
      expect(wrapper.find('div').exists()).toBe(true);
    });
  });

  describe('The mapStateToProps', () => {
    const state = {
      message: 'success',
      socialAuth: { message: 'success' }
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

    it('should dispatch authenticateUserRequest', () => {
      props.authenticateUserRequest();
      expect(dispatch).toHaveBeenCalled();
    });

    it('should dispatch facebookAuthentication', () => {
      props.facebookAuthentication();
      expect(dispatch).toHaveBeenCalled();
    });

    it('should dispatch googleAuthentication', () => {
      props.googleAuthentication();
      expect(dispatch).toHaveBeenCalled();
    });

    it('should dispatch twitterAuthentication', () => {
      props.twitterAuthentication();
      expect(dispatch).toHaveBeenCalled();
    });

    it('should dispatch getUserdata', () => {
      props.getUserData();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
