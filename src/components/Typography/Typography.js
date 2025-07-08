import React from 'react';
import './Typography.css';

const Typography = ({
  variant = 'h1',
  children,
  id,
  className = '',
  style,
  ariaLabel,
  role,
}) => {
  const Tag = variant;

  return (
    <Tag
      id={id}
      className={className}
      style={style}
      aria-label={ariaLabel}
      role={role}
    >
      {children}
    </Tag>
  );
};

export default Typography;