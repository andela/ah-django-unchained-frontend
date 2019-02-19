import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProfile, updateProfile, updateProfileImage } from '../../store/modules/profile/index';
import Loader from '../../components/Loader';

export class ViewProfile extends Component {
  componentDidMount() {
    const { getProfile, match } = this.props;
    getProfile(match.params.username);
  }

  render() {
    const { isLoad } = this.props;
    const { data } = this.props;
    if (isLoad === true) {
      let gender = (data.gender === 'M' ? 'Male' : (data.gender === 'F' ? 'female' : 'Not important'));
      return (
        <div>
          <div className="row">
            <div className="col-md-4">
              <br />
              <br />
              <br />
              <div className="card">
                <img src={data.profile_image} alt="profile" />
              </div>
            </div>
            <div className="col-md-8">
              <br />
              <div className="text-center">
                <Link to={`/profile/update/${localStorage.getItem('username')}`} className="btn btn-secondary">
                  Update Profile
                </Link>
                <Link to={`/profile/view/${localStorage.getItem('username')}`} className="btn btn-info">
                  View Profile
                </Link>
              </div>
              <br />
              <div className="card-columns">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <p className="card-text">
                      First name
                      <br />
                      {data.first_name}
                    </p>
                  </div>
                </div>

                <div className="card bg-light">
                  <div className="card-body text-center">
                    <p className="card-text">
                      First name
                      <br />
                      {data.first_name}
                    </p>
                  </div>
                </div>

                <div className="card bg-light">
                  <div className="card-body text-center">
                    <p className="card-text">
                      Gender
                      <br />
                      {gender}
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div className="card bg-light">
                <div className="card-body text-center">
                  <p className="card-text">
                    Bio
                    <br />
                    {data.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (<Loader />);
  }
}

export const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  isLoad: state.userProfile.isLoad,
  data: state.userProfile.data.profile
});

export const mapDispatchToProps = dispatch => ({
  getProfile: (username) => dispatch(getProfile(username)),
  updateProfile: (username, data) => dispatch(updateProfile(username, data)),
  updateProfileImage: (username, data) => dispatch(updateProfileImage(username, data))
});

ViewProfile.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  getProfile: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
