import React from "react";
import "./Select.css";

const Select = ({
  name,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
  className = "",
  ariaLabel,
}) => {
  return (
    <div className="custom-select-wrapper">
      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`custom-select`}
        aria-label={ariaLabel}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      <i className="fa fa-chevron-down dropdown-icon" aria-hidden="true"></i>
    </div>
  );
};

export default Select;
