import React, { Component } from 'react';
import { connect } from 'react-redux'
import { profileRequestDispatch, profileUpdateDispatch} from '../../store/modules/profile/index';
import ProfileForm from '../ProfileForm/index';
import ProfileImage from '../ProfileImage/index';


export class ProfileView extends Component {
  componentDidMount() {
    const { profileRequestAction, match} = this.props;
    profileRequestAction(match.params.username);
    console.log(this.props)
  }

getUsername = () => {
  const { match } = this.props;
    console.log(match.params.username)
}
  
  render() {
    
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <ProfileImage image={this.props}/>
          </div>
          <div className="col-md-8">
            <div className="text-center">
              <h1 className="text-success">Update profile information</h1>
            </div>
            <br />
              <ProfileForm user={this.props} />

          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return (
    state.profileReducer
)
}
const mapDispatchToProps = dispatch => ({
  profileRequestAction: (username) => dispatch(profileRequestDispatch(username)),
  profileUpdateDispatch: (username,data) => dispatch(profileUpdateDispatch(username, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
