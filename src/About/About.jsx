import React from 'react';
import Typography from '../Typography';
import withContent from '../content/withContent';
import SectionLabel from '../SectionLabel';
import PaddedBlock from '../PaddedBlock';

import classes from './About.scss';

const About = ({ i18n }) => (
  <div className={classes.root}>
    <SectionLabel>
      {i18n('about.title')}
    </SectionLabel>
    <PaddedBlock>
      <Typography>{i18n('about.desc')}</Typography>
    </PaddedBlock>
  </div>
);

export default withContent(About);
