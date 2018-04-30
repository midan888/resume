import React from 'react';
import Typography from '../Typography';
import withContent from '../content/withContent';
import SectionLabel from '../SectionLabel';

import classes from './About.scss';

const About = ({ i18n }) => (
  <div className={classes.root}>
    <SectionLabel>{i18n('about.title')}</SectionLabel>
    <Typography className={classes.text}>{i18n('about.desc')}</Typography>
  </div>
);

export default withContent(About);
