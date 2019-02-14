import React, { Component } from 'react';
import Navbar from '../../components/Navbar/index';
import ProfileView from '../../components/ProfileView';

class Profile extends Component {
  render() {

    const { match } = this.props
    return (
      <div>
        <Navbar />
        <br/><br/>
        <ProfileView 
        match={match}
        />
      </div>
    );
  };
}

export default Profile;
