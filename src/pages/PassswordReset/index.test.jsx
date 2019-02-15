import React from 'react';
import { shallow, mount } from 'enzyme';
import { ResetPassword, mapStateToProps, mapDispatchToProps } from './index';

describe('Resetlink', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  beforeEach(() => {
    props = {
      response: 'Successful',
      isFetching: false,
      errors: {},
      resetPost: jest.fn(() => {
        Promise.resolve();
      })
    };
    wrapper = mount(<ResetPassword {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render the reset password page', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state when calling onChange handler', () => {
    const event = {
      target: {
        name: 'email',
        value: 'margaret.chege@andela.com'
      }
    };
    wrapperInstance.handleChange(event);
    expect(wrapperInstance.state.email).toEqual(event.target.value);
  });

  it('should initiate a send email action on calling handleSubmit', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        resetPost: jest.fn()
      }
    };
    const state = {
      email: 'margaret.cheg@andela.com'
    };
    wrapperInstance.setState(state);
    wrapperInstance.handleSubmit(event);

    expect(props.resetPost).toHaveBeenCalledWith(state);
  });
});

describe('The mapDispatchToProps', () => {
  let dispatch;
  let props;

  beforeEach(() => {
    dispatch = jest.fn(() => Promise.resolve());
    props = mapDispatchToProps(dispatch);
  });

  it('Should dispatch Resetlink', () => {
    props.resetPost();
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('The mapStateToProps', () => {
  const state = {
    resetReducer: {
      response: 'Successful',
      isFetching: false,
      errors: { email: [] }
    }
  };
  const props = mapStateToProps(state);
  expect(props.isFetching).toEqual(state.resetReducer.isFetching);
  expect(props.response).toEqual(state.resetReducer.response.message);
  expect(props.errors).toEqual(state.resetReducer.errors.email);
});
