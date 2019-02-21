import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CKEditor from 'react-ckeditor-component';
import { connect } from 'react-redux';
import { getSingleArticleDispatch } from '../../store/modules/ArticleDetail/index';
import { editArticle } from '../../store/modules/editArticle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

export class ArticleForm extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    tagList: ''
  };

  componentDidMount() {
    const { match, getSingleArticleDispatch } = this.props;
    getSingleArticleDispatch(match.params.article);
  }

  componentWillReceiveProps(nextProps) {
    const { title, description, body } = nextProps.data;
    this.setState({ title, description, body });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { match, editArticle } = this.props;
    const editedData = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
      tagList: []
    };
    console.log(editedData);
    editArticle(match.params.article, editedData);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleEditorChange = event => {
    console.log('run');
    const content = event.editor.getData();
    this.setState({
      body: content,
    });
  };

  render() {
    const { isEdited } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <InputBox
              name="title"
              id="title"
              placeholder="Enter Title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <InputBox
              name="description"
              id="description"
              placeholder="Enter Description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUpload">Upload article image</label>
            <InputBox
              type="file"
              id="upload"
              name="upload"
              className="form-control-file"
            />
          </div>
          <div className="form-group">
            <CKEditor content={this.state.body} events={{change: this.handleEditorChange}} />
          </div>
          <Button
            className="btn btn-info offset-md-9 col-3"
            text="Publish Edit"
          />
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isFetch: state.singleArticleReducer.isFetch,
  isLoading: state.editArticleReducer.isLoading,
  isEdited: state.editArticleReducer.isEdited,
  response: state.editArticleReducer.response,
  errors: state.editArticleReducer.errors,
  data: state.singleArticleReducer.data
});

export const mapDispatchToProps = dispatch => ({
  getSingleArticleDispatch: article =>
    dispatch(getSingleArticleDispatch(article)),
  editArticle: (article, editedArticle) =>
    dispatch(editArticle(article, editedArticle))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleForm);
