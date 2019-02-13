import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import ProfileView from '../../components/ProfileView';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br/><br/>
        <ProfileView />
      </div>
    );
  };
}

export default Profile;
