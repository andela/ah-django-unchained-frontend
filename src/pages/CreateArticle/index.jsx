import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ArticleForm} from '../ArticleForm';
import { postArticle, uploadImage } from '../../store/modules/createArticle/index';
import Loader from '../../components/Loader';

export class CreateArticle extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    tagList: '', 
    images: ''
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      images: nextProps.url
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleEditorChange = event => {
    const content = event.editor.getData();
    this.setState({
      body: content,
    });
  };
  handleTagsChange = e => {
    const tagList = e.target.value.split(',');
    this.setState({ 
      tagList: tagList,
    });
  };
  handleImageUpload = e => {
    const selectedFile = e.target.files[0];
    const { uploadImage } = this.props;
    uploadImage(selectedFile);
  }
  handleSubmit = e => {
    e.preventDefault();
    const { postArticle } = this.props;
    postArticle(this.state);
    e.target.reset();
  };

  render() {
    const { body } = this.state;
    const { message,isFetching, isSuccesfull } = this.props;
    return (
      <React.Fragment>
        {isSuccesfull ? (
          <Redirect to="/draft" />
        ) : (
          <div id="container">
            {isFetching === true ? (
              <Loader />
            ) : (
              <ArticleForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                body={body}
                message={message}
                handleEditorChange={this.handleEditorChange}
                handleImageUpload={this.handleImageUpload}
                handleTagsChange={this.handleTagsChange}
              />
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  isFetching: state.postArticleReducer.isFetching,
  errors: state.postArticleReducer.errors,
  isSuccesfull: state.postArticleReducer.isSuccesfull,
  url: state.imageUploadReducer.response, 
  message: state.imageUploadReducer.message
});

export const mapDispatchToProps = dispatch => ({
  postArticle: articleData => dispatch(postArticle(articleData)),
  uploadImage: selectedImage => dispatch(uploadImage(selectedImage))

});

CreateArticle.propTypes = {
  postArticle: PropTypes.func.isRequired,
  uploadImage: PropTypes.string, 
  message: PropTypes.string,
  url: PropTypes.string,
  isFetching: PropTypes.bool,
  isSuccesfull: PropTypes.bool

};

CreateArticle.defaultProps = {
  uploadImage: undefined,
  message: undefined,
  url: undefined,
  isFetching: false,
  isSuccesfull: false

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArticle);
