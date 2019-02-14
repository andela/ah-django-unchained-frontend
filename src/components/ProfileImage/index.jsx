import React, { Component } from 'react';
import Profile from '../../assets/images/profile.jpg'
import './ProfileImage.css';
import Dropzone from 'react-dropzone';
import upload from './uploader'



export class ProfileImage extends Component {
  handleHover = () => {
    document.getElementById('title').innerHTML = 'Uploading .....';
  }
  fileSelectHandler = (accept, reject) => {
    const { image: { profileUpdateDispatch } } = this.props;
    const selectedFile = accept[0];
    console.log(selectedFile)
    document.getElementById('title').innerHTML = 'Uploading .....';
    upload({ image: selectedFile })
      .then(res => {
        console.log(res.data.secure_url)
        profileUpdateDispatch({ profile_image: res.data.secure_url })
        document.getElementById('title').innerHTML = 'Drop/ click to add file';
      })
      .catch(err => console.log(err.request));
  };

  render() {
    const types = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
    const prop = this.props.image;
    if (prop.isLoad === true) {
      let img_link = prop.data.profile.profile_image;
      let image = (img_link === null ? { Profile } : img_link);
      return (
        <div>
          
          <div className="card">
            <Dropzone 
            onDrop={this.fileSelectHandler} 
            accept={types} multiple={false} 
            style={{ 'width': '100%', 'height': '250px' }}
            onFocus={this.handleHover}
            >
            <p id="title" className="alert alert-success"> Drop/ click to add file</p>
              <div id="img">
                <img src={image} alt="profile"/>
              </div>
            </Dropzone>
          </div>
        </div>)
    }
    return (
      <div className="spinner-grow text-info"></div>
    )


  }
}

export default ProfileImage;
