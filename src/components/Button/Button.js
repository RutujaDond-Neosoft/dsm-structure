import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  ariaLabel,
  role = "button",
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      role={role}
    >
      {children}
    </button>
  );
};

export default Button;
