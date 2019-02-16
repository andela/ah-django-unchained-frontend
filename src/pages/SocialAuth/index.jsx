import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/modules/socialAuth/index';
import * as firebase from '../../config/FireBase';
import SocialAuthButton from '../../components/SocialAuthButton/index';
import '../../components/SocialAuthButton/SocialAuthButton.scss';
import {
  FACEBOOK,
  GOOGLE,
  TWITTER
} from '../../store/modules/socialAuth/types';
import Loader from '../../components/Loader/index';

export class SocialAuth extends React.Component {
  state = {
    providers: [
      {
        provider: firebase.GoogleProvider,
        type: GOOGLE,
        name: 'google-oauth2',
        button_class: 'google',
        class_name: 'fa fa-google'
      },
      {
        provider: firebase.FacebookProvider,
        type: FACEBOOK,
        name: 'facebook',
        button_class: 'facebook',
        class_name: 'fa fa-facebook-square'
      },
      {
        provider: firebase.TwitterProvider,
        type: TWITTER,
        name: 'twitter',
        button_class: 'twitter',
        class_name: 'fa fa-twitter'
      }
    ]
  };

  checkProvider = access => {
    let datafetch = this.props;
    let access_token = null;
    if (access.provider === 'twitter') {
      access_token = {
        provider: access.provider,
        access_token: access.accessToken,
        access_token_secret: access.accessSecret
      };
    } else {
      access_token = {
        provider: access.provider,
        access_token: access.accessToken
      };
    }
    datafetch.getUserData(access_token);
  };

  getSocialData = (oauthprovider, platform, authType) => {
    const dataFetch = this.props;
    dataFetch.authenticateUserRequest();
    firebase.auth
      .signInWithPopup(oauthprovider)
      .then(result => ({
        type: authType,
        payload: {
          authData: {
            provider: platform,
            accessToken: result.credential.accessToken,
            accessSecret: result.credential.secret
          },
          userDetails: {
            name: result.additionalUserInfo.profile.name,
            photo: result.user.photoURL,
            email: result.user.email
          }
        }
      }))
      .then(response => {
        localStorage.setItem('username', response.payload.userDetails.name);
        this.checkProvider(response.payload.authData);
      });
  };

  renderSocialAuthButton = providers => (
    <div className="btn-group">
      {providers.map(providerName => (
        <SocialAuthButton
          key={providerName.name}
          Provider={providerName.provider}
          providerName={providerName.name}
          type={providerName.type}
          className={providerName.class_name}
          buttonClass={providerName.button_class}
          getSocialData={() => {
            this.getSocialData(
              providerName.provider,
              providerName.name,
              providerName.type
            );
          }}
        />
      ))}
    </div>
  );

  render() {
    const { message } = this.props;
    const { providers } = this.state;

    return (
      <div>
        {message === 'success' ? <Redirect to="/" /> : null}
        {message === 'fetching' ? <Loader /> : null}
        {this.renderSocialAuthButton(providers)}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  socialAuth: state.socialAuth,
  message: state.socialAuth.message
});

export const mapDispatchToProps = dispatch => ({
  googleAuthentication: data => dispatch(actions.googleAuth(data)),
  facebookAuthentication: data => dispatch(actions.facebookAuth(data)),
  twitterAuthentication: data => dispatch(actions.twitterAuth(data)),
  getUserData: data => dispatch(actions.authenticateUser(data)),
  authenticateUserRequest: data =>
    dispatch(actions.authenticateUserRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialAuth);
