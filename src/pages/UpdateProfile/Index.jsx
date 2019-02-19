import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProfile, updateProfile, updateProfileImage } from '../../store/modules/profile/index';
import { ProfileForm } from '../../components/ProfileForm/index';
import { ProfileImage } from '../../components/ProfileImage/index';
import Loader from '../../components/Loader';

export class UpdateUserProfile extends Component {
  componentDidMount() {
    const { getProfile, match } = this.props;
    getProfile(match.params.username);
  }

  render() {
    const {match: {params: {username}}} = this.props;
    const {userProfile} = this.props;
    const {updateProfileImage} = this.props;
    const {updateProfile} = this.props;
    const {userProfile: {isLoad}} = this.props;
    if (isLoad === true){
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <br />
            <ProfileImage image={userProfile} username={username} updateProfileImage={updateProfileImage} />
          </div>
          <div className="col-md-8">
            <br />
            <div className="text-center">
              <Link to={`/profile/update/${localStorage.getItem('username')}`} className="btn btn-info">
                Update Profile
              </Link>
              <Link to={`/profile/view/${localStorage.getItem('username')}`} className="btn btn-secondary">
                ViewProfile
              </Link>
            </div>
            <br />
            <ProfileForm user={userProfile} username={username} updateProfile={updateProfile} />
          </div>
        </div>
      </div>
    );}
    return (<Loader />);
  }
}

export const mapStateToProps = (state) => ({
    userProfile: state.userProfile
});

export const mapDispatchToProps = dispatch => ({
  getProfile: (username) => dispatch(getProfile(username)),
  updateProfile: (username, data) => dispatch(updateProfile(username, data)),
  updateProfileImage: (username, data) => dispatch(updateProfileImage(username, data))
});

UpdateUserProfile.propTypes = {
  getProfile:PropTypes.func.isRequired,
  match:PropTypes.object.isRequired,
  userProfile:PropTypes.object.isRequired,
  updateProfileImage:PropTypes.func.isRequired,
  updateProfile:PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserProfile);
