import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { getSingleArticle } from '../../store/modules/articleDetail/index';
import { NotFound } from '../../components/NotFound/index';
import Loader from '../../components/Loader/index';
import './ArticleDetail.scss';
import Star, { AverageRating } from '../../components/ArticleRating/index';
import { postRating } from '../../store/modules/articleRating/index';
import { deleteArticle } from '../../store/modules/deleteArticle';
import { Button } from '../../components/Button';
import { LikeDislikeArticle } from '../LikeDislikeArticle/index';
import {
  likeArticle,
  dislikeArticle
} from '../../store/modules/likeDislikeArticle/index';

export class ArticleDetail extends Component {
  state = {
    rate: 0
  };

  componentDidMount() {
    const { match, getSingleArticle } = this.props;
    getSingleArticle(match.params.article);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.likeDislikeArticle !== this.props.likeDislikeArticle) {
      const { likes_count, dislikes_count } = nextProps.likeDislikeArticle.data;
      const { data } = this.props;
      data['likes_count'] = likes_count;
      data['dislikes_count'] = dislikes_count;
    }
  }

  onStarClick = newRating => {
    this.setState({ rate: newRating });
    const { data } = this.props;
    const payload = {
      slug: data.slug,
      rating: { rate: newRating }
    };

    const { postRating } = this.props;
    postRating(payload);
  };

  onClickHandler = () => {
    const { match, deleteArticle } = this.props;
    const deletedStatus = {
      is_deleted: true
    };
    deleteArticle(match.params.article, deletedStatus);
  };

  handleLike = () => {
    const { data } = this.props;
    const { likeArticle } = this.props;
    likeArticle(data.slug);
  };
  handleDislike = () => {
    const { data } = this.props;
    const { dislikeArticle } = this.props;
    dislikeArticle(data.slug);
  };

  render() {
    const {
      match,
      isFetching,
      isFound,
      data,
      isDeleted,
      ratingResponse,
      isLoggedIn
    } = this.props;
    const { rate } = this.state;
    const loggedIn = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return (
      <React.Fragment>
        {isDeleted === true ? (
          <Redirect to="/" />
        ) : isFetching === true ? (
          <Loader />
        ) : isFound === true ? (
          <div className="container">
            <Button
              className="btn btn-danger offset-md-9 col-3"
              text="Delete Article"
              onClick={this.onClickHandler}
            />
            <br />
            <br />
            <div className="card bg-light text-dark">
              <div className="card-body">
                <div className="text-center">
                  {data.images === '' ? (
                    <img
                      src="https://www.maketecheasier.com/assets/uploads/2018/02/mac-no-camera-feature-image.png"
                      alt=""
                    />
                  ) : (
                    <img src={data.images} alt="" />
                  )}
                </div>
                <h1 className="card-title text-center text-info">
                  {data.title}
                </h1>
                <h2 className="text-center text-success">{data.description}</h2>
                {data['is_published'] && (
                  <div className="text-center">
                    <div>
                      Rating
                      <span>
                        {ratingResponse
                          ? ratingResponse.average_rating
                          : data.average_rating}
                      </span>
                    </div>
                    <div>
                      <AverageRating
                        value={
                          ratingResponse
                            ? ratingResponse.average_rating
                            : data.average_rating
                        }
                      />
                    </div>
                  </div>
                )}
                <br />
                <span>
                  <b>Last modified at: </b>
                  {new Date(data.modified).toDateString()}
                </span>
                <p>
                  {ReactHtmlParser(data.body)}
                  <br />
                  by :
                  <b>{data.author}</b>
                </p>
                {loggedIn ? (
                  username === data.author ? null : (
                    <div>
                      <span>Rate this article</span>
                      <Star
                        articleSlug={match.params.article}
                        onStarClick={this.onStarClick}
                        rating={rate}
                      />
                    </div>
                  )
                ) : null}
                <span>Tags</span>
                <br />
                {data.tagList !== undefined
                  ? data.tagList.map(item => {
                      return (
                        <span className="card-link badge badge-success">
                          {item}
                        </span>
                      );
                    })
                  : null}
              </div>
              {isLoggedIn ? (
                <LikeDislikeArticle
                  like={this.handleLike}
                  dislike={this.handleDislike}
                  article={data}
                />
              ) : (
                <div />
              )}
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  isFetching: state.singleArticle.isFetching,
  isFound: state.singleArticle.isFound,
  data: state.singleArticle.data,
  response: state.deleteArticleReducer.response,
  errors: state.deleteArticleReducer.errors,
  isDeleted: state.deleteArticleReducer.isDeleted,
  ratingResponse: state.ratingReducer.ratingResponse,
  isLoggedIn: state.loginReducer.isLoggedIn,
  likeDislikeArticle: state.likeDislikeArticle.likesDislikes
});

ArticleDetail.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  ratingResponse: PropTypes.object.isRequired,
  isFound: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getSingleArticle: PropTypes.func.isRequired,
  postRating: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export const mapDispatchToProps = dispatch => ({
  getSingleArticle: article => dispatch(getSingleArticle(article)),
  postRating: payload => dispatch(postRating(payload)),
  deleteArticle: (article, deletedStatus) =>
    dispatch(deleteArticle(article, deletedStatus)),
  likeArticle: slug => dispatch(likeArticle(slug)),
  dislikeArticle: slug => dispatch(dislikeArticle(slug))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
