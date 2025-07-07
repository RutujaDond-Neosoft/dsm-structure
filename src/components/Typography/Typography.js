import React from 'react';
import './Typography.css';

const Typography = ({ variant = 'h1', children }) => {
  const Tag = variant;
  return <Tag className={`typography ${variant}`}>{children}</Tag>;
};

export default Typography;