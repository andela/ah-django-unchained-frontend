import React from 'react';
import{ shallow } from 'enzyme';
import {ViewDrafts, mapStateToProps,
  mapDispatchToProps } from './index';

describe('ViewDrafts', () => {
  let props;
  let wrapper;

  beforeEach(() =>{
    props ={     
      response:[
      {
        title: 'title2',slug: 'slug2',description: ' desc2',body: 'body2'
      }
    ],
    getDraft: jest.fn(() => {
      Promise.resolve();
      })
    };
    wrapper = shallow(<ViewDrafts {...props} />);
  });

it('should render get draft articles', () => {
  wrapper = shallow(<ViewDrafts {...props} />);
  expect(wrapper).toMatchSnapshot();
});

describe('The mapDispatchToProps', () => {
  let dispatch;
  let props;

  beforeEach(() => {
    dispatch = jest.fn(() => Promise.resolve());
    props = mapDispatchToProps(dispatch);
  });

  it('should dispatch GetDraft', () => {
    props.getDraft();
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('The mapStateToProps', () => {
  const state = {
    getDraftReducer: {
      response: [],
      isFetching: false,
      errors: '',
    }
  };
  const props = mapStateToProps(state);
  expect(props.isFetching).toEqual(state.getDraftReducer.isFetching);
  expect(props.response).toEqual(state.getDraftReducer.response);
  expect(props.errors).toEqual(state.getDraftReducer.errors);
});
});
