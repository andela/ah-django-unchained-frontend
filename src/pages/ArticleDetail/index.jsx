import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { getSingleArticle } from '../../store/modules/articleDetail/index';
import { NotFound } from '../../components/NotFound/index';
import Loader from '../../components/Loader/index';
import './ArticleDetail.scss';
import Star, { AverageRating } from '../../components/ArticleRating/index';
import { postRating } from '../../store/modules/articleRating/index';

export class ArticleDetail extends Component {
  state = {
    rate: 0
  };

  componentDidMount() {
    const { match, getSingleArticle } = this.props;

    getSingleArticle(match.params.article);
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

  render() {
    const { match, isFetching, isFound, data, ratingResponse } = this.props;
    const { rate } = this.state;
    const loggedIn = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return (
      <React.Fragment>
        {isFetching === true ? (
          <Loader />
        ) : isFound === true ? (
          <div className="container">
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
  ratingResponse: state.ratingReducer.ratingResponse
});

ArticleDetail.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  ratingResponse: PropTypes.object.isRequired,
  isFound: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getSingleArticle: PropTypes.func.isRequired,
  postRating: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  getSingleArticle: article => dispatch(getSingleArticle(article)),
  postRating: payload => dispatch(postRating(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
