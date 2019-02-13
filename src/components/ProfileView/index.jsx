import React, { Component } from 'react';
import Profile from '../../assets/images/profile.jpg'
import './ProfileView.css';
import { connect } from 'react-redux'
import { profileRequestAction } from '../../store/modules/profile/index';


export class ProfileView extends Component {
  componentDidMount() {
    this.props.profileRequestAction();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-bottom " src={Profile} alt="Card"></img>
              <a href="/update/profile" className="btn btn-success">Update Profile</a>
            </div>
          </div>
          <div className="col-md-8">
            <div className="text-center">
              <h1 className="text-success">Update profile information</h1>
              <b><span>Followers: 200</span> <span> Following 200</span></b>
            </div>
            <br />
            <form action="" className="form-group">
              <div className="row">
                <div className="col-md-4">
                  <label>
                    <b> First Name  </b>
                    {this.props.profiles.data.first_name}
                  </label>
                  <input type="text" className="form-control" placeholder="Your first Name" />
                </div>
                <div className="col-md-4">
                <label>
                    <b> Last Name  </b>
                    {this.props.profiles.data.last_name}
                  </label>
                  <input type="text" className="form-control" placeholder="Your last Name" />
                </div>
                <div className="col-md-4">
                <label>
                    <b> Gender  </b>
                    {this.props.profiles.data.gender}
                  </label>
                  <select name="" className="form-control">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Not important</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                <label>
                    <b> bio  </b> <br/>
                    {this.props.profiles.data.bio}
                  </label>
                  <textarea className="form-control" placeholder="You bio" rows="7"></textarea> <br />
                  <input 
                  type="submit"
                  value="Update"
                  className="btn btn-outline-success form-control" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    profiles: state.profileReducer
  }
}

const mapDispatchToProps = dispatch => ({
  profileRequestAction: () => dispatch(profileRequestAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
