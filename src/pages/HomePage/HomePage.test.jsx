import React from 'react';
import { shallow } from 'enzyme';
import jest from 'jest-mock';
import { HomePage, mapStateToProps, mapDispatchToProps } from './index';

describe('HomePage', () => {
  let props;
  let wrapper;
  let state;
  let dispatch;
  let dispatchProps;

  beforeEach(() => {
    props = {
      articles: [
        {
          id: 1,
          title: 'title',
          slug: 'slug',
          description: ' desc',
          body: 'body'
        },
        {
          id: 2,
          title: 'title2',
          slug: 'slug2',
          description: ' desc2',
          body: 'body2'
        }
      ],
      getallArticles: jest.fn()
    };

    state = {
      articleReducer: {
        articles: [{}, {}],
        error: {},
        message: ''
      }
    };
    dispatch = jest.fn(() => Promise.resolve());
    dispatchProps = mapDispatchToProps(dispatch);
    wrapper = shallow(<HomePage {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should mapStateToProps', () => {
    const props = mapStateToProps(state);
    expect(props.articles).toEqual(state.articleReducer.articles);
    expect(props.error).toEqual(state.articleReducer.error);
    expect(props.message).toEqual(state.articleReducer.message);
  });

  it('should mapDispatchToProps', () => {
    dispatchProps.getallArticles();
    expect(dispatch).toHaveBeenCalled();
  });
});
