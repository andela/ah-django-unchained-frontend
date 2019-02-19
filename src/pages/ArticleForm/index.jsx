import React from 'react';
import CKEditor from 'react-ckeditor-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

export const ArticleForm = ({
  handleSubmit,
  handleChange,
  body, 
  message,
  handleTagsChange,
  handleImageUpload,
  handleEditorChange

}) => (
  <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h5><span className="badge badge-secondary">Title</span></h5>
        <InputBox
          name="title"
          id="title"
          placeholder="Enter Title"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h5><span className="badge badge-secondary">Description</span></h5>
        <InputBox
          name="description"
          id="description"
          placeholder="Enter Description"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h5><span className="badge badge-secondary">Tags</span></h5>
        <InputBox
          name="tags"
          id="tags"
          placeholder="Enter tags separated by commas"
          className="form-control"
          onChange={handleTagsChange}
        />
      </div>
      <div className="form-group">
        <h5>
          <span className="badge badge-secondary" id='imgSpan'>Image</span>
        </h5>
        <p>{message}</p>
        <InputBox
          type="file"
          id="upload"
          name="upload"
          className="form-control-file"
          onChange={handleImageUpload}
        />
      </div>
      <div className="form-group">
        <h5><span className="badge badge-secondary">Body</span></h5>
        <CKEditor
          content={body}
          events={{
            change: handleEditorChange,
          }}
        />
      </div>
      <Button
        className="btn btn-info offset-md-9 col-3"
        text="Save Draft"
        type="submit"
      />
    </form>
  </div>
);

ArticleForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleEditorChange: PropTypes.func,
  handleTagsChange: PropTypes.func,
  handleImageUpload: PropTypes.func,
  body: PropTypes.string,
  message: PropTypes.string

};

ArticleForm.defaultProps = {
  handleImageUpload: undefined,
  handleSubmit: undefined,
  handleEditorChange: undefined,
  handleTagsChange: undefined,
  handleChange: undefined,
  body: undefined,
  message: 'Please Upload an Image'

};
export default ArticleForm;
