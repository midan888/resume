import React from 'react';
import Typography from '../Typography';
import withContent from '../content/withContent';
import SectionLabel from '../SectionLabel';
import PaddedBlock from '../PaddedBlock';

import classes from './Skills.scss';

const skills = [
  'javascript',
  'react',
  'redux',
  'grpc',
  'protobuf',
  'jss',
  'sass',
  'webpack',
  'node',
  'express',
  'Docker',
  'mysql',
  'mongodb',
  'php',
];

const Skills = ({ i18n }) => (
  <div>
    <SectionLabel>{i18n('skills.title')}</SectionLabel>
    <PaddedBlock>
      <div className={classes.list}>
        {skills.map(skill => (
          <Typography key={skill}>{skill}</Typography>
        ))}
      </div>
    </PaddedBlock>
  </div>
);

export default withContent(Skills);
