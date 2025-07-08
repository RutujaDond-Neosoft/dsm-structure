import React from "react";
import "./Switch.css";

const Switch = ({ checked, onChange, ariaLabel }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        aria-label={ariaLabel}
      />
      <span className="slider">
        <span className="icon-container">
          <i className="fa fa-sun"></i>
          <i className="fa fa-moon"></i>
        </span>
      </span>
    </label>
  );
};

export default Switch;