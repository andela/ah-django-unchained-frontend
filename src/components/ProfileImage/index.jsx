import Dropzone from 'react-dropzone';
import React, { Component } from 'react';
import Profile from '../../assets/images/logo.png';
import './ProfileImage.css';

export class ProfileImage extends Component {
  fileSelectHandler = (accept) => {
    const selectedFile = accept[0];
    const { username } = this.props;
    const { updateProfileImage } = this.props;
    updateProfileImage(username, selectedFile);
  };

  render() {
    const types = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
    const { image: { message } } = this.props;
    const { image: { data: { profile: { profile_image } } } } = this.props;
    let img_link = profile_image;
    let image = (img_link === null ? { Profile } : img_link);
    return (
      <div>
        <div className="card">
          <Dropzone
            onDrop={this.fileSelectHandler}
            accept={types}
            multiple={false}
            style={
              { 'width': '100%', 
              'height': '369px', 
              'border-style': 'dotted', 
              'border-width': '.4em',
              'border-color': 'aquamarine'}}
            onFocus={this.handleHover}
          >
            {
              message === 'Uploading' ?
                <p id="title" className="alert alert-success">
                  <span className="spinner-border text-success" />
                </p> :
                <p id="title" className="alert alert-success">{message}</p>
            }
            <div id="img">
              <img src={image} alt="profile" />
            </div>
          </Dropzone>
        </div>
      </div>);

  }
}

export default ProfileImage;
