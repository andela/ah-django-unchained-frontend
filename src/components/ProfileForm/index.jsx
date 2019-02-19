import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProfileForm.css';
import { InputBox } from '../InputBox/index';
import { TextArea } from '../TextArea/index';

export class ProfileForm extends Component {
  state = {}
  handleChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    this.setState(data);
  }

  updateProfile = (e) => {
    e.preventDefault();
    const { updateProfile } = this.props;
    const { username } = this.props;
    updateProfile(username, this.state);
  }

  render() {
    const { user: { data: { profile } } } = this.props;
    const { user: { data: { profile: { gender } } } } = this.props;
    const genders = (gender === 'M' ? 'Male' : (gender === 'F' ? 'female' : 'Not important'));

    return (
      <form name='profileForm' className='form-group' onSubmit={this.handleChange}>
        <div className='row'>
          <div className='col-md-12'>
            <div id='error' />
          </div>
          <div className='col-md-4'>
            <label>
              <b> First Name </b>
              {profile.first_name}
            </label>
            <InputBox
              type='text'
              className='form-control'
              name='first_name'
              placeholder='Your name'
              value={profile.first_name}
              onChange={this.handleChange}
            />
          </div>
          <div className='col-md-4'>
            <label>
              <b> Last Name  </b>
              {profile.last_name}
            </label>
            <InputBox
              type='text'
              className='form-control'
              name='last_name'
              placeholder='Your name'
              value={profile.last_name}
              onChange={this.handleChange}
            />
          </div>
          <div className='col-md-4'>
            <label>
              <b> Gender  </b>
              {genders}
            </label>
            <select name='gender' className='form-control' onChange={this.handleChange}>
              <option className='placeholder' selected disabled>{genders}</option>
              <option value='M'>male</option>
              <option value='F'>female</option>
              <option value='N'>not important</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <label>
              <b> bio  </b>
              <br />
              {profile.bio}
            </label>
            <TextArea
              className='form-control'
              name='bio'
              id='bio'
              rows='5'
              placeholder='your bio'
              onChange={this.handleChange}
              value={profile.bio}
            />
            <br />
            <button className="btn btn-info form-control" onClick={this.updateProfile} type="submit">Update</button>
          </div>
        </div>
      </form>
    );
  }
}
ProfileForm.propTypes = {
  user: PropTypes.object.isRequired,
  updateProfile: PropTypes.object.isRequired,
  username: PropTypes.object.isRequired
};

export default ProfileForm;
