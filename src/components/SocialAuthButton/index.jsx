import React from 'react';
import PropTypes from 'prop-types';

const SocialAuthButton = props => {
  const {
    provider,
    providerName,
    type,
    className,
    buttonClass,
    getSocialData
  } = props;
  return (
    <button
      type="button"
      className={`btn ${buttonClass}`}
      onClick={() => getSocialData(provider, providerName, type)}
    >
      <i className={`fab ${className}`} />
    </button>
  );
};
SocialAuthButton.propTypes = {
  provider: PropTypes.string,
  providerName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  getSocialData: PropTypes.func.isRequired
};

SocialAuthButton.defaultProps = {
  provider: null
};
export default SocialAuthButton;
