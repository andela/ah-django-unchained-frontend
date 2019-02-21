import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

export class ArticleForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Title</label>
            <InputBox
              name='title'
              id='title'
              placeholder='Enter Title'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <InputBox
              name='description'
              id='description'
              placeholder='Enter Description'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='imageUpload'>Upload article image</label>
            <InputBox
              type='file'
              id='upload'
              name='upload'
              className='form-control-file'
            />
          </div>
          <div className='form-group'>
            <CKEditor />
          </div>
          <Button
            className='btn btn-info offset-md-9 col-3'
            text='Publish Edit'
          />
        </form>
      </div>
    );
  }
}

export default ArticleForm;
