import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, ArticleDetail } from './index';

describe('ArticleDetail', () => {
  let wrapper;
  let props;
  let state;
  let dispatch;
  let propsMaped;

  beforeEach(() => {
    props = {
      singleArticle: {
        data: {
          title: 'title',
          description: 'description',
          body: 'body'
        },
        IsFetching: true,
        IsFound: true
      },
      getSingleArticle: jest.fn(),
      match: {
        params: {
          article: 'article'
        }
      }
    };

    state = {
      singleArticle: {
        data: {},
      }
    };

    dispatch = jest.fn(() => Promise.resolve());
    propsMaped = mapDispatchToProps(dispatch);
    wrapper = shallow(<ArticleDetail {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getSingleArticle when component is mounted', () => {
    shallow(<ArticleDetail {...props} />);
    expect(props.getSingleArticle).toHaveBeenCalledWith(props.match.params.article);
  });

  it('should map the state to props', () => {
    const props = mapStateToProps(state);
    expect(props).toEqual(state.singleArticle);
  });

  it('should dispatch to props', () => {
    propsMaped.getSingleArticle();
    expect(dispatch).toHaveBeenCalled();
  });
});
