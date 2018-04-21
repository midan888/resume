import React from 'react';
import classnames from 'classnames';
import classes from './Typography.scss';

const Typography = ({ children, variant, bold, className }) => (
  <div className={classnames(classes.root, [classes[variant]], { bold }, className)}>
    {children}
  </div>
);

export default Typography;
