import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, ArticleDetail } from './index';

describe('ArticleDetail', () => {
  let wrapper;
  let props;
  let state;
  let dispatch;
  let propsMaped;
  let wrapperInstance;

  beforeEach(() => {
    props = {
      singleArticle: {
        data: {
          title: 'title',
          description: 'description',
          body: 'body',
          slug: 'slug'
        },

        IsFetching: true,
        IsFound: true
      },

      data: {
        slug: 'slug'
      },

      ratingReducer: {
        ratingResponse: {
          message: 'Article successfully rated',
          rating: 1,
          average_rating: 2.5
        }
      },
      getSingleArticle: jest.fn(),
      match: {
        params: {
          article: 'article'
        }
      },
      postRating: jest.fn(() => Promise.resolve())
    };

    state = {
      singleArticle: {
        data: {}
      },
      ratingReducer: {}
    };

    dispatch = jest.fn(() => Promise.resolve());
    propsMaped = mapDispatchToProps(dispatch);
    wrapper = shallow(<ArticleDetail {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getSingleArticle when component is mounted', () => {
    shallow(<ArticleDetail {...props} />);
    expect(props.getSingleArticle).toHaveBeenCalledWith(
      props.match.params.article
    );
  });

  it('should map the state to props', () => {
    const props = mapStateToProps(state);
    expect(props).toEqual(state.singleArticle);
  });

  it('should dispatch to props', () => {
    propsMaped.getSingleArticle();
    expect(dispatch).toHaveBeenCalled();
  });

  it('should execute  postRating onStarClick', () => {
    wrapperInstance.onStarClick(2);
    expect(props.postRating).toHaveBeenCalled();
  });
});
