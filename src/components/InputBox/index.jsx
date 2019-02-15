import React from 'react';

export const InputBox = props => {
  return (
    <input
      type={props.type}
      className={props.className}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
    />
  );
};

export default InputBox;
