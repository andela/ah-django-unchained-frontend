import React from 'react';
import PropTypes from 'prop-types';

export const TextArea = props => {
  const { className, name, id, placeholder, onChange, rows,cols, value } = props;
  return (
    <textarea
      className={className}
      name={name}
      id={id}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={value}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextArea;
