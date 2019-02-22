import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDraft } from '../../store/modules/drafts/index';
import Loader from '../../components/Loader';
import ArticlePanel from '../../components/ArticlePanel';

export class ViewDrafts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getDraft } = this.props;
    getDraft();
  }

  render() {
    const articles = this.props.response;
    const fetching = this.props.isFetching;
    return (
      
      <div className="container">

        <h2>View Drafts</h2>
        {fetching === 'true' ? (
          <Loader />
        ) : articles.length ? (
          articles.map(article => {
            return <ArticlePanel article={article} isPublished={false} />;
          })
        ) : (
          <div className="container">
            <h3>No drafts Found</h3>
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  errors: state.getDraftReducer.errors,
  response: state.getDraftReducer.response,
  isFetching: state.getDraftReducer.isFetching
});

export const mapDispatchToProps = dispatch => ({
  getDraft: () => dispatch(getDraft('token'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDrafts);
