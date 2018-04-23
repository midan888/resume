import React from 'react';

import withContent from '../content/withContent';
import Typography from '../Typography';
import SectionLabel from '../SectionLabel';

import classes from './Experience.scss';

const Experience = ({ i18n }) => (
  <div className={classes.root}>
    <SectionLabel>{i18n('exp.title')}</SectionLabel>
    <div className={classes.item}>
      <Typography variant="title">
        {i18n('exp.finam.title')}
      </Typography>
      <Typography className={classes.date}>
        {i18n('exp.finam.date')}
      </Typography>
      <Typography className={classes.desc}>
        {i18n('exp.finam.desc')}
      </Typography>
    </div>
  </div>
);

export default withContent(Experience);
