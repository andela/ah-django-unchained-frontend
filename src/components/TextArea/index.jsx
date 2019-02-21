import React from 'react';
import PropTypes from 'prop-types';

export const TextArea = props => {
  const { className, name, id, placeholder, onChange, row } = props;
  return (
    <TextArea
      className={className}
      name={name}
      id={id}
      row={row}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  row: PropTypes.string.isRequired
};

export default TextArea;
