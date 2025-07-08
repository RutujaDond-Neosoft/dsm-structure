import React from "react";
import "./TextArea.css";

const TextArea = ({
  name,
  id,
  value,
  placeholder = "Enter text...",
  rows = 4,
  cols,
  required = false,
  disabled = false,
  readOnly = false,
  className = "",
  ariaLabel,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      aria-label={ariaLabel || placeholder}
      className={`custom-textarea ${className}`}
    />
  );
};

export default TextArea;