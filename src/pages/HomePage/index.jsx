import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getallArticles } from '../../store/modules/getArticles/index';
import Loader from '../../components/Loader/index';
import ArticlePanel from '../../components/ArticlePanel/index';

export class HomePage extends Component {
  componentDidMount() {
    const { getallArticles } = this.props;
    getallArticles();
  }

  render() {
    const { message } = this.props;
    const articles = this.props;
    return (
      <div className="container">
        {message === 'fetching' ? (
          <Loader />
        ) : articles.articles.length ? (
          articles.articles.map(article => {
            return <ArticlePanel article={article} />;
          })
        ) : (
          <div className="container">
            <h1>No articles</h1>
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
  error: state.articleReducer.error,
  message: state.articleReducer.message
});

export const mapDispatchToProps = dispatch => ({
  getallArticles: () => dispatch(getallArticles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
