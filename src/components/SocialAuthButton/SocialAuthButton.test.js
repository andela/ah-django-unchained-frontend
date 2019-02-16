import React from 'react';
import { shallow } from 'enzyme';
import SocialAuthButton from './index';

describe('Social Auth Button', () => {
  it('should render correctly', () => {
    const tree = shallow(
      <SocialAuthButton
        provider=" firebase.GoogleProvider"
        type="GOOGLE"
        name="google-oauth2"
        button_class="google"
        class_name="fa fa-google"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
