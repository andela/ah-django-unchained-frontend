import React from 'react';
import { mount } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, LoginPage } from './index';

describe('LoginPage', () => {
  let props;
  let wrapper;
  let wrapperInstance;

  beforeEach(() => {
    props = {
      isLoading: false,
      isLoggedIn: false,
      loginUser: jest.fn(() => {
        Promise.resolve();
      })
    };
    wrapper = mount(<LoginPage {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render the login page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state when calling onChange handler', () => {
    const event = {
      target: {
        id: 'email',
        value: 'maggy@me.com'
      }
    };
    wrapperInstance.handleChange(event);
    expect(wrapperInstance.state.email).toEqual(event.target.value);
  });

  it('should initiate loginUser action on calling handleSubmit', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };
    const state = {
      email: 'ken@me.com',
      password: 'emal!2we'
    };
    wrapperInstance.setState(state);
    wrapperInstance.handleSubmit(event);

    expect(props.loginUser).toHaveBeenCalledWith(state);
  });

  describe('The mapStateToProps', () => {
    const state = {
      loginReducer: {
        isLoading: false,
        errors: {},
        isLoggedIn: true,
        response: {}
      }
    };
    const props = mapStateToProps(state);
    expect(props).toEqual(state.loginReducer);
  });

  describe('The mapDispatchToProps', () => {
    let dispatch;
    let props;

    beforeEach(() => {
      dispatch = jest.fn(() => Promise.resolve());
      props = mapDispatchToProps(dispatch);
    });

    it('Should dispatch loginUser', () => {
      props.loginUser();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
