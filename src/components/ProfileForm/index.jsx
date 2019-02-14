import React, { Component } from 'react';
import './ProfileForm.css';



class ProfileForm extends Component {
  alertError = (msg) => {
    document.getElementById('error').innerHTML = `
    <div class="alert alert-danger">
      <strong>Danger!</strong> ${msg}
    </div>
    `
  }
  removeError = () => {
    document.getElementById('error').innerHTML = ``;
  }
  updateProfile = (e) => {
    const { user: { profileUpdateDispatch } } = this.props;

    e.preventDefault()
    let firstName = document.forms["profileForm"]["firstName"].value;
    let lastName = document.forms["profileForm"]["lastName"].value;
    let bio = document.forms["profileForm"]["bio"].value;
    let gender = document.forms["profileForm"]["gender"].value;
    switch (gender) {
      case 'female':
        gender = 'F'
        break;
      case 'male':
        gender = "M"
        break;
      default:
        gender = "N"
    }
    let data = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      bio: bio
    }
    if (data.first_name === "") {
      this.alertError('First name can not be empty')
    }
    else if (data.last_name === "") {
      this.alertError('Last name can not be empty')
    }
    else if (data.bio === "") {
      this.alertError('Bio cannot be empty')
    }
    else{
      this.removeError()
    profileUpdateDispatch(data);}
  }
  render() {
    if (this.props.user.isLoad === false) {
      return <div></div>
    }
    
    const item = this.props.user.data.profile;
    const gender = (item.gender === 'M' ? 'Male' : (item.gender === 'F' ? 'female' : 'Not important'))
    return (
      <form name="profileForm" className="form-group" onSubmit={this.updateProfile}>
        <div className="row">
          <div className="col-md-12">
            <div id="error"></div>
          </div>
          <div className="col-md-4">
            <label>
              <b> First Names </b>
              {item.first_name}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your first Name"
              defaultValue={item.first_name}
              name="firstName"
            />
          </div>
          <div className="col-md-4">
            <label>
              <b> Last Name  </b>
              {item.last_name}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your last Name"
              defaultValue={item.last_name}
              name="lastName"/>
          </div>
          <div className="col-md-4">
            <label>
              <b> Gender  </b>
              {gender}
            </label>
            <select name="gender" className="form-control">
              <option className="placeholder" selected disabled>{gender}</option>
              <option>male</option>
              <option>female</option>
              <option>not important</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label>
              <b> bio  </b> <br />
            </label>
            <textarea className="form-control" placeholder="You bio" rows="7" defaultValue={item.bio} name="bio">

            </textarea> <br />
            <input
              type="submit"
              value="Update"
              className="btn btn-outline-success form-control" />
          </div>
        </div>
      </form>
    )
  }
}

export default ProfileForm;
