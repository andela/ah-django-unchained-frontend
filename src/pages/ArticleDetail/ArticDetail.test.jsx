import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, ArticleDetail } from './index';

describe('ArticleDetail', () => {
  let wrapper;
  let props;
  let dispatch;
  let propsMaped;
  let wrapperInstance;

  beforeEach(() => {
    props = {
      publish: {},
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
      likeArticle: jest.fn(),
      dislikeArticle: jest.fn(),
      match: {
        params: {
          article: 'article'
        }
      },
      postRating: jest.fn(() => Promise.resolve()),
      deletedStatus: {
        is_deleted: true
      },
      likes_count: 2,
      dislikes_count: 3,
      publishArticle: jest.fn(() => Promise.resolve()),
      history: {
        push: jest.fn()
      },
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
      publish: {isFetching: false},
      ratingReducer: {
        ratingResponse: undefined
      },
      loginReducer: {
        isLoggedIn: true
      },
      likeDislikeArticle: {},
    };
    const props = mapStateToProps(state);
    expect(props.errors).toEqual(state.deleteArticleReducer.errors);
    expect(props.response).toEqual(state.deleteArticleReducer.response);
    expect(props.isDeleted).toEqual(state.deleteArticleReducer.isDeleted);
    expect(props.isFetching).toEqual(state.singleArticle.isFetching);
    expect(props.isFound).toEqual(state.singleArticle.isFound);
    expect(props.data).toEqual(state.singleArticle.data);
    expect(props.ratingResponse).toEqual(state.ratingReducer.ratingResponse);
    expect(props.likeDislikeArticle).toEqual(
      state.singleArticle.likeDislikeArticle
    );
    expect(props.loginReducer).toEqual(state.singleArticle.loginReducer);
    expect(props.isPublishLoading).toEqual(state.publish.isFetching);
  });

  it('should dispatch getSingleArticle to props', () => {
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
  it('should dispatch to props', () => {
    propsMaped.likeArticle();
    expect(dispatch).toHaveBeenCalled();
  });

  it('should dispatch to props', () => {
    propsMaped.dislikeArticle();
    expect(dispatch).toHaveBeenCalled();
  });

  it('should execute likeArticle when handleLike is called', () => {
    wrapperInstance.handleLike();
    expect(props.likeArticle).toHaveBeenCalled();
  });

  it('should execute dislikeArticle when handleDislike is called', () => {
    wrapperInstance.handleDislike();
    expect(props.dislikeArticle).toHaveBeenCalled();
  });

  it('component willReceive props', () => {
    const nextProps = {};
    wrapperInstance.componentWillReceiveProps(nextProps);
    expect('likes_count' in props).toEqual(true);
    expect('dislikes_count' in props).toEqual(true);
  });

  it('should dispatch publishArticle to props', () => {
    propsMaped.publishArticle();
    expect(dispatch).toHaveBeenCalled();
  });

  it('handle publish', () => {
    const flushPromise = () => new Promise((resolve) => setImmediate(resolve));
    const wrapperInstance = wrapper.instance();
    wrapperInstance.handleClick();
    expect(props.publishArticle).toHaveBeenCalledWith(props.match.params.article, {	'is_published':true });
    return flushPromise().then(() => {
      expect(props.history.push).toHaveBeenCalledWith('/');
    });
  });
});
