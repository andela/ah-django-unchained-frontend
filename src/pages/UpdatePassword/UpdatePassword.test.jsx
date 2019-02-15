import React from 'react';
import { shallow } from 'enzyme';
import {
  mapStateToProps,
  mapDispatchToProps,
  UpdatePassword
} from '.';

describe('UpdatePassword', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  beforeEach(() => {
    props = {
      response: 'Successful',
      isFetching: false,
      errors: '',
      updatePassword: jest.fn(() => {
        Promise.resolve();
      }),
      match: {
        params: {
          token: 'thisisatken'
        }
      }
    };
    wrapper = shallow(<UpdatePassword {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render the update password', () => {
    const wrapper = shallow(<UpdatePassword />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state when calling onChange handler', () => {
    const event = {
      target: {
        name: 'password',
        value: 'Pass@123'
      }
    };
    wrapperInstance.handleChange(event);
    expect(wrapperInstance.state.password).toEqual(event.target.value);
  });

  it('should initiate the updatePassword action on calling handleSubmit', () => {
    const event = {
      preventDefault: jest.fn()
    };
    const state = {
      password: 'Pass@123',
      confirm_password: 'Pass@123'
    };
    wrapperInstance.setState(state);
    wrapperInstance.handleSubmit(event);

    expect(props.updatePassword).toHaveBeenCalledWith({
      newpassword: state,
      token: props.match.params.token
    });
  });

  it('should set passmissMatch state passwords do not match', () => {
    const event = {
      preventDefault: jest.fn()
    };
    const state = {
      password: 'Pass@123',
      confirm_password: 'pass@123'
    };
    wrapperInstance.setState(state);
    wrapperInstance.handleSubmit(event);
    expect(wrapperInstance.state.passmissMatch).toEqual(
      'Passwords do not match'
    );
  });
});

describe('The mapDispatchToProps', () => {
  let dispatch;
  let props;

  beforeEach(() => {
    dispatch = jest.fn(() => Promise.resolve());
    props = mapDispatchToProps(dispatch);
  });

  it('Should dispatch Updatepassword', () => {
    props.updatePassword();
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('The mapStateToProps', () => {
  const state = {
    updatepasswordReducer: {
      isFetching: false,
      response: '',
      errors: {
        response: 'This is a response'
      }
    }
  };
  const props = mapStateToProps(state);
  expect(props.isFetching).toEqual(state.updatepasswordReducer.isFetching);
  expect(props.response).toEqual(state.updatepasswordReducer.response);
});
