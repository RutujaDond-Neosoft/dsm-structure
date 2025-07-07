import React from 'react';
import './Input.css';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  id,
  disabled,
  required,
  readOnly,
  maxLength,
  minLength,
  ariaLabel,
  // tabIndex, 
}) => {
  return (
    <input
      type={type}
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={id}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      maxLength={maxLength}
      minLength={minLength}
      aria-label={ariaLabel}
    />
  );
};

export default Input;
