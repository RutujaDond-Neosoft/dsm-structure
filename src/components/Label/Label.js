import React from "react";
import "./Label.css";

const Label = ({
  label,
  htmlFor,
  required = false,
  value,
  onChange,
  placeholder,
  type = "text",
  id,
  name,
}) => {
  return (
    <div className="labelContainer">
      <label htmlFor={htmlFor} className={`label`}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      </div>
    </div>
  );
};

export default Label;
