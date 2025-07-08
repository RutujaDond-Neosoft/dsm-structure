import React from "react";
import "./Label.css";

const LabelWithHeading = ({
  label,
  htmlFor,
  required = false,
  value,
  onChange,
  placeholder = " ",
  type = "text",
  id,
  name,
}) => {
  const inputId = id || htmlFor || name;

  return (
    <div className="input-wrapper">
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      <label htmlFor={inputId} className="floating-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
    </div>
  );
};

export default LabelWithHeading;