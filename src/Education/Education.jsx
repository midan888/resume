import React from 'react';
import withContent from '../content/withContent';
import Typography from '../Typography';
import SectionLabel from '../SectionLabel';

import classes from './Education.scss';

const Education = ({ i18n }) => (
  <div>
    <SectionLabel>{i18n('edu.title')}</SectionLabel>
    <Typography className={classes.desc}>{i18n('edu.desc')}</Typography>
  </div>
);

export default withContent(Education);
