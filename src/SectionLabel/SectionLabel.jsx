import React from 'react';
import Typography from '../Typography';
import classes from './SectionLabel.scss';

const SectionLabel = ({ children }) => (
  <Typography className={classes.title}>{children}</Typography>
);

export default SectionLabel;
