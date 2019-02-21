import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import StarRatings from 'react-star-ratings';
import { getSingleArticle } from '../../store/modules/articleDetail/index';
import { NotFound } from '../../components/NotFound/index';
import Loader from '../../components/Loader/index';
import './ArticleDetail.scss';

export class ArticleDetail extends Component {
  componentDidMount() {
    const { match, getSingleArticle } = this.props;
    getSingleArticle(match.params.article);
  }

  render() {
    const { isFetching, isFound, data } = this.props;
    return (
      <React.Fragment>
        {isFetching === true ? <Loader /> :
          isFound === true ?
            <div className="container">
              <div className="card bg-light text-dark">
                <div className="card-body">
                  <div className="text-center">
                    {data.images === '' ?
                      <img src='https://www.maketecheasier.com/assets/uploads/2018/02/mac-no-camera-feature-image.png' alt="" /> :
                      <img src={data.images} alt="" />
                    }
                  </div>

                  <h1 className="card-title text-center text-info">{data.title}</h1>
                  <h2 className="text-center text-success">{data.description}</h2>
                  <div class="text-center">
                    <StarRatings
                      rating={data.average_rating}
                      name='rating'
                      starDimension="20px"
                      starRatedColor="green"
                    />
                  </div>
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
                  <span>Tags</span> 
                  <br />
                  {
                    data.tagList !== undefined ?
                      data.tagList.map(item => {
                        return (
                          <span className="card-link badge badge-success">{item}</span>
                        );
                      }) :
                      null
                  }
                </div>
              </div>
            </div>
            : <NotFound />
        }
      </React.Fragment>
    );
  }
}

ArticleDetail.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  isFound: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getSingleArticle: PropTypes.object.isRequired
};

export const mapStateToProps = (state) => ({
  isFetching: state.singleArticle.isFetching,
  isFound: state.singleArticle.isFound,
  data: state.singleArticle.data
});

export const mapDispatchToProps = dispatch => ({
  getSingleArticle: (article) => dispatch(getSingleArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
