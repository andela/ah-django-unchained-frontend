import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleArticleDispatch } from '../../store/modules/ArticleDetail/index';
import CKEditor from 'react-ckeditor-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

export class UpdateArticle extends Component {

  state = {
    title: '',
    description: '',
    body: ''
  };

  componentDidMount() {
    const { match, getSingleArticleDispatch } = this.props;
    getSingleArticleDispatch(match.params.article);
  }

  handleSubmit = e => {
      e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const {data} = this.props;
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
              // value='sdsdsd'
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
              value={data.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUpload">
              Upload article image
            </label>
            <InputBox
              type="file"
              id="upload"
              name="upload"
              className="form-control-file"
            />
          </div>
          <div className="form-group">
            <CKEditor />
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

export const mapStateToProps = (state) => {
  return (
    state.singleArticleReducer
  );
};

export const mapDispatchToProps = dispatch => ({
  getSingleArticleDispatch: (article) => dispatch(getSingleArticleDispatch(article))
});


export default connect(mapStateToProps, mapDispatchToProps)(UpdateArticle);
