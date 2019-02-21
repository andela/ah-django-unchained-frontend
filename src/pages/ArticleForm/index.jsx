import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CKEditor from 'react-ckeditor-component';
import { connect } from 'react-redux';
import { getSingleArticle } from '../../store/modules/articleDetail/index';
import { editArticle } from '../../store/modules/editArticle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

export class ArticleForm extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    images: '',
    tagList: ''
  };

  componentDidMount() {
    const { match, getSingleArticle } = this.props;
    console.log(this.props);
    getSingleArticle(match.params.article);
  }

  componentWillReceiveProps(nextProps) {
    const { title, description, body, tagList } = nextProps.data;
    this.setState({ title, description, body, tagList });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { match, editArticle } = this.props;
    const editedData = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
      images: this.state.images,
      tagList: this.state.tagList
    };
    console.log(editedData);
    editArticle(match.params.article, editedData);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
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
            <label>Tags</label>
            <InputBox
              name="tags"
              id="tags"
              placeholder="Enter tags separated by commas"
              className="form-control"
              value={this.state.tagList}
              onChange={this.handleTagsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUpload">Upload article image</label>
            <InputBox
              type="file"
              id="images"
              name="images"
              className="form-control-file"
              onChange={this.handleChange}
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
  isFetching: state.singleArticle.isFetching,
  isEdited: state.editArticleReducer.isEdited,
  response: state.editArticleReducer.response,
  errors: state.editArticleReducer.errors,
  data: state.singleArticle.data
});

export const mapDispatchToProps = dispatch => ({
  getSingleArticle: article =>
    dispatch(getSingleArticle(article)),
  editArticle: (article, editedArticle) =>
    dispatch(editArticle(article, editedArticle))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleForm);
