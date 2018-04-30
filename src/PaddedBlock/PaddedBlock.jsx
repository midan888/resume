import React from 'react';

import classes from './PaddedBlock.scss';

const PaddedBlock = ({ children }) => (
  <div className={classes.root}>{children}</div>
);

export default PaddedBlock;
