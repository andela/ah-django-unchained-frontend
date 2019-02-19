import React from 'react';
import PropTypes from 'prop-types';

export const InputBox = (props)=> {
  const { type, className, name, id, placeholder, onChange, required, value } = props;
  return (
    <input
      type={type}
      className={className}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      defaultValue={value}
    />
  );
};

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired
};

export default InputBox;
