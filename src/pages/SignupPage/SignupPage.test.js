import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, SignUpPage } from './index';

describe('SignUpPage', () => {
  let props;
  let wrapper;
  let wrapperInstance;

  beforeEach(() => {
    props = {
      isFetching: false,
      errors: {},
      isSuccesfull: false,
      registerUser: jest.fn(() => {
        Promise.resolve();
      })
    };
    wrapper = shallow(<SignUpPage {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render the signup page component', () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state when calling onChange handler', () => {
    const event = {
      target: {
        name: 'username',
        value: 'kahara'
      }
    };
    wrapperInstance.handleChange(event);

    expect(wrapperInstance.state.username).toEqual(event.target.value);
  });

  it('should initiate registerUser action on calling handleSubmit', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };
    const state = {
      username: 'ken',
      email: 'andrew@developer.com',
      password: 'thisIscrap'
    };
    wrapperInstance.setState(state);
    wrapperInstance.handleSubmit(event);

    expect(props.registerUser).toHaveBeenCalledWith(state);
  });

  describe('The mapStateToProps', () => {
    const state = {
      signUpReducer: {
        isFetching: false,
        errors: {},
        isSuccesfull: true
      }
    };
    const props = mapStateToProps(state);
    expect(props).toEqual(state.signUpReducer);
  });

  describe('The mapDispatchToProps', () => {
    let dispatch;
    let props;

    beforeEach(() => {
      dispatch = jest.fn(() => Promise.resolve());
      props = mapDispatchToProps(dispatch);
    });

    it('Should dispatch registerUser', () => {
      props.registerUser();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
