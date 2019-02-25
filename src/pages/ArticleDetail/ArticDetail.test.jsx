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
      deleteArticle: jest.fn(),
      match: {
        params: {
          article: 'article'
        }
      },
      postRating: jest.fn(() => Promise.resolve()),
      deletedStatus: {
        is_deleted: true
      }
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
    const state = {
      deleteArticleReducer: {
        errors: {},
        response: {},
        isDeleted: false
      },
      singleArticle: {
        isFetching: false,
        isFound: false,
        data: {}
      },
      ratingReducer: {
        ratingResponse: undefined
      }
    };
    const props = mapStateToProps(state);
    expect(props.errors).toEqual(state.deleteArticleReducer.errors);
    expect(props.response).toEqual(state.deleteArticleReducer.response);
    expect(props.isDeleted).toEqual(state.deleteArticleReducer.isDeleted);
    expect(props.isFetching).toEqual(state.singleArticle.isFetching);
    expect(props.isFound).toEqual(state.singleArticle.isFound);
    expect(props.data).toEqual(state.singleArticle.data);
    expect(props.ratingResponse).toEqual(state.ratingReducer.ratingResponse);

  });

  it('should dispatch to props', () => {
    propsMaped.getSingleArticle();
    expect(dispatch).toHaveBeenCalled();
  });

  it('should execute  postRating onStarClick', () => {
    wrapperInstance.onStarClick(2);
    expect(props.postRating).toHaveBeenCalled();
  });

  it('should execute onClickHandler on buton click', () => {
    wrapperInstance.onClickHandler();
    expect(props.deleteArticle).toHaveBeenCalled();
  });
});
